import { NextResponse } from "next/server";

import { ENUM_PRODUCT } from "@/enum/product";

const url = `https://img2.baidu.com/it/u=3442909020,1977707335&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500`;

export function GET() {
  return NextResponse.json({
    data: [
      {
        mid: 786751,
        price: 18,
        coverImage: url,
        title: "活动剪辑快闪-活力四射",
        licType: ENUM_PRODUCT.LIC_TYPE.LP,
        auditStatus: ENUM_PRODUCT.AUDIT_STATUS.SUCCESS,
      },
      {
        mid: 786752,
        price: 47,
        coverImage: url,
        title: "轻快活动宣传-阳光自信（2分钟、1分钟、30s）（剪辑师必备）",
        licType: ENUM_PRODUCT.LIC_TYPE.LPPLUS,
        auditStatus: ENUM_PRODUCT.AUDIT_STATUS.SUCCESS,
      },
      {
        mid: 786753,
        price: 72,
        coverImage: url,
        title: "快闪节奏放克-Funk！",
        licType: ENUM_PRODUCT.LIC_TYPE.NP,
        auditStatus: ENUM_PRODUCT.AUDIT_STATUS.SUCCESS,
      },
    ],
  });
}
