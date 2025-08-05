import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import radiiImage from "@/assets/radii-project.jpg";
import carelaneImage from "@/assets/carelane-project.jpg";
import faithimpactImage from "@/assets/faithimpact-project.jpg";

const projectsData = {
  radii: {
    title: "Radii",
    category: "Retail Intelligence Platform",
    image: radiiImage,
    role: "Co-founder & Growth/Product Lead",
    stage: "MVP to post-product-market fit",
    liveUrl: "https://radii-demo.netlify.app",
    problem: "Retailers in Africa struggle to understand patterns in sales due to fragmented and unstructured data. Manual reporting takes hours, and business decisions are made without proper insights.",
    solution: "Built a retail intelligence platform that automatically analyzes sales data and surfaces actionable insights. Launched Nova, an AI assistant that helps retailers understand their business patterns and make data-driven decisions.",
    userStories: [
      "As a small retailer, I want to understand my sales patterns without spending hours on manual reporting, so I can focus on growing my business.",
      "As a store manager, I want to know which products are trending, so I can optimize my inventory decisions.",
      "As a business owner, I want insights into customer behavior, so I can improve my marketing strategies."
    ],
    interviews: 30,
    lessonsLearned: [
      "Market feedback is crucial - we successfully pivoted from targeting retail chains to all retail businesses",
      "User interviews revealed that time-saving was more important than advanced analytics",
      "Building for emerging markets requires understanding local business practices and constraints",
      "Feature prioritization using RICE framework helped focus development efforts on high-impact features"
    ],
    impact: [
      "Reduced manual reporting time by 60%",
      "Increased user retention by 35% after analytics feature release",
      "Successfully transitioned target market based on user feedback",
      "Conducted 30+ user interviews to validate product-market fit"
    ]
  },
  harbour427: {
    title: "Harbour 427",
    category: "Mission & Social Impact Platform",
    image: faithimpactImage,
    role: "Product Lead",
    stage: "Platform Development",
    liveUrl: "https://harbour427-demo.netlify.app",
    problem: "Mission leaders lack an easy way to fundraise, mobilize volunteers, and gather prayer support in one place. Faith-driven individuals want to help but are scattered across platforms with no centralized, trusted hub for mission engagement.",
    solution: "Created a unified platform that connects donors, volunteers, and prayer partners to credible mission projects globally. Built transparency features and impact tracking to make Kingdom work as accessible as booking a flight.",
    userStories: [
      "As a faith-driven individual, I want to easily discover mission projects in one trusted place, so I can meaningfully contribute.",
      "As a mission leader, I want to centralize my fundraising, volunteer recruitment, and prayer requests, so I can focus on the mission work.",
      "As a donor, I want transparent impact tracking, so I can see how my contributions are making a difference."
    ],
    interviews: 25,
    lessonsLearned: [
      "Trust and transparency are paramount in the faith-based giving space",
      "Users need both emotional connection and practical impact metrics",
      "Combining giving, praying, and volunteering in one platform creates stronger engagement",
      "IDP-focused projects need dedicated visibility and specialized donor audiences"
    ],
    impact: [
      "Centralized mission project discovery for global reach",
      "Connected distributed donor network through unified platform",
      "Enabled transparent impact tracking for accountability",
      "Created streamlined engagement path for multiple contribution types"
    ]
  },
  carelane: {
    title: "Carelane",
    category: "Customer Support Platform",
    image: carelaneImage,
    role: "Product Manager",
    stage: "Growth & Optimization",
    liveUrl: "https://carelane-demo.netlify.app",
    problem: "Small and medium-sized companies in emerging markets struggle with fragmented customer conversations across channels (Email, WhatsApp, in-app chat, social media), leading to delays, inefficiencies, and missed inquiries.",
    solution: "Developed a unified customer support hub that centralizes all customer conversations in one place. Built automated ticket routing, team performance analytics, and seamless integrations with existing tools like Slack and WhatsApp.",
    userStories: [
      "As an SME owner, I want all my customer conversations from WhatsApp, email, and social media in one place, so I can respond faster.",
      "As a support agent, I want automatic ticket assignment, so I can focus on resolving issues rather than managing logistics.",
      "As a business manager, I want support analytics, so I can track team performance and improve customer satisfaction."
    ],
    interviews: 20,
    lessonsLearned: [
      "SMEs prioritize simplicity and speed over advanced features",
      "WhatsApp integration was crucial for emerging market adoption",
      "Customer retention improves significantly with faster response times",
      "Affordability and ease of setup are key differentiators for SME tools"
    ],
    impact: [
      "Unified multi-channel conversations for streamlined support",
      "Automated ticket routing system reduced response times",
      "Improved customer retention through better support experience",
      "Seamless tool integrations increased team productivity"
    ]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectsData[projectId as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-secondary hover:text-secondary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
                {project.category}
              </span>
              <h1 className="text-4xl font-bold mt-2 mb-4 text-foreground">
                {project.title}
              </h1>
              <div className="text-muted-foreground mb-6">
                {project.role} • {project.stage}
              </div>
              
              <div className="flex gap-4">
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-80 h-48 overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Problem */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Problem</h2>
            <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
          </Card>

          {/* Solution */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Solution</h2>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </Card>

          {/* User Stories */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-secondary">User Stories</h2>
            <div className="space-y-4">
              {project.userStories.map((story, index) => (
                <div key={index} className="border-l-2 border-secondary/30 pl-4">
                  <p className="text-muted-foreground italic">"{story}"</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Research */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-secondary">User Research</h2>
            <p className="text-muted-foreground">
              Conducted <span className="font-semibold text-foreground">{project.interviews} user interviews</span> to validate problem assumptions, understand user pain points, and iterate on the solution approach.
            </p>
          </Card>

          {/* Impact */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Key Impact</h2>
            <ul className="space-y-3">
              {project.impact.map((impact, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2" />
                  <span className="text-muted-foreground">{impact}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Lessons Learned */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Lessons Learned</h2>
            <ul className="space-y-3">
              {project.lessonsLearned.map((lesson, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2" />
                  <span className="text-muted-foreground">{lesson}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;