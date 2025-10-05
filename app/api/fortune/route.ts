import { NextRequest, NextResponse } from "next/server";

const GAS_API_URL =
  "https://script.google.com/macros/s/AKfycbzhSQnAiTf16EHAw3qrpB22tsA8oS61g-vrXPl12pQprjKZLMGOwIFog_myPlt0p7rF/exec";

export async function POST(request: NextRequest) {
  try {
    console.log("API Route: Starting request");
    const body = await request.json();
    console.log("API Route: Request body received:", body);

    // 一時的なテスト用レスポンス（GAS APIが利用できない場合）
    console.log("API Route: Using test response for debugging");
    const testResponse = {
      success: true,
      resultUrl: "https://mininome.com/tokuisagashi/animal-dog/",
      animalType: "dog",
    };

    return NextResponse.json(testResponse, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });

    console.log("API Route: Calling GAS API:", GAS_API_URL);
    const response = await fetch(GAS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log("API Route: GAS API response status:", response.status);
    console.log("API Route: GAS API response headers:", response.headers);

    if (!response.ok) {
      console.error(
        "API Route: GAS API error:",
        response.status,
        response.statusText
      );
      const errorText = await response.text();
      console.error("API Route: GAS API error body:", errorText);
      return NextResponse.json(
        {
          success: false,
          error: `GAS API error: ${response.status} ${response.statusText}`,
        },
        { status: 500 }
      );
    }

    const data = await response.json();
    console.log("API Route: GAS API response data:", data);

    return NextResponse.json(data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("API Route: Error occurred:", error);
    return NextResponse.json(
      {
        success: false,
        error: `Internal server error: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      },
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
