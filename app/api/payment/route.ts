import { NextRequest, NextResponse } from "next/server";

import axios from "axios";

export const POST = async (req: NextRequest) => {
  try {
    const { email, amount } = await req.json();
    const url: string = "https://api.paystack.co/transaction/initialize";

    const params = JSON.stringify({
      email,
      amount: amount * 100,
      callback_url: "http://localhost:3000/home",
    });

    const config = {
      headers: {
        Authorization:
          "Bearer sk_test_f5f9fc7af8e31862b79973a2140fce292a951076",
        "Content-Type": "application/json",
      },
    };

    return await axios.post(url, params, config).then(async (res) => {
      return NextResponse.json({
        message: "ad found",
        status: 200,
        data: await JSON.parse(JSON.stringify(res.data)),
      });
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error",
      status: 404,
      error: error.message,
    });
  }
};
