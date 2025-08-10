import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/oyinmi.jpg";

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary text-lg mb-4">Happy to have you here</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <div className="w-full h-96 rounded-2xl overflow-hidden">
              <img
                src={profilePhoto}
                alt="About Me"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="grid grid-cols-2 gap-6 mb-8">
              <Card className="text-center p-6 bg-card border-border">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-secondary font-semibold mb-1">
                  Experience
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  3+ years
                </div>
                <div className="text-sm text-muted-foreground">
                  working experience
                </div>
              </Card>

              <Card className="text-center p-6 bg-card border-border">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <div className="text-secondary font-semibold mb-1">
                  Projects
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  15+
                </div>
                <div className="text-sm text-muted-foreground">
                  completed projects
                </div>
              </Card>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I am a Product Manager who enjoys building impactful products with
              hands-on experience working on teams remotely with little or no
              supervision and I am also capable of learning new concepts quickly
              and efficiently.
            </p>

            <Button
              onClick={scrollToContact}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Let's talk
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
