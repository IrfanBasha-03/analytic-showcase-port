import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection } from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      
      {/* More Projects CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gradient">Want to See More?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore additional projects showcasing diverse technical skills and continuous learning
          </p>
          <Button 
            onClick={() => navigate('/more-projects')}
            className="bg-primary hover:bg-primary/90 gap-2"
            size="lg"
          >
            View More Projects
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
      
      <EducationSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-background/80 border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Irfan Basha. Fresh graduate ready to make an impact in tech.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;