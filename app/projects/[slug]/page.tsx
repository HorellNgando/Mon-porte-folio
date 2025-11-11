"use client"

import { useParams } from "next/navigation"
import { projects } from "@/lib/data/projects"
import ProjectDetailClient from "./ProjectDetailClient"
import { notFound } from "next/navigation"

export default function ProjectPage() {
  const params = useParams()
  const slug = params.slug as string

  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} allProjects={projects} />
}
