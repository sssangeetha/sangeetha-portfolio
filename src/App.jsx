import React, { useState, useEffect } from "react";


const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-6 sm:px-8 py-20 scroll-mt-24">
    <div className="mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-base sm:text-lg text-zinc-600 dark:text-zinc-300">{subtitle}</p>
      )}
    </div>
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-200">
    {children}
  </span>
);

const Card = ({ children }) => (
  <div className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur shadow-sm hover:shadow-md transition-shadow p-5">
    {children}
  </div>
);

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-sm sm:text-base text-zinc-700 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors"
  >
    {children}
  </a>
);


const projects = [
  {
    title: "Mortgage Blob OCR + RAG Pipeline",
    desc: "End-to-end AI pipeline combining OCR (Tesseract, PaddleOCR) and Retrieval-Augmented Generation for intelligent document understanding.",
    tags: ["Python", "LangChain", "LlamaIndex", "RAG", "OCR"],
    emoji: "🧠",
    category: "GEN-AI",
    link: "https://github.com/sssangeetha/OutamationAI_OCR_RAG_Automation",
  },
  {
    title: "Ask the PDF: RAG Assistant",
    desc: "Built AI-powered chat application that allows users to upload PDF files and ask contextual questions about their content.",
    tags: ["FastAPI", "PyMuPDF", "ChromaDB", "SentenceTransformers", "Vector Database FAISS", "Python"],
    emoji: "🤖",
    category: "GEN-AI",
    link: "https://github.com/sssangeetha/Rag_Model",
  },
  {
    title: "Job Insights AI",
    desc: "Developed Python FastAPI & Kafka pipelines for claims ingestion and transformation with Prometheus/Grafana monitoring.",
    tags: ["Typescript", "Vercel/Docker", "TailwindCSS", "API Data", "Next.js", "LlamaIndex"],
    emoji: "🧭💼",
    category: "Front-End Applications",
    link: "https://github.com/sssangeetha/Job-Insights-AI",
  },
  {
    title: "Fake News Classification and Detection",
    desc: "This project helped in identifying the data of a given username on twitter such as the number of followers, when the account was created and what is the growth or drop of the influence of the account.",
    tags: ["Machine-Learning models", "Churning"],
    emoji: "🤖🧠💡",
    category: "Machine-Learning",
    link: "https://github.com/sssangeetha/Fake-News-Classification-And-Detection",
  },
  {
    title: "Twitter Web Scraping",
    desc: "The project aim to develop method to detect news stories using machine learning. Main idea is to identify and predict whether given news article is fake or not, where we gathered data, preprocessed the text, translated articles into supervised model features and finally measured various parameters.",
    tags: ["Machine-Learning models", "Churning"],
    emoji: "🌍🦠📊",
    category: "Machine-Learning",
    link: "https://github.com/sssangeetha/Twitter-Data-Web-Scraping-Analysis",
  },
  {
    title: "Region wise Disease Prediction",
    desc: "performed region-level forecasts and compared models to select the best performing model.",
    tags: ["OpenGL", "C++", "Graphics", "Simulation"],
    emoji: "🌐",
    category: "Machine-Learning",
    link: "https://github.com/sssangeetha/Region-wise-Disease-Prediction",
  },
  {
    title: "Graphical Simulation of Weather Conditions",
    desc: "Designed simulator collects ta about current state of atmosphere, and render changes onto the screen.",
    tags: ["OpenGL", "C++", "Graphics", "Simulation"],
    emoji: "🖥️🧑‍💻🧪",
    category: "Computer-Graphics",
    link: "https://github.com/sssangeetha/Graphical-Simulation-of-Weather-Conditions",
  },
  {
    title: "Prompt Chaining",
    desc: "Built BI dashboards with Tableau & Grafana for pipeline performance, SLOs, and data health visualization.",
    tags: ["RAG + Context", "JSON", "Verification Loops"],
    emoji: "📊",
    category: "GEN-AI",
    link: "https://github.com/sssangeetha/Prompt-Chaining",
  },
  {
    title: "Food Dash App",
    desc: "Next.js + Go microservice app for restaurant ordering with Stripe integration and real-time updates.",
    tags: ["Javascript", "Firebase", "Go", "Next.js", "PostgreSQL", "Stripe"],
    emoji: "🍔",
    category: "Front-End Applications",
    link: "https://github.com/sssangeetha/Food-Dash-App",
  },
  {
    title: "Hospital Management Systsem",
    desc: "Designed Hospital Database Management System that keeps track of all records associated with every activity in the organization.",
    tags: ["JSP", "MYSQL", "Java", "HTML", "CSS","Hibernate", "Tomcat"],
    emoji: "🏥",
    category: "Front-End Applications",
    link:"https://github.com/sssangeetha/Hospital_Management_System_Project",
  },
];



