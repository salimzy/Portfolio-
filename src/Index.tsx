import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Code, Briefcase, User, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'PHP', level: 85 },
    { name: 'Laravel', level: 82 },
    { name: 'Vue.js', level: 80 },
    { name: 'Livewire', level: 78 },
    { name: 'Alpine.js', level: 75 },
    { name: 'jQuery', level: 85 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Saliman Adekunle
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Home</a>
                <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">About</a>
                <a href="#skills" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Skills</a>
                <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Projects</a>
                <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300">About</a>
              <a href="#skills" className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300">Skills</a>
              <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300">Projects</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center mb-8">
              <Code size={48} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Saliman</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Full-Stack Developer with 4-5 years of experience crafting beautiful, functional web applications
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              View My Work
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-full font-medium hover:bg-purple-400 hover:text-white transition-all duration-300">
              Download CV
            </button>
          </div>

          <div className="animate-bounce">
            <ChevronDown size={32} className="text-purple-400 mx-auto" />
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-pink-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-blue-500/20 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Passionate developer dedicated to creating exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <User className="text-purple-400" size={32} />
                <h3 className="text-2xl font-semibold text-white">Professional Journey</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                With 4-5 years of hands-on experience in web development, I specialize in creating robust, 
                scalable applications using modern technologies. My expertise spans both frontend and backend 
                development, allowing me to deliver complete solutions.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                I'm passionate about clean code, user experience, and staying up-to-date with the latest 
                industry trends. Whether it's building dynamic interfaces with Vue.js or crafting powerful 
                backend systems with Laravel, I approach every project with dedication and attention to detail.
              </p>

              <div className="flex space-x-4 mt-8">
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Experience</span>
                  <span className="text-purple-400 font-semibold">4-5 Years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Projects Completed</span>
                  <span className="text-purple-400 font-semibold">50+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Technologies Mastered</span>
                  <span className="text-purple-400 font-semibold">9+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Happy Clients</span>
                  <span className="text-purple-400 font-semibold">30+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies and frameworks I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-purple-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my recent work and contributions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                  <Briefcase size={48} className="text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Project {project}</h3>
                  <p className="text-gray-400 mb-4">
                    A comprehensive web application built with Laravel, Vue.js, and modern frontend technologies.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">Laravel</span>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">Vue.js</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-sm">PHP</span>
                  </div>
                  <button className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                    View Project →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can work together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
              <Mail size={20} />
              <span>Get In Touch</span>
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-medium hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
              <Github size={20} />
              <span>View GitHub</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Saliman Adekunle. Crafted with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  );
}
