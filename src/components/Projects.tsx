import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import carelaneImage from "@/assets/carelane-project.jpg";
import radiiImage from "@/assets/radii-project.jpg";
import faithimpactImage from "@/assets/faithimpact-project.jpg";

const projects = [
  {
    title: "Carelane",
    category: "E-commerce Platform",
    description: "Led product strategy for a premium jewelry e-commerce platform, focusing on user experience optimization and conversion rate improvements.",
    image: carelaneImage,
    achievements: [
      "Increased conversion rate by 35%",
      "Improved user engagement by 50%",
      "Launched mobile-first redesign"
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS"]
  },
  {
    title: "Radii",
    category: "Fintech Platform",
    description: "Managed product development for a financial technology platform, focusing on user onboarding and regulatory compliance.",
    image: radiiImage,
    achievements: [
      "Reduced onboarding time by 60%",
      "Achieved 99.9% compliance score",
      "Launched API marketplace"
    ],
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"]
  },
  {
    title: "FaithImpact",
    category: "Social Impact Platform",
    description: "Developed product roadmap for a community-driven platform connecting faith-based organizations with social impact initiatives.",
    image: faithimpactImage,
    achievements: [
      "Connected 1000+ organizations",
      "Facilitated $2M+ in donations",
      "Built community of 50K+ users"
    ],
    technologies: ["React Native", "Firebase", "GraphQL", "Stripe"]
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary text-lg mb-4">My Recent Works</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="overflow-hidden bg-card border-border hover:shadow-lg transition-shadow">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  >
                    Live
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  >
                    Source
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;