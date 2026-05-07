import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";
import { createSession } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      bootcamp,
      fullNameBn, fullNameEn, email, phone, password, dob, gender, city, linkedin,
      education, institution, gradYear, currentStatus,
      experience, motivation, goal, source,
      hoursCommit, schedulePref, hardware, internet,
      screeningScore,
    } = body;

    if (!bootcamp || !email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const bootcampRow = await prisma.bootcamp.findUnique({ where: { slug: bootcamp } });
    if (!bootcampRow) {
      return NextResponse.json({ error: "Invalid bootcamp" }, { status: 400 });
    }

    let user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      user = await prisma.user.create({
        data: {
          name: fullNameEn || fullNameBn,
          email,
          phone,
          city,
          password: await bcrypt.hash(password, 10),
          role: "APPLICANT",
        },
      });
    }

    const application = await prisma.application.create({
      data: {
        applicantId: user.id,
        bootcampId: bootcampRow.id,
        fullNameBn,
        fullNameEn,
        dob,
        gender,
        city,
        education,
        institution,
        gradYear: gradYear ? Number(gradYear) : null,
        currentStatus,
        experience,
        motivation,
        goal,
        source,
        hoursCommit: !!hoursCommit,
        schedulePref,
        hardware,
        internet,
        screeningScore,
        status: screeningScore >= 6 ? "INTERVIEW" : "SCREENING",
      },
    });

    await createSession({ id: user.id, email: user.email, name: user.name, role: user.role });

    return NextResponse.json({ id: application.id, status: application.status });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: e.message || "Server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const apps = await prisma.application.findMany({
      include: { bootcamp: true, applicant: true },
      orderBy: { createdAt: "desc" },
      take: 50,
    });
    return NextResponse.json(apps);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
