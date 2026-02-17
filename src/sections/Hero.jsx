
export const Hero = () => {

    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
            <img 
            src="/projects/Portfolio-BG.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40" 
            />
            <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"/>
        </div>

        {/* Green Dots */}
        <div>
            {[...Array(30)].map((_, i) => (
                <div 
                className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                style={{
                    backgroundColor: "#20B2A6",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                }}
                />
            ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
 
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"  />
                        Software Engineer
                        </span>
                        
                    </div>

                    {/* Headline */}
                    <div className="space-y-4">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                        Building <span className="text-primary glow-text">software solutions</span>
                        <br />
                        to empower others and 
                        <br />
                        <span className="font-serif italic font-normal text-white">
                        drive innovation.
                        </span>
                        
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                        Hello, I'm Nicholas Ferreira, a software engineer who specializes in 
                        backend development primarily using Python. I'm passionate about learning new 
                        technologies that improve other's lives.
                    </p>
                </div>

                </div>
                {/* Right Column - Image */}
                <div>

                </div>

            </div>

        </div>

    </section>
    );

}