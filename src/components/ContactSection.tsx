import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "john.smith@example.com",
      link: "mailto:john.smith@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      link: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/johnsmith",
      link: "https://linkedin.com/in/johnsmith"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/johnsmith",
      link: "https://github.com/johnsmith"
    }
  ];

  return (
    <section className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-card-foreground">Contact Information</h3>
            
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <Card 
                  key={contact.label}
                  className="card-gradient border-border/50 p-6 hover:scale-[1.02] transition-all duration-300 animate-fade-in group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => window.open(contact.link, '_blank')}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-card-foreground">{contact.label}</h4>
                      <p className="text-muted-foreground hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}

            {/* Status indicator */}
            <Card className="card-gradient border-border/50 p-6 border-l-4 border-l-success">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <div>
                  <h4 className="font-medium text-success">Available for Work</h4>
                  <p className="text-muted-foreground text-sm">
                    Open to new opportunities and freelance projects
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-gradient border-border/50 p-8">
            <h3 className="text-2xl font-semibold mb-6 text-card-foreground">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">
                    First Name
                  </label>
                  <Input 
                    placeholder="John" 
                    className="bg-input border-border/50 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe" 
                    className="bg-input border-border/50 focus:border-primary transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-input border-border/50 focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block">
                  Subject
                </label>
                <Input 
                  placeholder="Project Inquiry" 
                  className="bg-input border-border/50 focus:border-primary transition-colors"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project or opportunity..."
                  className="bg-input border-border/50 focus:border-primary transition-colors min-h-[120px] resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-effect transition-all duration-300 hover:scale-[1.02]"
                size="lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};