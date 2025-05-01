"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import TypedText from "@/components/typed-text"

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const solutionsRef = useRef<HTMLDivElement>(null)

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

    if (statsRef.current) observer.observe(statsRef.current)
    if (aboutRef.current) observer.observe(aboutRef.current)
    if (solutionsRef.current) observer.observe(solutionsRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <section className="hero relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
        <div className="absolute inset-0 bg-[url('/images/water-pattern.png')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center z-10">
          <TypedText text="Clean Water and Sanitation" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" />
          <p className="text-xl md:text-2xl">Ensuring Access to Clean Water for a Sustainable Future</p>
        </div>
      </section>

      <section ref={aboutRef} className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="text-block md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Clean Water Matters</h2>
            <p className="mb-6 text-gray-600">
              Access to clean water is critical for health, well-being, and sustainability. Without clean water, many
              communities are at risk of diseases and environmental hazards.
            </p>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">Our Mission</h3>
            <p className="text-gray-600">
              We are committed to providing clean water solutions and sanitation practices to ensure a better future for
              all.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/water.png"
              alt="Water Image"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section ref={statsRef} className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Global Water Crisis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform hover:scale-105">
              <h3 className="text-4xl font-bold mb-2 text-blue-500">2 Billion</h3>
              <p className="text-gray-600">People lack access to safe drinking water.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform hover:scale-105">
              <h3 className="text-4xl font-bold mb-2 text-blue-500">4.2 Billion</h3>
              <p className="text-gray-600">People live without safely managed sanitation services.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform hover:scale-105">
              <h3 className="text-4xl font-bold mb-2 text-blue-500">80%</h3>
              <p className="text-gray-600">Of wastewater flows back into the ecosystem untreated.</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={solutionsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Innovative Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-blue-100">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Water Treatment</h3>
              <p className="text-gray-600">We provide solutions for purifying water and making it safe to drink.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-blue-100">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Sanitation Technologies</h3>
              <p className="text-gray-600">Our eco-friendly sanitation technologies minimize environmental impact.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-blue-100">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Community Engagement</h3>
              <p className="text-gray-600">We educate communities on sustainable water and sanitation practices.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
