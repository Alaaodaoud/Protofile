import React from 'react';
import { Code, Database, Layout, Server, Cloud, Brain, Shield, Sparkles, Smartphone, Bot, Cpu, MessageSquare } from 'lucide-react';

const skills = [
  {
    category: "AI & Machine Learning",
    icon: Brain,
    level: 95,
    description: "Leveraging cutting-edge AI technologies",
    items: [
      { name: "ChatGPT & GPT-4", proficiency: 98 },
      { name: "DALL-E & Midjourney", proficiency: 95 },
      { name: "Claude & Anthropic", proficiency: 90 },
      { name: "Stable Diffusion", proficiency: 85 }
    ]
  },
  {
    category: "Frontend Architecture",
    icon: Layout,
    level: 95,
    description: "Crafting exceptional user experiences",
    items: [
      { name: "React/Next.js", proficiency: 95 },
      { name: "TypeScript", proficiency: 90 },
      { name: "Angular", proficiency: 85 },
      { name: "TailwindCSS", proficiency: 90 }
    ]
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    level: 88,
    description: "Building native & cross-platform apps",
    items: [
      { name: "React Native", proficiency: 90 },
      { name: "Flutter", proficiency: 85 },
      { name: "iOS (Swift)", proficiency: 80 },
      { name: "Android (Kotlin)", proficiency: 80 }
    ]
  },
  {
    category: "Backend Development",
    icon: Server,
    level: 90,
    description: "Building scalable server solutions",
    items: [
      { name: "ASP.NET Core", proficiency: 90 },
      { name: "Node.js", proficiency: 85 },
      { name: "GraphQL", proficiency: 80 },
      { name: "Python", proficiency: 75 }
    ]
  },
  {
    category: "Database Systems",
    icon: Database,
    level: 85,
    description: "Designing efficient data structures",
    items: [
      { name: "SQL Server", proficiency: 90 },
      { name: "PostgreSQL", proficiency: 85 },
      { name: "MongoDB", proficiency: 80 },
      { name: "Redis", proficiency: 75 }
    ]
  },
  {
    category: "DevOps & Cloud",
    icon: Cloud,
    level: 80,
    description: "Managing cloud infrastructure",
    items: [
      { name: "AWS", proficiency: 85 },
      { name: "Docker", proficiency: 80 },
      { name: "CI/CD", proficiency: 85 },
      { name: "Kubernetes", proficiency: 75 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="inline-block text-5xl font-bold relative">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Technical Expertise
            </span>
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-blue-500/10 rounded-full blur-xl" />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
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
                    <h3 className="text-2xl font-bold text-blue-400">{skill.category}</h3>
                  </div>
                  <p className="text-blue-300 mb-8">{skill.description}</p>
                  <div className="space-y-4">
                    {skill.items.map((item, i) => (
                      <div key={i} className="relative">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-blue-300">{item.name}</span>
                          <span className="text-sm text-blue-300">{item.proficiency}%</span>
                        </div>
                        <div className="h-2 bg-blue-900/30 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-300 transform origin-left hover:scale-x-105"
                            style={{ width: `${item.proficiency}%` }}
                          />
                        </div>
                      </div>
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