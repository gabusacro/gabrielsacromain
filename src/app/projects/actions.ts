"use server";

import { supabase } from "@/lib/supabase";
import { FALLBACK_PROJECTS, type Project } from "@/data/projects";

function mapRowToProject(row: {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  long_description: string | null;
  image_url: string | null;
  tags: string[];
  link_url: string | null;
  repo_url: string | null;
  featured: boolean;
  sort_order: number;
}): Project {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    description: row.description ?? "",
    longDescription: row.long_description ?? undefined,
    imageUrl: row.image_url ?? undefined,
    tags: row.tags ?? [],
    linkUrl: row.link_url ?? undefined,
    repoUrl: row.repo_url ?? undefined,
    featured: row.featured,
    sortOrder: row.sort_order,
  };
}

export async function getProjects(): Promise<Project[]> {
  if (!supabase) {
    return FALLBACK_PROJECTS.sort((a, b) => a.sortOrder - b.sortOrder);
  }
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) {
    return FALLBACK_PROJECTS.sort((a, b) => a.sortOrder - b.sortOrder);
  }
  return (data ?? []).map(mapRowToProject);
}
