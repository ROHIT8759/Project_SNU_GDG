import TypedText from "@/components/typed-text"

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <TypedText text="Contact" className="text-4xl font-bold text-blue-600" />
          </div>

          <div className="space-y-6 text-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Address</h2>
              <p className="text-gray-600">
                SISTER NIVEDITA UNIVERSITY
                <br />
                NEWTOWN : KOLKATA : 700156
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">Phone</h2>
              <p className="text-gray-600">9635986981 / 9679432418 / 8927203302 / 9382403463</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">Email</h2>
              <p className="text-gray-600">project.snu2023@gmail.com</p>
            </div>

            <div className="pt-6">
              <a
                href="mailto:project.snu2023@gmail.com"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
