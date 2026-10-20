import React, { useEffect, useState } from 'react';
import { BrowserRouter, NavLink, Link, Route, Switch, useLocation } from 'react-router-dom';
import english from './assets/i18n/en.json';
import chinese from './assets/i18n/zh-TW.json';
import portrait from './assets/images/my_pic.jpg';
import elves from './assets/projectImages/rise_of_elves_2.jpg';
import admin from './assets/projectImages/rise_of_elves_admin.jpg';
import fishing from './assets/projectImages/S8.webp';
import commerce from './assets/projectImages/E_commerce.png';
import tesla from './assets/projectImages/tesla_mimic.webp';

const email = 'jackliuwork55@gmail.com';
const linkedin = 'https://www.linkedin.com/in/jack-liu-2b95a0121/';
const github = 'https://github.com/dracarys55';
const resume = import.meta.env.BASE_URL + 'Jack-Liu-Resume.pdf';
const projects = [
  { image: elves },
  { image: admin },
  { image: fishing, source: github + '/S8_official_website' },
  { image: commerce, source: github + '/E-commerce' },
  { image: tesla, source: github + '/teslamimic' },
];

function preference(key, fallback) {
  try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
}

function PageEffects({ language, theme, title }) {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.theme = theme;
    document.title = title;
    try {
      localStorage.setItem('lang', language);
      localStorage.setItem('theme', theme);
    } catch { /* Preferences are optional when browser storage is unavailable. */ }
  }, [language, theme, title]);
  return null;
}

function Home({ copy }) {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow">{copy.hero.eyebrow}</p>
      <p className="hello">{copy.hero.intro}</p>
      <h1 id="hero-title">{copy.hero.title}</h1>
      <p className="hero-description">{copy.hero.description}</p>
      <p className="availability"><span aria-hidden="true" />{copy.hero.availability}</p>
      <div className="actions">
        <Link className="button primary" to="/projects">{copy.hero.work} <span aria-hidden="true">↗</span></Link>
        <a className="button" href={resume}>{copy.hero.resume} <span aria-hidden="true">↓</span></a>
      </div>
      <Link className="text-link" to="/contact">{copy.hero.contact} →</Link>
      <div className="tech-line" aria-label="Core technologies">React <span>/</span> Next.js <span>/</span> TypeScript</div>
    </div>
    <div className="portrait-panel"><img src={portrait} alt={copy.hero.portrait} /><span className="portrait-caption">JACK LIU / FRONTEND ENGINEERING</span></div>
  </section>;
}

function About({ copy }) {
  return <section className="page" aria-labelledby="about-title">
    <p className="eyebrow">01 / {copy.nav.about}</p>
    <h1 id="about-title">{copy.about.title}</h1>
    <p className="page-intro">{copy.about.intro}</p>
    <div className="section-grid">
      <h2>{copy.about.timeline}</h2>
      <div className="timeline">{copy.jobs.map(job => <article className="job" key={job.company}>
        <p className="muted job-date">{job.date}</p><h3>{job.title}</h3><p className="company">{job.company}</p><p>{job.summary}</p>
      </article>)}</div>
    </div>
    <div className="section-grid"><h2>{copy.about.capabilities}</h2><ul className="capabilities">{copy.about.capabilityItems.map(item => <li key={item}>{item}</li>)}</ul></div>
    <div className="section-grid"><h2>{copy.about.education}</h2><div><p>{copy.about.educationText}</p><a className="button" href={resume}>{copy.about.resume} ↓</a></div></div>
  </section>;
}

