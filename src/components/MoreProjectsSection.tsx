import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Code, Smartphone, Globe, Bot, Coffee, Book, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const moreProjects = [
  {
    id: 5,
    title: "E-commerce Mobile App UI",
    description: "Designed and prototyped a modern e-commerce mobile application with smooth animations and intuitive user experience using Figma.",
    technologies: ["Figma", "Prototyping", "UI/UX", "Mobile Design"],
    metrics: ["15+ screens", "Interactive prototype", "User tested"],
    icon: Smartphone,
    status: "Design",
    demoLink: "https://www.figma.com/proto/demo-ecommerce",
    githubLink: "https://github.com/username/ecommerce-app-ui"
  },
  {
    id: 6,
    title: "Weather Forecast API",
    description: "Built a RESTful API that aggregates weather data from multiple sources and provides clean, formatted responses with caching for better performance.",
    technologies: ["Node.js", "Express", "Redis", "OpenWeather API", "MongoDB"],
    metrics: ["5 endpoints", "Caching layer", "Error handling"],
    icon: Globe,
    status: "Complete",
    demoLink: "https://weather-api-demo.herokuapp.com",
    githubLink: "https://github.com/username/weather-forecast-api"
  },
  {
    id: 7,
    title: "AI Chatbot Assistant",
    description: "Developed a simple chatbot using natural language processing that can answer basic questions and help with task automation.",
    technologies: ["Python", "NLTK", "Flask", "OpenAI API", "SQLite"],
    metrics: ["NLP integration", "Context awareness", "Learning bot"],
    icon: Bot,
    status: "Learning",
    demoLink: "https://ai-chatbot-demo.vercel.app",
    githubLink: "https://github.com/username/ai-chatbot-assistant"
  },
  {
    id: 8,
    title: "Coffee Shop Management System",
    description: "Created a full-stack web application for managing coffee shop operations including inventory, orders, and customer management.",
    technologies: ["React", "Node.js", "MySQL", "JWT", "Bootstrap"],
    metrics: ["Full CRUD", "Authentication", "Responsive UI"],
    icon: Coffee,
    status: "Active",
    demoLink: "https://coffee-shop-mgmt.netlify.app",
    githubLink: "https://github.com/username/coffee-shop-management"
  },
  {
    id: 9,
    title: "Learning Management System",
    description: "Built a platform for online learning with course creation, student enrollment, progress tracking, and quiz functionality.",
    technologies: ["Vue.js", "Laravel", "PostgreSQL", "Redis", "Docker"],
    metrics: ["Multi-role system", "Progress tracking", "Quiz engine"],
    icon: Book,
    status: "Development",
    demoLink: "https://lms-demo.herokuapp.com",
    githubLink: "https://github.com/username/learning-management-system"
  },
  {
    id: 10,
    title: "Code Snippet Manager",
    description: "Developed a personal tool to organize, search, and share code snippets with syntax highlighting and categorization features.",
    technologies: ["React", "TypeScript", "Prisma", "Next.js", "Tailwind"],
    metrics: ["Syntax highlighting", "Search function", "Categories"],
    icon: Code,
    status: "Personal",
    demoLink: "https://code-snippets-manager.vercel.app",
    githubLink: "https://github.com/username/code-snippet-manager"
  }
];

export const MoreProjectsSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">More Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Additional projects and experiments showcasing diverse technical skills and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moreProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.id} 
                className="card-gradient border-border/50 p-6 group hover:scale-[1.02] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-card-foreground truncate">{project.title}</h3>
                      <Badge variant="outline" className="text-xs bg-success/10 text-success border-success/30 shrink-0">
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-secondary/30 rounded-lg">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-sm font-bold text-primary">{metric.split(' ')[0]}</div>
                      <div className="text-xs text-muted-foreground">{metric.split(' ').slice(1).join(' ')}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90 text-xs"
                    onClick={() => navigate(`/more-project/${project.id}`)}
                  >
                    <Eye className="mr-1 h-3 w-3" />
                    View
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-primary/30 text-primary hover:bg-primary/10"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github className="h-3 w-3" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};