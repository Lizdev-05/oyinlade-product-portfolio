import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Product & Technical Skills",
    skills: [
      "Product Roadmapping",
      "Market Research",
      "Competitive Analysis",
      "Go-to-Market Strategy",
      "Agile/Scrum",
      "Frontend Development",
    ],
  },
  {
    title: "User Experience & Analytics",
    skills: [
      "User Research",

      "Mixpanel",
      "Design Thinking",
      "Google Analytics",
      "User Journey Mapping",
      "SQL",
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
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
                    <h4 className="font-semibold text-foreground mb-2">
                      {skill}
                    </h4>
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
