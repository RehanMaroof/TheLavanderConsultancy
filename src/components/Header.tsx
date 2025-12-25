import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Test Preparation', path: '/test-preparation' },
  { name: 'Universities', path: '/universities' },
  { name: 'Contact', path: '/contact' },
]

interface HeaderProps {
  variant?: 'light' | 'dark'
}

export function Header({ variant = 'light' }: HeaderProps) {
  const location = useLocation()
  const isLight = variant === 'light'

  return (
    <div className={`relative max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-6 ${isLight ? 'bg-white' : ''}`}>
      <Link to="/" className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-700 text-white font-bold text-lg shadow-lg">
          LC
        </div>
        <span className={`text-xl font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>
          The Lavander Consultancy
        </span>
      </Link>

      <nav className="hidden lg:flex items-center gap-8 text-base font-medium">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`transition-colors ${
              isLight
                ? location.pathname === item.path
                  ? 'text-purple-700 font-semibold'
                  : 'text-slate-700 hover:text-purple-700'
                : location.pathname === item.path
                  ? 'text-white font-semibold'
                  : 'text-white/90 hover:text-white'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <Link
        to="/contact"
        className="hidden sm:inline-flex items-center rounded-xl bg-purple-700 px-7 py-3 text-base font-bold text-white shadow-lg transition hover:bg-purple-800"
      >
        Book Consultation
      </Link>
    </div>
  )
}

