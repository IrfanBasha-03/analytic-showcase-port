import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target, Code, Smartphone, Globe, Bot, Coffee, Book } from "lucide-react";

const moreProjectsData = {
  5: {
    title: "E-commerce Mobile App UI",
    description: "Designed and prototyped a modern e-commerce mobile application with smooth animations and intuitive user experience using Figma.",
    longDescription: "This mobile app UI project demonstrates my understanding of user-centered design principles and modern mobile interface patterns. I created a comprehensive e-commerce experience focusing on intuitive navigation, engaging product discovery, and streamlined checkout processes. The design emphasizes accessibility, visual hierarchy, and micro-interactions to create a delightful shopping experience.",
    technologies: ["Figma", "Prototyping", "UI/UX", "Mobile Design"],
    features: [
      "Interactive prototype with smooth transitions",
      "Modern card-based product layouts",
      "Intuitive navigation and search functionality",
      "Streamlined checkout process design",
      "Dark and light theme variants",
      "Responsive design for different screen sizes"
    ],
    challenges: [
      "Creating a cohesive visual design system",
      "Balancing aesthetics with usability principles",
      "Designing for different mobile screen sizes",
      "Implementing engaging micro-interactions"
    ],
    outcomes: [
      "15+ polished screen designs",
      "Interactive prototype ready for user testing",
      "Positive feedback from design review sessions",
      "Enhanced understanding of mobile UX patterns"
    ],
    duration: "3 weeks",
    role: "UI/UX Designer",
    status: "Design",
    icon: Smartphone
  },
  6: {
    title: "Weather Forecast API",
    description: "Built a RESTful API that aggregates weather data from multiple sources and provides clean, formatted responses with caching for better performance.",
    longDescription: "This backend project showcases my ability to design and implement scalable API solutions. The weather forecast API aggregates data from multiple weather services, implements intelligent caching strategies, and provides clean, consistent responses. The project emphasizes performance optimization, error handling, and API design best practices.",
    technologies: ["Node.js", "Express", "Redis", "OpenWeather API", "MongoDB"],
    features: [
      "RESTful API with multiple endpoints",
      "Data aggregation from multiple weather sources",
      "Redis caching for improved performance",
      "Comprehensive error handling and validation",
      "Rate limiting and API security measures",
      "Detailed API documentation"
    ],
    challenges: [
      "Handling data inconsistencies between API sources",
      "Implementing efficient caching strategies",
      "Managing API rate limits and quotas",
      "Ensuring reliable error handling and recovery"
    ],
    outcomes: [
      "Successfully deployed API handling 1000+ requests daily",
      "Achieved 95% uptime with proper monitoring",
      "Reduced response times by 60% with caching",
      "Gained expertise in backend API development"
    ],
    duration: "4 weeks",
    role: "Backend Developer",
    status: "Complete",
    icon: Globe
  },
  7: {
    title: "AI Chatbot Assistant",
    description: "Developed a simple chatbot using natural language processing that can answer basic questions and help with task automation.",
    longDescription: "This AI project explores natural language processing and conversational interfaces. The chatbot uses modern NLP techniques to understand user queries and provide helpful responses. The project includes context awareness, learning capabilities, and integration with external APIs to provide dynamic responses and task automation features.",
    technologies: ["Python", "NLTK", "Flask", "OpenAI API", "SQLite"],
    features: [
      "Natural language understanding and processing",
      "Context-aware conversation handling",
      "Integration with external APIs for dynamic responses",
      "Learning from user interactions",
      "Task automation and reminder capabilities",
      "Web interface for easy interaction"
    ],
    challenges: [
      "Understanding natural language processing concepts",
      "Implementing context awareness in conversations",
      "Handling ambiguous user queries effectively",
      "Balancing automation with user control"
    ],
    outcomes: [
      "Successfully handles 80% of common user queries",
      "Implemented basic learning and adaptation features",
      "Gained hands-on experience with AI/ML concepts",
      "Built foundation for more advanced NLP projects"
    ],
    duration: "5 weeks",
    role: "AI Developer",
    status: "Learning",
    icon: Bot
  },
  8: {
    title: "Coffee Shop Management System",
    description: "Created a full-stack web application for managing coffee shop operations including inventory, orders, and customer management.",
    longDescription: "This full-stack project demonstrates my ability to build complete business solutions. The coffee shop management system handles all aspects of cafe operations from inventory tracking to customer orders and staff management. The application emphasizes user experience for both customers and staff while maintaining robust data management and reporting capabilities.",
    technologies: ["React", "Node.js", "MySQL", "JWT", "Bootstrap"],
    features: [
      "Complete inventory management system",
      "Point-of-sale interface for orders",
      "Customer relationship management",
      "Staff scheduling and management",
      "Sales reporting and analytics",
      "Mobile-responsive admin dashboard"
    ],
    challenges: [
      "Designing complex database relationships",
      "Implementing secure authentication and authorization",
      "Creating intuitive interfaces for different user roles",
      "Ensuring data consistency across the application"
    ],
    outcomes: [
      "Successfully deployed system for local coffee shop",
      "Reduced order processing time by 40%",
      "Implemented automated inventory alerts",
      "Gained experience in full-stack development"
    ],
    duration: "6 weeks",
    role: "Full-Stack Developer",
    status: "Active",
    icon: Coffee
  },
  9: {
    title: "Learning Management System",
    description: "Built a platform for online learning with course creation, student enrollment, progress tracking, and quiz functionality.",
    longDescription: "This educational technology project showcases my ability to build complex, multi-user systems. The learning management system supports course creation, student enrollment, progress tracking, and assessment tools. The platform emphasizes accessibility, user engagement, and comprehensive learning analytics to support both educators and students.",
    technologies: ["Vue.js", "Laravel", "PostgreSQL", "Redis", "Docker"],
    features: [
      "Multi-role user management (students, instructors, admins)",
      "Course creation and content management tools",
      "Interactive quiz and assessment engine",
      "Progress tracking and analytics dashboard",
      "Discussion forums and messaging system",
      "Mobile-responsive design for all devices"
    ],
    challenges: [
      "Managing complex user roles and permissions",
      "Building scalable quiz and grading systems",
      "Implementing real-time progress tracking",
      "Ensuring platform security and data privacy"
    ],
    outcomes: [
      "Successfully supports 200+ users across multiple courses",
      "Implemented comprehensive progress analytics",
      "Built reusable course content templates",
      "Gained expertise in educational technology"
    ],
    duration: "8 weeks",
    role: "Full-Stack Developer",
    status: "Development",
    icon: Book
  },
  10: {
    title: "Code Snippet Manager",
    description: "Developed a personal tool to organize, search, and share code snippets with syntax highlighting and categorization features.",
    longDescription: "This developer tool project addresses the common need for organizing and sharing code snippets efficiently. The application provides advanced search capabilities, syntax highlighting, and collaborative features. The project emphasizes developer experience, performance, and the ability to quickly find and share useful code examples.",
    technologies: ["React", "TypeScript", "Prisma", "Next.js", "Tailwind"],
    features: [
      "Advanced search and filtering capabilities",
      "Syntax highlighting for 50+ programming languages",
      "Categorization and tagging system",
      "Code sharing and collaboration features",
      "Import/export functionality for backup",
      "Dark theme with customizable editor settings"
    ],
    challenges: [
      "Implementing efficient search across large code collections",
      "Building flexible categorization system",
      "Ensuring fast syntax highlighting performance",
      "Creating intuitive sharing and collaboration features"
    ],
    outcomes: [
      "Successfully organizing 500+ code snippets",
      "Implemented fuzzy search with 95% accuracy",
      "Built sharing features used by 50+ developers",
      "Increased coding productivity by 30%"
    ],
    duration: "4 weeks",
    role: "Frontend Developer",
    status: "Personal",
    icon: Code
  }
};

