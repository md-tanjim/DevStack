import logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div>
            <footer className="px-24 py-16 mt-30 border-t border-t-gray-200">

      {/* Top Section */}
      <div className="flex justify-between">

        {/* Brand */}
        <div className="max-w-sm">
          <img src={logo} alt="" className="h-10" />

          <p className="mt-4 text-gray-500">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          <ul className="flex gap-6 mt-8 font-semibold text-gray-600">
            <li>GitHub</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-bold text-gray-800">PRODUCT</h3>

          <ul className="mt-5 space-y-3 text-gray-500">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-gray-800">COMPANY</h3>

          <ul className="mt-5 space-y-3 text-gray-500">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold text-gray-800">LEGAL</h3>

          <ul className="mt-5 space-y-3 text-gray-500">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t mt-14 pt-8 flex justify-between text-sm text-gray-400">
        <p>© 2026 DevStack. All rights reserved.</p>

        <ul className="flex gap-8">
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </div>

    </footer>
        </div>
    );
};

export default Footer;