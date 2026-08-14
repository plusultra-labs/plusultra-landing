<template>
  <ServicePage
    title="Custom platforms that ship in weeks and run for years"
    lead="Client portals, CRMs, booking systems, marketplaces, internal tools. We build them the way we build our own products: small senior team, modern stack, production from week one. And we stay to operate them."
    :points="points"
    :steps="steps"
    cta="Need a platform your business can actually run on?"
  />
</template>

<script setup lang="ts">
const points = [
  {
    title: "Weeks, honestly",
    body: "Typical scope ships in 3 to 6 weeks because the stack is standardized and AI-leveraged. Not because we cut corners you pay for later.",
  },
  {
    title: "Admin included",
    body: "Every platform gets a real back office. You manage content and data yourself, without calling us for every change.",
  },
  {
    title: "AI-ready by default",
    body: "The same architecture our AI products use, so AI features can land later without a rebuild.",
  },
  {
    title: "We operate it",
    body: "Hosting, backups, monitoring, small evolutions: one predictable monthly line. You own code, data, and infra accounts.",
  },
];

const steps = [
  { title: "Scoping call", body: "What the platform must do, who uses it, what it replaces." },
  { title: "Blueprint", body: "Fixed scope, price, and timeline before we write code." },
  { title: "Build", body: "Weekly demos, real data early, admin from the start." },
  { title: "Launch + operate", body: "Live in weeks, then operated or handed over." },
];

useHead({
  title: "Custom Platforms & SaaS Development - Plusultra Labs",
  meta: [
    {
      name: "description",
      content:
        "Production-grade custom platforms: portals, CRMs, marketplaces, internal tools. Delivered in weeks on a modern stack by a team that operates 10+ of its own.",
    },
  ],
});
</script>
