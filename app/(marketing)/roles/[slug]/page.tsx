/**
 * @component RoleDetailPage
 * @part-of Web3School - Public Role Exploration
 * @design Hero + day in life + skills + growth path + traits + related roles + CTA
 * @seo Dynamic meta, JSON-LD structured data, canonical URLs
 */
import { notFound } from "next/navigation";
import { auth } from "@insforge/nextjs";
import { INITIAL_ROLES } from "@/data/roles";
import { APP_NAME, APP_URL } from "@/lib/utils/constants";
import { trimDescription } from "@/lib/seo";
import { RoleDetailClient } from "./RoleDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INITIAL_ROLES.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const role = INITIAL_ROLES.find((r) => r.slug === slug);

  if (!role) {
    return { title: "Role Not Found" };
  }

  const title = `How to Become a ${role.name} in Web3`;
  const description = trimDescription(role.description);

  return {
    title,
    description,
    alternates: {
      canonical: `${APP_URL}/roles/${slug}`,
    },
    openGraph: {
      title: `${title} | ${APP_NAME}`,
      description,
      url: `${APP_URL}/roles/${slug}`,
      siteName: APP_NAME,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${APP_NAME}`,
      description,
    },
  };
}

export default async function RoleDetailPage({ params }: Props) {
  const { slug } = await params;
  const role = INITIAL_ROLES.find((r) => r.slug === slug);

  if (!role) {
    notFound();
  }

  const { userId } = await auth();
  const isAuthenticated = !!userId;

  const relatedRoles = INITIAL_ROLES.filter(
    (r) => r.slug !== slug && r.category === role.category
  ).slice(0, 3);

  if (relatedRoles.length < 2) {
    const others = INITIAL_ROLES.filter(
      (r) => r.slug !== slug && !relatedRoles.find((rr) => rr.slug === r.slug)
    ).slice(0, 3 - relatedRoles.length);
    relatedRoles.push(...others);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Occupation",
    name: role.name,
    description: role.description,
    occupationLocation: {
      "@type": "Country",
      name: "Worldwide (Remote)",
    },
    estimatedSalary: {
      "@type": "MonetaryAmountDistribution",
      name: "Base Salary",
      currency: "USD",
      percentile10: role.salary_range_min,
      percentile90: role.salary_range_max,
    },
    skills: role.key_skills.join(", "),
    educationRequirements:
      "No formal degree required - learn through Web3School's AI-powered curriculum",
    provider: {
      "@type": "Organization",
      name: APP_NAME,
      url: APP_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RoleDetailClient
        role={role}
        relatedRoles={relatedRoles}
        isAuthenticated={isAuthenticated}
      />
    </>
  );
}
