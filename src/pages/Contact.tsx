import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <div className="bg-white border-b border-slate-200">
        <Header variant="light" />
      </div>

      {/* Get in Touch Banner */}
      <section className="bg-purple-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Have questions? We're here to help you every step of the way. Reach out to us and let's start your journey to studying in the UK.
          </p>
        </div>
      </section>

      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-700 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                    <a
                      href="tel:+442012345678"
                      className="text-purple-700 hover:text-purple-800 transition-colors"
                    >
                      +44 20 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-700 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@lavanderconsultancy.com"
                      className="text-purple-700 hover:text-purple-800 transition-colors"
                    >
                      info@lavanderconsultancy.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-700 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Address</h3>
                    <p className="text-slate-600">
                      123 Education Street
                      <br />
                      London, EC1A 1BB
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-700 flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Office Hours</h3>
                    <p className="text-slate-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Section */}
              <div className="pt-6 border-t border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/442012345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500 text-white">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 group-hover:text-green-700">WhatsApp</div>
                      <div className="text-sm text-slate-600">Chat with us instantly</div>
                    </div>
                  </a>

                  <Link
                    to="/contact"
                    className="flex items-center gap-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-700 text-white">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 group-hover:text-purple-700">Book Appointment</div>
                      <div className="text-sm text-slate-600">Schedule a consultation</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+44 20 1234 5678"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject *
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none appearance-none bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="admission">University Admission</option>
                      <option value="test-prep">Test Preparation</option>
                      <option value="scholarship">Scholarship Support</option>
                      <option value="visa">Visa Assistance</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-purple-700 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-purple-800"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Visit Our Office Section */}
        <section className="bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Visit Our Office</h2>
              <p className="text-lg text-slate-600">Drop by our office for a face-to-face consultation.</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-96 bg-slate-200 flex items-center justify-center relative">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-700 font-medium mb-2">123 Education Street, London, EC1A 1BB, UK</p>
                <p className="text-sm text-slate-500">[Embedded Google Maps would appear here]</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5436179890285!2d-0.12775492346893954!3d51.50735097181364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1703599999999!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

