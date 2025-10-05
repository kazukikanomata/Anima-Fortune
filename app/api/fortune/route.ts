import { NextRequest, NextResponse } from "next/server";

const GAS_API_URL =
  "https://script.google.com/macros/s/AKfycbzhSQnAiTf16EHAw3qrpB22tsA8oS61g-vrXPl12pQprjKZLMGOwIFog_myPlt0p7rF/exec";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(GAS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return NextResponse.json(data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
