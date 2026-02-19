import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Verify webhook secret via URL query parameter
  const webhookSecret = req.nextUrl.searchParams.get("secret");
  const expectedSecret = process.env.WEBHOOK_SECRET;

  if (!expectedSecret) {
    console.error("WEBHOOK_SECRET not configured");
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  if (webhookSecret !== expectedSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Parse form-encoded body
  const body = await req.text();
  const params = new URLSearchParams(body);

  // Verify this is a real sale (not a refund/dispute/etc.)
  const sellerID = params.get("seller_id");
  const productID = params.get("product_id");
  const refunded = params.get("refunded");

  if (refunded === "true") {
    console.log("Skipping refunded purchase");
    return NextResponse.json({ success: true, skipped: "refunded" });
  }

  console.log(`Gumroad ping: seller=${sellerID} product=${productID}`);

  // Extract GitHub username from custom fields
  const githubUsername =
    params.get("custom_fields[Github Username]") ??
    params.get("custom_fields[GitHub Username]") ??
    params.get("custom_fields[github username]");

  if (!githubUsername || githubUsername.trim() === "") {
    console.error("No GitHub username in purchase custom fields");
    return NextResponse.json(
      { error: "GitHub username required" },
      { status: 422 }
    );
  }

  const username = githubUsername.trim();

  // Invite user to GitHub org team
  const githubToken = process.env.GITHUB_ORG_TOKEN;

  if (!githubToken) {
    console.error("GITHUB_ORG_TOKEN not configured");
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  try {
    const ghResponse = await fetch(
      `https://api.github.com/orgs/agentix-ai-org/teams/customers/memberships/${username}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${githubToken}`,
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        body: JSON.stringify({ role: "member" }),
      }
    );

    if (!ghResponse.ok) {
      const errorData = await ghResponse.json();
      console.error("GitHub API error:", ghResponse.status, errorData);
      return NextResponse.json(
        { error: "Failed to invite user", details: errorData },
        { status: ghResponse.status === 422 ? 422 : 502 }
      );
    }

    const result = await ghResponse.json();
    console.log(`Invited ${username} to agentix-ai-org/customers: ${result.state}`);

    return NextResponse.json({
      success: true,
      username,
      state: result.state,
    });
  } catch (err) {
    console.error("Error inviting to GitHub:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
