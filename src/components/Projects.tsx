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
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Product Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming ideas into successful products across diverse industries
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={project.title} className="overflow-hidden bg-card border-border">
              <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                
                <div className={`p-8 ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <div className="mb-4">
                    <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold mt-2 text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-secondary">Key Achievements</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-secondary">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    View Case Study
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