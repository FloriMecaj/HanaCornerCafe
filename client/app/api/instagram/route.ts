import { NextResponse } from "next/server";
import { galleryItems } from "@/lib/data";

const fallback = galleryItems.map((item, index) => ({
  id: String(index),
  media_url: item.src,
  caption: item.caption,
  permalink: "https://www.instagram.com/hana_cornercafe",
  category: item.category
}));

export async function GET() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  if (!accessToken || !userId) {
    return NextResponse.json({ items: fallback, source: "fallback" });
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/${userId}/media?fields=id,caption,media_url,permalink&access_token=${accessToken}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      throw new Error("Instagram request failed");
    }

    const data = (await response.json()) as {
      data?: Array<{ id: string; caption?: string; media_url: string; permalink?: string }>;
    };

    const items =
      data.data?.slice(0, 9).map((item, index) => ({
        id: item.id,
        media_url: item.media_url,
        caption: item.caption || fallback[index % fallback.length].caption,
        permalink: item.permalink,
        category: fallback[index % fallback.length].category
      })) ?? fallback;

    return NextResponse.json({ items, source: "instagram" });
  } catch {
    return NextResponse.json({ items: fallback, source: "fallback" });
  }
}
