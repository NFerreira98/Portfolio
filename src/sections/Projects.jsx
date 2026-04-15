
import { FolderGit2, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Second Sight – AI-Powered Surveillance System",
    link: "https://github.com/NFerreira98/Second-Sight",
    date: "Feb 2025 - Present",
    award: "1st place for Best Use of Active Loop @ Weights & Biases AI Agent Hackathon",
    description: "AI-driven security solution to repurpose old devices and allow video querying with natural language. It uses OpenCV, Google Gemini, ActiveLoop’s Deep Lake, and Next.js with WebSockets."
  },
  {
    title: "Java Banking App",
    link: "https://github.com/NFerreira98/Banking-System",
    date: "Jan 2025",
    description: "Client/server application featuring account operations, input validation, and structured logging. Tested with a comprehensive JUnit suite."
  },
  {
    title: "110 Lunar - AI Grading Assistant",
    link: "https://github.com/EugeneVuong/aiforgood",
    date: "Mar 2025",
    award: "Runner Up @ AI For Good Hackathon",
    description: "An adaptive AI grading assistant built to accelerate essay feedback for 826 Valencia staff. It evaluates student writing against rubrics to generate estimated scores and suggestions. The system learns from teacher revisions and tracks student writing improvement over time."
  },
  
  {
    title: "StageReady - AI Presentation Coach",
    link: "https://github.com/1meza/StageReady",
    date: "Oct 2024",
    description: "Web-based public speaking app utilizing Hume AI for emotion analysis, Deepgram for voice transcription, and Groq for real-time speech scoring and feedback."
  },
  {
    title: "Zepptchi - Gamified Exercise App",
    link: "https://devpost.com/software/zepptchi",
    date: "Oct 2023",
    award: "5th place for Best Use of ZeppOS @ UC Berkeley CalHacks",
    description: "Developed a smartwatch game app promoting physical activity through a digital pet system using JavaScript and Zepp OS"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden text-secondary-foreground">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Personal Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="glass rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-colors flex flex-col h-full">
              <div className="flex justify-between items-start mb-6 text-primary">
                <FolderGit2 className="w-10 h-10" />
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                )}
              </div>
              
              <h3 className="text-xl font-extrabold mb-2 text-highlight">{proj.title}</h3>
              <div className="text-sm text-primary/80 mb-4">{proj.date}</div>
              
              {proj.award && (
                <div className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full mb-4 inline-block font-medium">
                  {proj.award}
                </div>
              )}
              
              <p className="text-muted-foreground flex-grow">
                {proj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};