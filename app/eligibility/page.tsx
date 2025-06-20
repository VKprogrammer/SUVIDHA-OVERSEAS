"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Import } from "lucide-react"

export default function EligibilityPage() {
  const [cgpa, setCgpa] = useState("")
  const [exam, setExam] = useState("")
  const [country, setCountry] = useState("")
  const [field, setField] = useState("")
  const [result, setResult] = useState<string | null>(null)

  const handleCheck = () => {
    if (!cgpa || !exam || !country || !field) {
      setResult("Please fill all the fields.")
      return
    }

    if (parseFloat(cgpa) >= 7 && exam !== "" && country && field) {
      setResult(`You're eligible to apply for top universities in ${country} for ${field}. 🎓`)
    } else {
      setResult("You may not meet the typical eligibility criteria. Consider improving your profile.")
    }
  }

  return (
    <div>
        <Header></Header>
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-blue-50 py-16 px-4">
       
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Eligibility Checker</h1>
          <p className="text-gray-600 text-lg">
            Find out your eligibility for international universities by filling in the details below.
          </p>
        </div>

        <Card className="shadow-xl rounded-2xl border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl text-center">Enter Your Academic Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-700">CGPA / GPA</label>
              <Input
                type="number"
                placeholder="e.g. 8.2"
                value={cgpa}
                onChange={(e) => setCgpa(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Entrance Exam</label>
              <Select onValueChange={setExam}>
                <SelectTrigger>
                  <SelectValue placeholder="Select exam" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="IELTS">IELTS</SelectItem>
                  <SelectItem value="TOEFL">TOEFL</SelectItem>
                  <SelectItem value="GRE">GRE</SelectItem>
                  <SelectItem value="None">None</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Preferred Country</label>
              <Select onValueChange={setCountry}>
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USA">USA</SelectItem>
                  <SelectItem value="Canada">Canada</SelectItem>
                  <SelectItem value="Germany">Germany</SelectItem>
                  <SelectItem value="Australia">Australia</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Field of Study</label>
              <Input
                placeholder="e.g. Computer Science, Management"
                value={field}
                onChange={(e) => setField(e.target.value)}
              />
            </div>

            <Button
              className="w-full bg-green-600 text-white hover:bg-green-700"
              onClick={handleCheck}
            >
              Check Eligibility
            </Button>

            {result && (
              <div className="mt-4 text-center text-sm text-blue-600 font-medium">
                {result}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
    <Footer></Footer>
    </div>
  )
}
