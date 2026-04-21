<template>
  <div class="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-blue-600/30">
    <LandingTimelineItem
      v-for="(project, index) in projects"
      :key="index"
      :project="project"
    />
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    icon: "flight",
    industry: "Travel Industry",
    title: "AI-Powered Travel Planning Platform",
    description:
      "Developed a comprehensive travel planning platform with AI-driven recommendations. Built natural language processing for understanding user preferences, automated pricing optimization, and real-time availability checks across multiple providers.",
    technologies: ["Node.js", "Flutter", "OpenAI", "MongoDB"],
    metrics: ["40% increase in user engagement", "15,000+ active monthly users"],
  },
  {
    icon: "business",
    industry: "Agency Transformation",
    title: "Agency Digital Transformation",
    description:
      "Led complete digital transformation for a creative agency, implementing AI-powered workflow automation, client management systems, and productivity analytics. Streamlined operations and eliminated manual bottlenecks.",
    technologies: ["Python", "Node.js", "AI Tools"],
    metrics: ["60% task automation", "40% faster project delivery"],
  },
  {
    icon: "medical_services",
    industry: "Healthcare",
    title: "Medical Center AI Assistant",
    description:
      "Created an intelligent appointment scheduling and patient management system for a medical center network. Implemented automated patient intake, symptom analysis, and appointment optimization using AI.",
    technologies: ["Python", "FastAPI", "OpenAI", "PostgreSQL"],
    metrics: ["75% reduction in scheduling time", "100% HIPAA compliance"],
  },
  {
    icon: "description",
    industry: "Enterprise Software",
    title: "AI Document Analysis Platform",
    description:
      "Built an enterprise document processing platform with OCR, intelligent categorization, and data extraction. Handles thousands of documents daily with machine learning-powered accuracy improvements.",
    technologies: ["Flutter", "Node.js", "OpenAI", "Firebase"],
    metrics: ["50,000+ documents processed", "99.9% OCR accuracy"],
  },
  {
    icon: "shopping_cart",
    industry: "E-Commerce",
    title: "Premium E-commerce Platform",
    description:
      "Developed a luxury e-commerce platform with AI-powered personalization, inventory management, and customer analytics. Integrated virtual try-on technology and personalized shopping experiences.",
    technologies: ["React", "Node.js", "AWS"],
    metrics: ["200% increase in online sales", "Virtual try-on technology"],
  },
  {
    icon: "hotel",
    industry: "Hospitality",
    title: "Multi-Property Digital Platform",
    description:
      "Created a unified booking and management platform for a hospitality group with multiple properties. Centralized reservations, guest experiences, and operational analytics.",
    technologies: ["Next.js", "Node.js", "MongoDB", "AWS"],
    metrics: ["Multi-property management", "60% improvement in booking efficiency"],
  },
  {
    icon: "local_shipping",
    industry: "Quick Commerce",
    title: "Beverage Delivery Platform",
    description:
      "Launched a quick commerce platform for beverage delivery with real-time tracking, inventory management, and smart routing. Went from concept to live MVP in 4 weeks.",
    technologies: ["Flutter", "Node.js", "MongoDB", "Firebase"],
    metrics: ["MVP launched in 1 month", "98% customer satisfaction"],
  },
  {
    icon: "palette",
    industry: "Art Industry",
    title: "Art Industry Innovation Platform",
    description:
      "Co-founded and developed a tech platform revolutionizing the art industry. Led product development and strategic planning, securing EUR 3M in seed funding and building a team of 25 professionals.",
    technologies: ["Python", "React", "iOS"],
    metrics: ["EUR 3M raised", "25-person team built"],
  },
  {
    icon: "trending_up",
    industry: "Startup Advisory",
    title: "AI Product Strategy & Fundraising",
    description:
      "Provided end-to-end strategic guidance for AI startups, from product ideation to investor presentations. Helped multiple companies refine their vision, build MVPs, and successfully raise capital.",
    technologies: ["Strategy", "AI", "Analytics"],
    metrics: ["Multiple successful raises", "Product-market fit achieved"],
  },
];
</script>
