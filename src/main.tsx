import React from "react";
import { createRoot } from "react-dom/client";
import { capabilities, featuredProjects, profileLinks, projects } from "./data";
import "./styles.css";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

function LinkList() {
  return (
    <div className="link-list" aria-label="Profile links">
      {profileLinks.map((link) => (
        <a href={link.href} key={link.label}>
          {link.label}
        </a>
      ))}
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Mauricio Garcia Villanueva home">
        MGV
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <span className="eyebrow">AI/ML and software engineering</span>
        <h1 id="hero-title">Mauricio Garcia Villanueva</h1>
        <p className="lede">
          I build applied AI/ML and software projects around decision-making under
          uncertainty, data analysis, and systems that can be inspected end to end.
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="#projects">
            View projects
          </a>
          <a className="secondary-action" href="https://www.linkedin.com/in/emgar/">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="hero-visual" aria-label="Portfolio focus summary">
        <div className="story-label">the story of</div>
        <div className="signal-grid">
          <span>Imperfect information</span>
          <span>Self-play</span>
          <span>Data analysis</span>
          <span>Static demos</span>
          <span>Python</span>
          <span>TypeScript</span>
        </div>
        <div className="hero-statement">
          <strong>Research ideas should become inspectable software.</strong>
          <p>
            My strongest projects combine modeling, evaluation, deployment, and a
            plain-English explanation layer.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProofBar() {
  return (
    <section className="proof-bar" aria-label="Portfolio summary">
      <div>
        <span>Focus</span>
        <strong>AI/ML, data, and software systems</strong>
      </div>
      <div>
        <span>Education</span>
        <strong>Computer Science, UT Austin</strong>
      </div>
      <div>
        <span>Location</span>
        <strong>Austin, Texas</strong>
      </div>
      <div>
        <span>Project style</span>
        <strong>Build, validate, explain, deploy</strong>
      </div>
    </section>
  );
}

function FeaturedProjectCard() {
  const [primary, secondary] = featuredProjects;
  return (
    <section className="featured-project" id="projects" aria-labelledby="projects-title">
      <div className="section-heading">
        <span className="eyebrow">Featured work</span>
        <h2 id="projects-title">Projects with a public story</h2>
        <p>
          These are the projects I would lead with in an interview: clear problem,
          implementation, evaluation, and honest limitations.
        </p>
      </div>

      <article className="case-study">
        <div className="case-copy">
          <span className="eyebrow">{primary.eyebrow}</span>
          <h3>{primary.title}</h3>
          <p>{primary.summary}</p>
          <ul className="proof-list">
            {primary.proof.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="tag-row">
            {primary.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <div className="inline-actions">
            {primary.links.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="project-preview">
          <img src={primary.image} alt="Screenshot of the Liar's Dice CFR Lab interface" />
        </div>
      </article>

      <article className="wide-project">
        <div>
          <span className="eyebrow">{secondary.eyebrow}</span>
          <h3>{secondary.title}</h3>
          <p>{secondary.summary}</p>
        </div>
        <div>
          <div className="tag-row">
            {secondary.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <div className="inline-actions">
            {secondary.links.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}

function ProjectGrid() {
  return (
    <section className="project-grid-section" aria-labelledby="supporting-projects">
      <div className="section-heading compact">
        <span className="eyebrow">Supporting projects</span>
        <h2 id="supporting-projects">Broader engineering range</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div>
              <span className="eyebrow">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
            </div>
            <div>
              <div className="tag-row">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <a href={project.href}>View {project.status}</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-heading">
        <span className="eyebrow">What I can show</span>
        <h2 id="skills-title">A practical AI/ML engineering profile</h2>
        <p>
          The goal of this portfolio is to make the pattern visible: I can take
          ambiguous technical ideas, build working artifacts, test them, and explain
          them clearly.
        </p>
      </div>
      <div className="capability-list">
        {capabilities.map((capability) => (
          <article key={capability.label}>
            <strong>{capability.label}</strong>
            <p>{capability.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience-section" id="experience" aria-labelledby="experience-title">
      <div className="section-heading">
        <span className="eyebrow">Background</span>
        <h2 id="experience-title">Technical foundation with a human-facing edge</h2>
      </div>
      <div className="timeline">
        <article>
          <span>University of Texas at Austin</span>
          <h3>B.S. Computer Science</h3>
          <p>
            Focused on computer science with applied statistical modeling and data
            science coursework. Recent work emphasizes AI/ML, game solving, and
            data-driven decision systems.
          </p>
        </article>
        <article>
          <span>Project development</span>
          <h3>Research to deployment</h3>
          <p>
            Built public-facing artifacts from research work, including reproducible
            Python pipelines, static front-end demos, documentation, and GitHub Pages
            deployment.
          </p>
        </article>
        <article>
          <span>Communication</span>
          <h3>Sales and collaboration experience</h3>
          <p>
            Years of customer-facing work shaped how I explain technical tradeoffs,
            listen carefully, and turn ambiguous goals into concrete next steps.
          </p>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div>
        <span className="eyebrow">Contact</span>
        <h2 id="contact-title">Let's talk about practical AI/ML work.</h2>
        <p>
          I am interested in roles and projects around AI/ML engineering, data
          systems, applied research, FinTech, and decision-making under uncertainty.
        </p>
      </div>
      <LinkList />
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofBar />
        <FeaturedProjectCard />
        <ProjectGrid />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
