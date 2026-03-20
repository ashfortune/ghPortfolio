import React, { useState, useEffect } from 'react';
import { 
  Scale, 
  PlayCircle, 
  Github, 
  Mail,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  UserCheck
} from 'lucide-react';
import { projects } from './data/projects';

const Navbar = ({ projects, activeProject, setActiveProject }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-20 flex items-center glass z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Scale className="text-primary" size={32} />
          <span>My Portfolio</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
            {projects.map((proj) => (
              <button
                key={proj.id}
                onClick={() => setActiveProject(proj)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeProject.id === proj.id 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'text-text-muted hover:text-white'
                }`}
              >
                {proj.title}
              </button>
            ))}
          </div>
          <ul className="flex gap-6 font-medium text-sm">
            <li><button onClick={() => setActiveProject(null)} className={`hover:text-primary ${!activeProject ? 'text-primary' : ''}`}>Home</button></li>
            <li><a href="#features" className="hover:text-primary">Features</a></li>
            <li><a href="#tech-stack" className="hover:text-primary">Tech</a></li>
          </ul>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-bg-dark/95 backdrop-blur-xl border-b border-white/10 md:hidden animate-fade-in">
          <div className="p-6 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Navigation</span>
              <button
                onClick={() => { setActiveProject(null); setIsOpen(false); }}
                className={`text-left px-4 py-3 rounded-lg flex items-center justify-between ${
                  !activeProject ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-white/5 border border-white/5'
                }`}
              >
                Home
                {!activeProject && <ChevronRight size={16} />}
              </button>
              
              <span className="text-xs font-bold text-text-muted uppercase tracking-wider mt-4">Projects</span>
              {projects.map((proj) => (
                <button
                  key={proj.id}
                  onClick={() => { setActiveProject(proj); setIsOpen(false); }}
                  className={`text-left px-4 py-3 rounded-lg flex items-center justify-between ${
                    activeProject?.id === proj.id ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-white/5 border border-white/5'
                  }`}
                >
                  {proj.title}
                  {activeProject?.id === proj.id && <ChevronRight size={16} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const FeatureItem = ({ icon: Icon, title, description, videoSrc, poster, reverse }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Reset play state when videoSrc changes
  useEffect(() => {
    setIsPlaying(false);
  }, [videoSrc]);

  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 mb-32 animate-fade-in-up`}>
      <div className="flex-1">
        <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center rounded-2xl mb-6">
          <Icon size={32} />
        </div>
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <p className="text-text-muted text-lg leading-relaxed">{description}</p>
      </div>
      <div className="flex-1 w-full">
        <div className="relative aspect-video bg-bg-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
          <video 
            key={videoSrc} // Force key to re-render video tag when src changes
            className="w-full h-full object-cover"
            controls={isPlaying}
            autoPlay
            muted
            loop
            playsInline
            poster={poster}
            onPlay={() => setIsPlaying(true)}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          
          {!isPlaying && false && (
            <div 
              className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center cursor-pointer group-hover:bg-black/20 transition-all"
              onClick={() => setIsPlaying(true)}
            >
              <PlayCircle className="text-white mb-4 group-hover:scale-110 transition-transform" size={64} />
              <span className="text-white font-medium text-center px-4">
                시연 영상 재생<br/>
                <span className="text-xs opacity-60">({videoSrc.split('/').pop()})</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [activeProject, setActiveProject] = useState(null); // Default to Home

  return (
    <div className="min-h-screen">
      <Navbar 
        projects={projects} 
        activeProject={activeProject || { id: 'home' }} 
        setActiveProject={setActiveProject} 
      />

      {!activeProject ? (
        /* Home Section */
        <section id="home" className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'linear-gradient(to bottom, #0f172a, #1e293b)',
              opacity: 1
            }}
          />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
              Welcome to My Portfolio
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight animate-fade-in [animation-delay:100ms]">
              Ashfortune's<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted mb-12 animate-fade-in opacity-0 [animation-delay:300ms]">
              AI 협업을 통한 비즈니스 가치 창출과 혁신적인 솔루션을 제안합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in opacity-0 [animation-delay:600ms]">
              <button onClick={() => setActiveProject(projects[0])} className="btn btn-primary">프로젝트 구경하기</button>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Hero Section */}
          <section id="hero" key={activeProject.id} className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
              style={{ 
                backgroundImage: `linear-gradient(to bottom, transparent, #0f172a), url('${activeProject.heroBg}')`,
                opacity: 0.4 
              }}
            />
            <div className="relative z-10 max-w-4xl">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
                Project Showcase
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight animate-fade-in [animation-delay:100ms]">
                {activeProject.heroTagline.split(',')[0]}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                  {activeProject.heroTagline.split(',')[1]}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-text-muted mb-12 animate-fade-in opacity-0 [animation-delay:300ms]">
                {activeProject.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in opacity-0 [animation-delay:600ms]">
                <a href="#features" className="btn btn-primary">기능 시연 보기</a>
                <a href={activeProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline flex items-center justify-center gap-2">
                  <Github size={20} />
                  GitHub 저장소
                </a>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-32 container mx-auto px-6 border-b border-white/5">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">About {activeProject.title}</h2>
              <p className="text-xl text-text-muted leading-relaxed">
                {activeProject.about}
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-32 bg-[#0c1222]">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-24">Feature Showcases</h2>
              
              {activeProject.features.map((feature, idx) => (
                <FeatureItem 
                  key={`${activeProject.id}-f-${idx}`}
                  {...feature}
                />
              ))}
            </div>
          </section>

          {/* Tech Stack Section */}
          <section id="tech-stack" className="py-32 container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-16">Technology Stack</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {activeProject.techStack.map((stack, idx) => (
                <div key={idx} className="bg-bg-card p-8 rounded-2xl border border-white/10 hover:border-primary transition-all text-left group">
                  <h4 className="text-primary font-bold text-xl mb-6 group-hover:translate-x-1 transition-transform">{stack.title}</h4>
                  <ul className="text-text-muted space-y-2">
                    {stack.items.map((item, i) => <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                      {item}
                    </li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section id="team" className="py-32 bg-[#0c1222]">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-16">Our Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {activeProject.team.map((member, idx) => (
                  <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <strong className="block text-lg mb-2">{member.name}</strong>
                    <span className="text-text-muted text-sm">{member.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="py-16 border-t border-white/10 text-center text-text-muted text-sm">
        <div className="container mx-auto px-6">
          <p className="mb-2">&copy; 2026 {activeProject ? activeProject.title : "Ashfortune"} Team. All rights reserved.</p>
          <p className="flex items-center justify-center gap-2">
            <Mail size={16} />
            shfortune | support@ai-lawyer.com
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
