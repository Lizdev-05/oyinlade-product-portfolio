import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import carelaneImage from "@/assets/carelane-project.jpg";
import radiiImage from "@/assets/radii-project.jpg";
import faithimpactImage from "@/assets/faithimpact-project.jpg";

const projects = [
  {
    id: "radii",
    title: "Radii",
    category: "Retail Intelligence Platform",
    description: "Co-founded and led product development for a retail intelligence platform helping African SMEs understand sales patterns and make data-driven decisions.",
    image: radiiImage,
    userStory: "As a small retailer, I want to understand my sales patterns without spending hours on manual reporting, so I can focus on growing my business and making informed inventory decisions.",
    achievements: [
      "Reduced manual reporting time by 60%",
      "Increased user retention by 35%", 
      "Conducted 30+ user interviews",
      "Successfully pivoted from retail chains to all retail businesses"
    ],
    role: "Co-founder & Growth/Product Lead",
    stage: "MVP to post-product-market fit",
    liveUrl: "https://radii-demo.netlify.app"
  },
  {
    id: "harbour427",
    title: "Harbour 427",
    category: "Mission & Social Impact Platform",
    description: "Built a unified platform connecting donors, volunteers, and prayer partners to credible mission projects globally, making Kingdom work as accessible as booking a flight.",
    image: faithimpactImage,
    userStory: "As a faith-driven individual, I want to easily discover, support, and engage with mission projects in one trusted place, so I can meaningfully contribute through giving, praying, or volunteering.",
    achievements: [
      "Centralized mission project discovery",
      "Connected global donor network",
      "Enabled transparent impact tracking",
      "Created unified engagement platform"
    ],
    role: "Product Lead",
    stage: "Platform Development",
    liveUrl: "https://harbour427-demo.netlify.app"
  },
  {
    id: "carelane",
    title: "Carelane",
    category: "Customer Support Platform",
    description: "Developed a unified customer support hub for SMEs in emerging markets, centralizing conversations across multiple channels to improve response times and customer retention.",
    image: carelaneImage,
    userStory: "As an SME owner, I want all my customer conversations from WhatsApp, email, and social media in one place, so I can respond faster and never miss an important inquiry.",
    achievements: [
      "Unified multi-channel conversations",
      "Automated ticket routing system",
      "Improved response time metrics",
      "Seamless tool integrations"
    ],
    role: "Product Manager",
    stage: "Growth & Optimization",
    liveUrl: "https://carelane-demo.netlify.app"
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
                <div className="mb-4">
                  <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-3 text-foreground">
                    {project.title}
                  </h3>
                  <div className="text-xs text-muted-foreground mb-2">
                    {project.role} • {project.stage}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-secondary">User Story</h4>
                  <p className="text-xs text-muted-foreground italic border-l-2 border-secondary/30 pl-3">
                    "{project.userStory}"
                  </p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-secondary">Key Impact</h4>
                  <ul className="space-y-1">
                    {project.achievements.slice(0, 2).map((achievement, idx) => (
                      <li key={idx} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    asChild
                  >
                    <Link to={`/project/${project.id}`}>
                      Details
                    </Link>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live
                    </a>
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