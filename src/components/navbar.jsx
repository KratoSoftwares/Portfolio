import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
    { to: "/team", label: "Team" },
    { to: "/intern", label: "Internship" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#163527] text-white">
      <nav className="mx-auto flex h-12 w-full max-w-6xl items-center justify-between px-5 py-2 sm:px-3 sm:py-2">
        <Link to="/" className="text-lg font-extrabold tracking-tight">
          Kratos<span className="text-[#f2a93b]">.</span>
        </Link>
        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-xs font-medium transition-colors ${
                  
                  isActive ? "text-[#f2a93b]" : "text-white/75 hover:text-white"

                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          
        </div>

        {/* Mobile button */}
        <button
          className="flex h-4 w-6 flex-col justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-full bg-white transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-full bg-white transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-full bg-white transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 px-5 pb-5 md:hidden">
          <div className="flex flex-col gap-1 pt-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                `text-xs font-medium transition-colors ${
                  isActive
                    ? "text-[#f2a93b]"
                    : "text-white/75 hover:text-white"
                }`
              }
              >
                {link.label}
              </NavLink>
            ))}

            
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
