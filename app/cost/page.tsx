"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"

export default function CostCalculatorPage() {
  const [tuition, setTuition] = useState("")
  const [living, setLiving] = useState("")
  const [misc, setMisc] = useState("")
  const [scholarship, setScholarship] = useState("")
  const [total, setTotal] = useState<number | null>(null)
  const [country, setCountry] = useState("")

  const handleCalculate = () => {
    const tuitionNum = parseFloat(tuition) || 0
    const livingNum = parseFloat(living) || 0
    const miscNum = parseFloat(misc) || 0
    const scholarshipNum = parseFloat(scholarship) || 0

    const calculatedTotal = tuitionNum + livingNum + miscNum - scholarshipNum
    setTotal(Math.max(0, calculatedTotal)) // avoid negative total
  }

  return (
    <div>
        <Header></Header>
        <div className="min-h-screen bg-gradient-to-br from-sky-100 to-white py-12 px-4">
    <div className="max-w-3xl mx-auto py-15 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Study Abroad Cost Calculator</h1>
        <p className="text-gray-600 text-lg">
          Get a quick estimate of your total expenses based on the country, tuition, living, and other costs.
        </p>
      </div>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl text-center">Enter Cost Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">

          <div className="space-y-2">
            <Label>Choose Country</Label>
            <Select onValueChange={setCountry}>
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USA">USA</SelectItem>
                <SelectItem value="Canada">Canada</SelectItem>
                <SelectItem value="Germany">Germany</SelectItem>
                <SelectItem value="Australia">Australia</SelectItem>
                <SelectItem value="UK">UK</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Annual Tuition Fee (USD)</Label>
            <Input
              type="number"
              placeholder="e.g. 15000"
              value={tuition}
              onChange={(e) => setTuition(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Annual Living Cost (USD)</Label>
            <Input
              type="number"
              placeholder="e.g. 12000"
              value={living}
              onChange={(e) => setLiving(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Miscellaneous Expenses (USD)</Label>
            <Input
              type="number"
              placeholder="e.g. 3000"
              value={misc}
              onChange={(e) => setMisc(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Scholarship Amount (USD)</Label>
            <Input
              type="number"
              placeholder="e.g. 5000"
              value={scholarship}
              onChange={(e) => setScholarship(e.target.value)}
            />
          </div>

          <Button className="w-full bg-blue-600 text-white hover:bg-blue-700" onClick={handleCalculate}>
            Calculate Total Cost
          </Button>

          {total !== null && (
            <div className="mt-4 text-center">
              <p className="text-xl font-semibold text-gray-800">
                Estimated Total Cost for studying in {country}:{" "}
                <span className="text-blue-600">${total.toLocaleString()}</span>
              </p>
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
