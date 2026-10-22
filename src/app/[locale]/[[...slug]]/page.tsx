import { Suspense } from "react";
import { connection } from "next/server";
import { notFound } from "next/navigation";
import { StoryblokStory } from "@storyblok/react/rsc";
import { fetchStory } from "@/lib/storyblok";

type PageProps = {
  params: Promise<{
    locale: string;
    slug?: string[];
  }>;
};

function hasHeroHeading(content: unknown): boolean {
  if (typeof content !== "object" || content === null || !("body" in content)) {
    return false;
  }

  const body = content.body;
  if (!Array.isArray(body)) return false;

  return body.some(
    (blok) =>
      typeof blok === "object" &&
      blok !== null &&
      "component" in blok &&
      blok.component === "hero" &&
      "headline" in blok &&
      typeof blok.headline === "string" &&
      blok.headline.trim().length > 0,
  );
}

async function StoryblokPage({
  params,
}: {
  params: PageProps["params"];
}) {
  const { locale, slug } = await params;

  if (locale !== "en" && locale !== "es") notFound();

  await connection();
  const storySlug = `${locale}/${slug?.join("/") || "home"}`;
  const story = await fetchStory(storySlug);

  if (!story) notFound();

  return (
    <div className="story-page" lang={locale}>
      {!hasHeroHeading(story.content) && (
        <h1 className="visually-hidden">{story.name}</h1>
      )}
      <StoryblokStory story={story} />
    </div>
  );
}

export default function Page({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <p className="story-page" role="status">
          Loading page content...
        </p>
      }
    >
      <StoryblokPage params={params} />
    </Suspense>
  );
}
