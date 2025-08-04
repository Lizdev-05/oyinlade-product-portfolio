import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Product Strategy",
    skills: [
      "Product Roadmapping",
      "Market Research",
      "Competitive Analysis",
      "Go-to-Market Strategy",
      "Product-Market Fit",
      "OKRs & KPIs"
    ]
  },
  {
    title: "User Experience",
    skills: [
      "User Research",
      "User Journey Mapping",
      "A/B Testing",
      "Usability Testing",
      "Persona Development",
      "Design Thinking"
    ]
  },
  {
    title: "Technical Skills",
    skills: [
      "Frontend Development",
      "API Design",
      "Database Design",
      "Cloud Platforms",
      "Agile/Scrum",
      "Technical Architecture"
    ]
  },
  {
    title: "Analytics & Data",
    skills: [
      "Google Analytics",
      "Mixpanel",
      "SQL",
      "Data Visualization",
      "Conversion Optimization",
      "Cohort Analysis"
    ]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning product management, user experience, and technical implementation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="p-6 bg-card border-border hover:border-secondary transition-colors">
              <h3 className="text-xl font-bold mb-4 text-secondary">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0" />
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="p-8 bg-gradient-secondary text-center">
            <h3 className="text-2xl font-bold mb-4 text-secondary-foreground">
              Ready to Collaborate?
            </h3>
            <p className="text-lg text-secondary-foreground/80 mb-6 max-w-2xl mx-auto">
              I'm passionate about building products that make a difference. Let's discuss how I can help 
              bring your product vision to life.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;