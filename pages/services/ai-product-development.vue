<template>
  <ServicePage
    title="AI product development, by people who ship their own"
    lead="Most agencies build their first AI product on your budget. We already built ours: BuzzWatch, InsightFlow, ItaSign, and IntelligoAI are live SaaS products we designed, shipped, and operate. Your product gets the patterns that survived production."
    :points="points"
    :steps="steps"
    cta="Have a product idea that deserves a real build?"
  />
</template>

<script setup lang="ts">
const points = [
  {
    title: "Product design + architecture",
    body: "Scoping that starts from the business model, not the tech. We tell you what not to build too.",
  },
  {
    title: "MVP in weeks, not quarters",
    body: "First shippable increment in production early, weekly releases after. You see progress on a live environment, not in slides.",
  },
  {
    title: "AI where it earns its place",
    body: "LLM features engineered for cost, latency, and failure modes. We run the same APIs in our own products and know what they cost.",
  },
  {
    title: "Operation included",
    body: "Hosting, monitoring, iteration. We run what we build, or hand over cleanly. Your choice, and you own everything: code, infra, data.",
  },
];

const steps = [
  { title: "Scoping call", body: "Problem, users, business model. Free, no deck required." },
  { title: "Blueprint", body: "Fixed scope, stack, timeline, price. You own the result." },
  { title: "Build", body: "Weekly demos on a live environment from week one." },
  { title: "Launch + operate", body: "We stay on infra and iteration, or hand over cleanly." },
];

useHead({
  title: "AI Product Development - Plusultra Labs",
  meta: [
    {
      name: "description",
      content:
        "We design, build, and operate AI products end to end, the same way we build our own SaaS. MVP in weeks, production-grade from day one.",
    },
  ],
});
</script>
