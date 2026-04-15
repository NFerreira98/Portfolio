
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden text-secondary-foreground">
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-16 justify-between items-start">
        <div className="md:w-1/2">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Let's Connect</h2>
          <p className="text-muted-foreground mb-8">
            I'm always open to discussing web application development, machine learning optimization, and backend software engineering opportunities.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <a href="mailto:nicholasjferreira98@gmail.com" className="hover:text-primary transition-colors font-medium">
                  nicholasjferreira98@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="text-primary w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <a href="tel:+19255862076" className="hover:text-primary transition-colors font-medium">
                  (925) 586-2076
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MapPin className="text-primary w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="font-medium">Bay Area, CA</div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 glass rounded-2xl p-8 w-full max-w-md">
          <h3 className="text-2xl font-bold mb-6">Find me online</h3>
          <div className="flex gap-4">
            <a href="https://github.com/NFerreira98" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl glass hover:bg-primary/10 transition-colors">
              <Github className="w-6 h-6" />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/nicholas-ferreiraswe" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl glass hover:bg-primary/10 transition-colors">
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};