
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Save,
  User,
  Briefcase,
  GraduationCap,
  Code,
  Lightbulb,
  CheckCircle
} from 'lucide-react'

const ResumeBuilder = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [saved, setSaved] = useState(false)

  const [formData, setFormData] = useState({
    title: 'Untitled Resume',

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
  })

  // Load existing resume
  useEffect(() => {
    const savedResumes = JSON.parse(
      localStorage.getItem('resumes') || '[]'
    )

    const existingResume = savedResumes.find(
      (resume) => resume.id === id
    )

    if (existingResume) {
      setFormData(existingResume)
    } else {
      navigate('/app', { replace: true })
    }
  }, [id, navigate])

  // Handle normal input changes
  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))

    setSaved(false)
  }

  // Handle personal information changes
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [name]: value
      }
    }))

    setSaved(false)
  }

  // Save resume
  const handleSave = () => {
    const savedResumes = JSON.parse(
      localStorage.getItem('resumes') || '[]'
    )

    const updatedResume = {
      ...formData,
      id,
      updatedAt: new Date().toISOString()
    }

    const updatedResumes = savedResumes.map((resume) =>
      resume.id === id ? updatedResume : resume
    )

    localStorage.setItem(
      'resumes',
      JSON.stringify(updatedResumes)
    )

    setSaved(true)
  }

  return (
    <div className="min-h-screen bg-slate-50">

      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6">

        {/* Top Navigation */}
        <div className="flex items-center justify-between gap-4 mb-8">

          <button
            onClick={() => navigate('/app')}
            className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft size={19} />
            <span className="text-sm font-medium">Back to Dashboard</span>
          </button>

          <button
            onClick={handleSave}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all active:scale-95"
          >
            <Save size={17} />
            Save Resume
          </button>

        </div>

        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-slate-800">
            Resume Builder
          </h1>

          <p className="text-sm text-slate-500 mt-2">
            Fill in your details to create your professional resume.
          </p>
        </div>

        {/* Save Message */}
        {saved && (
          <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6 text-sm">
            <CheckCircle size={18} />
            Resume saved successfully!
          </div>
        )}

        {/* Resume Title */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">

          <label className="block text-sm font-medium text-slate-700 mb-2">
            Resume Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Software Developer Resume"
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />

        </div>

        {/* Personal Information */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 mb-6">

          <div className="flex items-center gap-3 mb-6">
            <div className="bg-indigo-50 p-2.5 rounded-lg">
              <User size={22} className="text-indigo-600" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-800">
                Personal Information
              </h2>

              <p className="text-xs text-slate-500">
                Add your basic contact details.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Full Name
              </label>

              <input
                name="fullName"
                value={formData.personalInfo.fullName}
                onChange={handlePersonalInfoChange}
                placeholder="John Doe"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Profession
              </label>

              <input
                name="profession"
                value={formData.personalInfo.profession}
                onChange={handlePersonalInfoChange}
                placeholder="Frontend Developer"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.personalInfo.email}
                onChange={handlePersonalInfoChange}
                placeholder="john@example.com"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.personalInfo.phone}
                onChange={handlePersonalInfoChange}
                placeholder="+91 9876543210"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Address
              </label>

              <input
                name="address"
                value={formData.personalInfo.address}
                onChange={handlePersonalInfoChange}
                placeholder="City, State, Country"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Professional Summary
              </label>

              <textarea
                name="summary"
                value={formData.personalInfo.summary}
                onChange={handlePersonalInfoChange}
                rows="4"
                placeholder="Write a short introduction about yourself, your skills and career goals..."
                className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 resize-y"
              />
            </div>

          </div>
        </section>

        {/* Experience */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 mb-6">

          <div className="flex items-center gap-3 mb-5">
            <div className="bg-indigo-50 p-2.5 rounded-lg">
              <Briefcase size={22} className="text-indigo-600" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-800">
                Work Experience
              </h2>

              <p className="text-xs text-slate-500">
                Describe your previous work experience or internships.
              </p>
            </div>
          </div>

          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            rows="6"
            placeholder="Job Title | Company Name&#10;Duration&#10;Describe your responsibilities and achievements..."
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 resize-y"
          />

        </section>

        {/* Education */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 mb-6">

          <div className="flex items-center gap-3 mb-5">
            <div className="bg-indigo-50 p-2.5 rounded-lg">
              <GraduationCap size={22} className="text-indigo-600" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-800">
                Education
              </h2>

              <p className="text-xs text-slate-500">
                Add your academic qualifications.
              </p>
            </div>
          </div>

          <textarea
            name="education"
            value={formData.education}
            onChange={handleChange}
            rows="5"
            placeholder="Degree / Course&#10;Institution Name&#10;Start Year - End Year&#10;Relevant achievements..."
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 resize-y"
          />

        </section>

        {/* Projects */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 mb-6">

          <div className="flex items-center gap-3 mb-5">
            <div className="bg-indigo-50 p-2.5 rounded-lg">
              <Code size={22} className="text-indigo-600" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-800">
                Projects
              </h2>

              <p className="text-xs text-slate-500">
                Showcase your projects and technical contributions.
              </p>
            </div>
          </div>

          <textarea
            name="projects"
            value={formData.projects}
            onChange={handleChange}
            rows="5"
            placeholder="Project Name&#10;Technologies Used&#10;Project description and features..."
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 resize-y"
          />

        </section>

        {/* Skills */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 mb-8">

          <div className="flex items-center gap-3 mb-5">
            <div className="bg-indigo-50 p-2.5 rounded-lg">
              <Lightbulb size={22} className="text-indigo-600" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-800">
                Skills
              </h2>

              <p className="text-xs text-slate-500">
                Add your technical and professional skills.
              </p>
            </div>
          </div>

          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            rows="3"
            placeholder="JavaScript, React, Node.js, Python, SQL, Communication..."
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 resize-y"
          />

        </section>

        {/* Bottom Save Button */}
        <div className="flex justify-end mb-10">

          <button
            onClick={handleSave}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-3 rounded-lg font-medium transition-all active:scale-95 shadow-md shadow-indigo-200"
          >
            <Save size={18} />
            Save Resume
          </button>

        </div>

      </div>
    </div>
  )
}

export default ResumeBuilder
