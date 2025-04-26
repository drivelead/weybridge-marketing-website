import { API_ENDPOINT } from "@/lib/config";

export async function createAsset(payload: any) {
  try {
    const response = await fetch(`${API_ENDPOINT}/asset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Error creating asset");
    }

    return data;
  } catch (error: any) {
    console.log("Error creating asset", error.message);

    return {
      success: false,
      error: error.cause,
      data: null,
    };
  }
}
