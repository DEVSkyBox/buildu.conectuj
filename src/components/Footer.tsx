
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/conectuj_logo1-removebg-preview.png" 
                alt="BuildU Logo" 
                className="h-20 w-27 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold text-white">BuildU</h3>
                <p className="text-xs text-gray-400">Building for Universities</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We build for the Universe, We build for Universities, We build for you. 
              Creating digital solutions that bring university communities together.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">ConectUJ</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Marketplace</li>
              <li>Campus Updates</li>
              <li>Business Promotion</li>
              <li>Campus Directory</li>
              <li>Student Verification</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>build.u123@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+234 701 919 2799</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Plateau, Nigeria.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BuildU. All rights reserved. | Building the future of university communities.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
