
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Coding Instructor",
    company: "Hackingtons",
    logos: [{ src: "/projects/hackingtons-logo.jpeg", scale: "scale-100" }],
    date: "Jan 2026 — Present",
    description: [
      "Teach project-based coding to ~45 students per day in web dev, Python, game dev, and intro circuits.",
      "Set up and maintain classroom tech (browsers, Scratch, IDEs, drivers) and triage common issues including account login, permissions, and device quirks.",
      "Diagnose and resolve student code issues in real time including syntax, logic, and input bugs."
    ]
  },
  {
    title: "Machine Learning Researcher",
    company: "CSU East Bay & UC Merced & Google",
    logos: [
      { src: "/projects/CSUEB-logo.svg", scale: "scale-100" }, 
      { src: "/projects/google-logo.webp", scale: "scale-125" }
    ],
    date: "Aug 2024 — Aug 2025",
    description: [
      "Assessed privacy risks in large language models by creating Python-based evaluation pipelines to test model behavior on sensitive inputs and identify where private data might be exposed.",
      "Developed privacy-preserving techniques performed on Llama and CLIP to discourage memorization and reduce training-data leakage.",
      "Designed reproducible Python environments and validated results with test datasets and scripted checks."
    ]
  },
  {
    title: "Student Technical Assistant",
    company: "CSU East Bay MESA University",
    logos: [{ src: "/projects/mesa-logo.png", scale: "scale-140" }],
    date: "Aug 2024 — Dec 2024",
    description: [
      "Provided front-line support at workshops/hackathons (Windows sign-in/profile, MS365/Outlook setup, Wi-Fi/printing, AV/projectors).",
      "Developed and maintained a responsive hackathon website using HTML, CSS, and JavaScript to handle registration and event updates, attracting 200+ visitors.",
      "Hosted a workshop on using Git and GitHub, teaching 25 attendees version control and collaboration techniques for projects."
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Lawrence Berkeley National Laboratory",
    logos: [{ src: "/projects/LBNL-logo.png", scale: "scale-175" }],
    date: "Jun 2024 — Aug 2024",
    description: [
      "Developed algorithms to improve capabilities of web-based 3D visualization tools for large-scale micro-ct data sets collected at the Advanced Light Source synchrotron.",
      "Leveraged NumPy and itkwidgets in Jupyter Notebook for real-time visualization of data sets and to develop 30 test cases for algorithm validation.",
      "Wrote unit tests using PyTest to ensure algorithm reliability, robustness, and correctness.",
      "Delivered a poster presentation of findings to an audience of 50+ researchers and scientists at Berkeley Lab."
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden text-secondary-foreground">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Work & Research</h2>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="md:col-span-1 mb-4 md:mb-0 text-muted-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.date}</span>
                </div>
                <div className="md:col-span-3">
                  <div className="flex items-center gap-4 mb-4">
                    {exp.logos && exp.logos.map((logoObj, i) => (
                      <div key={i} className="w-14 h-14 rounded-xl glass p-2 flex items-center justify-center shrink-0">
                        <img 
                          src={logoObj.src} 
                          alt={`${exp.company} logo ${i + 1}`} 
                          className={`max-w-full max-h-full object-contain rounded-md transition-transform ${logoObj.scale}`} 
                        />
                      </div>
                    ))}
                    <div>
                      <h3 className="text-2xl font-bold">{exp.title}</h3>
                      <div className="text-primary font-medium flex items-center gap-2 mt-1">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};