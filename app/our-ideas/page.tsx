"use client"

import { useEffect, useRef } from "react"
import TypedText from "@/components/typed-text"

const ideas = [
  {
    title: "Rain Water Harvesting",
    description:
      "Rainwater harvesting is a process of collecting and storing rainwater for future use. It involves the capture, conveyance, and storage of rainwater from rooftops and other surfaces.",
  },
  {
    title: "Water Conservation Techniques",
    description:
      "Implementing simple water conservation techniques can reduce water wastage and ensure sustainable water use for the future.",
  },
  {
    title: "Sustainable Sanitation",
    description:
      "Sustainable sanitation solutions ensure the safe disposal of human waste, contributing to better public health and environmental protection.",
  },
  {
    title: "Greywater Recycling",
    description:
      "Greywater recycling involves reusing water from baths, sinks, washing machines, and other appliances for purposes like irrigation and toilet flushing.",
  },
  {
    title: "Desalination Technologies",
    description:
      "Desalination turns seawater into fresh water, providing a viable solution for water-scarce regions, especially in coastal areas.",
  },
  {
    title: "Water-Efficient Irrigation",
    description:
      "Drip irrigation and other water-efficient irrigation systems help save water in agriculture while ensuring crops receive sufficient hydration.",
  },
  {
    title: "Plastic-Free Water Solutions",
    description:
      "Promoting plastic-free water solutions like reusable bottles and filtration systems helps reduce plastic waste and protect marine life.",
  },
  {
    title: "Urban Water Management",
    description:
      "Efficient urban water management systems help cities cope with growing water demand while ensuring equitable distribution of water resources.",
  },
]

export default function OurIdeas() {
  const ideasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (ideasRef.current) {
      const cards = ideasRef.current.querySelectorAll(".idea-card")
      cards.forEach((card, index) => {
        setTimeout(() => {
          observer.observe(card)
        }, index * 100)
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <TypedText text="Our Ideas" className="text-4xl font-bold text-blue-600" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" ref={ideasRef}>
          {ideas.map((idea, index) => (
            <div
              key={index}
              className="idea-card bg-white p-6 rounded-lg shadow-md border border-blue-100 opacity-0 transform transition-all duration-300"
            >
              <h2 className="text-xl font-semibold mb-3 text-blue-600">{idea.title}</h2>
              <p className="text-gray-600 mb-4">{idea.description}</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 font-medium inline-flex items-center">
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <video className="w-full h-auto rounded-lg shadow-lg" controls poster="/images/video-thumbnail.jpg">
            <source src="/videos/water2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="text-center mt-12 text-xl font-bold text-blue-600">Thank You For Visiting Our Website</p>
      </div>
    </main>
  )
}
