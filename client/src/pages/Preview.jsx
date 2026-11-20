
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Printer } from 'lucide-react'

const Preview = () => {
  const { resumeId } = useParams()
  const navigate = useNavigate()

  const [resume, setResume] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await fetch(
          `http://localhost:5001/api/resumes/${resumeId}`
        )

        if (!response.ok) {
          throw new Error('Resume not found')
        }

        const data = await response.json()
        setResume(data)

      } catch (error) {
        console.error('Error loading resume:', error)
        alert('Could not load resume preview.')
        navigate('/app')
      } finally {
        setLoading(false)
      }
    }

    fetchResume()
  }, [resumeId, navigate])

  if (loading) {
    return <div className="text-center py-20">Loading preview...</div>
  }

  if (!resume) return null

  const personalInfo = resume.personalInfo || {}

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4">

      <div className="max-w-4xl mx-auto">

        {/* Navigation */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => navigate(`/app/builder/${resumeId}`)}
            className="flex items-center gap-2 text-slate-600 hover:text-indigo-600"
          >
            <ArrowLeft size={18} />
            Back to Editor
          </button>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg hover:bg-indigo-700"
          >
            <Printer size={18} />
            Print Resume
          </button>
        </div>

        {/* Resume Document */}
        <div className="bg-white shadow-lg p-8 sm:p-12 min-h-[1000px]">

          {/* Header */}
          <header className="border-b-2 border-slate-800 pb-6 mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 uppercase">
              {personalInfo.fullName || 'Your Name'}
            </h1>

            <p className="text-lg text-indigo-700 font-medium mt-2">
              {personalInfo.profession || 'Your Profession'}
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600 mt-4">
              {personalInfo.email && <span>{personalInfo.email}</span>}
              {personalInfo.phone && <span>{personalInfo.phone}</span>}
              {personalInfo.address && <span>{personalInfo.address}</span>}
            </div>
          </header>

          {/* Summary */}
          {personalInfo.summary && (
            <section className="mb-7">
              <h2 className="text-lg font-bold uppercase border-b border-slate-300 pb-2 mb-3">
                Professional Summary
              </h2>
              <p className="text-sm text-slate-700 leading-7 whitespace-pre-line">
                {personalInfo.summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {resume.experience && (
            <section className="mb-7">
              <h2 className="text-lg font-bold uppercase border-b border-slate-300 pb-2 mb-3">
                Work Experience
              </h2>
              <p className="text-sm text-slate-700 leading-7 whitespace-pre-line">
                {resume.experience}
              </p>
            </section>
          )}

          {/* Education */}
          {resume.education && (
            <section className="mb-7">
              <h2 className="text-lg font-bold uppercase border-b border-slate-300 pb-2 mb-3">
                Education
              </h2>
              <p className="text-sm text-slate-700 leading-7 whitespace-pre-line">
                {resume.education}
              </p>
            </section>
          )}

          {/* Projects */}
          {resume.projects && (
            <section className="mb-7">
              <h2 className="text-lg font-bold uppercase border-b border-slate-300 pb-2 mb-3">
                Projects
              </h2>
              <p className="text-sm text-slate-700 leading-7 whitespace-pre-line">
                {resume.projects}
              </p>
            </section>
          )}

          {/* Skills */}
          {resume.skills && (
            <section className="mb-7">
              <h2 className="text-lg font-bold uppercase border-b border-slate-300 pb-2 mb-3">
                Skills
              </h2>
              <p className="text-sm text-slate-700 leading-7 whitespace-pre-line">
                {resume.skills}
              </p>
            </section>
          )}

        </div>
      </div>

      {/* Print Styling */}
      <style>{`
        @media print {
          body {
            background: white;
          }

          button {
            display: none !important;
          }

          .min-h-screen {
            min-height: 0;
            padding: 0;
          }

          .shadow-lg {
            box-shadow: none;
          }

          @page {
            margin: 15mm;
          }
        }
      `}</style>

    </div>
  )
}

export default Preview
