import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Senior DevOps Engineer & Data Analyst",
    duration: "2022 - Present",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Leading infrastructure automation and data analytics initiatives across multi-cloud environments.",
    achievements: [
      "Reduced infrastructure costs by 45% through optimization and automation",
      "Built ML-powered monitoring system increasing incident detection by 90%",
      "Led team of 6 engineers in migrating legacy systems to cloud-native architecture",
      "Designed data pipelines processing 50TB+ daily with 99.99% reliability"
    ],
    technologies: ["AWS", "Kubernetes", "Python", "Terraform", "Apache Spark"]
  },
  {
    id: 2,
    company: "DataFlow Analytics",
    position: "DevOps Engineer",
    duration: "2020 - 2022",
    location: "New York, NY",
    type: "Full-time",
    description: "Specialized in building scalable data infrastructure and implementing CI/CD best practices.",
    achievements: [
      "Implemented GitOps workflows reducing deployment time by 80%",
      "Built real-time analytics platform serving 1M+ users",
      "Achieved 99.9% uptime through proactive monitoring and automation",
      "Mentored 4 junior engineers in DevOps best practices"
    ],
    technologies: ["Docker", "Jenkins", "Elasticsearch", "Redis", "PostgreSQL"]
  },
  {
    id: 3,
    company: "CloudFirst Startup",
    position: "Junior Data Engineer",
    duration: "2018 - 2020",
    location: "Austin, TX",
    type: "Full-time",
    description: "Focused on data pipeline development and infrastructure management for a fast-growing fintech startup.",
    achievements: [
      "Designed ETL processes handling 10M+ transactions daily",
      "Implemented automated testing reducing data quality issues by 70%",
      "Built monitoring dashboards providing real-time business insights",
      "Contributed to scaling infrastructure from 10K to 1M+ users"
    ],
    technologies: ["Python", "Apache Airflow", "MySQL", "AWS Lambda", "Grafana"]
  }
];

export const ExperienceSection = () => {
  return (
    <section className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Professional Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Progressive career growth with increasing responsibilities in DevOps and data analytics
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-tech-accent to-data-viz opacity-30"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background glow-effect"></div>
                  
                  <div className="ml-20">
                    <Card className="card-gradient border-border/50 p-8 hover:scale-[1.02] transition-all duration-300">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <Building className="w-5 h-5 text-primary" />
                            <h3 className="text-xl font-semibold text-card-foreground">{exp.company}</h3>
                            <Badge className="bg-primary/10 text-primary border-primary/20">
                              {exp.type}
                            </Badge>
                          </div>
                          
                          <h4 className="text-lg font-medium text-tech-accent mb-2">{exp.position}</h4>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>
                          
                          <div className="space-y-2 mb-6">
                            <h5 className="font-medium text-card-foreground">Key Achievements:</h5>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs border-primary/30 text-primary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};