const posts = [
  {
    title: "RAG, but make it Reliable: Verification Loops that actually help",
    date: "Oct 2025",
    link: "https://medium.com/@SangeethaJannapu/rag-but-make-it-reliable-verification-loops-that-actually-help-66fb279ec722",
  },
  { title: "DocumentAutomation: using OCR Techniques:", date: "Aug 2025",
link: "https://www.linkedin.com/posts/sangeetha-jannapu_documentautomation-ocr-dataextraction-activity-7384384257022099456-ky7B?utm_source=share&utm_medium=member_desktop&rcm=ACoAABu4m6EB8pZwOKkD6ynFgQTFDGVBlqtmi9U",},
{title: "From 0 to 99.9%: Observability with OpenTelemetry & Grafana", date:"Jan 2025", link: "https://medium.com/@SangeethaJannapu/from-0-to-99-9-observability-with-opentelemetry-grafana-825ed48054d8",},
{ title: "Advanced Dashboard Capabilities in Cognos Analytics", date: "Jul 2024", link: "https://www.linkedin.com/posts/activity-7207031505091522562-OWp0?utm_source=share&utm_medium=member_desktop&rcm=ACoAABu4m6EB8pZwOKkD6ynFgQTFDGVBlqtmi9U",},
  {title: "Top Data Storage Services and Processing Services in Azure which can surprise you !!", date: "Aug 2024", link : "https://medium.com/@SangeethaJannapu/top-data-storage-services-and-processing-services-in-azure-which-can-surprise-you-3fdf39b2d0c4",},
];


const messages = [
  "Building Reliable Systems 💻 🧱➡️🧠🔄",
  "Designing AI-powered experiences 🤖",
  "Optimizing microservices for speed ⏱️📉⚙️ ",
  "Creating meaningful API-End Points and Microservices 🔗🧩⚙️",
  "Connecting Backend Systems to Automated AI workflows 🌐📡→🤖📈",
  "Automating AI Systems in the cloud ☁️",
];


export default function App() {
    const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2500); // change every 2.5s
    return () => clearInterval(interval);
  }, []);
  const [category, setCategory] = useState("All");
