import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";
import { createSession } from "@/lib/auth";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  password: z.string().min(6),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const existing = await prisma.user.findUnique({ where: { email: data.email } });
    if (existing) {
      return NextResponse.json({ error: "এই ইমেইল ইতিমধ্যেই রয়েছে।" }, { status: 400 });
    }

    const hashed = await bcrypt.hash(data.password, 10);
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: hashed,
        role: "APPLICANT",
      },
    });

    await createSession({ id: user.id, email: user.email, name: user.name, role: user.role });
    return NextResponse.json({ id: user.id, role: user.role });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Server error" }, { status: 400 });
  }
}
