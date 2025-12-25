import { Link } from 'react-router-dom'
import { ArrowRight, BookOpenCheck, GraduationCap, Phone, Globe2, Award } from 'lucide-react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const services = [
  {
    title: 'University Admission Guidance',
    description:
      'Expert guidance for securing admission to top UK universities. We help you choose the right course and university.',
    icon: GraduationCap,
  },
  {
    title: 'Test Preparation',
    description: 'Comprehensive IELTS, TOEFL, and PTE preparation with certified trainers and proven success strategies.',
    icon: BookOpenCheck,
  },
  {
    title: 'Scholarship Support',
    description: 'Access exclusive scholarship opportunities and financial aid guidance to make your education affordable.',
    icon: Award,
  },
]

const stats = [
  { label: 'Years of experience', value: '10+' },
  { label: 'Students assisted', value: '5,000+' },
  { label: 'Partner universities', value: '120+' },
]

const blogs = [
  {
    date: 'December 1, 2025',
    title: 'Top 10 UK Universities for International Students',
    description:
      'Discover the best universities in the UK that welcome international students with excellent programs and support.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
  },
  {
    date: 'November 28, 2025',
    title: 'IELTS Preparation: 5 Tips to Score 7+',
    description:
      'Learn the essential strategies and techniques to achieve your target IELTS score with our expert tips.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
  },
  {
    date: 'November 25, 2025',
    title: 'Complete Guide to UK Student Visa Process',
    description:
      'Everything you need to know about applying for a UK student visa, from documents to interview preparation.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
  },
]

const faqs = [
  {
    question: 'What services does The Lavander Consultancy offer?',
    answer:
      'We offer comprehensive university admission guidance, test preparation (IELTS, TOEFL, PTE), scholarship support, and visa assistance.',
  },
  {
    question: 'How long does the admission process take?',
    answer:
      'The admission process typically takes 3-6 months, depending on the university and course. We guide you through every step.',
  },
  {
    question: 'What IELTS score do I need for UK universities?',
    answer:
      'Most UK universities require an IELTS score of 6.0-7.0, but this varies by course and institution. We help you meet your target score.',
  },
  {
    question: 'Do you offer online test preparation classes?',
    answer:
      'Yes, we offer both in-person and online test preparation classes with flexible schedules to suit your needs.',
  },
  {
    question: 'What are the costs involved in studying in the UK?',
    answer:
      'Costs vary by university and location, typically ranging from £15,000-£35,000 per year for tuition, plus living expenses.',
  },
  {
    question: 'Can you help with scholarship applications?',
    answer:
      'Absolutely! We provide comprehensive scholarship guidance and help you find and apply for suitable financial aid opportunities.',
  },
]

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <div className="bg-white border-b border-slate-200">
        <Header variant="light" />
      </div>
      <header className="relative isolate overflow-hidden bg-purple-900 text-white">
        <img
          src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1600&q=80"
          alt="UK University background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-purple-900/80" />

        <div className="relative max-w-7xl mx-auto px-6 pb-20 pt-16 md:pb-32 md:pt-20">
          <div className="max-w-4xl space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Your Gateway to Top UK Universities</h2>
            <p className="text-lg md:text-xl text-purple-50 leading-relaxed">
              Expert guidance and test preparation to help you achieve your dream of studying in the
              United Kingdom. Join thousands of successful students who trusted us with their future.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-purple-900 shadow-xl shadow-purple-900/30 transition hover:scale-105 hover:shadow-2xl"
              >
                Book a Free Consultation <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white px-8 py-4 text-base font-bold text-white transition hover:bg-white/20 hover:border-white bg-purple-800/40"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-white">
        {/* Services Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Our Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive support for every step of your study abroad journey
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-8 shadow-lg border border-slate-100 transition hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50 text-purple-700 mb-6">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-base text-slate-600 leading-relaxed mb-6">{description}</p>
                <Link
                  to={title === 'Test Preparation' ? '/test-preparation' : '/about'}
                  className="inline-flex items-center gap-2 text-base font-semibold text-purple-700 hover:text-purple-800 transition-colors"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-purple-700 uppercase tracking-wide">
                Why choose us
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">
                Dedicated consultants and mentors focused on your success.
              </h3>
              <p className="text-slate-600 leading-relaxed">
                From selecting the right university to acing your tests and securing your visa, our
                experts guide you with clear, actionable steps so you can focus on building your future.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm">
                  <Phone className="h-4 w-4 text-purple-700" />
                  1:1 counselling
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm">
                  <BookOpenCheck className="h-4 w-4 text-purple-700" />
                  Test prep resources
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm">
                  <Globe2 className="h-4 w-4 text-purple-700" />
                  UK-focused expertise
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white shadow-md p-6 border border-slate-100">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-center"
                  >
                    <div className="text-xl font-semibold text-purple-800">{stat.value}</div>
                    <div className="text-xs text-slate-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-gradient-to-r from-purple-700 to-purple-900 px-4 py-5 text-white shadow">
                <p className="text-sm text-purple-100">Ready to begin?</p>
                <div className="mt-1 text-lg font-semibold">Book a free consultation today</div>
                <Link
                  to="/contact"
                  className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-purple-800 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Book Consultation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Insights Section */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-2">Latest Insights</h2>
                <p className="text-lg text-slate-600">Stay updated with the latest news and tips</p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-base font-semibold text-purple-700 hover:text-purple-800 transition-colors"
              >
                View All Blogs <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {blogs.map((blog) => (
                <div
                  key={blog.title}
                  className="rounded-2xl bg-white shadow-lg border border-slate-100 transition hover:shadow-xl hover:-translate-y-1 overflow-hidden group"
                >
                  <div className="overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" 
                    />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {blog.date}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">{blog.title}</h3>
                    <p className="text-base text-slate-600 leading-relaxed mb-5 line-clamp-3">{blog.description}</p>
                    <button className="inline-flex items-center gap-2 text-base font-semibold text-purple-700 hover:text-purple-800 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-slate-50">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
              <p className="text-lg text-slate-600">Find answers to common questions about studying abroad</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <summary className="flex items-center justify-between cursor-pointer text-slate-900 font-medium text-base list-none">
                    {faq.question}
                    <svg 
                      className="h-5 w-5 text-slate-400 transition-transform group-open:rotate-180 flex-shrink-0 ml-4" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-base text-slate-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="rounded-3xl bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 px-10 py-16 md:px-16 md:py-20 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Get a Free Consultation</h2>
              <p className="mt-4 text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                Take the first step towards your UK education dream. Our experts are ready to help you.
              </p>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-3 rounded-lg bg-white px-10 py-5 text-lg font-bold text-purple-900 shadow-2xl transition hover:scale-105 hover:shadow-3xl"
              >
                Book Consultation <ArrowRight className="h-6 w-6" />
              </Link>
              <p className="mt-8 text-purple-100 text-base">
                Or reach us directly on WhatsApp:{' '}
                <a href="tel:+442012345678" className="text-white font-bold hover:underline text-lg">
                  +44 20 1234 5678
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

