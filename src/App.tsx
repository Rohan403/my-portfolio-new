import React, { useState, useEffect } from "react";
import { Mail, MapPin, Linkedin, Github, Phone, Menu, X } from "lucide-react";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleOutsideClick = (e: any) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.addEventListener("click", handleOutsideClick);
    } else {
      document.body.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-300">
      <ParticleBackground />
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed w-full bg-[#0a192f]/90 backdrop-blur-sm z-50 px-4 sm:px-8 py-4 border-b border-gray-800">
          <div className="container mx-auto flex justify-between items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#64ffda] overflow-hidden">
              <img
                src="https://niladripalportfolio.netlify.app/assets/profileimage-DWmHrxbV.jpeg"
                alt="Niladri Pal"
                className="w-full h-full object-cover cursor-pointer"
                onClick={openModal}
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#64ffda]"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              <a href="#about" className="hover:text-[#64ffda] transition-colors">About</a>
              <a href="#experience" className="hover:text-[#64ffda] transition-colors">Experience</a>
              <a href="#education" className="hover:text-[#64ffda] transition-colors">Education</a>
              <a href="#skills" className="hover:text-[#64ffda] transition-colors">Skills</a>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="absolute top-full right-0 w-full bg-[#112240] md:hidden py-4 px-4 border-b border-gray-800">
                <div className="flex flex-col gap-4">
                  <a href="#about" className="hover:text-[#64ffda] transition-colors" onClick={toggleMenu}>About</a>
                  <a href="#experience" className="hover:text-[#64ffda] transition-colors" onClick={toggleMenu}>Experience</a>
                  <a href="#education" className="hover:text-[#64ffda] transition-colors" onClick={toggleMenu}>Education</a>
                  <a href="#skills" className="hover:text-[#64ffda] transition-colors" onClick={toggleMenu}>Skills</a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center px-4 sm:px-8 pt-20">
          <div className="container mx-auto">
            <p className="text-[#64ffda] mb-4">Hi, my name is</p>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-200 mb-4">Niladri Pal.</h1>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-400 mb-6">I build things for the web.</h2>
            <p className="max-w-2xl text-gray-400 mb-8 text-base sm:text-lg">Full Stack Developer building websites and web applications using ReactJS, NextJS, and modern JavaScript tools. Experienced in developing effective solutions and productive relationships.</p>
            <div className="flex flex-wrap gap-4 sm:gap-6 mb-12">
              <a href="mailto:niladripal160@gmail.com" target="_blank" className="flex items-center gap-2 border border-[#64ffda] text-[#64ffda] px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-[#64ffda]/10 transition-colors text-sm sm:text-base">
                <Mail size={20} />
                Contact Me
              </a>
              <a href="https://github.com/Rohan403" target="_blank" className="flex items-center gap-2 border border-[#64ffda] text-[#64ffda] px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-[#64ffda]/10 transition-colors text-sm sm:text-base">
                <Github size={20} />
                GitHub
              </a>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 text-gray-400 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <Phone size={20} className="text-[#64ffda]" />
                <a href="tel:+919556903109" target="_blank" className="hover:text-[#64ffda] transition-colors">
                  Phone
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} className="text-[#64ffda]" />
                <span className="break-all">niladripal160@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-[#64ffda]" />
                <span>Bengaluru</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={20} className="text-[#64ffda]" />
                <a href="https://www.linkedin.com/in/niladri-pal-670480213/" target="_blank" className="hover:text-[#64ffda] transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 sm:px-8">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-gray-200 flex items-center gap-4">
              <span className="text-[#64ffda]">02.</span> Experience
            </h2>

            {/* Current Position */}
            <div className="mb-12 border-l-2 border-[#64ffda] pl-4 sm:pl-8">
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-200">Full Stack Developer</h3>
                <p className="text-[#64ffda]">Octopus Technologies</p>
                <p className="text-gray-400">06/2024 - Present • Surat, Gujarat</p>
              </div>
              <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
                <li className="flex gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>Architected and implemented responsive web applications using React.js, achieving 99.9% uptime and reducing page load time by 40%</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>Developed and maintained scalable RESTful APIs using Node.js and Express.js, handling 1M+ daily requests</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>Implemented OAuth 2.0 and JWT authentication, enhancing application security</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>Led the migration from monolithic to microservices architecture</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>Optimized database queries and implemented Redis caching</span>
                </li>
              </ul>
            </div>

            {/* Previous Position */}
            <div className="border-l-2 border-[#64ffda] pl-4 sm:pl-8">
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-200">Software Developer Engineer</h3>
                <p className="text-[#64ffda]">Nettantra Technologies</p>
                <p className="text-gray-400">03/2022 - 04/2024 • Bhubaneswar, Odisha</p>
              </div>
              <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
                <li className="flex gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>Developed and maintained 15+ React applications using Redux for state management</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>Implemented CI/CD pipelines using Jenkins and Docker</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>Optimized React application performance through code splitting and lazy loading</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  <span>Integrated third-party APIs and payment gateways</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4 sm:px-8 bg-[#112240]">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-gray-200 flex items-center gap-4">
              <span className="text-[#64ffda]">03.</span> Education
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="border-l-2 border-[#64ffda] pl-4 sm:pl-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-200">Bachelor of Technology in Computer Science and Technology</h3>
                <p className="text-[#64ffda]">Sambalpur University Institute of Information and Technology</p>
                <p className="text-gray-400">07/2018 - 04/2022 • Burla, Sambalpur</p>
                <p className="text-gray-400 mt-2">CGPA: 7.8/10</p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1186&q=80"
                  alt="University Campus"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-8">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-gray-200 flex items-center gap-4">
              <span className="text-[#64ffda]">04.</span> Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              <div
                className="bg-[#112240] p-4 sm:p-6 rounded-lg hover:translate-y-[-5px] transition-all duration-300 cursor-pointer relative group"
                onMouseEnter={() => setActiveSkill('programming')}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#64ffda]">Programming Languages</h3>
                  <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                    <li className="flex gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      JavaScript (ES6+)
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      TypeScript
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      HTML5 & CSS3
                    </li>
                  </ul>
                </div>
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                    alt="Programming"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div
                className="bg-[#112240] p-4 sm:p-6 rounded-lg hover:translate-y-[-5px] transition-all duration-300 cursor-pointer relative group"
                onMouseEnter={() => setActiveSkill('frameworks')}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#64ffda]">Frameworks & Libraries</h3>
                  <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                    <li className="flex gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      React.js
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      Next.js
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      Node.js & Express.js
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      Vue.js
                    </li>
                  </ul>
                </div>
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Frameworks"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div
                className="bg-[#112240] p-4 sm:p-6 rounded-lg hover:translate-y-[-5px] transition-all duration-300 cursor-pointer relative group"
                onMouseEnter={() => setActiveSkill('ui')}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#64ffda]">State Management & UI</h3>
                  <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                    <li className="flex gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      Redux
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      Context API
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      Material UI
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      Tailwind CSS
                    </li>
                  </ul>
                </div>
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                    alt="UI Design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div
                className="bg-[#112240] p-4 sm:p-6 rounded-lg hover:translate-y-[-5px] transition-all duration-300 cursor-pointer relative group"
                onMouseEnter={() => setActiveSkill('database')}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#64ffda]">Database & Tools</h3>
                  <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                    <li className="flex gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      MongoDB
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      Git
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      Docker
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      Jenkins
                    </li>
                  </ul>
                </div>
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1021&q=80"
                    alt="Database"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div
                className="bg-[#112240] p-4 sm:p-6 rounded-lg hover:translate-y-[-5px] transition-all duration-300 cursor-pointer relative group"
                onMouseEnter={() => setActiveSkill('testing')}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#64ffda]">Testing & Performance</h3>
                  <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                    <li className="flex gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      Jest
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      React Testing Library
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      Cypress
                    </li>
                  </ul>
                </div>
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80"
                    alt="Testing"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div
                className="bg-[#112240] p-4 sm:p-6 rounded-lg hover:translate-y-[-5px] transition-all duration-300 cursor-pointer relative group"
                onMouseEnter={() => setActiveSkill('cloud')}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-[#64ffda]">Cloud & DevOps</h3>
                  <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                    <li className="flex gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      RESTful APIs
                    </li>
                  </ul>
                </div>
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
                    alt="Cloud"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0a192f] text-gray-400 py-8 border-t border-gray-800">
          <div className="container mx-auto px-4 text-center text-sm sm:text-base">
            <p>Designed & Built by Niladri Pal</p>
          </div>
        </footer>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 modal-overlay p-4">
          <div className="bg-transparent rounded-md max-w-full">
            <img
              src="https://niladripalportfolio.netlify.app/assets/profileimage-DWmHrxbV.jpeg"
              alt="Niladri Pal"
              className="w-full max-w-[500px] h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;