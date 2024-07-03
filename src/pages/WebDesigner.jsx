import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const WebDesigner = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Web Designer</h1>
        <p className="text-lg text-muted-foreground">
          Creating beautiful and functional websites
        </p>
      </header>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I am a passionate web designer with over 5 years of experience in
              creating stunning and user-friendly websites. My skills include
              HTML, CSS, JavaScript, React, and more.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border p-4">
                <img src="/images/project1.jpg" alt="Project 1" />
                <p className="mt-2">Project 1 Description</p>
              </div>
              <div className="border p-4">
                <img src="/images/project2.jpg" alt="Project 2" />
                <p className="mt-2">Project 2 Description</p>
              </div>
              <div className="border p-4">
                <img src="/images/project3.jpg" alt="Project 3" />
                <p className="mt-2">Project 3 Description</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <Input id="name" type="text" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your Email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your Message" />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center">
        <p>Follow me on social media:</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Facebook
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Twitter
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default WebDesigner;