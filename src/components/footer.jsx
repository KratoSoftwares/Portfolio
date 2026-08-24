import { Link } from "react-router-dom";

function Footer() {
  const links = [
    { to: "/projects", label: "Work" },
    { to: "/about", label: "About" },
    { to: "/team", label: "Team" },
    { to: "/intern", label: "Internship" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-[#163527] px-2 text-white">

      <div className="mx-auto w-full  px-5 py-2 sm:px-6">

        <div className="flex flex-col gap-5 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <Link
              to="/"
              className="text-xs font-extrabold tracking-tight"
            >
              Team Kratos
            </Link>

            <p className="mt-1 text-sm text-white/50">
              Lagos, Nigeria.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">

            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="mailto:Kratosoftwares@gmail.com"
              className="font-medium text-[#f2a93b] transition-colors hover:text-[#ffc45c]"
            >
              Kratosoftwares@gmail.com
            </a>

          </div>

        </div>

        <p className="pt-4 text-center text-xs text-white/30">
          © 2026. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;