function Projects({ copy }) {
  return <section className="page" aria-labelledby="projects-title">
    <p className="eyebrow">02 / {copy.nav.projects}</p>
    <h1 id="projects-title">{copy.projects.title}</h1><p className="page-intro">{copy.projects.intro}</p>
    <div className="project-grid">{projects.map((project, index) => {
      const details = copy.projects.items[index];
      return <article className="project-card" key={details.title}>
        <a className="project-image" href={project.image} target="_blank" rel="noopener noreferrer" aria-label={copy.projects.preview + ': ' + details.title}><img src={project.image} alt={details.title} loading="lazy" /></a>
        <div className="project-copy"><p className="eyebrow">{details.category}</p><h2>{details.title}</h2><p>{details.description}</p>
          <ul className="tags" aria-label="Technologies">{details.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
          <div className="project-links"><a href={project.image} target="_blank" rel="noopener noreferrer">{copy.projects.preview} ↗</a>{project.source && <a href={project.source} target="_blank" rel="noopener noreferrer">{copy.projects.source} ↗</a>}</div>
        </div>
      </article>;
    })}</div>
  </section>;
}

function Contact({ copy }) {
  function compose(event) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const body = String(fields.get('message')) + '\n\n' + fields.get('name') + '\n' + fields.get('email');
    window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent(copy.contact.subject) + '&body=' + encodeURIComponent(body);
  }
  return <section className="page" aria-labelledby="contact-title">
    <p className="eyebrow">03 / {copy.nav.contact}</p><h1 id="contact-title">{copy.contact.title}</h1>
    <div className="contact-grid"><div><p className="page-intro">{copy.contact.description}</p><p><a className="email-address" href={'mailto:' + email}>{email}</a></p><p className="muted">{copy.contact.location}<br />{copy.contact.hours}</p><a className="text-link" href={linkedin} target="_blank" rel="noopener noreferrer">{copy.contact.linkedin} ↗</a></div>
      <form onSubmit={compose} className="contact-form"><h2>{copy.contact.formTitle}</h2>
        <label htmlFor="name">{copy.contact.name}</label><input id="name" name="name" autoComplete="name" required maxLength={120} />
        <label htmlFor="email">{copy.contact.emailLabel}</label><input id="email" name="email" type="email" autoComplete="email" required />
        <label htmlFor="message">{copy.contact.message}</label><textarea id="message" name="message" rows={5} required maxLength={4000} />
        <button className="button primary" type="submit">{copy.contact.send} ↗</button><p className="form-hint muted">{copy.contact.hint}</p>
      </form>
    </div>
  </section>;
}

export default function App() {
  const [language, setLanguage] = useState(() => preference('lang', 'en') === 'zh-TW' ? 'zh-TW' : 'en');
  const [theme, setTheme] = useState(() => preference('theme', 'dark') === 'light' ? 'light' : 'dark');
  const copy = language === 'en' ? english : chinese;
  return <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
    <PageEffects language={language} theme={theme} title={copy.footer} />
    <a className="skip-link" href="#main">{copy.skip}</a>
    <header className="site-header"><Link className="wordmark" to="/" aria-label="Jack Liu home">JACK<span> .</span></Link>
      <nav aria-label={language === 'en' ? 'Main navigation' : '主要導覽'}>{Object.entries(copy.nav).map(([page, label]) => <NavLink key={page} exact to={page === 'home' ? '/' : '/' + page} activeClassName="active">{label}</NavLink>)}</nav>
      <div className="preferences"><button type="button" onClick={() => setLanguage(language === 'en' ? 'zh-TW' : 'en')} aria-label={copy.language}>{language === 'en' ? '中文' : 'EN'}</button><button type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={theme === 'dark' ? copy.themeDark : copy.themeLight}>{theme === 'dark' ? '☼' : '☾'}</button></div>
    </header>
    <main id="main" tabIndex={-1}><Switch>
      <Route exact path={['/', '/home']}><Home copy={copy} /></Route>
      <Route exact path="/about"><About copy={copy} /></Route>
      <Route exact path="/projects"><Projects copy={copy} /></Route>
      <Route exact path="/contact"><Contact copy={copy} /></Route>
      <Route><Home copy={copy} /></Route>
    </Switch></main>
    <footer className="site-footer"><span>{copy.footer}</span><div><a href={github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={'mailto:' + email}>Email ↗</a></div></footer>
  </BrowserRouter>;
}
