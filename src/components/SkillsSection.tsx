import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  level: number;
  category: 'devops' | 'data' | 'cloud' | 'programming';
}

const skills: Skill[] = [
  { name: 'Docker & Kubernetes', level: 95, category: 'devops' },
  { name: 'AWS/Azure/GCP', level: 90, category: 'cloud' },
  { name: 'Python', level: 88, category: 'programming' },
  { name: 'Terraform', level: 85, category: 'devops' },
  { name: 'Data Analytics', level: 92, category: 'data' },
  { name: 'CI/CD Pipelines', level: 93, category: 'devops' },
  { name: 'SQL & NoSQL', level: 87, category: 'data' },
  { name: 'Monitoring & Alerting', level: 89, category: 'devops' },
  { name: 'Machine Learning', level: 80, category: 'data' },
  { name: 'Infrastructure as Code', level: 91, category: 'cloud' },
];

const categoryColors = {
  devops: 'bg-primary/10 text-primary border-primary/20',
  data: 'bg-data-viz/10 text-data-viz border-data-viz/20',
  cloud: 'bg-tech-accent/10 text-tech-accent border-tech-accent/20',
  programming: 'bg-warning/10 text-warning border-warning/20',
};

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Technical Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning DevOps practices, data science, and cloud technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={skill.name} className="card-gradient border-border/50 p-6 group hover:scale-105 transition-all duration-300">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-card-foreground">{skill.name}</h3>
                <Badge className={categoryColors[skill.category]}>
                  {skill.category.toUpperCase()}
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Proficiency</span>
                  <span className="text-primary font-medium">{skill.level}%</span>
                </div>
                
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-tech-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gradient">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['AWS Solutions Architect', 'Kubernetes Administrator', 'Terraform Associate', 'Azure Data Engineer'].map((cert) => (
              <Badge key={cert} variant="outline" className="px-4 py-2 text-sm border-primary/30 text-primary hover:bg-primary/10">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};