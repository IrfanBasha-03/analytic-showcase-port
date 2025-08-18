import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, ExternalLink } from "lucide-react";

export const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "DevOps Engineer & Data Analyst";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen hero-gradient relative flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl floating"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-tech-accent/10 rounded-full blur-xl floating" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-data-viz/10 rounded-full blur-xl floating" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">John Smith</span>
          </h1>
          
          <div className="text-2xl md:text-3xl mb-8 min-h-[3rem] flex items-center justify-center">
            <span className="text-foreground/80">
              {displayedText}
              <span className="typing-cursor text-primary"></span>
            </span>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about building scalable infrastructure and extracting insights from data. 
            Specialized in cloud technologies, automation, and advanced analytics to drive business growth.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary tech-glow transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary/60" />
        </div>
      </div>
    </section>
  );
};