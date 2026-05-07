import { PrismaClient } from "@prisma/client";
import { BOOTCAMPS, MENTORS, ALUMNI, BLOG_POSTS } from "../lib/data";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Clean
  await prisma.application.deleteMany();
  await prisma.cohort.deleteMany();
  await prisma.alumni.deleteMany();
  await prisma.mentor.deleteMany();
  await prisma.blogPost.deleteMany();
  await prisma.bootcamp.deleteMany();
  await prisma.user.deleteMany();

  // Bootcamps
  for (const b of BOOTCAMPS) {
    await prisma.bootcamp.create({
      data: {
        slug: b.slug,
        nameBn: b.nameBn,
        nameEn: b.nameEn,
        taglineBn: b.taglineBn,
        taglineEn: b.taglineEn,
        durationMonths: b.durationMonths,
        priceBdt: b.priceBdt,
        emiMonthly: b.emiMonthly,
        hours: b.hours,
        liveClasses: b.liveClasses,
        projects: b.projects,
        placement: b.placement,
        iconKey: b.iconKey,
        heroImage: b.heroImage,
        description: b.description,
        outcomes: JSON.stringify(b.outcomes),
        curriculum: JSON.stringify(b.curriculum),
        schedule: JSON.stringify(b.schedule),
        tools: JSON.stringify(b.tools),
        nextBatchDate: new Date(b.nextBatchDate),
        seatsTotal: b.seatsTotal,
        seatsRemaining: b.seatsRemaining,
      },
    });
  }
  console.log(`✓ ${BOOTCAMPS.length} bootcamps`);

  // Mentors
  for (const m of MENTORS) {
    await prisma.mentor.create({
      data: {
        slug: m.slug,
        nameBn: m.nameBn,
        nameEn: m.nameEn,
        designation: m.designation,
        company: m.company,
        companyLogo: m.companyLogo,
        photo: m.photo,
        yearsExp: m.yearsExp,
        bio: m.bio,
        expertise: JSON.stringify(m.expertise),
        tracks: JSON.stringify(m.tracks),
        linkedin: m.linkedin,
      },
    });
  }
  console.log(`✓ ${MENTORS.length} mentors`);

  // Alumni
  for (const a of ALUMNI) {
    await prisma.alumni.create({
      data: {
        slug: a.slug,
        nameBn: a.nameBn,
        nameEn: a.nameEn,
        photo: a.photo,
        beforeRole: a.beforeRole,
        afterRole: a.afterRole,
        company: a.company,
        companyLogo: a.companyLogo,
        salary: a.salary,
        salaryGrowth: a.salaryGrowth,
        trackSlug: a.trackSlug,
        batch: a.batch,
        quote: a.quote,
        story: a.story,
        featured: !!a.featured,
      },
    });
  }
  console.log(`✓ ${ALUMNI.length} alumni`);

  // Blog posts
  for (const p of BLOG_POSTS) {
    await prisma.blogPost.create({
      data: {
        slug: p.slug,
        titleBn: p.titleBn,
        titleEn: p.titleEn,
        excerpt: p.excerpt,
        cover: p.cover,
        author: p.author,
        authorPhoto: p.authorPhoto,
        category: p.category,
        readMin: p.readMin,
        body: p.body,
        publishedAt: new Date(p.publishedAt),
      },
    });
  }
  console.log(`✓ ${BLOG_POSTS.length} blog posts`);

  // Demo users
  const demoStudent = await prisma.user.create({
    data: {
      name: "মীর সাকিব",
      email: "student@jatra.bd",
      phone: "+8801712345678",
      password: await bcrypt.hash("password123", 10),
      role: "STUDENT",
      city: "ঢাকা",
    },
  });

  const demoAdmin = await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@jatra.bd",
      phone: "+8801711111111",
      password: await bcrypt.hash("admin123", 10),
      role: "ADMIN",
      city: "Dhaka",
    },
  });

  console.log(`✓ Demo users created`);
  console.log(`  Student: student@jatra.bd / password123`);
  console.log(`  Admin: admin@jatra.bd / admin123`);
  console.log("Done!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
