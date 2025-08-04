import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            From Code to Strategy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey from Frontend Development to Product Management has given me a unique perspective 
            on building products that truly matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-secondary">My Transition Story</h3>
            <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
              Starting as a Frontend Developer, I discovered my passion for understanding user needs 
              and business objectives. This natural curiosity led me to transition into Product Management, 
              where I could leverage my technical background to build better products.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, I combine technical expertise with strategic thinking to deliver products that 
              not only meet user needs but also drive business growth. My development background helps 
              me communicate effectively with engineering teams and make informed technical decisions.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <h4 className="text-xl font-semibold mb-3 text-secondary">Technical Foundation</h4>
              <p className="text-muted-foreground">
                Deep understanding of development processes, technical constraints, and feasibility assessments.
              </p>
            </Card>
            
            <Card className="p-6 bg-card border-border">
              <h4 className="text-xl font-semibold mb-3 text-secondary">User-Centric Approach</h4>
              <p className="text-muted-foreground">
                Focus on user research, data-driven decisions, and creating meaningful user experiences.
              </p>
            </Card>
            
            <Card className="p-6 bg-card border-border">
              <h4 className="text-xl font-semibold mb-3 text-secondary">Strategic Vision</h4>
              <p className="text-muted-foreground">
                Ability to align product roadmaps with business objectives and market opportunities.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;