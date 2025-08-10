import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/oyins.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-background flex items-center py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-secondary text-lg mb-4">Hello!</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            I'm E.O Ojesanmi
          </h1>

          <div className="space-y-3 mb-8">
            <div className="flex items-center text-foreground">
              <div className="w-5 h-5 bg-secondary rounded-full mr-3 flex items-center justify-center">
                <div className="w-2 h-2 bg-background rounded-full" />
              </div>
              <span>Product Manager</span>
            </div>
            <div className="flex items-center text-foreground">
              <div className="w-5 h-5 bg-secondary rounded-full mr-3 flex items-center justify-center">
                <div className="w-2 h-2 bg-background rounded-full" />
              </div>
              <span>Frontend Developer</span>
            </div>
            <div className="flex items-center text-foreground">
              <div className="w-5 h-5 bg-secondary rounded-full mr-3 flex items-center justify-center">
                <div className="w-2 h-2 bg-background rounded-full" />
              </div>
              <span>Strategic Thinker</span>
            </div>
            <div className="flex items-center text-foreground">
              <div className="w-5 h-5 bg-secondary rounded-full mr-3 flex items-center justify-center">
                <div className="w-2 h-2 bg-background rounded-full" />
              </div>
              <span>Problem Solver</span>
            </div>
          </div>

          <Button
            onClick={scrollToContact}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 text-lg"
          >
            Get in Touch
          </Button>
        </div>

        {/* Right Profile Image */}
        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-secondary/20">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
