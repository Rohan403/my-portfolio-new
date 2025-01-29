import React, { useState, useEffect } from "react";
import { Mail, MapPin, Linkedin, Github, Phone } from "lucide-react";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  // Close modal if clicked outside
  const handleOutsideClick = (e: any) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  // Attach event listener on mount and remove on unmount
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
        <nav className="fixed w-full bg-[#0a192f]/90 backdrop-blur-sm z-50 px-8 py-4 border-b border-gray-800">
          <div className="container mx-auto flex justify-between items-center">
            <div className="w-12 h-12 rounded-full border-2 border-[#64ffda] overflow-hidden">
              <img
                src="https://niladripalportfolio.netlify.app/assets/profileimage-DWmHrxbV.jpeg"
                alt="Niladri Pal"
                className="w-full h-full object-cover cursor-pointer"
                onClick={openModal} // Open modal when image is clicked
              />
            </div>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-[#64ffda] transition-colors">
                About
              </a>
              <a href="#experience" className="hover:text-[#64ffda] transition-colors">
                Experience
              </a>
              <a href="#education" className="hover:text-[#64ffda] transition-colors">
                Education
              </a>
              <a href="#skills" className="hover:text-[#64ffda] transition-colors">
                Skills
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center px-8 pt-20">
          <div className="container mx-auto">
            <p className="text-[#64ffda] mb-4">Hi, my name is</p>
            <h1 className="text-6xl font-bold text-gray-200 mb-4">Niladri Pal.</h1>
            <h2 className="text-5xl font-bold text-gray-400 mb-6">I build things for the web.</h2>
            <p className="max-w-2xl text-gray-400 mb-8 text-lg">Full Stack Developer building websites and web applications using ReactJS, NextJS, and modern JavaScript tools. Experienced in developing effective solutions and productive relationships.</p>
            <div className="flex gap-6 mb-12">
              <a href="mailto:niladripal160@gmail.com" className="flex items-center gap-2 border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded hover:bg-[#64ffda]/10 transition-colors">
                <Mail size={20} />
                Contact Me
              </a>
              <a href="#" className="flex items-center gap-2 border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded hover:bg-[#64ffda]/10 transition-colors">
                <Github size={20} />
                GitHub
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={20} className="text-[#64ffda]" />
                <span>+91 9556903109</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} className="text-[#64ffda]" />
                <span>niladripal160@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-[#64ffda]" />
                <span>Bengaluru</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={20} className="text-[#64ffda]" />
                <a href="#" className="hover:text-[#64ffda] transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-200 flex items-center gap-4">
              <span className="text-[#64ffda]">02.</span> Experience
            </h2>

            {/* Current Position */}
            <div className="mb-12 border-l-2 border-[#64ffda] pl-8">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-200">Full Stack Developer</h3>
                <p className="text-[#64ffda]">Octopus Technologies</p>
                <p className="text-gray-400">06/2024 - Present • Surat, Gujarat</p>
              </div>
              <ul className="space-y-3 text-gray-400">
                <li className="flex gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  Architected and implemented responsive web applications using React.js, achieving 99.9% uptime and reducing page load time by 40%
                </li>
                <li className="flex gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  Developed and maintained scalable RESTful APIs using Node.js and Express.js, handling 1M+ daily requests
                </li>
                <li className="flex gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  Implemented OAuth 2.0 and JWT authentication, enhancing application security
                </li>
                <li className="flex gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  Led the migration from monolithic to microservices architecture
                </li>
                <li className="flex gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  Optimized database queries and implemented Redis caching
                </li>
              </ul>
            </div>

            {/* Previous Position */}
            <div className="border-l-2 border-[#64ffda] pl-8">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-200">Software Developer Engineer</h3>
                <p className="text-[#64ffda]">Nettantra Technologies</p>
                <p className="text-gray-400">03/2022 - 04/2024 • Bhubaneswar, Odisha</p>
              </div>
              <ul className="space-y-3 text-gray-400">
                <li className="flex gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  Developed and maintained 15+ React applications using Redux for state management
                </li>
                <li className="flex gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  Implemented CI/CD pipelines using Jenkins and Docker
                </li>
                <li className="flex gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  Optimized React application performance through code splitting and lazy loading
                </li>
                <li className="flex gap-2">
                  <span className="text-[#64ffda]">▹</span>
                  Integrated third-party APIs and payment gateways
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-8 bg-[#112240]">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-200 flex items-center gap-4">
              <span className="text-[#64ffda]">03.</span> Education
            </h2>
            <div className="border-l-2 border-[#64ffda] pl-8">
              <h3 className="text-xl font-bold text-gray-200">Bachelor of Technology in Computer Science and Technology</h3>
              <p className="text-[#64ffda]">Sambalpur University Institute of Information and Technology</p>
              <p className="text-gray-400">07/2018 - 04/2022 • Burla, Sambalpur</p>
              <p className="text-gray-400 mt-2">CGPA: 7.8/10</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-gray-200 flex items-center gap-4">
              <span className="text-[#64ffda]">04.</span> Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#112240] p-6 rounded-lg hover:translate-y-[-5px] transition-transform">
                <h3 className="text-xl font-bold mb-4 text-[#64ffda]">Programming Languages</h3>
                <ul className="space-y-2 text-gray-400">
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
              <div className="bg-[#112240] p-6 rounded-lg hover:translate-y-[-5px] transition-transform">
                <h3 className="text-xl font-bold mb-4 text-[#64ffda]">Frameworks & Libraries</h3>
                <ul className="space-y-2 text-gray-400">
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
              <div className="bg-[#112240] p-6 rounded-lg hover:translate-y-[-5px] transition-transform">
                <h3 className="text-xl font-bold mb-4 text-[#64ffda]">State Management & UI</h3>
                <ul className="space-y-2 text-gray-400">
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
              <div className="bg-[#112240] p-6 rounded-lg hover:translate-y-[-5px] transition-transform">
                <h3 className="text-xl font-bold mb-4 text-[#64ffda]">Database & Tools</h3>
                <ul className="space-y-2 text-gray-400">
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
              <div className="bg-[#112240] p-6 rounded-lg hover:translate-y-[-5px] transition-transform">
                <h3 className="text-xl font-bold mb-4 text-[#64ffda]">Testing & Performance</h3>
                <ul className="space-y-2 text-gray-400">
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
              <div className="bg-[#112240] p-6 rounded-lg hover:translate-y-[-5px] transition-transform">
                <h3 className="text-xl font-bold mb-4 text-[#64ffda]">Cloud & DevOps</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex gap-2">
                    <span className="text-[#64ffda]">▹</span>
                    RESTful APIs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-[#0a192f] text-gray-400 py-8 border-t border-gray-800">
          <div className="container mx-auto px-4 text-center">
            <p>Designed & Built by Niladri Pal</p>
          </div>
        </footer>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 modal-overlay">
          <div className="bg-transparent p-4 rounded-md">
            <img src="https://niladripalportfolio.netlify.app/assets/profileimage-DWmHrxbV.jpeg" alt="Niladri Pal" className="w-[500px] h-full object-cover" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
