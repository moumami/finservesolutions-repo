import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [contactStatus, setContactStatus] = useState('');

  const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';

  // Fetch data from backend APIs
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch projects
        const projectsResponse = await fetch(`${API_BASE_URL}/api/projects`);
        if (projectsResponse.ok) {
          const projectsData = await projectsResponse.json();
          setProjects(projectsData);
        }

        // Fetch blog posts
        const blogResponse = await fetch(`${API_BASE_URL}/api/blog`);
        if (blogResponse.ok) {
          const blogData = await blogResponse.json();
          setBlogPosts(blogData);
        }

        // Fetch services
        const servicesResponse = await fetch(`${API_BASE_URL}/api/services`);
        if (servicesResponse.ok) {
          const servicesData = await servicesResponse.json();
          setServices(servicesData);
        }

      } catch (error) {
        console.error('Error fetching data:', error);
        // Fallback to mock data if API fails
        setProjects([
          {
            id: "1",
            title: "Cybersecurity Platform",
            description: "Advanced threat detection system with AI-powered analysis",
            tech: ["React", "Python", "TensorFlow", "AWS"],
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5fGVufDB8fHxibGFja3wxNzUyNDA4ODE4fDA&ixlib=rb-4.1.0&q=85"
          }
        ]);
        setBlogPosts([
          {
            id: "1",
            title: "The Future of Cybersecurity in 2025",
            excerpt: "Exploring emerging threats and cutting-edge protection strategies",
            date: "2025-03-15",
            read_time: "5 min read"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_BASE_URL]);

  // Handle contact form submission
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactStatus('sending');
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm)
      });

      if (response.ok) {
        setContactStatus('success');
        setContactForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setContactStatus(''), 3000);
      } else {
        setContactStatus('error');
        setTimeout(() => setContactStatus(''), 3000);
      }
    } catch (error) {
      console.error('Error sending contact message:', error);
      setContactStatus('error');
      setTimeout(() => setContactStatus(''), 3000);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const servicesData = [
    {
      icon: "🛡️",
      title: "Cybersécurité",
      description: "Protection avancée contre les menaces numériques avec analyse IA",
      features: ["Détection d'intrusion", "Audit de sécurité", "Formation équipes"]
    },
    {
      icon: "☁️",
      title: "Cloud Computing",
      description: "Solutions cloud scalables et sécurisées pour votre entreprise",
      features: ["Migration cloud", "Architecture microservices", "DevOps"]
    },
    {
      icon: "🤖",
      title: "Intelligence Artificielle",
      description: "Intégration d'IA pour automatiser et optimiser vos processus",
      features: ["Machine Learning", "Analyse prédictive", "Chatbots intelligents"]
    },
    {
      icon: "⚡",
      title: "Développement Web",
      description: "Applications web modernes, rapides et responsive",
      features: ["React/Vue.js", "APIs REST", "Applications mobiles"]
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDarkMode ? 'dark bg-black text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">FS</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                FinServeSolutions
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'services', 'portfolio', 'blog', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-blue-400 ${
                    activeSection === item ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item === 'home' ? 'Accueil' : 
                   item === 'services' ? 'Services' :
                   item === 'portfolio' ? 'Portfolio' :
                   item === 'blog' ? 'Blog' : 'Contact'}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`bg-white block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800 animate-fade-in">
              <div className="px-4 py-4 space-y-4">
                {['home', 'services', 'portfolio', 'blog', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item === 'home' ? 'Accueil' : 
                     item === 'services' ? 'Services' :
                     item === 'portfolio' ? 'Portfolio' :
                     item === 'blog' ? 'Blog' : 'Contact'}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5fGVufDB8fHxibGFja3wxNzUyNDA4ODEwfDA&ixlib=rb-4.1.0&q=85"
            alt="Technology Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              FinServeSolutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
            Votre partenaire technologique pour l'avenir numérique
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto animate-slide-up-delayed">
            Solutions innovantes en cybersécurité, cloud computing, intelligence artificielle et développement web. 
            Nous transformons vos défis technologiques en opportunités de croissance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delayed">
            <button 
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Découvrir nos services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-blue-400 hover:bg-blue-400/10 transform hover:scale-105 transition-all duration-300"
            >
              Nous contacter
            </button>
          </div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Nos Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Des solutions technologiques de pointe pour propulser votre entreprise vers le futur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(services.length > 0 ? services : servicesData).map((service, index) => (
              <div 
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl border border-gray-700 hover:border-blue-500/50"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features && service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Découvrez nos réalisations les plus innovantes et les technologies que nous maîtrisons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-800/80 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl border border-gray-700 hover:border-blue-500/50"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Blog Technique
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Restez à jour avec les dernières tendances technologiques et nos expertises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl border border-gray-700 hover:border-blue-500/50 cursor-pointer"
              >
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {post.excerpt}
                </p>
                <div className="mt-4">
                  <span className="text-blue-400 text-sm font-semibold group-hover:text-blue-300 transition-colors duration-300">
                    Lire la suite →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Contactez-nous
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Prêt à transformer votre vision technologique en réalité ? Parlons de votre projet !
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📧</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-gray-400">contact@finservesolutions.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📱</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Téléphone</h3>
                  <p className="text-gray-400">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Adresse</h3>
                  <p className="text-gray-400">123 Avenue de la Technologie<br />75001 Paris, France</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                />
              </div>
              <input
                type="text"
                placeholder="Sujet"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
              />
              <textarea
                rows="6"
                placeholder="Votre message"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">FS</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  FinServeSolutions
                </span>
              </div>
              <p className="text-gray-400 max-w-md">
                Votre partenaire technologique de confiance pour l'innovation et la transformation numérique.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Cybersécurité</li>
                <li>Cloud Computing</li>
                <li>Intelligence Artificielle</li>
                <li>Développement Web</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contact@finservesolutions.com</li>
                <li>+33 1 23 45 67 89</li>
                <li>Paris, France</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FinServeSolutions. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;