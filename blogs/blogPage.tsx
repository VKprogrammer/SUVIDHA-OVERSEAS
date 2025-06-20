"use client"

import { useState } from "react"
import BlogForm from "./blogForm"
import BlogList from "./BlogList"

export default function BlogPage() {
  const [blogs, setBlogs] = useState([
    {
      title: "Building Dreams with Code",
      content: "From struggling with basic JavaScript to deploying a full-stack app on Vercel, this blog dives into the journey of learning and perseverance.",
      name: "Sundram",
      date: "June 18, 2025",
    },
    {
      title: "The Design Behind the Impact",
      content: "Exploring how thoughtful UI/UX design enhances user trust, accessibility, and emotional connection with products.",
      name: "Saumya",
      date: "June 16, 2025",
    },
  ])

  const addBlog = (blog: { name: string; title: string; content: string; date: string }) => {
    setBlogs([blog, ...blogs])
  }

  return (
    <div id="blog" className="max-w-4xl mx-auto py-10 px-4">
      <br /><br />
      <h1 className="text-4xl font-bold mb-8 text-center text-orange-600">Community Blog</h1>
      <br /><br />
      <BlogForm onAddBlog={addBlog} />
      <br />
      <BlogList blogs={blogs} />
      <br />
    </div>
  )
}
