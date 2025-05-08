import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  KeyIcon,
  DocumentTextIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  InformationCircleIcon,
  EnvelopeIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const mainNavItems = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Password Generator', path: '/PasswordGenerator', icon: KeyIcon },
    { name: 'Bio Generator', path: '/BioScripto', icon: DocumentTextIcon },
  ];

  const aboutNavItems = [
    { name: 'About', path: '/about', icon: InformationCircleIcon },
    { name: 'Contact', path: '/contact-us', icon: EnvelopeIcon },
    { name: 'Privacy Policy', path: '/privacy-policy', icon: DocumentTextIcon },
  ];

  return (
    <header className="sticky top-0 z-50 border-white/10  bg-gradient-to-br from-gray-900 to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-semibold text-gray-900">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <img
                src="/images/Custophi.png"
                alt="Custophi Logo"
                className="w-7 h-7"
              />
              <span className="text-xl font-medium bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
                CUSTOPHI
              </span>
            </div>
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${location.pathname === item.path
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
              >
                <item.icon className="h-5 w-5 mr-1.5" />
                {item.name}
              </Link>
            ))}

            {/* About Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${aboutNavItems.some(item => location.pathname === item.path)
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
              >
                <QuestionMarkCircleIcon className="h-5 w-5 mr-1.5" />
                More Info
                <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {aboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-48 bg-gradient-to-br from-gray-900 to-zinc-900 rounded-md shadow-lg py-1 z-10 border   border-white/10  "
                  >
                    {aboutNavItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setAboutDropdownOpen(false)}
                        className={`flex items-center px-4 py-2 text-sm ${location.pathname === item.path
                            ? 'bg-purple-50 text-purple-600'
                            : 'text-gray-500 hover:bg-gray-100'
                          }`}
                      >
                        <item.icon className="h-5 w-5 mr-3" />
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg md:hidden"
          >
            <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
              <span className="text-lg font-semibold text-gray-900">
                Menu
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="py-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center px-4 py-3 text-gray-700 ${location.pathname === item.path
                      ? 'bg-purple-50 text-purple-600'
                      : 'hover:bg-gray-100'
                    }`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              ))}

              {/* Mobile About Dropdown */}
              <div className="border-t border-gray-200 mt-2 pt-2">
                <div
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  className={`flex items-center px-4 py-3 text-gray-700 cursor-pointer ${aboutNavItems.some(item => location.pathname === item.path)
                      ? 'bg-purple-50 text-purple-600'
                      : 'hover:bg-gray-100'
                    }`}
                >
                  <InformationCircleIcon className="h-5 w-5 mr-3" />
                  About
                  <ChevronDownIcon className={`ml-auto h-4 w-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
                </div>

                <AnimatePresence>
                  {aboutDropdownOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      {aboutNavItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => {
                            setAboutDropdownOpen(false);
                            setMobileMenuOpen(false);
                          }}
                          className={`flex items-center px-8 py-2 text-sm ${location.pathname === item.path
                              ? 'bg-purple-50 text-purple-600'
                              : 'text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                          <item.icon className="h-4 w-4 mr-3" />
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;