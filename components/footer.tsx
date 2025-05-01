import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
        <p className="mb-4">Email: info@cleanwater.org | Phone: (123) 456-7890</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-2xl hover:text-blue-400 transition-colors">
            <FaTwitter />
          </a>
          <a href="#" className="text-2xl hover:text-blue-400 transition-colors">
            <FaLinkedin />
          </a>
          <a href="#" className="text-2xl hover:text-blue-400 transition-colors">
            <FaGithub />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Clean Water Initiative. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