const filteredProjects =
  category === "All" ? projects : projects.filter((p) => p.category === category);

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-white">
      {/* Top Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-zinc-900/70 border-b border-zinc-200/60 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <a
  href="/Sri Sai Sangeetha.pdf"
  download
  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base transition-colors"
>
  Download Resume
</a>
          <nav className="flex items-center gap-5">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#writing">Writing</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="about" className="max-w-6xl mx-auto px-6 sm:px-8 py-24 sm:py-28">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-1 text-xs mb-6">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Open to SDE/SRE/Front-End/Back-End/Python Dev roles</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              Hi, I'm Sangeetha Jannapureddy
            </h1>
            {/* 👇 Animated messages */}
      <div className="mt-3 h-14 overflow-hidden relative text-2xl text-emerald-600 dark:text-emerald-400 font-medium">
        <div
          key={index}
          className="absolute inset-0 flex items-center justify-start animate-fadeSlide"
        >
          {messages[index]}
        </div>
      </div>
            <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl">
              Software Engineer building AI-powered, cloud-native systems. I work across building
              event-driven microservices, and production ML (RAG, OCR for Computer Vision). Passionate about low-latency APIs,
              reliable data pipelines, and beautiful, usable interfaces.
              I design scalable, cloud-native systems integrating it with AI-powered automation. I have solid foundation on using React.js,
              Node.js, Vue.js, Next.js, Bootstrap, CSS, HTML  for Front-end development and Python, Golang, Express.js, Spring Boot, Django, Fast API for Back-end development
              on AWS/Azure, with solid DSA/Algo at the core.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Pill>Python</Pill>
              <Pill>Golang</Pill>
              <Pill>Java</Pill>
              <Pill>Spring Boot</Pill>
              <Pill>FastAPI</Pill>
              <Pill>Kafka</Pill>
              <Pill>Docker</Pill>
              <Pill>Kubernetes</Pill>
              <Pill>AWS / Azure</Pill>
              <Pill>React / Next.js</Pill>
              <Pill>Node.js</Pill>
            </div>
          </div>

          {/* Avatar / Accent */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-200 via-sky-200 to-fuchsia-200 dark:from-emerald-900/40 dark:via-sky-900/40 dark:to-fuchsia-900/40" />
            <div className="absolute inset-0 flex items-center justify-center">
            <img
      src="/mypic.jpg"
      alt="Sangeetha Jannapureddy"
      className="size-60 sm:size-45 rounded-full border-4 border-white dark:border-zinc-800 object-cover shadow-lg"
    />
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
<Section id="experience" title="Experience" subtitle="What I’ve Built and Owned">
<div className="grid sm:grid-cols-2 gap-6">

{/* --- Outamation Applied AI Research --- */}
<Card>
  <div className="flex items-start justify-between gap-4">
    <div>
      <h3 className="font-semibold text-lg">Applied AI Research Extern — Outamation</h3>
      <p className="text-sm text-zinc-500">Oct 2025 – Present · United States</p>
    </div>
    <Pill>Python · OCR · RAG · LlamaIndex · LangChain</Pill>
  </div>
  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 list-disc list-inside">
    <li>Built modular, AI-powered pipelines to process 200+ page mortgage blob files — integrating OCR (<strong>Tesseract</strong>, <strong>PaddleOCR</strong>), PDF parsing (<strong>PyMuPDF</strong>), and <strong>RAG</strong> for data extraction, classification, and semantic search.</li>
    <li>Developed a document retrieval system using <strong>LlamaIndex</strong> and <strong>Retrieval-Augmented Generation (RAG)</strong>, tuned for multi-document mortgage blobs. Improved retrieval precision via chunk tuning, metadata filtering, and evaluation of open-source LLMs like <strong>Mistral</strong> and <strong>Phi-2</strong>.</li>
    <li>Conducted end-to-end evaluation on 200+ page documents — benchmarking OCR accuracy, RAG retrieval quality, and model routing. Authored a technical report detailing optimization trade-offs, architecture, and deployment recommendations with demo UI integration.</li>
  </ul>
</Card>

{/* --- Blue Cross Blue Shield Association --- */}
<Card>
  <div className="flex items-start justify-between gap-4">
    <div>
      <h3 className="font-semibold text-lg">Software Engineer — SystechCorp (Client: Blue Cross Blue Shield Association)</h3>
      <p className="text-sm text-zinc-500">Oct 2024 – Present · New Jersey, USA</p>
    </div>
    <Pill>Java · Golang · Spring Boot · AWS · Kafka · Python · Unix </Pill>
  </div>
  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 list-disc list-inside">
    <li>Automated CI/CD delivery using Docker, Kubernetes & Jenkins, achieving <strong>99.9% uptime</strong> and cutting release cycles by 45%.</li>
    <li>Developed secure Spring Boot microservices and Python data pipelines on AWS (RDS/S3) with Kafka & IBM MQ integration.</li>
    <li>Implemented Spring Security (JWT) and data validation layers to boost scalability by <strong>40%</strong> and API performance by <strong>35%</strong>.</li>
    <li>Built React dashboards with Pandas/Matplotlib for real-time validation & analytics, reducing manual reporting by <strong>60%</strong>.</li>
  </ul>
</Card>

{/* --- Saven Technologies --- */}
<Card>
  <div className="flex items-start justify-between gap-4">
    <div>
      <h3 className="font-semibold text-lg">Software Intern — Saven Technologies Inc.</h3>
      <p className="text-sm text-zinc-500">Jun 2023 – Jul 2023 · South Plainfield, NJ</p>
    </div>
    <Pill>Python · Scala · LangChain · Docker · REST API's · Gemini AI · EDA </Pill>
  </div>
  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 list-disc list-inside">
    <li>Developed NLP/ML resume-parsing pipelines (NER, tokenization, section classification) using <strong>Python</strong>, <strong>Scala</strong>, and <strong>LangChain</strong> with Gemini AI.</li>
    <li>Improved hire-likelihood model accuracy by <strong>15%</strong> (F1 = 0.92) through feature optimization and clustering algorithms.</li>
    <li>Built Node.js ingestion services using Redis Streams and sharded MongoDB, ensuring scalability and low-latency performance.</li>
    <li>Implemented CI/CD via Docker & Jenkins, reducing release time by <strong>35%</strong> and post-deployment issues by <strong>22%</strong>.</li>
  </ul>
</Card>

{/* --- Harman International --- */}
<Card>
  <div className="flex items-start justify-between gap-4">
    <div>
      <h3 className="font-semibold text-lg">Associate Engineer — Harman Connected Services</h3>
      <p className="text-sm text-zinc-500">Oct 2021 – Jul 2022 · Bengaluru, India</p>
    </div>
    <Pill>Java · Golang · React.js · Vue.js · Spring Boot · AWS · Kafka · Python · Docker · Kubernetes</Pill>
  </div>
  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 list-disc list-inside">
    <li>Developed high-throughput microservices (Java/Golang) handling <strong>1M+ messages/day</strong> with sub-100ms latency for IoT vehicles.</li>
    <li>Built real-time data ingestion & device shadow APIs for automotive orchestration, telemetry, and OTA updates.</li>
    <li>Enhanced observability by <strong>30%</strong> using Grafana & Prometheus integrated with OpenTelemetry tracing.</li>
    <li>Automated deployments using Docker, Helm & Kubernetes, reducing manual intervention by <strong>40%</strong>.</li>
  </ul>
</Card>

{/* --- Infosys Limited --- */}
<Card>
  <div className="flex items-start justify-between gap-4">
    <div>
      <h3 className="font-semibold text-lg">System Engineering Intern — Infosys Limited</h3>
      <p className="text-sm text-zinc-500">Feb 2020 – Apr 2020 · Mysore, India</p>
    </div>
    <Pill>MERN Stack · MySQL · JavaScript</Pill>
  </div>
  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 list-disc list-inside">
    <li>Developed an enterprise-grade web app using MERN stack, integrating optimized JDBC queries for efficient CRUD operations.</li>
    <li>Applied design patterns (Singleton, Factory, DAO) and implemented JUnit + Log4j testing framework for robust quality assurance.</li>
    <li>Built an Express middleware API gateway with JWT authentication, deployed on WebSphere for enterprise scalability.</li>
  </ul>
</Card>

</div>
</Section>




{/* Technical Skills */}
<Section
  id="skills"
  title="Technical Skills"
  subtitle="A blend of programming, cloud, and AI expertise"
>
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-zinc-700 dark:text-zinc-300">

    {/* Programming */}
    <div className="space-y-3">
      <h3 className="text-xl font-semibold flex items-center gap-2">
        🐍 Programming
      </h3>
      <p className="text-sm leading-relaxed">
        Python, Java, Go, C#, C, Scala, R, SQL, JavaScript (Node.js, Express), HTML5, CSS3, React.js, Spring Boot, Django, ASP.Net
      </p>
    </div>

    {/* Cloud Platforms */}
    <div className="space-y-3">
      <h3 className="text-xl font-semibold flex items-center gap-2">
        ☁️ Cloud & DevOps
      </h3>
      <p className="text-sm leading-relaxed">
        AWS (Lambda, S3, RDS, CloudFront, EKS), Azure (VM, Blob Storage, IAM), GCP, Databricks, Docker, Kubernetes, Jenkins, Helm, Bitbucket CI/CD
      </p>
    </div>

    {/* AI & Machine Learning */}
    <div className="space-y-3">
      <h3 className="text-xl font-semibold flex items-center gap-2">
        🤖 AI & Machine Learning
      </h3>
      <p className="text-sm leading-relaxed">
        TensorFlow, PyTorch, scikit-learn, LangChain, LlamaIndex, RAG Pipelines, OCR (Tesseract, PaddleOCR), Hugging Face, Claude AI, Gemini AI
      </p>
    </div>

    {/* Databases & Monitoring */}
    <div className="space-y-3">
      <h3 className="text-xl font-semibold flex items-center gap-2">
        🗄️ Databases & Monitoring
      </h3>
      <p className="text-sm leading-relaxed">
        MySQL, PostgreSQL, SQL Server, MongoDB, DB2, Elasticsearch, Grafana, Prometheus, Unit & Integration Testing
      </p>
    </div>

    {/* Visualization */}
    <div className="space-y-3">
      <h3 className="text-xl font-semibold flex items-center gap-2">
      💬 Soft Skills
      </h3>
      <p className="text-sm leading-relaxed">
      Leadership, technical writing, communication, adaptability, problem solving, time-management, stakeholder management
      </p>
    </div>

    {/* Tools & Collaboration */}
    <div className="space-y-3">
      <h3 className="text-xl font-semibold flex items-center gap-2">
        🧩 Tools & Collaboration
      </h3>
      <p className="text-sm leading-relaxed">
        Kafka, JIRA, Confluence, Git/GitHub, Agile Scrum, REST APIs, Microservices, Prometheus, Grafana
      </p>
    </div>

  </div>
</Section>

{/* Projects */}
<Section
  id="projects"
  title="My Projects"
  subtitle="A showcase of AI, cloud, and analytics solutions across domains"
>
  {/* Filter Buttons */}
  <div className="flex flex-wrap justify-center gap-3 mb-10">
    {["All", "Front-End Applications", "GEN-AI", "Machine-Learning","Computer-Graphics"].map((cat) => (
      <button
        key={cat}
        onClick={() => setCategory(cat)}
        className={`px-4 py-2 rounded-full border text-sm transition-colors ${
          category === cat
            ? "bg-emerald-600 text-white border-emerald-600"
            : "border-zinc-300 dark:border-zinc-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/40"
        }`}
      >
        {cat}
      </button>
    ))}
  </div>

  {/* Projects Grid */}
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
    {filteredProjects.map((p, i) => (
      <Card key={i}>
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            {p.emoji} {p.title}
          </h3>
        </div>
        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{p.desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
        {p.link && (
          <a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 text-sm text-emerald-600 hover:text-emerald-700 underline underline-offset-4"
          >
            View Details →
          </a>
        )}
      </Card>
    ))}
  </div>
</Section>


      {/* Writing */}
      <Section id="writing" title="Writing" subtitle="Posts and talks">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <Card key={i}>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold leading-snug pr-4">{post.title}</h3>
                <span className="text-xs text-zinc-500">{post.date}</span>
              </div>
              {post.link ? (
          <a
            href={post.link}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm underline underline-offset-4 text-emerald-600 hover:text-emerald-700"
          >
            Read →
          </a>
        ) : (
          <p className="mt-3 text-sm italic text-zinc-400">Coming soon...</p>
        )}



            </Card>
          ))}
        </div>
    </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" subtitle="Let’s build something together">
        {/* Send Me a Message form */}
