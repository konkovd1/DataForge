import { useState } from "react";

const contactEmail = "petar.adrianov.ivanov.96@gmail.com";
const linkedInUrl = "https://www.linkedin.com/in/petar-ivanov-43b1a71b6";

const pathways = {
  data: {
    label: "Data platforms",
    intro:
      "A look at the pipeline work I do, from bringing data in and transforming it to making it available to other teams.",
    steps: [
      {
        eyebrow: "01 / Ingest",
        title: "Bring it in",
        detail:
          "Bring in reference, alternative, and market data through repeatable ingestion jobs.",
      },
      {
        eyebrow: "02 / Transform",
        title: "Shape it for use",
        detail:
          "Clean and transform data into useful layers. In ETL this happens before loading; in ELT it happens after.",
      },
      {
        eyebrow: "03 / Store",
        title: "Keep it organized",
        detail:
          "Load data into useful layers or a database so teams can find and use it.",
      },
      {
        eyebrow: "04 / Serve",
        title: "Put it to work",
        detail:
          "Expose data through an API so other teams can use it in their own applications.",
      },
    ],
  },
  ai: {
    label: "AI foundations",
    intro:
      "I've also worked with an AI team on governance, reusable skills and commands, and agents.",
    steps: [
      {
        eyebrow: "01 / Understand",
        title: "Start with a task",
        detail:
          "Start with a task people need help with, then decide whether AI is a good fit.",
      },
      {
        eyebrow: "02 / Govern",
        title: "Set guardrails",
        detail:
          "Decide what the system can access and how people will review its work.",
      },
      {
        eyebrow: "03 / Equip",
        title: "Build capabilities",
        detail:
          "Share useful skills and commands so people don't have to start from scratch.",
      },
      {
        eyebrow: "04 / Orchestrate",
        title: "Coordinate agents",
        detail:
          "Give agents specific jobs and make clear which tools they can use.",
      },
    ],
  },
};

const services = [
  {
    title: "Data pipelines and platforms",
    description:
      "I can help with ETL and ELT pipelines, from ingesting and transforming source data to making it available to the people who need it.",
    tags: ["ETL / ELT", "Data transformation", "Data platforms"],
  },
  {
    title: "APIs and data access",
    description:
      "I've worked on API access for datasets and can help make data easier for other teams and services to use.",
    tags: ["API access", "Data services", "Integrations"],
  },
  {
    title: "AI platform work",
    description:
      "I've worked with an AI team on governance, reusable skills and commands, and agents. I'm open to similar, well-scoped work.",
    tags: ["Governance", "Skills and commands", "Agents"],
  },
  {
    title: "Small software tasks",
    description:
      "I also take on focused software tasks, especially when they connect to a data platform or help a team use one.",
    tags: ["Small features", "APIs", "Data tools"],
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M4.2 10h11.3m-4.8-4.8 4.8 4.8-4.8 4.8" />
    </svg>
  );
}

