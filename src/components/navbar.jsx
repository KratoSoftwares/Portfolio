import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/intern", label: "Internship" },
    { to: "/team", label: "Team" },
    { to: "/contact", label: "Contact us" },
  ];

  return (
    <header className="sticky top-0 p-2 z-50 bg-[#faf8f3] text-[#163527]">
      <nav className="mx-auto flex h-12 w-full  items-center justify-between px-5 py-2 sm:px-3 sm:py-2">
        <Link to="/" className="flex items-center w-fit">
          <img
            src={logo}
            alt="Kratos Software Technologies"
            className="h-10 w-auto object-contain"
          />

          <div className="flex flex-col  items-baseline -ml-1">
            <span className="text-[#163527] text-[20px] font-bold tracking-[1px] leading-none">
              ratos
            </span>
            <span className="text-[#163527] text-[10px] font-medium tracking-[3px] leading-none mt-1">
              SOFTWARE TECHNOLOGIES
            </span>
          </div>
        </Link>
        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium tracking-widest bordertransition-colors ${
                  isActive
                    ? "border-b-2 border-b-[#f2a93b]"
                    : "text-[#163527] hover:text-[#f2a93b]"
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
            className={`h-0.5 w-full bg-[#163527] transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-full bg-[#163527] transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-full bg-[#163527] transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 px-5 pb-5 md:hidden">
          <div className="flex flex-col gap-3 pt-3 text-sm">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-xs font-medium transition-colors ${
                    isActive
                      ? "text-[#f2a93b]"
                      : "text-[#163527] hover:text-[#f2a93b]"
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
