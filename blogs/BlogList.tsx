import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"


export default function BlogList({ blogs }: { blogs: any[] }) {
  return (
    <div className="space-y-6">
      {blogs.map((blog, index) => (
        <Card key={index} className="p-6 shadow-md">
          <CardContent>
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <Star className="text-yellow-500" size={20} /> {blog.title}
            </h3>
            <p className="text-gray-700 mb-4">
              <Quote className="inline mr-2 text-blue-500" size={16} />
              {blog.content}
            </p>
            <p className="text-sm text-gray-500">
              By <span className="font-semibold">{blog.name}</span> on {blog.date}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
