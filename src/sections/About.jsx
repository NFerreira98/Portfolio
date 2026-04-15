import { Rocket, Sparkles, Users, Wrench } from "lucide-react";

const highlights = [
    {
    icon: Users,
    title: "Collaboration",
    description: "I communicate and collaborate across academics, research, work experience, and hackathons.",
    },

    {
        icon: Rocket,
        title: "Purpose-Driven",
        description: "Every product I build is designed to solve a problem and make a positive impact on others' lives.",
        },
    
    {
        icon: Sparkles,
        title: "Continuous Learner",
        description: "I'm committed to growing my skills and knowledge in unfamiliar technologies, and I thrive in new environments.",
        },

    {
        icon: Wrench,
        title: "Engineering Quality",
        description: "I write reliable code with testing (PyTest), edge-case handling, and clear structure to ease the debugging process.",
        },
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-primary text-sm font-medium tracking-wider uppercase">About Me</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Building software solutions,
                            <span className="font-serif italic font-semibold text-highlight"> to make a difference</span>
                        </h2>
                        
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                Hi, I'm Nicholas Ferreira, a Computer Science student graduated from California State University East Bay with my Bachelor of Science and a 4.0 GPA. 
                                I have a passion for backend development, machine learning optimization, and creating intuitive user experiences.
                            </p>
                            <p>
                                I specialize in Python, C++, and Java, consistently exploring modern web technologies like React, Next.js, and Cloud services (GCP).
                            </p>
                            <p>
                                Outside of my core coursework, I act as a Coding Instructor and participate in hackathons. My latest win was 1st place for Best Use of Active Loop at the Weights & Biases AI Agent Hackathon!
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="grid grid-cols-2 gap-4">
                        {highlights.map((highlight, idx) => {
                        const Icon = highlight.icon; // Capitalize reference
                        return (
                            <div key={idx} className="glass p-6 rounded-xl hover:bg-primary/5 transition-colors group">
                                <Icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-bold text-highlight tracking-wide mb-2">{highlight.title}</h3>
                                <p className="text-sm text-muted-foreground">{highlight.description}</p>
                            </div>
    );
})}
                    </div>
                </div>
            </div>
        </section>
    );
};