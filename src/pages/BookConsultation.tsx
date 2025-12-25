import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export function BookConsultation() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <div className="bg-white border-b border-slate-200">
        <Header variant="light" />
      </div>
      <header className="relative isolate overflow-hidden bg-purple-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900" />

        <div className="relative max-w-7xl mx-auto px-6 pb-16 pt-16 md:pb-24 md:pt-20">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Get a Free Consultation
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Take the first step towards your UK education dream. Our experts are ready to help you.
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-white">
        <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <div className="rounded-2xl bg-white p-10 md:p-14 shadow-lg border border-slate-100">
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="fullName" className="block text-base font-semibold text-slate-900 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all text-base"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-base font-semibold text-slate-900 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all text-base"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="phone" className="block text-base font-semibold text-slate-900 mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+44 20 1234 5678"
                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all text-base"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-base font-semibold text-slate-900 mb-3">
                    Interest Area *
                  </label>
                  <select
                    id="interest"
                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all text-base"
                  >
                    <option value="">Select an option</option>
                    <option value="university-admission">University Admission</option>
                    <option value="ielts">IELTS Preparation</option>
                    <option value="toefl">TOEFL Preparation</option>
                    <option value="pte">PTE Preparation</option>
                    <option value="scholarship">Scholarship Support</option>
                    <option value="visa">Visa Assistance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-base font-semibold text-slate-900 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us about your goals and how we can help you..."
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all resize-none text-base"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-purple-700 px-8 py-5 text-lg font-bold text-white shadow-lg transition hover:bg-purple-800 hover:scale-[1.02]"
              >
                Submit Request
              </button>
            </form>

            <div className="mt-10 text-center border-t border-slate-200 pt-10">
              <p className="text-slate-600 text-base">
                Or reach us directly on WhatsApp:{' '}
                <a
                  href="tel:+442012345678"
                  className="text-purple-700 font-bold hover:underline text-lg"
                >
                  +44 20 1234 5678
                </a>
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-white border-2 border-slate-200 p-8 text-center shadow-md">
              <div className="text-5xl font-bold text-purple-700 mb-3">Free</div>
              <p className="text-base text-slate-600 font-medium">Absolutely no cost for the consultation</p>
            </div>
            <div className="rounded-2xl bg-white border-2 border-slate-200 p-8 text-center shadow-md">
              <div className="text-5xl font-bold text-purple-700 mb-3">30 mins</div>
              <p className="text-base text-slate-600 font-medium">Detailed discussion about your goals</p>
            </div>
            <div className="rounded-2xl bg-white border-2 border-slate-200 p-8 text-center shadow-md">
              <div className="text-5xl font-bold text-purple-700 mb-3">Expert</div>
              <p className="text-base text-slate-600 font-medium">Guidance from certified consultants</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