function FlowExplorer() {
  const [activePath, setActivePath] = useState("data");
  const [activeStep, setActiveStep] = useState(0);
  const pathway = pathways[activePath];
  const selectedStep = pathway.steps[activeStep];

  function choosePath(path) {
    setActivePath(path);
    setActiveStep(0);
  }

  return (
    <section className="flow-card" aria-labelledby="flow-title">
      <div className="flow-card-top">
        <div>
          <p className="eyebrow eyebrow-dark">A platform at a glance</p>
          <h2 id="flow-title">See how it fits together</h2>
        </div>
        <span className="signal" aria-label="Select a step to explore the diagram">
          <span className="signal-dot" />
          Select a step
        </span>
      </div>

      <div
        aria-label="Choose a platform flow"
        className="path-switch"
        role="group"
      >
        {Object.entries(pathways).map(([key, item]) => (
          <button
            aria-pressed={activePath === key}
            className={activePath === key ? "path-button is-active" : "path-button"}
            key={key}
            onClick={() => choosePath(key)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>

      <p className="flow-intro" aria-live="polite">
        {pathway.intro}
      </p>

      <ol className="flow-steps" aria-label={`${pathway.label} steps`}>
        {pathway.steps.map((step, index) => (
          <li className="flow-step" key={step.eyebrow}>
            <button
              aria-pressed={activeStep === index}
              className={activeStep === index ? "step-button is-selected" : "step-button"}
              onClick={() => setActiveStep(index)}
              type="button"
            >
              <span className="step-index">{step.eyebrow}</span>
              <span className="step-title">{step.title}</span>
            </button>
          </li>
        ))}
      </ol>

      <div className="step-detail" aria-live="polite">
        <span className="detail-marker" />
        <div>
          <p className="detail-label">{selectedStep.eyebrow}</p>
          <p className="detail-copy">{selectedStep.detail}</p>
        </div>
      </div>
    </section>
  );
}

function QuickContact() {
  return (
    <aside aria-label="Quick contact" className="quick-contact">
      <details className="quick-contact-details">
        <summary className="quick-contact-trigger">Contact</summary>
        <div className="quick-contact-panel">
          <p>Choose how to reach me</p>
          <a href={`mailto:${contactEmail}`}>Email Petar</a>
          <a href={linkedInUrl} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
        </div>
      </details>
    </aside>
  );
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Petar Ivanov, home">
          <span className="wordmark-symbol" aria-hidden="true">
            P
          </span>
          <span>
            <strong>Petar Ivanov</strong>
            <small>Data engineer</small>
          </span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#work">My work</a>
          <a href="#about">About me</a>
          <a className="nav-contact" href="#contact">
            Get in touch <ArrowIcon />
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-line" />
                Data engineering and AI platforms
              </p>
              <h1>
                I build
                <br />
                data <span className="headline-accent">platforms.</span>
              </h1>
              <p className="hero-description">
                My recent work has focused on bringing reference, alternative,
                and market data into a platform and making it available through
                an API. I've also worked with an AI team on governance and
                agents.
              </p>
              <div className="hero-actions">
                <a className="button button-lime" href="#contact">
                  Let's talk <ArrowIcon />
                </a>
                <a className="text-link" href="#services">
                  What I can help with
                </a>
              </div>
              <div className="hero-footnote">
                <span className="availability-dot" />
                Open to freelance projects
              </div>
            </div>

            <FlowExplorer />
          </div>
        </section>

        <section className="services section-wrap" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow-dark">What I can help with</p>
              <h2>
                Data platforms.
                <br />
                <span className="muted-heading">Practical AI work.</span>
              </h2>
            </div>
            <p className="section-aside">
              Most of my experience is in data platforms. I've also worked on
              AI platform foundations, and I'm open to smaller software tasks
              that fit that kind of work.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="tag-list" aria-label={`${service.title} areas`}>
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-wrap">
            <div className="section-heading work-heading">
              <div>
                <p className="eyebrow">A bit about my work</p>
                <h2>
                  Things I’ve
                  <br />
                  <span className="muted-heading">worked on.</span>
                </h2>
              </div>
            </div>

            <div className="work-grid">
              <article className="work-card">
                <div className="work-card-top">
                  <span className="work-category">DATA PLATFORM</span>
                  <span className="work-number">01</span>
                </div>
                <h3>Getting data to the teams that need it</h3>
                <p>
                  I’ve been working on a platform that ingests and transforms
                  reference, alternative, and market data, then makes it easier
                  to access through APIs.
                </p>
                <div className="work-outcome">
                  <span className="outcome-mark" aria-hidden="true">
                    ↳
                  </span>
                  <span>Ingestion · Transformation · APIs</span>
                </div>
              </article>

              <article className="work-card work-card-secondary">
                <div className="work-card-top">
                  <span className="work-category">KNOWLEDGE ASSISTANT</span>
                  <span className="work-number">02</span>
                </div>
                <h3>Answers without the manual search</h3>
                <p>
                  I built an agent to answer company-wide chat questions using
                  a knowledge base of past questions and replies. Each week, a
                  scheduled job picked up new conversations, used AI to
                  summarize useful answers, and added them to the knowledge
                  base.
                </p>
                <div className="work-outcome">
                  <span className="outcome-mark" aria-hidden="true">
                    ↳
                  </span>
                  <span>Quicker answers · Less research for the team</span>
                </div>
              </article>

              <article className="work-card work-card-secondary">
                <div className="work-card-top">
                  <span className="work-category">PIPELINE TRIAGE AGENT</span>
                  <span className="work-number">03</span>
                </div>
                <h3>Less time chasing false alarms</h3>
                <p>
                  I built an agent that reviews failed-loader alerts alongside
                  the related data. It helps identify whether an issue is
                  likely caused by vendor data or a code problem, and raises a
                  pull request for review when a code change is needed.
                </p>
                <div className="work-outcome">
                  <span className="outcome-mark" aria-hidden="true">
                    ↳
                  </span>
                  <span>Fewer false alarms · Focus on actionable issues</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="approach-section section-wrap" id="about">
          <div className="approach-stamp" aria-hidden="true">
            <span>ETL / ELT</span>
            <span className="stamp-cross">+</span>
            <span>AI AGENTS</span>
          </div>
          <div className="approach-copy">
            <p className="eyebrow eyebrow-dark">About me</p>
            <h2>
              I work with data
              <br />
              <span className="muted-heading">pipelines and agents.</span>
            </h2>
            <p>
              Most of my experience is in data engineering, especially ETL and
              ELT pipelines. I’ve worked on ingesting and transforming
              reference, alternative, and market data, then making it easier
              for other teams to access.
            </p>
            <p>
              I’ve also worked closely with an AI team on creating agents,
              reusable skills and commands, and AI governance. My strongest
              areas are data pipelines and building agents. I’m also open to
              small, well-scoped software tasks and keen to keep learning.
            </p>
            <ul className="about-tags" aria-label="Areas I work in">
              <li>ETL / ELT</li>
              <li>Data platforms</li>
              <li>AI agents</li>
              <li>AI governance</li>
            </ul>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-grid section-wrap">
            <div>
              <p className="eyebrow">Have a project in mind?</p>
              <h2>
                Let’s talk
                <br />
                about <span>it.</span>
              </h2>
              <p className="contact-description">
                Tell me what you’re trying to build or fix. We can figure out
                together whether I can help.
              </p>
            </div>
            <div className="contact-actions">
              <a
                className="button button-lime"
                href={`mailto:${contactEmail}`}
              >
                Email me <ArrowIcon />
              </a>
              <a
                className="contact-link"
                href={linkedInUrl}
                rel="noreferrer"
                target="_blank"
              >
                Connect on LinkedIn <ArrowIcon />
              </a>
            </div>
          </div>
          <footer className="site-footer section-wrap">
            <span>© {new Date().getFullYear()} Petar Ivanov</span>
            <span>Data platforms and AI foundations</span>
            <a href="#top">Back to top ↑</a>
          </footer>
        </section>
      </main>
      <QuickContact />
    </>
  );
}

export default App;