<div className="mt-12 max-w-xl mx-auto text-left bg-white/70 dark:bg-zinc-900/60 backdrop-blur p-6 rounded-2xl shadow-lg">
  <h3 className="text-2xl font-semibold mb-4 text-center text-emerald-600 dark:text-emerald-400">
    Send Me a Message
  </h3>

  <form
    action="https://formspree.io/f/xvgwjyzd" 
    method="POST"
    className="space-y-5"
  >
    {/* Name */}
    <div>
      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
        Name *
      </label>
      <input
        type="text"
        name="name"
        required
        placeholder="Your full name"
        className="w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400 outline-none transition"
      />
    </div>

    {/* Email */}
    <div>
      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
        Email *
      </label>
      <input
        type="email"
        name="email"
        required
        placeholder="your.email@example.com"
        className="w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400 outline-none transition"
      />
    </div>

    {/* Message */}
    <div>
      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
        Message *
      </label>
      <textarea
        name="message"
        required
        rows="4"
        placeholder="Tell me about your project or inquiry..."
        className="w-full p-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400 outline-none transition"
      ></textarea>
    </div>
     
    {/* Submit */}
    <button
      type="submit"
      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition-colors"
    >
      Send Message
    </button>

    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3 text-center">
      By sending this message, you agree that I may contact you regarding your inquiry.
    </p>
  </form>
</div>
       <br></br>
        <div className="text-center text-xl text-zinc-600 dark:text-zinc-300">
          Email: <a href="mailto:saisangeetha99@gmail.com" className="underline">saisangeetha99@gmail.com</a><br />
          GitHub: <a href="https://github.com/sssangeetha" className="underline">sssangeetha</a> · LinkedIn: <a href="https://www.linkedin.com/in/sangeetha-jannapu/" className="underline">Sangeetha J.</a>
        </div>
      </Section>

      <footer className="py-10 text-center text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} Sangeetha Jannapureddy · Built with React + Tailwind</p>
      </footer>
    </main>
  );
}
