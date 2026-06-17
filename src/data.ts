export type FeaturedProject = {
  title: string;
  eyebrow: string;
  summary: string;
  proof: string[];
  tech: string[];
  links: {
    label: string;
    href: string;
  }[];
  image?: string;
};

export type Project = {
  title: string;
  category: string;
  summary: string;
  tech: string[];
  href: string;
  status: "case study" | "repository" | "supporting";
};

export const profileLinks = [
  { label: "GitHub", href: "https://github.com/emgarVIII" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/emgar/" },
  { label: "Email", href: "mailto:mgar888@utexas.edu" }
];

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Liar's Dice CFR Lab",
    eyebrow: "Imperfect-information AI research",
    summary:
      "A playable research demo for hidden-information decision making. I modeled a simplified Liar's Dice challenge game, trained a sampled CFR+ policy offline in Python, exported policy and metrics JSON, and built a static TypeScript site around the result.",
    proof: [
      "Self-play training pipeline",
      "Policy and metrics export",
      "Best-response diagnostics",
      "Static playable demo"
    ],
    tech: ["Python", "CFR+", "TypeScript", "Vite", "GitHub Pages"],
    links: [
      { label: "Open case study", href: "https://emgarviii.github.io/liars_dice/" },
      { label: "View repo", href: "https://github.com/emgarVIII/liars_dice" }
    ],
    image: "./assets/liars-dice-preview.png"
  },
  {
    title: "Stock and Crypto Relationship Analysis",
    eyebrow: "Data analysis and finance",
    summary:
      "A market-data analysis exploring whether BTC and ETH returns correlate with SPY ETF returns over daily observations from 2017 through 2024.",
    proof: [
      "Cross-market time-series framing",
      "SPY, BTC, and ETH comparison",
      "Research report output"
    ],
    tech: ["R", "Quarto", "HTML", "Finance data"],
    links: [
      {
        label: "View repo",
        href: "https://github.com/emgarVIII/stock_and_crypto_relationship_analysis"
      }
    ]
  }
];

export const projects: Project[] = [
  {
    title: "Mental Health ML",
    category: "Machine learning",
    summary:
      "A notebook-based analysis of mental health in the workplace, focused on insight generation and prediction.",
    tech: ["Jupyter Notebook", "Python", "ML analysis"],
    href: "https://github.com/emgarVIII/MentalHealthML",
    status: "supporting"
  },
  {
    title: "Anonymizer",
    category: "AI tooling",
    summary:
      "A Streamlit and PaLM 2 prototype for obfuscating source code before sharing sensitive repositories with AI tools.",
    tech: ["Python", "Streamlit", "LLM tooling"],
    href: "https://github.com/emgarVIII/anonymizer",
    status: "repository"
  },
  {
    title: "Playlistwiz",
    category: "Product prototype",
    summary:
      "A DJing tool prototype that explores playlist workflows and music selection utilities.",
    tech: ["Next.js", "CSS", "Product UI"],
    href: "https://github.com/emgarVIII/playlistwiz",
    status: "repository"
  },
  {
    title: "Top-K Hadoop",
    category: "Distributed systems",
    summary:
      "A Java Hadoop exercise for computing top-k results over text input with a packaged Maven workflow.",
    tech: ["Java", "Hadoop", "Maven"],
    href: "https://github.com/emgarVIII/topKHadoop",
    status: "supporting"
  },
  {
    title: "Click-a-Tune",
    category: "Mobile development",
    summary:
      "An Android/Kotlin project included as evidence of broader application-building experience.",
    tech: ["Kotlin", "Android"],
    href: "https://github.com/emgarVIII/click-a-tune",
    status: "supporting"
  }
];

export const capabilities = [
  {
    label: "AI/ML research engineering",
    detail:
      "Turning research ideas into runnable pipelines, exported artifacts, evaluations, and readable demos."
  },
  {
    label: "Data and uncertainty",
    detail:
      "Working with probabilistic decisions, hidden information, benchmark design, and stress testing."
  },
  {
    label: "Full-stack delivery",
    detail:
      "Building static sites, project documentation, front-end interfaces, and deployment workflows."
  },
  {
    label: "Communication",
    detail:
      "Framing technical work so a recruiter, engineer, or interviewer can understand what was built and what it proves."
  }
];
