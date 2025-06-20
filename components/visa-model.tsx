"use client"
import { Dialog } from "@headlessui/react"
import { X } from "lucide-react"
import Link from "next/link"

export default function VisaModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const visaOptions = [
    { name: "USA Student Visa", slug: "us-student" },
    { name: "UK Student Visa", slug: "uk-student" },
    { name: "Canada Student Visa", slug: "canada-student" },
    { name: "Australia Student Visa", slug: "australia-student" },
    { name: "Germany Student Visa", slug: "germany-student" },
  ]

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <Dialog.Panel className="bg-white rounded-xl p-6 w-full max-w-lg shadow-xl relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-blue-700 mb-4">Visa Options</h2>
        <p className="text-gray-600 mb-4">
          Click a visa type to explore complete requirements, exams, and tips.
        </p>

        <ul className="space-y-3">
          {visaOptions.map((visa) => (
            <li key={visa.slug}>
              <Link
                href={`/visas/${visa.slug}`}
                className="block text-blue-600 hover:underline text-lg font-medium"
                onClick={onClose}
              >
                {visa.name}
              </Link>
            </li>
          ))}
        </ul>
      </Dialog.Panel>
    </Dialog>
  )
}
