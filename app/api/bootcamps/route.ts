import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  const bootcamps = await prisma.bootcamp.findMany({
    orderBy: { priceBdt: "asc" },
  });
  return NextResponse.json(bootcamps);
}
