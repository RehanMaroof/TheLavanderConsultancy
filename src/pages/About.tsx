import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Users, Target, TrendingUp, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Director & Senior Consultant',
    description: '15+ years of experience in UK university admissions. Former admissions officer at Oxford University.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'IELTS Specialist',
    description: 'Certified IELTS examiner with 10+ years of teaching experience. Helped 500+ students achieve their target scores.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Emma Williams',
    role: 'Scholarship Advisor',
    description: 'Secured over £2M in scholarships for students. Expert in financial planning and scholarship applications.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Raj Patel',
    role: 'Visa Consultant',
    description: '12+ years in UK immigration law. 98% success rate in student visa applications.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
]

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'We assess your profile, discuss your goals, and recommend the best universities and courses.',
  },
  {
    number: '02',
    title: 'Test Preparation',
    description: 'Intensive training for IELTS/TOEFL to ensure you meet university requirements.',
  },
  {
    number: '03',
    title: 'Application Process',
    description: 'We guide you through university applications, personal statements, and documentation.',
  },
  {
    number: '04',
    title: 'Admission & Scholarship',
    description: 'Receive offers and apply for scholarships to fund your education.',
  },
  {
    number: '05',
    title: 'Visa Assistance',
    description: 'Complete visa application support, documentation, and interview preparation.',
  },
  {
    number: '06',
    title: 'Pre-Departure & Beyond',
    description: 'Orientation, accommodation support, and guidance for your journey ahead.',
  },
]

export function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <div className="bg-white border-b border-slate-200">
        <Header variant="light" />
      </div>
      <header className="relative isolate overflow-hidden bg-purple-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900" />

        <div className="relative max-w-7xl mx-auto px-6 pb-16 pt-16 md:pb-24 md:pt-20">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">About The Lavander Consultancy</h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Empowering students to achieve their dreams of studying in the UK since 2010. We are your trusted partner in every step of your educational journey.
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Our Story Section */}
        <section className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <h2 className="text-3xl font-semibold text-slate-900 mb-8">Our Story</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                Founded in 2010, The Lavander Consultancy was born from a simple mission: to make quality UK education accessible to talented students worldwide. What started as a small advisory service has grown into one of the most trusted educational consultancies.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our founders, having experienced the challenges of studying abroad firsthand, understood the need for genuine, personalized guidance. Today, we have helped over 2,500 students achieve their dreams of studying at prestigious UK universities.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
                alt="Graduates celebrating"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed mb-12">
            We believe that every student deserves the opportunity to pursue world-class education, and we are committed to making that journey as smooth and successful as possible.
          </p>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-purple-50 p-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide expert guidance and support that transforms educational aspirations into reality.
              </p>
            </div>
            <div className="rounded-2xl bg-purple-50 p-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the leading bridge connecting global talent with UK's finest educational institutions.
              </p>
            </div>
          </div>
        </section>

        {/* Our Impact Section */}
        <section className="bg-purple-900 text-white">
          <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
            <h2 className="text-3xl font-semibold text-center mb-12">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">2500+</div>
                <div className="text-purple-200">Students Placed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-purple-200">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-purple-200">Partner Universities</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-purple-200">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-slate-600">
              Our team of experienced professionals is dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="rounded-2xl border border-slate-200 overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                  <p className="text-sm text-purple-700 font-medium mt-1 mb-3">{member.role}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Step-by-Step Process Section */}
        <section className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-slate-900 mb-4">Our Step-by-Step Process</h2>
              <p className="text-slate-600">
                A clear, structured approach to ensure your success at every stage
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((step) => (
                <div key={step.number} className="rounded-2xl bg-white border border-slate-200 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl font-bold text-purple-600">{step.number}</div>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-purple-900 text-white">
          <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 text-center">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg text-purple-100 max-w-3xl mx-auto mb-8">
              Join thousands of successful students who trusted us with their future. Let us help you achieve your dream of studying in the UK.
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-purple-800 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

