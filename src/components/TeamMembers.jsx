const teamMembers = [
  {
    id: 1,
    name: "Favour Ifechukwu",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Egwi Kelvin",
    role: "Back End Developer",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 3,
    name: "Samuel Ola",
    role: "Back End Developer",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 4,
    name: "Adetola Olamide",
    role: "Data Scientist",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    id: 5,
    name: "Tofunmi Emmanuel",
    role: "Product Designer",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: 6,
    name: "Lawal Olanrewaju",
    role: "Cybersecurity Analyst",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 7,
    name: "Ogah Emmanuella",
    role: "Product Designer",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    id: 8,
    name: "Apochi Godwin",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 9,
    name: "Nwaji Hope",
    role: "Digital Marketer",
    image: "https://randomuser.me/api/portraits/women/71.jpg",
  },
];

function TeamMembers() {
  return (
    <section className="relative overflow-hidden bg-[#163527] py-10 sm:py-14">

      <div
        className="absolute -bottom-20 -right-20 h-72 w-72 rotate-12 rounded-[3rem] bg-[#f2a93b]/90"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6">

        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-[#f2a93b]" />
          Team Members
        </span>

        <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-4">
          {teamMembers.map((member) => (
            <article key={member.id} className="group">

              <div className="overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mt-2">
                <h3 className="text-sm font-semibold text-white">
                  {member.name}
                </h3>

                <p className="mt-0.5 text-xs text-white/50">
                  {member.role}
                </p>
              </div>

            </article>
          ))}
        </div>

        <p className="mt-7 text-sm font-semibold text-white">
          Meet our team members
        </p>

      </div>
    </section>
  );
}

export default TeamMembers;