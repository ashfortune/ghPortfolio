import React, { useState, useEffect } from 'react';
import {
  Code,
  PlayCircle,
  Github,
  Mail,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  UserCheck,
  Zap,
  Shield,
  Cpu,
  BarChart,
  Target,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { projects, coreSkills } from './data/projects';

const Navbar = ({ projects, activeProject, setActiveProject }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const timeoutRef = React.useRef(null);

  const handleMouseEnter = (menuId) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
  };

  // 카테고리별 프로젝트 그룹화
  const categories = [
    { id: 'web', label: 'Web Projects', projects: projects.filter(p => p.category === 'web') },
    { id: 'ai', label: 'AI Projects', projects: projects.filter(p => p.category === 'ai') },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-20 flex items-center glass z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 text-2xl font-bold text-text-main cursor-pointer"
          onClick={() => setActiveProject(null)}
        >
          <Code className="text-primary" size={32} />
          <span>My Portfolio</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => setActiveProject(null)} 
            className={`text-sm font-bold transition-colors ${!activeProject?.id || activeProject.id === 'home' ? 'text-primary' : 'text-text-muted hover:text-text-main'}`}
          >
            Home
          </button>

          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="relative group py-4"
              onMouseEnter={() => handleMouseEnter(cat.id)}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 text-sm font-bold transition-colors ${activeProject?.category === cat.id ? 'text-primary' : 'text-text-muted hover:text-text-main'}`}>
                {cat.label}
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === cat.id ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Panel */}
              <div 
                className={`absolute top-full right-0 mt-0 w-64 bg-white/95 backdrop-blur-xl border border-black/5 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-top-right ${activeMenu === cat.id ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                onMouseEnter={() => handleMouseEnter(cat.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="p-2">
                  {cat.projects.map((proj) => (
                    <button
                      key={proj.id}
                      onClick={() => {
                        setActiveProject(proj);
                        setActiveMenu(null);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between group/item ${activeProject?.id === proj.id ? 'bg-primary/10 text-primary' : 'hover:bg-slate-50 text-text-muted hover:text-text-main'}`}
                    >
                      <div className="flex flex-col">
                        <span className="text-sm font-bold">{proj.title}</span>
                        <span className="text-[10px] opacity-60 line-clamp-1">{proj.subtitle}</span>
                      </div>
                      <ChevronRight size={14} className={`transition-transform ${activeProject?.id === proj.id ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover/item:translate-x-0 group-hover/item:opacity-100'}`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          <button 
            onClick={() => {
              const el = document.getElementById('contact');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all"
          >
            Contact Me
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-text-main p-2 hover:bg-slate-100 rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-20 left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-black/5 md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[80vh] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}>
        <div className="p-6 flex flex-col gap-8 overflow-y-auto max-h-[calc(80vh-5rem)]">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest px-2 mb-2">Navigation</span>
            <button
              onClick={() => { setActiveProject(null); setIsOpen(false); }}
              className={`text-left px-4 py-4 rounded-2xl flex items-center justify-between font-bold ${!activeProject?.id || activeProject.id === 'home' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-50 text-text-muted'}`}
            >
              Home
              <ChevronRight size={18} />
            </button>

            {categories.map((cat) => (
              <div key={cat.id} className="mt-4">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 mb-3 block ${cat.id === 'ai' ? 'text-purple-500' : 'text-primary'}`}>
                  {cat.label}
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {cat.projects.map((proj) => (
                    <button
                      key={proj.id}
                      onClick={() => { setActiveProject(proj); setIsOpen(false); }}
                      className={`text-left px-4 py-3 rounded-xl flex items-center justify-between border transition-all ${activeProject?.id === proj.id ? 'border-primary/30 bg-primary/5 text-primary' : 'border-transparent bg-slate-50 text-text-muted'}`}
                    >
                      <div>
                        <div className="text-sm font-bold">{proj.title}</div>
                        <div className="text-[10px] opacity-60">{proj.subtitle}</div>
                      </div>
                      <ChevronRight size={14} />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="pt-4 border-t border-black/5 flex justify-center">
            <div className="flex gap-6">
              <a href="https://github.com/ashfortune" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-all hover:scale-110">
                <Github size={24} />
              </a>
              <a href="mailto:yjb152188@gmail.com" className="text-text-muted hover:text-primary transition-all hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const ChallengesSection = ({ challenges }) => {
  if (!challenges || challenges.length === 0) return null;

  return (
    <section id="challenges" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-24 text-text-main">Challenges & Solutions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {challenges.map((challenge, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-black/5 hover:border-primary/30 transition-all flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl">
                <AlertCircle size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 text-text-main">{challenge.title}</h4>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-rose-500 uppercase tracking-tighter block mb-1">Problem</span>
                    <p className="text-text-muted leading-relaxed">{challenge.problem}</p>
                  </div>
                  <div className="pt-4 border-t border-black/5">
                    <span className="text-xs font-bold text-emerald-500 uppercase tracking-tighter block mb-1">Solution</span>
                    <p className="text-text-main font-medium leading-relaxed">{challenge.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillMapSection = ({ skills }) => {
  return (
    <section id="skills" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-24 text-text-main">Core Competencies</h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {skills.map((group, idx) => (
            <div key={idx} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="flex justify-between items-end mb-4">
                <h4 className="text-lg font-bold text-text-main">{group.category}</h4>
                <span className="text-primary font-bold">{group.level}%</span>
              </div>
              <div className="skill-bar-container">
                <div 
                  className="skill-bar-fill animate-width" 
                  style={{ '--target-width': `${group.level}%` }}
                ></div>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-50 text-text-muted text-xs rounded-full border border-black/5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
        <div className="relative aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
          {videoSrc.match(/\.(mp4|webm|ogg|mov)$/i) ? (
            <video
              key={videoSrc}
              className="w-full h-full object-contain"
              controls={isPlaying}
              autoPlay
              muted
              loop
              playsInline
              poster={poster}
              onPlay={() => setIsPlaying(true)}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <source src={videoSrc} />
            </video>
          ) : (
            <img 
              src={videoSrc} 
              alt={title} 
              className="w-full h-full object-contain"
            />
          )}

          {videoSrc.match(/\.(mp4|webm|ogg|mov)$/i) && !isPlaying && false && (
            <div
              className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center cursor-pointer group-hover:bg-black/20 transition-all"
              onClick={() => setIsPlaying(true)}
            >
              <PlayCircle className="text-white mb-4 group-hover:scale-110 transition-transform" size={64} />
              <span className="text-white font-medium text-center px-4">
                시연 영상 재생<br />
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
        <>
          <section id="home" className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'linear-gradient(to bottom, #f8fafc, #ffffff)',
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
                <button onClick={() => {
                  const el = document.getElementById('skills');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }} className="btn btn-outline">역량 확인하기</button>
                <button onClick={() => setActiveProject(projects[0])} className="btn btn-primary ml-2">프로젝트 구경하기</button>
              </div>
            </div>
          </section>
          <SkillMapSection skills={coreSkills} />
          
          <section className="py-32 bg-slate-50">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold mb-12">Latest Projects</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[...projects].sort((a, b) => {
                  // 최신순: Nexus → AI-Lawyer → StockLab 우선 표시
                  const priority = { nexus: 0, 'ai-lawyer': 1, stocklab: 2 };
                  const pa = priority[a.id] ?? 99;
                  const pb = priority[b.id] ?? 99;
                  return pa - pb;
                }).slice(0, 3).map(proj => {
                  const ProjIcon = proj.icon || Zap;
                  return (
                    <div key={proj.id} className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm hover:shadow-xl transition-all text-left cursor-pointer group" onClick={() => setActiveProject(proj)}>
                      <div className="text-primary mb-4 p-3 bg-primary/5 inline-block rounded-xl group-hover:scale-110 transition-transform">
                        <ProjIcon size={24} />
                      </div>
                      <h4 className="text-xl font-bold mb-2">{proj.title}</h4>
                      <p className="text-text-muted text-sm mb-6 line-clamp-2">{proj.subtitle}</p>
                      <div className="flex items-center text-primary text-sm font-bold">
                        상세 보기 <ArrowRight className="ml-2" size={16} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* Hero Section */}
          <section id="hero" key={activeProject.id} className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
              style={{
                backgroundImage: activeProject.heroBg 
                  ? `linear-gradient(to bottom, rgba(255, 255, 255, 0.4), #ffffff), url('${activeProject.heroBg}')`
                  : `linear-gradient(to bottom, #f8fafc, #ffffff)`,
                opacity: activeProject.heroBg ? 0.7 : 1
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
              
              <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in opacity-0 [animation-delay:200ms]">
                {activeProject.highlights?.map((h, i) => {
                  const IconComponent = h.icon;
                  return (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-medium">
                      <IconComponent size={16} className="text-primary" />
                      {h.text}
                    </div>
                  );
                })}
              </div>

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
          <section id="about" className="py-32 container mx-auto px-6 border-b border-black/5">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-text-main">About {activeProject.title}</h2>
              <p className="text-xl text-text-muted leading-relaxed">
                {activeProject.about}
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-32 bg-slate-50">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-24 text-text-main">Feature Showcases</h2>

              {activeProject.features.map((feature, idx) => (
                <FeatureItem
                  key={`${activeProject.id}-f-${idx}`}
                  {...feature}
                />
              ))}
            </div>
          </section>

          {/* Challenges Section */}
          <ChallengesSection challenges={activeProject.challenges} />

          {/* Tech Stack Section */}
          <section id="tech-stack" className="py-32 container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-16 text-text-main">Technology Stack</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {activeProject.techStack.map((stack, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm hover:border-primary transition-all text-left group">
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
          <section id="team" className="py-32 bg-slate-50 border-t border-black/5">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold mb-16 text-text-main">Our Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {activeProject.team.map((member, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl border border-black/5 shadow-sm hover:shadow-md transition-all">
                    <strong className="block text-lg mb-2 text-text-main">{member.name}</strong>
                    <span className="text-text-muted text-sm">{member.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer id="contact" className="py-24 border-t border-black/5 text-center text-text-muted text-sm bg-slate-50">
        <div className="container mx-auto px-6">
          <p className="mb-4 text-text-main font-bold text-lg">함께 혁신을 만들어갈 준비가 되셨나요?</p>
          <p className="mb-8 max-w-md mx-auto">언제든 연락 주십시오. 대표님의 비즈니스 가치를 높이는 최고의 솔루션을 제안해 드리겠습니다.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
            <a href="mailto:yjb152188@gmail.com" className="flex items-center gap-3 px-6 py-3 bg-white rounded-2xl border border-black/5 hover:border-primary/30 hover:text-primary transition-all shadow-sm group">
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium text-base">yjb152188@gmail.com</span>
            </a>
            <a href="https://github.com/ashfortune" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-white rounded-2xl border border-black/5 hover:border-primary/30 hover:text-primary transition-all shadow-sm group">
              <Github size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium text-base">github.com/ashfortune</span>
            </a>
          </div>
          <div className="pt-8 border-t border-black/5 opacity-60">
            <p>&copy; 2026 {activeProject ? activeProject.title : "Ashfortune"} Team. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
