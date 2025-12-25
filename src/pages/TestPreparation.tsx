import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Users, Clock, Trophy, BookOpen, CheckCircle2, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const courses = [
  {
    name: 'IELTS Preparation',
    description: 'Comprehensive training for all four modules: Listening, Reading, Writing, and Speaking.',
    duration: '8-12 weeks',
    mode: 'Online & In-Person',
    level: 'All levels (5.0 to 8.5+)',
  },
  {
    name: 'TOEFL Preparation',
    description: 'Focused preparation for the TOEFL iBT exam with practice tests and expert guidance.',
    duration: '6-10 weeks',
    mode: 'Online & In-Person',
    level: 'Intermediate to Advanced',
  },
  {
    name: 'PTE Academic',
    description: 'Complete PTE preparation with AI-based practice and scoring feedback.',
    duration: '6-8 weeks',
    mode: 'Online & In-Person',
    level: 'All levels',
  },
]

const features = [
  {
    icon: Users,
    title: 'Certified Trainers',
    description: 'Learn from official IELTS examiners and certified language instructors',
  },
  {
    icon: Clock,
    title: 'Flexible Timings',
    description: 'Choose from morning, afternoon, evening, or weekend batches',
  },
  {
    icon: Trophy,
    title: 'High Success Rate',
    description: '95% of our students achieve their target scores on first attempt',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Materials',
    description: 'Access to exclusive study materials, practice tests, and online resources',
  },
]

const learningObjectives = [
  {
    title: 'Test-Taking Strategies',
    description: 'Learn proven techniques to maximize your score in each section',
  },
  {
    title: 'Time Management',
    description: 'Master efficient time allocation for each question type',
  },
  {
    title: 'Speaking Confidence',
    description: 'Practice with mock interviews and receive detailed feedback',
  },
  {
    title: 'Writing Excellence',
    description: 'Develop academic writing skills with personalized corrections',
  },
  {
    title: 'Full-Length Mock Tests',
    description: 'Practice with authentic test simulations and detailed score reports',
  },
]

const testimonials = [
  {
    name: 'Priya Sharma',
    score: 'IELTS 8.0',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    comment:
      'The trainers at Lavander Consultancy helped me improve from 6.5 to 8.0 in just 8 weeks. Their personalized feedback on speaking and writing was invaluable.',
  },
  {
    name: 'Ahmed Khan',
    score: 'IELTS 7.5',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    comment:
      'I was struggling with the reading section, but the strategies taught here made a huge difference. Highly recommend their IELTS course!',
  },
  {
    name: 'Maria Garcia',
    score: 'TOEFL 110',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    comment:
      'The TOEFL prep course was exceptional. The practice tests were very similar to the actual exam, which boosted my confidence tremendously.',
  },
]

export function TestPreparation() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <div className="bg-white border-b border-slate-200">
        <Header variant="light" />
      </div>
      {/* Hero Section */}
      <header className="relative isolate overflow-hidden bg-purple-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900" />
          {/* Large STUDY text overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[200px] md:text-[300px] font-serif text-purple-800/20 select-none pointer-events-none">
              STUDY
            </span>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pb-16 pt-16 md:pb-24 md:pt-20">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Achieve Your Target Score
            </h1>
            <p className="text-xl text-white leading-relaxed">
              Expert IELTS, TOEFL, and PTE preparation with certified trainers, proven strategies, and
              personalized feedback to help you succeed.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg border-2 border-purple-300 bg-white px-8 py-4 text-base font-bold text-purple-900 shadow-xl transition hover:scale-105"
            >
              Book a Free Demo Class
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Why Choose Our Test Preparation Section */}
        <section className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our Test Preparation?
            </h2>
            <p className="text-lg text-slate-600">
              We combine expert instruction with proven methodologies to ensure your success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-purple-600 bg-white text-purple-600 mx-auto mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Courses Section */}
        <section className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Courses</h2>
              <p className="text-lg text-slate-600">
                Choose the right course for your language proficiency goals
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div
                  key={course.name}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-purple-600 text-white mb-6">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{course.name}</h3>
                  <p className="text-sm text-slate-600 mb-6">{course.description}</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      <span>Duration: {course.duration}</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      <span>Mode: {course.mode}</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      <span>Level: {course.level}</span>
                    </li>
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-full rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-purple-700"
                  >
                    Enroll Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80"
                alt="Student studying"
                className="w-full h-auto rounded-2xl shadow-lg object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">What You'll Learn</h2>
              <ul className="space-y-6">
                {learningObjectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{objective.title}</h3>
                      <p className="text-sm text-slate-600">{objective.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Success Stories</h2>
              <p className="text-lg text-slate-600">
                Hear from students who achieved their dream scores with our guidance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">"{testimonial.comment}"</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                      <p className="text-sm text-purple-600 font-medium">{testimonial.score}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Next Batch Section */}
        <section className="bg-purple-900 text-white">
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Next Batch</h2>
              <p className="text-lg text-purple-100">
                Limited seats available. Enroll now to secure your spot in our upcoming batch.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <form className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-slate-900 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-slate-900"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-slate-900"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+44 20 1234 5678"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-slate-900"
                  />
                </div>
                <div>
                  <label htmlFor="course" className="block text-sm font-semibold text-slate-900 mb-2">
                    Course <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="course"
                    name="course"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-slate-900 bg-white"
                  >
                    <option value="">Select a course</option>
                    <option value="ielts">IELTS Preparation</option>
                    <option value="toefl">TOEFL Preparation</option>
                    <option value="pte">PTE Academic</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="currentScore" className="block text-sm font-semibold text-slate-900 mb-2">
                    Current Score (if any)
                  </label>
                  <input
                    type="text"
                    id="currentScore"
                    name="currentScore"
                    placeholder="e.g., 6.5"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-slate-900"
                  />
                </div>
                <div>
                  <label htmlFor="targetScore" className="block text-sm font-semibold text-slate-900 mb-2">
                    Target Score <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="targetScore"
                    name="targetScore"
                    placeholder="e.g., 7.5"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-slate-900"
                  />
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-purple-600 px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-purple-700"
                  >
                    Submit Enrollment Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
