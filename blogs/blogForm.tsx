// BlogForm.tsx
"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

// 👇 Add type definition for props
type BlogFormProps = {
  onAddBlog: (blog: { name: string; title: string; content: string; date: string }) => void
}

export default function BlogForm({ onAddBlog }: BlogFormProps) {
  const [name, setName] = useState("")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddBlog({
      name,
      title,
      content,
      date: new Date().toLocaleDateString(),
    })
    setName("")
    setTitle("")
    setContent("")
  }

  return (
    <Card className="mb-8 p-6">
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Write a Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Blog Title"
            className="w-full border px-4 py-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Write your blog content here..."
            className="w-full border px-4 py-2 rounded h-40 resize-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <Button type="submit" className="flex items-center gap-2">
            Submit Blog <ChevronRight size={16} />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
