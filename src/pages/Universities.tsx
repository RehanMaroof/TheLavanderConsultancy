import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { MapPin, Star, TrendingUp, GraduationCap, Filter } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const universities = [
  {
    name: 'University of Oxford',
    location: 'Oxford, England',
    region: 'England',
    ranking: '#1 in UK',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    subjects: ['Business', 'Engineering', 'Medicine'],
  },
  {
    name: 'University of Cambridge',
    location: 'Cambridge, England',
    region: 'England',
    ranking: '#2 in UK',
    image: 'https://images.ctfassets.net/szez98lehkfm/7fgrnKsC4zTwWZnp8ybmQr/e205ac1959f51d6539e45b6ab3fad648/MyIC_Article_112726?w=730&h=410&fm=jpg&fit=fill',
    subjects: ['Science', 'Engineering', 'Business'],
  },
  {
    name: 'Imperial College London',
    location: 'London, England',
    region: 'England',
    ranking: '#3 in UK',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    subjects: ['Engineering', 'Science', 'Medicine'],
  },
  {
    name: 'University College London',
    location: 'London, England',
    region: 'England',
    ranking: '#4 in UK',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
    subjects: ['Arts', 'Science', 'Business'],
  },
  {
    name: 'University of Edinburgh',
    location: 'Edinburgh, Scotland',
    region: 'Scotland',
    ranking: '#5 in UK',
    image: 'https://study.ed.ac.uk/sites/default/files/styles/card_image_top/public/2025-01/UCAS%20Edinburgh-217%20%5BLottie%20Cripps%5D%20900x400.jpg.webp?itok=nF3t4fnj',
    subjects: ['Science', 'Arts', 'Medicine'],
  },
  {
    name: 'University of Manchester',
    location: 'Manchester, England',
    region: 'England',
    ranking: '#6 in UK',
    image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=800&q=80',
    subjects: ['Business', 'Engineering', 'Science'],
  },
]

const benefits = [
  {
    icon: Star,
    title: 'World-Class Education',
    description: '4 of the top 10 universities globally are in the UK, offering exceptional academic programs.',
  },
  {
    icon: TrendingUp,
    title: 'Career Opportunities',
    description: 'Graduate work visa allows you to work in the UK for 2 years after completing your degree.',
  },
  {
    icon: GraduationCap,
    title: 'Shorter Programs',
    description: 'Most undergraduate degrees are 3 years and master\'s programs are 1 year, saving time and money.',
  },
]

const fieldsOfStudy = ['All Fields', 'Business', 'Engineering', 'Science', 'Medicine', 'Arts', 'Law']
const regions = ['All Regions', 'England', 'Scotland', 'Wales', 'Northern Ireland']

export function Universities() {
  const [selectedField, setSelectedField] = useState('All Fields')
  const [selectedRegion, setSelectedRegion] = useState('All Regions')

  const filteredUniversities = universities.filter((uni) => {
    const matchesField = selectedField === 'All Fields' || uni.subjects.includes(selectedField)
    const matchesRegion = selectedRegion === 'All Regions' || uni.region === selectedRegion
    return matchesField && matchesRegion
  })

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <div className="bg-white border-b border-slate-200">
        <Header variant="light" />
      </div>

      {/* Hero Section */}
      <section className="bg-purple-900 text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Study at Top UK Universities
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Explore world-renowned universities offering exceptional education, cutting-edge research, and
            outstanding career opportunities.
          </p>
        </div>
      </section>

      <main className="flex-1">
        {/* Why Study in the UK Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Study in the UK?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The United Kingdom is home to some of the world's most prestigious universities and offers an
              unparalleled educational experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mt-16">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-purple-50/50">
                      <Icon className="h-12 w-12 text-purple-700" strokeWidth={1.5} fill="none" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-base">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Featured Universities Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Featured Universities</h2>

          {/* Filter Section */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 mb-12 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Filter className="h-5 w-5 text-purple-700" strokeWidth={2} />
              <span className="font-semibold text-slate-900 text-base">Filter Universities</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Field of Study</label>
                <select
                  value={selectedField}
                  onChange={(e) => setSelectedField(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23334155' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    paddingRight: '2.5rem',
                  }}
                >
                  {fieldsOfStudy.map((field) => (
                    <option key={field} value={field}>
                      {field}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Region</label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23334155' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    paddingRight: '2.5rem',
                  }}
                >
                  {regions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* University Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUniversities.map((university) => (
              <div
                key={university.name}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-full h-52 overflow-hidden">
                  <img
                    src={university.image}
                    alt={university.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-700 text-white">
                      {university.ranking}
                    </span>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm font-medium">{university.region}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{university.name}</h3>
                  <p className="text-slate-600 text-sm mb-5">{university.location}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {university.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="block w-full text-center rounded-lg bg-purple-700 px-4 py-3 text-sm font-semibold text-white hover:bg-purple-800 transition-colors"
                  >
                    Get Guidance for this University
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-purple-900 text-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="flex justify-center mb-8">
              <GraduationCap className="h-20 w-20 text-white" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Apply?</h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Our expert consultants will help you choose the right university and course, prepare your
              application, and maximize your chances of admission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-3.5 text-base font-semibold text-white hover:bg-white hover:text-purple-900 transition-colors"
              >
                Talk to a Consultant
              </Link>
              <button className="inline-flex items-center justify-center rounded-lg bg-purple-700 px-8 py-3.5 text-base font-semibold text-white hover:bg-purple-800 transition-colors">
                Download University Guide
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
