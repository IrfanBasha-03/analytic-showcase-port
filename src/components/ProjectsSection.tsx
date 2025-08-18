import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, TrendingUp, Shield, Database, Cloud } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Multi-Cloud Infrastructure Automation",
    description: "Designed and implemented a Terraform-based multi-cloud infrastructure spanning AWS, Azure, and GCP with automated deployment pipelines.",
    technologies: ["Terraform", "AWS", "Azure", "GCP", "Jenkins"],
    metrics: ["99.9% uptime", "50% cost reduction", "80% faster deployments"],
    icon: Cloud,
    status: "Production",
    link: "#"
  },
  {
    id: 2,
    title: "Real-time Data Analytics Platform",
    description: "Built a scalable data pipeline processing 10M+ events daily with real-time dashboards and ML-powered insights for business intelligence.",
    technologies: ["Apache Kafka", "Spark", "Python", "Elasticsearch", "Kibana"],
    metrics: ["10M+ events/day", "Sub-second latency", "95% accuracy ML models"],
    icon: Database,
    status: "Production",
    link: "#"
  },
  {
    id: 3,
    title: "Zero-Trust Security Framework",
    description: "Implemented comprehensive security monitoring with automated threat detection and response across containerized microservices architecture.",
    technologies: ["Kubernetes", "Istio", "Falco", "Prometheus", "Grafana"],
    metrics: ["100% compliance", "90% threat detection", "5min response time"],
    icon: Shield,
    status: "Production",
    link: "#"
  },
  {
    id: 4,
    title: "Predictive Maintenance System",
    description: "Developed ML models for predictive maintenance using IoT sensor data, preventing equipment failures and optimizing maintenance schedules.",
    technologies: ["Python", "TensorFlow", "InfluxDB", "Docker", "Kubernetes"],
    metrics: ["40% failure reduction", "$2M cost savings", "85% prediction accuracy"],
    icon: TrendingUp,
    status: "Production",
    link: "#"
  }
];

export const ProjectsSection = () => {
  return (
    <section className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world solutions delivering measurable business impact through innovative technology implementations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.id} 
                className="card-gradient border-border/50 p-8 group hover:scale-[1.02] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-card-foreground">{project.title}</h3>
                      <Badge variant="outline" className="text-xs bg-success/10 text-success border-success/30">
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-secondary/30 rounded-lg">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-primary">{metric.split(' ')[0]}</div>
                      <div className="text-xs text-muted-foreground">{metric.split(' ').slice(1).join(' ')}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                    <Github className="h-4 w-4" />
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