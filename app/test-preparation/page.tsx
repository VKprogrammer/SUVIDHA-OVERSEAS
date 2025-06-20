"use client"

import {
  ArrowLeft,
  CheckCircle,
  Users,
  Calendar,
  Monitor,
  BarChart3,
  Target,
  GraduationCap,
  Clock,
  Laptop,
  RefreshCw,
  TrendingUp,
  BookOpen,
} from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TestPreparationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <ArrowLeft className="h-4 w-4 text-blue-600 mr-2" />
            <Link href="/#services" className="text-blue-600 hover:text-blue-800 transition-colors">
              Back to Services
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Test Preparation</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Test Preparation</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ace your IELTS, TOEFL, GRE, or GMAT with expert trainers, mock exams, and tailored study strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Suvidha Overseas provides end-to-end training for the most popular international entrance exams. Our
              comprehensive programs are designed to help you achieve your target scores with confidence.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Students get access to live classes, doubt-solving sessions, mock tests, and personalized improvement
              plans. Trusted by 1000+ students with proven score improvement across all major exams.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Users className="w-4 h-4 mr-2" />
                1000+ Students Trained
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                Proven Score Improvement
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <GraduationCap className="w-4 h-4 mr-2" />
                Expert Trainers
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Exam Tabs Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Exam</h2>
            <p className="text-lg text-gray-600">Comprehensive preparation programs tailored for each exam</p>
          </div>

          <Tabs defaultValue="ielts" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="ielts">IELTS</TabsTrigger>
              <TabsTrigger value="toefl">TOEFL</TabsTrigger>
              <TabsTrigger value="gre">GRE</TabsTrigger>
              <TabsTrigger value="gmat">GMAT</TabsTrigger>
            </TabsList>

            <TabsContent value="ielts">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">IELTS Preparation</CardTitle>
                  <CardDescription>
                    Master all four modules with our comprehensive IELTS training program
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Key Topics Covered:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <p className="font-medium">4 Modules Mastery</p>
                          <p className="text-sm text-gray-600">Listening, Reading, Writing, Speaking</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <p className="font-medium">Weekly Mock Speaking</p>
                          <p className="text-sm text-gray-600">One-on-one interview practice</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <BookOpen className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <p className="font-medium">Writing Evaluations</p>
                          <p className="text-sm text-gray-600">Essay and letter-writing feedback</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <BarChart3 className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <p className="font-medium">Band Improvement</p>
                          <p className="text-sm text-gray-600">Strategic score enhancement</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-3">Learning Timeline:</h5>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Getting Started</Badge>
                      <span className="text-gray-400">→</span>
                      <Badge variant="outline">Practice Modules</Badge>
                      <span className="text-gray-400">→</span>
                      <Badge variant="outline">Mock Tests</Badge>
                      <span className="text-gray-400">→</span>
                      <Badge variant="outline">Feedback & Improvement</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="toefl">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">TOEFL Preparation</CardTitle>
                  <CardDescription>Excel in integrated tasks with our specialized TOEFL training</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <p className="font-medium">Integrated Tasks</p>
                        <p className="text-sm text-gray-600">Reading, listening, speaking, writing combined</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <p className="font-medium">Accent Training</p>
                        <p className="text-sm text-gray-600">Neutralization and clarity improvement</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Monitor className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <p className="font-medium">AI Mock Grading</p>
                        <p className="text-sm text-gray-600">Advanced test scoring system</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <p className="font-medium">Academic Listening</p>
                        <p className="text-sm text-gray-600">Practice with various accents</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-medium mb-2">Bonus Feature:</h5>
                    <p className="text-sm text-gray-700">
                      Tips for navigating the online TOEFL interface and computer-based testing strategies
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="gre">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">GRE Preparation</CardTitle>
                  <CardDescription>Master quantitative and verbal reasoning with proven strategies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <BarChart3 className="w-5 h-5 text-purple-600 mt-1" />
                      <div>
                        <p className="font-medium">Quants Techniques</p>
                        <p className="text-sm text-gray-600">Shortcuts & error log tracking</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-purple-600 mt-1" />
                      <div>
                        <p className="font-medium">Verbal Reasoning</p>
                        <p className="text-sm text-gray-600">Advanced vocabulary boosters</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-purple-600 mt-1" />
                      <div>
                        <p className="font-medium">Analytical Writing</p>
                        <p className="text-sm text-gray-600">6-point scoring methodology</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-purple-600 mt-1" />
                      <div>
                        <p className="font-medium">Mock Test Tracking</p>
                        <p className="text-sm text-gray-600">Detailed scorecards and analysis</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="gmat">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">GMAT Preparation</CardTitle>
                  <CardDescription>Excel in business school admissions with comprehensive GMAT prep</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-orange-600 mt-1" />
                      <div>
                        <p className="font-medium">Data Sufficiency</p>
                        <p className="text-sm text-gray-600">Master complex problem-solving</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-orange-600 mt-1" />
                      <div>
                        <p className="font-medium">Logical Reasoning</p>
                        <p className="text-sm text-gray-600">Intensive practice drills</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <BarChart3 className="w-5 h-5 text-orange-600 mt-1" />
                      <div>
                        <p className="font-medium">Integrated Reasoning</p>
                        <p className="text-sm text-gray-600">Multi-source data analysis</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-orange-600 mt-1" />
                      <div>
                        <p className="font-medium">Time Management</p>
                        <p className="text-sm text-gray-600">Optimization techniques</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Feature Comparison</h2>
            <p className="text-lg text-gray-600">Compare what's included in each exam preparation program</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900">IELTS</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900">TOEFL</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900">GRE</th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900">GMAT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Speaking Practice</td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-gray-400">—</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Analytical Writing</td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Vocabulary Building</td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Live Mock Tests</td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Strategy Sessions</td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Success Guarantee Section */}
      <div className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Success Guarantee</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Boost your scores with 6–12 weeks of expert-led training. Many of our students report significant
                improvements:
              </p>

              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">+1 Band</div>
                  <div className="text-sm text-gray-600">IELTS Average</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">+100 Points</div>
                  <div className="text-sm text-gray-600">TOEFL Average</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">+20 Points</div>
                  <div className="text-sm text-gray-600">GRE Average</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-2">+80 Points</div>
                  <div className="text-sm text-gray-600">GMAT Average</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Certified Trainers
                </Badge>
                <Badge className="px-4 py-2 bg-green-100 text-green-800 hover:bg-green-200">
                  <Clock className="w-4 h-4 mr-2" />
                  Flexible Timings
                </Badge>
                <Badge className="px-4 py-2 bg-purple-100 text-purple-800 hover:bg-purple-200">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Weekly Progress Reports
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Suvidha Overseas?</h2>
            <p className="text-lg text-gray-600">
              Experience the difference with our comprehensive approach to test preparation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Trainers</h3>
              <p className="text-gray-600">Learn from industry experts with proven track records</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Weekend & Evening Batches</h3>
              <p className="text-gray-600">Flexible scheduling to fit your busy lifestyle</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Online & Offline Modes</h3>
              <p className="text-gray-600">Choose your preferred learning environment</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Unlimited Revisions</h3>
              <p className="text-gray-600">Practice until you achieve your target score</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Generated Score Reports</h3>
              <p className="text-gray-600">Detailed analytics to track your progress</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Learning Plans</h3>
              <p className="text-gray-600">Customized strategies based on your strengths</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-lg text-gray-600">Hear from students who achieved their dream scores</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">KS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Kunal S.</h4>
                    <p className="text-sm text-gray-600">GRE Candidate</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "I improved my GRE score by 25 points within 2 months thanks to Suvidha's daily coaching sessions!"
                </p>
                <Badge variant="outline" className="text-green-600 border-green-600">
                  +25 Points Improvement
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-semibold">PR</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Priya R.</h4>
                    <p className="text-sm text-gray-600">IELTS Candidate</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "The speaking practice sessions were incredible. I went from 6.5 to 8.0 in just 8 weeks!"
                </p>
                <Badge variant="outline" className="text-blue-600 border-blue-600">
                  +1.5 Band Score
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-semibold">AM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Arjun M.</h4>
                    <p className="text-sm text-gray-600">TOEFL Candidate</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "The mock tests were exactly like the real exam. Scored 110+ on my first attempt!"
                </p>
                <Badge variant="outline" className="text-purple-600 border-purple-600">
                  110+ Score Achieved
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
