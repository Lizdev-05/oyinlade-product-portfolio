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
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary text-lg mb-4">Technologies I've Used</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-6 text-secondary text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="text-center">
                    <h4 className="font-semibold text-foreground mb-2">{skill}</h4>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;