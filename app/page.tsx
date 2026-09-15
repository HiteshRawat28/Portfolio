/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/portfolio/page-shell";
import { ProjectRow } from "@/components/portfolio/project-row";
import { getProject } from "@/data/projects";

const fleetpilot = getProject("fleetpilot")!;
const assetflow = getProject("assetflow")!;
const swiftbill = getProject("swiftbill")!;
const personalOps = getProject("personal-ops-agent")!;
const guardrails = getProject("ai-guardrails")!;

const externalProps = { target: "_blank", rel: "noreferrer noopener" } as const;

const capabilities = [
  { number: "01", title: "Product engineering", body: "Responsive interfaces, state, workflows, and user-facing operational tools." },
  { number: "02", title: "Backend & data", body: "REST APIs, PostgreSQL, Prisma, relational models, and transactional behavior." },
  { number: "03", title: "Security & access", body: "Authentication, RBAC, tenant isolation, validation, and signed webhooks." },
  { number: "04", title: "AI applications", body: "Constrained tools, agent control flow, guardrails, traces, and human approval." },
  { number: "05", title: "Delivery", body: "Docker, Linux, testing, documentation, Vercel, and Render workflows." },
];

export default function Home() {
  return (
    <PageShell>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-index" aria-hidden="true">01 / INTRO</div>
        <div className="hero-copy">
          <p className="eyebrow">FULL-STACK SOFTWARE ENGINEER · JAIPUR, INDIA</p>
          <h1 id="hero-title">I build reliable business systems and practical AI applications.</h1>
          <p className="hero-summary">
            Computer Science undergraduate at LNMIIT working across product interfaces,
            APIs, relational data, authorization, integrations, and AI-assisted workflows.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View selected work <ArrowDown aria-hidden="true" size={17} />
            </a>
            <a className="button button-secondary" href="/resume">
              View résumé <ArrowRight aria-hidden="true" size={17} />
            </a>
          </div>
        </div>
        <aside className="hero-proof" aria-label="Engineering focus">
          <p>Current focus</p>
          <ul>
            <li>Multi-tenant product systems</li>
            <li>Secure operational workflows</li>
            <li>Human-centered AI integration</li>
          </ul>
          <div className="hero-socials">
            <a href="https://github.com/HiteshRawat28" {...externalProps}>GitHub</a>
            <a href="https://www.linkedin.com/in/hitesh-rawat-a67ba9284" {...externalProps}>LinkedIn</a>
            <a href="https://leetcode.com/u/Hitesh_Rawat" {...externalProps}>LeetCode</a>
          </div>
        </aside>
      </section>

      <section className="section selected-work" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="section-number">02</p>
          <div>
            <p className="eyebrow">SELECTED SYSTEMS</p>
            <h2 id="work-title">Engineering work with operational depth.</h2>
          </div>
        </div>

        <article className="flagship">
          <div className="flagship-copy">
            <div className="project-meta">
              <span>FLAGSHIP PROJECT</span>
              <span>WEB · MOBILE · API · AI</span>
            </div>
            <h3>{fleetpilot.name}</h3>
            <p className="project-lede">{fleetpilot.shortDescription}</p>
            <ul className="project-points">
              <li>Shared Express and PostgreSQL backend for web and Flutter clients</li>
              <li>Role-aware access and tenant-isolated operational data</li>
              <li>HMAC-verified webhooks with idempotent transaction matching</li>
            </ul>
            <div className="project-links">
              <a href="/projects/fleetpilot">Read case study <ArrowUpRight aria-hidden="true" size={16} /></a>
              <a href={fleetpilot.liveUrl} {...externalProps}>Live product <ArrowUpRight aria-hidden="true" size={16} /></a>
              <a href={fleetpilot.repositoryUrl} {...externalProps}>Source <ArrowUpRight aria-hidden="true" size={16} /></a>
            </div>
          </div>
          <div className="flagship-visual">
            <div className="flagship-image">
              <img src={fleetpilot.image!.src} alt={fleetpilot.image!.alt} width={fleetpilot.image!.width} height={fleetpilot.image!.height} loading="lazy" decoding="async" />
              <span>FLEET OPERATIONS / PRODUCT VIEW</span>
            </div>
            <div className="system-map" aria-label="FleetPilot system overview">
              <div className="map-kicker">SYSTEM VIEW / 01</div>
              <div className="map-grid">
                <div className="map-node map-client">Web command center</div>
                <div className="map-node map-client">Flutter driver app</div>
                <div className="map-node map-core">Express API + policy layer</div>
                <div className="map-node">PostgreSQL + Prisma</div>
                <div className="map-node">AI Copilot tools</div>
                <div className="map-node">FASTag webhooks</div>
              </div>
            </div>
          </div>
        </article>

        <div className="project-list">
          <ProjectRow project={assetflow} index={2} />
          <ProjectRow project={swiftbill} index={3} />
        </div>

        <div className="section-end-link">
          <a href="/projects">View all projects <ArrowRight aria-hidden="true" size={17} /></a>
        </div>
      </section>

      <section className="role-lenses" aria-labelledby="role-title">
        <div className="role-lens-intro">
          <p className="eyebrow">ROLE-SPECIFIC EVIDENCE</p>
          <h2 id="role-title">Read the work through the role you are hiring for.</h2>
        </div>
        <a className="role-lens" href="/focus/full-stack">
          <span>01</span>
          <div><strong>Full-stack engineering</strong><p>Product ownership, APIs, data models, authorization, transactions, and delivery.</p></div>
          <ArrowUpRight aria-hidden="true" size={22} />
        </a>
        <a className="role-lens" href="/focus/ai-applications">
          <span>02</span>
          <div><strong>AI application engineering</strong><p>Tool permissions, human approval, guardrails, observability, and failure handling.</p></div>
          <ArrowUpRight aria-hidden="true" size={22} />
        </a>
      </section>

      <section className="section ai-section" id="ai-lab" aria-labelledby="ai-title">
        <div className="section-heading">
          <p className="section-number">03</p>
          <div>
            <p className="eyebrow">AI ENGINEERING LAB</p>
            <h2 id="ai-title">Useful AI needs boundaries.</h2>
            <p className="section-intro">Experiments in tool control, safety checks, human confirmation, and observable execution.</p>
          </div>
        </div>
        <div className="ai-grid">
          {[personalOps, guardrails].map((project, index) => (
            <article className="ai-card" key={project.slug}>
              <div className="ai-card-top"><span>LAB / 0{index + 1}</span><span>{project.technologies.slice(0, 3).join(" · ")}</span></div>
              <h3>{project.name}</h3>
              <p>{project.shortDescription}</p>
              <ul>
                {project.decisions.map((decision) => <li key={decision.title}>{decision.title}</li>)}
              </ul>
              <a href={`/projects/${project.slug}`}>Explore the system <ArrowUpRight aria-hidden="true" size={16} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities" aria-labelledby="capabilities-title">
        <div className="capabilities-heading">
          <p className="eyebrow">CAPABILITIES</p>
          <h2 id="capabilities-title">A product-oriented engineering toolkit.</h2>
        </div>
        <div className="capability-list">
          {capabilities.map((capability) => (
            <article key={capability.number}>
              <span>{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="section-number">04</p>
          <div>
            <p className="eyebrow">ABOUT</p>
            <h2 id="about-title">Learning by building systems that have consequences.</h2>
          </div>
        </div>
        <div className="about-grid">
          <p className="about-lede">
            I am a Computer Science undergraduate at LNMIIT, based in Jaipur. I gravitate toward products where permissions, data integrity, operational state, and user experience have to work together.
          </p>
          <div className="about-detail">
            <p>Alongside software work, I coordinate artist logistics and event execution for Vivacity, LNMIIT. That experience has strengthened how I communicate across teams and handle time-sensitive operational details.</p>
            <div className="about-facts">
              <div><strong>2027</strong><span>Expected B.Tech graduation</span></div>
              <div><strong>300+</strong><span>LeetCode problems solved</span></div>
              <div><strong>2026</strong><span>Odoo Hackathon participant</span></div>
            </div>
            <a className="text-link" href="/about">More about how I work <ArrowRight aria-hidden="true" size={16} /></a>
          </div>
        </div>
      </section>

      <section className="contact-cta" id="contact" aria-labelledby="contact-title">
        <p className="eyebrow">OPEN TO FULL-STACK & AI APPLICATION ROLES</p>
        <h2 id="contact-title">Let’s talk about useful software.</h2>
        <p>I’m looking for teams where I can contribute across product, backend systems, and responsible AI integration.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="mailto:23ucs595@lnmiit.ac.in">Email Hitesh <ArrowUpRight aria-hidden="true" size={17} /></a>
          <a className="button button-secondary" href="/contact">Contact options</a>
        </div>
      </section>
    </PageShell>
  );
}
