import { NextResponse } from "next/server";

import { ENUM_PRODUCT } from "@/enum/product";

export function GET() {
  return NextResponse.json({
    data: [
      {
        fid: 986753,
        licTypes: [ENUM_PRODUCT.LIC_TYPE.LPPLUS, ENUM_PRODUCT.LIC_TYPE.NP],
      },
    ],
  });
}
