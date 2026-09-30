import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Dna,
  Flower2,
  Heart,
  Menu,
  Microscope,
  ScanFace,
  Sparkles,
  Sun,
  Waves,
  X,
} from 'lucide-react';
import './styles.css';

const whatsappUrl = 'https://wa.me/5531998801280';

const services = [
  {
    title: 'Gestão em saúde',
    description: 'Um acompanhamento contínuo para organizar exames, retornos e cada etapa do seu cuidado.',
    Icon: Heart,
  },
  {
    title: 'Microscopia vaginal',
    description: 'Análise cuidadosa para identificar alterações e orientar o tratamento mais adequado.',
    Icon: Microscope,
  },
  {
    title: 'Coleta citopatológica',
    description: 'Prevenção realizada com técnica e atenção especial ao seu conforto.',
    Icon: Sparkles,
  },
  {
    title: 'DNA-HPV',
    description: 'Detecção molecular para uma investigação mais precisa e uma prevenção ampliada.',
    Icon: Dna,
  },
  {
    title: 'Fotobiomodulação',
    description: 'Terapia a laser e LED que auxilia no alívio da dor, inflamação e cicatrização.',
    Icon: Sun,
  },
  {
    title: 'Reabilitação pélvica',
    description: 'Fortalecimento e reeducação do assoalho pélvico em um plano individualizado.',
    Icon: Waves,
  },
  {
    title: 'Taping terapêutico',
    description: 'Bandagem funcional para apoiar músculos e articulações durante a recuperação.',
    Icon: ScanFace,
  },
  {
    title: 'Orientação contínua',
    description: 'Conversas e materiais educativos para você decidir com mais informação.',
    Icon: Heart,
  },
];

