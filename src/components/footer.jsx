import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
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
    <footer className="bg-[#faf8f3] px-2 text-white">
      <div className="mx-auto w-full  px-5 py-8 sm:px-6">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-6 sm:flex-row sm:justify-between">
          <div>
            <Link
              to="/"
              className="flex flex-col border-b-2 border-b-[#f2b632] py-2 w-fit"
            >
              <div className="flex items-baseline">
                <img
                  src={logo}
                  alt="Kratos Software Technologies"
                  className="h-10 w-auto object-contain"
                />
                <span className="text-[#204d2f] align-text-bottom text-[20px] font-bold tracking-[1px] -ml-1">
                  ratos
                </span>
              </div>

              <span className="text-[#204d2f] text-[10px] font-bold uppercase tracking-[1px]">
                Software Technologies
              </span>
            </Link>

            <p className="mt-2 text-xs text-[#11361e]">Lagos, Nigeria.</p>

            <p className="mt-1 text-xs text-[#11361e]">
              Ship Fast. Build Secure. Teach Well. Own the Outcome.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:items-start">
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm sm:justify-end">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[#204d2f] transition-colors hover:text-[#ffc45c]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <a
              href="mailto:Kratosoftwares@gmail.com"
              className="text-sm max-w-fit font-medium text-[#11361e] border-b border-b-[#f2b632] transition-colors hover:text-[#ffc45c]"
            >
              Kratosoftwares@gmail.com
            </a>
            <p className="pt-4 text-center text-xs text-[#11361e]">
              © 2026 Kratos Software Technologies. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
