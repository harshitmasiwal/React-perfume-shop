import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons'; // Add more icons as needed

function Footer() {
  return (
    <footer className="bg-zinc-900 text-white p-10">
        <hr></hr>
      <div className="container mt-10 w-full mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          
          {/* Column 1 - Company Info */}
          <div>
            <h4 className="text-xl  text-emerald-300 font-bold tracking-tight leading-none mb-4 ">Company</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-yellow-400 transition">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-xl  text-emerald-300 font-bold tracking-tight leading-none mb-4 ">Quick Links</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-blue-400 transition">Shop</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">FAQ</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">Support</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div>
            <h4 className="text-xl  text-emerald-300 font-bold tracking-tight leading-none mb-4 ">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:scale-105 transition">
                <Facebook size={30} />
              </a>
              <a href="https://twitter.com" className="hover:scale-105 transition">
                <Twitter size={30} />
              </a>
              <a href="https://instagram.com" className="hover:scale-105 transition">
                <Instagram size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">© All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
