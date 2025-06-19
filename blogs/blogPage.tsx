// BlogPage.tsx
"use client"

import { useState } from "react"
import BlogForm from "./blogForm"
import BlogList from "./blogList"

export default function BlogPage() {
  const [blogs, setBlogs] = useState<
    { name: string; title: string; content: string; date: string }[]
  >([])

  const addBlog = (blog: { name: string; title: string; content: string; date: string }) => {
    setBlogs([blog, ...blogs])
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-orange-600">Community Blog</h1>
      <BlogForm onAddBlog={addBlog} />
      <BlogList blogs={blogs} />
    </div>
  )
}
