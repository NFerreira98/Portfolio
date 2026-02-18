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
            <div>
                <div>
                {/* Left Column */}
                    <div>
                        <span>About Me</span>
                    </div>
                </div>
            </div>
        </section>
        )


}