export const MoreProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const projectId = parseInt(id || '0');
  const project = moreProjectsData[projectId as keyof typeof moreProjectsData];
  
  if (!project || !id || isNaN(projectId)) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/more-projects')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to More Projects
          </Button>
        </div>
      </div>
    );
  }

  const IconComponent = project.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/20 backdrop-blur">
        <div className="container mx-auto px-4 py-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/more-projects')}
            className="mb-4 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to More Projects
          </Button>
          <div className="flex items-center gap-4 mb-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <IconComponent className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-gradient">{project.title}</h1>
            <Badge variant="outline" className="bg-success/10 text-success border-success/30">
              {project.status}
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground">{project.description}</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <Card className="card-gradient border-border/50 p-8">
              <h2 className="text-2xl font-semibold mb-4 text-card-foreground">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
            </Card>

            {/* Key Features */}
            <Card className="card-gradient border-border/50 p-8">
              <h2 className="text-2xl font-semibold mb-6 text-card-foreground">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-card-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Challenges & Solutions */}
            <Card className="card-gradient border-border/50 p-8">
              <h2 className="text-2xl font-semibold mb-6 text-card-foreground">Challenges & Learning</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-warning/10 rounded-lg border border-warning/20">
                    <Target className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-card-foreground">{challenge}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Outcomes */}
            <Card className="card-gradient border-border/50 p-8">
              <h2 className="text-2xl font-semibold mb-6 text-card-foreground">Results & Outcomes</h2>
              <div className="space-y-4">
                {project.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-success/10 rounded-lg border border-success/20">
                    <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-card-foreground">{outcome}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <Card className="card-gradient border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-4 text-card-foreground">Project Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="text-sm font-medium text-card-foreground">{project.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Role</p>
                    <p className="text-sm font-medium text-card-foreground">{project.role}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Technologies */}
            <Card className="card-gradient border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-4 text-card-foreground">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-primary hover:bg-primary/90">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
              <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/10">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};