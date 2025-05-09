import { Key, UserCircle, Info, Mail } from "lucide-react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Column */}
          <div className="col-span-2">
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

            <p className="text-gray-400 text-sm max-w-xs">
              Secure tools for the modern web
            </p>
          </div>

          {/* Tools Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Tools
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/PasswordGenerator"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2"
                >
                  <Key className="h-3.5 w-3.5" />
                  Password Generator
                </Link>
              </li>
              <li>
                <Link
                  to="/bioScripto"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors flex items-center gap-2"
                >
                  <UserCircle className="h-3.5 w-3.5" />
                  Bio Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-amber-400 text-sm transition-colors flex items-center gap-2"
                >
                  <Info className="h-3.5 w-3.5" />
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-400 hover:text-rose-400 text-sm transition-colors flex items-center gap-2"
                >
                  <Mail className="h-3.5 w-3.5" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-3 md:mb-0">
            © {new Date().getFullYear()} CUSTOPHI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-white text-xs transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
