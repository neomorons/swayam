import { notFound } from "next/navigation"
import PDFViewer from "@/components/pdf-viewer"

interface PageProps {
  params: {
    courseId: string
  }
  searchParams: {
    q: string
  }
}

export default function CertificatePage({ params, searchParams }: PageProps) {
  // Validate the course ID format (e.g., ntr24_ed44)
  const courseIdPattern = /^[a-z0-9]+_[a-z0-9]+$/i
  if (!courseIdPattern.test(params.courseId)) {
    notFound()
  }

  // Validate query parameter exists
  if (!searchParams.q) {
    notFound()
  }

  return <PDFViewer courseId={params.courseId} certificateHash={searchParams.q} />
}

