
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Plus,
  FileText,
  Pencil,
  Trash2,
  Clock,
  ArrowRight
} from 'lucide-react'

const Dashboard = () => {
  const navigate = useNavigate()
  const [resumes, setResumes] = useState([])

  // Load resumes from localStorage
  useEffect(() => {
    const savedResumes = JSON.parse(
      localStorage.getItem('resumes') || '[]'
    )
    setResumes(savedResumes)
  }, [])

  // Create a new resume
  const createResume = () => {
    const id = Date.now().toString()

    const newResume = {
      id,
      title: 'Untitled Resume',
      updatedAt: new Date().toISOString(),
      personalInfo: {
        fullName: '',
        email: '',
        phone: '',
        address: '',
        profession: '',
        summary: ''
      },
      experience: '',
      education: '',
      projects: '',
      skills: ''
    }

    const updatedResumes = [...resumes, newResume]

    localStorage.setItem('resumes', JSON.stringify(updatedResumes))
    setResumes(updatedResumes)

    navigate(`/app/builder/${id}`)
  }

  // Delete a resume
  const deleteResume = (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this resume?'
    )

    if (!confirmDelete) return

    const updatedResumes = resumes.filter(
      (resume) => resume.id !== id
    )

    localStorage.setItem('resumes', JSON.stringify(updatedResumes))
    setResumes(updatedResumes)
  }

  // Format date
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-10">

          <div>
            <p className="text-2xl font-semibold mb-2 bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
              Welcome, John Doe
            </p>

            <p className="text-slate-500 text-sm">
              Create and manage your professional resumes.
            </p>
          </div>

          <button
            onClick={createResume}
            className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg text-sm font-medium transition-all active:scale-95 shadow-md shadow-indigo-200"
          >
            <Plus size={19} />
            Create New Resume
          </button>

        </div>

        {/* Resume Count */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-slate-800">
            My Resumes
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            {resumes.length} {resumes.length === 1 ? 'resume' : 'resumes'} created
          </p>
        </div>

        {/* Resume Cards */}
        {resumes.length > 0 ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {resumes.map((resume) => (

              <div
                key={resume.id}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg transition-all"
              >

                <div className="flex items-start justify-between mb-5">

                  <div className="bg-indigo-50 p-3 rounded-lg">
                    <FileText className="text-indigo-600" size={25} />
                  </div>

                  <button
                    onClick={() => deleteResume(resume.id)}
                    className="text-slate-400 hover:text-red-500 transition-colors"
                    title="Delete resume"
                  >
                    <Trash2 size={19} />
                  </button>

                </div>

                <h3 className="text-lg font-semibold text-slate-800 truncate">
                  {resume.title || 'Untitled Resume'}
                </h3>

                <div className="flex items-center gap-2 text-xs text-slate-400 mt-3">
                  <Clock size={14} />
                  Last updated: {formatDate(resume.updatedAt)}
                </div>

                <div className="border-t border-slate-100 mt-5 pt-4">

                  <button
                    onClick={() => navigate(`/app/builder/${resume.id}`)}
                    className="flex items-center justify-between w-full text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                  >
                    <span className="flex items-center gap-2">
                      <Pencil size={16} />
                      Edit Resume
                    </span>

                    <ArrowRight size={17} />
                  </button>

                </div>

              </div>

            ))}

          </div>

        ) : (

          /* Empty State */
          <div className="bg-white border border-dashed border-slate-300 rounded-xl py-16 px-5 text-center">

            <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
              <FileText size={30} className="text-indigo-600" />
            </div>

            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              No resumes yet
            </h3>

            <p className="text-sm text-slate-500 mb-6">
              Start building your professional resume today.
            </p>

            <button
              onClick={createResume}
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
            >
              <Plus size={18} />
              Create Your First Resume
            </button>

          </div>

        )}

      </div>
    </div>
  )
}

export default Dashboard
