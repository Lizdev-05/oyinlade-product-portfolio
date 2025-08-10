import React, { useState } from "react";
import axios from "axios";
import getFormKey from "../components/config/apiKeys"; // Adjust the path as necessary
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submission = { name, email, message };
    const { data } = await axios.post(
      `https://getform.io/f/${getFormKey}`,
      submission,
      { headers: { Accept: "application/json" } }
    );
    if (data.success) {
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    }
    console.log(data);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interested in working together or discussing product opportunities?
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-secondary">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <Card className="p-6 bg-card border-border">
                <h4 className="font-semibold mb-2 text-foreground">Email</h4>
                <p className="text-muted-foreground">your.email@example.com</p>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h4 className="font-semibold mb-2 text-foreground">LinkedIn</h4>
                <p className="text-muted-foreground">
                  linkedin.com/in/yourprofile
                </p>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h4 className="font-semibold mb-2 text-foreground">Location</h4>
                <p className="text-muted-foreground">
                  Available for remote opportunities
                </p>
              </Card>
            </div>
          </div>

          <div>
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-6 text-secondary">
                Send a Message
              </h3>

              <form action="" onSubmit={handleSubmit} className="space-y-6">
                <h2>
                  {success ? "Your message has been sent successfully" : " "}
                </h2>
                <div>
                  <Input
                    className="bg-background border-border text-foreground"
                    placeholder="Your Full Name"
                    minLength={3}
                    required
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-background border-border text-foreground"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    className="bg-background border-border text-foreground"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="bg-background border-border text-foreground"
                    required
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