const steps = [
  {
    number: '01',
    title: 'A conversa começa',
    description: 'Conte pelo WhatsApp o que você procura. Vamos orientar seus primeiros passos.',
  },
  {
    number: '02',
    title: 'Cuidado com clareza',
    description: 'Na consulta, avaliamos juntas os exames e terapias que fazem sentido para você.',
  },
  {
    number: '03',
    title: 'Seguimos ao seu lado',
    description: 'Conversamos sobre os resultados e acompanhamos a sua evolução de perto.',
  },
];

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? ' brand--footer' : ''}`} href="#inicio" aria-label="Inovar Saúde, início">
      <span className="brand__mark"><img src="/logo-inovar.webp" alt="" /></span>
      <span>inovar<span className="brand__accent">.</span><small>saúde</small></span>
    </a>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame;
    const updateProgress = () => {
      frame = window.requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
      });
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
      <div className="scroll-rail" aria-hidden="true"><span style={{ height: `${progress}%` }} /></div>
    </>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav shell">
        <Brand />
        <nav className={`nav__links${menuOpen ? ' nav__links--open' : ''}`} aria-label="Navegação principal">
          <a href="#cuidado" onClick={closeMenu}>Nosso cuidado</a>
          <a href="#sobre" onClick={closeMenu}>Sobre nós</a>
          <a href="#jornada" onClick={closeMenu}>Como funciona</a>
          <a className="nav__mobile-cta" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Agendar uma conversa <ArrowUpRight size={16} />
          </a>
        </nav>
        <a className="button button--nav" href={whatsappUrl} target="_blank" rel="noreferrer">
          Agendar uma conversa <ArrowUpRight size={16} />
        </a>
        <button
          className="nav__toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__grid shell">
        <div className="hero__copy reveal">
          <p className="eyebrow"><span /> SAÚDE DA MULHER, COM PRESENÇA</p>
          <h1>Seu cuidado merece <em>ser inteiro.</em></h1>
          <p className="hero__intro">
            Escuta, conhecimento e acolhimento em cada fase. Um espaço para cuidar da sua saúde no seu tempo e do seu jeito.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Vamos conversar <ArrowUpRight size={17} />
            </a>
            <a className="text-link" href="#cuidado">Conheça nosso cuidado <ArrowDown size={15} /></a>
          </div>
          <div className="hero__note"><span className="hero__note-mark"><Heart size={16} /></span> Atenção individual. Conversas sem pressa.</div>
        </div>
        <div className="hero__visual reveal" aria-label="Identidade visual da Inovar Saúde">
          <div className="hero__poster">
            <div className="hero__poster-head"><span>INOVAR <i>/</i> SAÚDE</span><span>CUIDADO INTEGRAL</span></div>
            <div className="hero__poster-center">
              <img className="hero__poster-logo" src="/logo-inovar.webp" alt="Inovar Saúde" fetchPriority="high" />
            </div>
            <div className="hero__poster-footer"><span>Seu corpo. Sua história.</span><ArrowRight size={16} /><span>Seu tempo.</span></div>
          </div>
        </div>
      </div>
      <div className="hero__foot shell"><span>01 / 03</span><span>SEU CORPO. SUA HISTÓRIA. SEU TEMPO.</span><a href="#cuidado" aria-label="Ir para nosso cuidado"><ArrowDown size={17} /></a></div>
    </section>
  );
}

function IntroStrip() {
  return (
    <div className="intro-strip">
      <div className="shell intro-strip__inner">
        <span>UM SÓ ESPAÇO</span><i />
        <p>Prevenção, diagnóstico e terapias reunidos em uma jornada de cuidado feita para você.</p>
        <span className="intro-strip__count">01 — 08</span>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="section services" id="cuidado">
      <div className="shell">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow"><span /> CUIDADO QUE FAZ SENTIDO</p>
            <h2>Conhecimento técnico,<br /><em>olhar humano.</em></h2>
          </div>
          <p className="section-heading__aside">Você pode buscar um serviço específico ou construir, com a gente, um acompanhamento contínuo.</p>
        </div>
        <div className="services__grid">
          {services.map(({ title, description, Icon }, index) => (
            <article className="service reveal" key={title}>
              <div className="service__top"><span>{String(index + 1).padStart(2, '0')}</span><Icon size={22} strokeWidth={1.5} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a className="service__link" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Conversar sobre ${title}`}>
                <ArrowUpRight size={17} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="sobre">
      <div className="about__inner shell">
        <div className="about__visual reveal" aria-label="Presença em cada etapa do cuidado">
          <div className="about__art">
            <div className="about__art-meta"><span>NOSSO JEITO DE CUIDAR</span><Heart size={17} /></div>
            <div className="about__art-message"><span>OLHAR HUMANO</span><p>Presença em<br />cada etapa<span>.</span></p></div>
            <img className="about__doctor" src="/doctor-hands.jpg" alt="Mãos de um médico com jaleco e estetoscópio" loading="lazy" />
            <div className="about__art-foot"><span>Escuta</span><i /><span>Respeito</span><i /><span>Sigilo</span></div>
          </div>
        </div>
        <div className="about__copy reveal">
          <p className="eyebrow eyebrow--light"><span /> MAIS DO QUE UMA CONSULTA</p>
          <h2>Você não precisa<br />dar conta de tudo <em>sozinha.</em></h2>
          <p className="about__lead">A saúde da mulher envolve histórias, dúvidas e fases diferentes. Aqui, cada conversa acontece com tempo, respeito e sigilo.</p>
          <ul className="about__list">
            <li><Check size={17} /> Avaliação individual antes de qualquer procedimento</li>
            <li><Check size={17} /> Explicações claras, sem pressa nem julgamentos</li>
            <li><Check size={17} /> Acompanhamento próximo dos seus resultados</li>
          </ul>
          <a className="text-link text-link--light" href={whatsappUrl} target="_blank" rel="noreferrer">Conheça nosso jeito de cuidar <ArrowUpRight size={16} /></a>
          <div className="about__signature">Um cuidado mais próximo começa com uma conversa.</div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="section journey" id="jornada">
      <div className="shell">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow"><span /> UMA ETAPA DE CADA VEZ</p>
            <h2>Do primeiro oi<br /><em>ao cuidado contínuo.</em></h2>
          </div>
          <p className="section-heading__aside">Sem fórmulas prontas. A sua jornada começa onde você está.</p>
        </div>
        <div className="journey__steps">
          {steps.map((step) => (
            <article className="journey__step reveal" key={step.number}>
              <span className="journey__number">{step.number}</span>
              <div className="journey__line" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="shell contact__inner reveal">
        <div className="contact__copy">
          <p className="eyebrow eyebrow--light"><span /> O PRÓXIMO PASSO É SEU</p>
          <h2>Vamos conversar<br />sobre <em>você?</em></h2>
          <p>A gente começa com uma conversa simples, acolhedora e no seu tempo.</p>
        </div>
        <a className="button button--contact" href={whatsappUrl} target="_blank" rel="noreferrer">
          Chamar no WhatsApp <ArrowUpRight size={18} />
          <span>Resposta pelo WhatsApp</span>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__main">
        <div className="footer__brand">
          <Brand footer />
          <p>Saúde da mulher, com<br />tempo, presença e cuidado.</p>
        </div>
        <div className="footer__column">
          <span>EXPLORE</span>
          <a href="#cuidado">Nosso cuidado</a>
          <a href="#sobre">Sobre nós</a>
          <a href="#jornada">Como funciona</a>
        </div>
        <div className="footer__column">
          <span>FALE COM A GENTE</span>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">(31) 99880-1280 <ArrowUpRight size={13} /></a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">Agendar uma conversa <ArrowUpRight size={13} /></a>
        </div>
      </div>
      <div className="shell footer__bottom"><span>© 2026 Inovar Saúde. Todos os direitos reservados.</span><span>Cuidado individualizado e sigiloso.</span><a href="#inicio">VOLTAR AO TOPO ↑</a></div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          activeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <IntroStrip />
        <Services />
        <About />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <a className="floating-contact" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com a Inovar Saúde pelo WhatsApp">
        <Heart size={19} /> <span>Vamos conversar</span>
      </a>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
