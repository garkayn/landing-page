import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-neutral-800 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-lg font-bold mb-4">Orion</h2>
          <p className="text-neutral-400 mb-4">
            Expanding human presence beyond Earth —
            unlocking the future of interplanetary travel.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="X">
              <img
                src="/assets/twitter.svg"
                alt="X"
                className="w-5 h-5 hover:opacity-75"
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img
                src="/assets/linkedin.svg"
                alt="LinkedIn"
                className="w-5 h-5 hover:opacity-75"
              />
            </a>
            <a href="#" aria-label="Discord">
              <img
                src="/assets/discord.svg"
                alt="Discord"
                className="w-5 h-5 hover:opacity-75"
              />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Product</h3>
          <ul className="space-y-1 text-neutral-400">
            <li><a href="#">Mission Overview</a></li>
            <li><a href="#">Launch Schedule</a></li>
            <li><a href="#">Technology</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-neutral-400">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-neutral-400">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Data Usage</a></li>
          </ul>
        </div>

      </div>
      <div className="text-center text-neutral-600 text-sm mt-8">
        © {new Date().getFullYear()} Orion Space Company — All rights reserved.
      </div>
    </footer>
  );
}
