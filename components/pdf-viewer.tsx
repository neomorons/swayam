"use client"
import Image from "next/image"
import Link from "next/link"

interface PDFViewerProps {
  courseId: string
  certificateHash: string
}

export default function PDFViewer({ courseId, certificateHash }: PDFViewerProps) {
  // Add #toolbar=0&view=FitV to hide controls and fit to container height
  const pdfUrl = `/2024/07/ntr24-ed44/${certificateHash}.pdf#toolbar=0&view=FitV`

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className="border-b sticky top-0 bg-white z-50"
        style={{ boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%), 0 3px 10px 0 rgb(0 0 0 / 19%)" }}
      >
        <div className="container mx-auto px-4 py-1 flex flex-col md:flex-row items-center justify-between md:w-[750px] lg:w-[970px] xl:w-[1170px]">
          <div className="flex items-center">
            <Image
              src="https://storage.googleapis.com/swayam2-node/assets/img/swayam_images/swayam_logo.png"
              alt="SWAYAM Logo" 
              width={115}
              height={50}
              className="h-14 w-auto"
            />
          </div>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm">
              <li>
                <Link href="https://swayam.gov.in/about" className="text-gray-600 hover:text-[#428bca]">
                  About Swayam
                </Link>
              </li>
              <li>|</li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#428bca]">
                  All Courses
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 md:px-0 pt-0 md:pt-[50px] pb-[50px]">

        {/* PDF Viewer */}
        <div className="container mx-auto bg-gray-100 rounded-lg overflow-hidden w-full max-w-[750px] md:max-w-[750px] lg:max-w-[970px] xl:max-w-[1170px]">
          <iframe
            src={pdfUrl}
            className="w-full"
            title="Certificate Image"
            style={{ 
              border: "none",
              width: "100%",
              height: "627px"
            }}
            scrolling="no"
          />
        </div>
      </main>

      <footer className="bg-[#333333] text-white py-2">
        <div className="container mx-auto md:w-[750px] lg:w-[970px] xl:w-[1170px]">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-[12px]">
            <p>© 2025 SWAYAM. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Initiative by : Ministry of Education (Govt of India)</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
