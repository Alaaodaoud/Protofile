import React from 'react';
import { Code2, Database, Globe, Shield, Brain, Terminal, GitBranch, Scale, Users, Gauge } from 'lucide-react';

const essentialSkills = [
  {
    title: "Full-Stack JavaScript/TypeScript",
    icon: Code2,
    description: "Mastery of JavaScript/TypeScript for both frontend and backend development",
    proficiency: 95,
    keyPoints: ["Modern ES6+", "TypeScript", "Node.js", "React/Angular/Vue"]
  },
  {
    title: "Database Management",
    icon: Database,
    description: "Expertise in both SQL and NoSQL databases with optimization skills",
    proficiency: 90,
    keyPoints: ["SQL", "MongoDB", "Redis", "Database Design"]
  },
  {
    title: "API Development",
    icon: Globe,
    description: "Building robust and scalable RESTful and GraphQL APIs",
    proficiency: 92,
    keyPoints: ["REST", "GraphQL", "API Security", "Documentation"]
  },
  {
    title: "Security Best Practices",
    icon: Shield,
    description: "Implementing secure coding practices and authentication systems",
    proficiency: 88,
    keyPoints: ["OAuth", "JWT", "HTTPS", "Data Encryption"]
  },
  {
    title: "System Architecture",
    icon: Brain,
    description: "Designing scalable and maintainable software architectures",
    proficiency: 85,
    keyPoints: ["Microservices", "Cloud Native", "Scalability", "Performance"]
  },
  {
    title: "DevOps & Deployment",
    icon: Terminal,
    description: "Managing deployment pipelines and cloud infrastructure",
    proficiency: 87,
    keyPoints: ["CI/CD", "Docker", "AWS/Azure", "Kubernetes"]
  },
  {
    title: "Version Control",
    icon: GitBranch,
    description: "Advanced Git workflows and collaboration practices",
    proficiency: 94,
    keyPoints: ["Git", "Branching Strategies", "Code Review", "Collaboration"]
  },
  {
    title: "Testing & Quality",
    icon: Scale,
    description: "Comprehensive testing strategies and quality assurance",
    proficiency: 89,
    keyPoints: ["Unit Testing", "E2E Testing", "TDD", "Code Quality"]
  },
  {
    title: "Soft Skills & Communication",
    icon: Users,
    description: "Effective team collaboration and project management",
    proficiency: 92,
    keyPoints: ["Communication", "Leadership", "Problem Solving", "Agile"]
  },
  {
    title: "Performance Optimization",
    icon: Gauge,
    description: "Optimizing application performance and user experience",
    proficiency: 86,
    keyPoints: ["Load Time", "Caching", "SEO", "Analytics"]
  }
];

export default function EssentialSkills() {
  return (
    <section id="essential-skills" className="py-32 relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-black" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="inline-block text-5xl font-bold relative mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Essential Skills
            </span>
          </h2>
          <p className="text-blue-300 text-lg">Top 10 must-have skills for Full Stack Development</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {essentialSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index} 
                className="group relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-900/5 rounded-2xl border border-blue-500/20 backdrop-blur-sm" />
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-xl bg-blue-500/10 mr-4">
                      <Icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-400">{skill.title}</h3>
                      <div className="mt-1 flex items-center">
                        <div className="h-1.5 w-24 bg-blue-900/30 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                            style={{ width: `${skill.proficiency}%` }}
                          />
                        </div>
                        <span className="ml-2 text-sm text-blue-300">{skill.proficiency}%</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-blue-300 mb-4">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.keyPoints.map((point, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-300 border border-blue-500/20"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}