<template>
  <ServicePage
    title="AI inside your systems. Engineered, not advised."
    lead="Big consultancies sell you a roadmap. We sell you a working system. We integrate LLMs into the software your company already runs, with EU-compliant architecture and costs you can predict, because we run the same AI infrastructure for our own products every day."
    :points="points"
    :steps="steps"
    cta="Ready to see where AI actually pays off in your systems?"
    service="ai-integration"
  />
</template>

<script setup lang="ts">
const points = [
  {
    title: "We write the code",
    body: "The people on the call are the people in the repo. No handoff to a delivery team you never met.",
  },
  {
    title: "Real cost models",
    body: "API spend, hosting, maintenance: modeled before you commit, measured after. No surprise AI bills.",
  },
  {
    title: "EU / GDPR by architecture",
    body: "Data residency, model choice, and audit trail designed in from the start, not patched on for the auditor.",
  },
  {
    title: "Proven in our own production",
    body: "Document processing, customer triage, internal knowledge, agent workflows. Every pattern we propose already runs in our products.",
  },
];

const steps = [
  { title: "Systems audit", body: "What you run, where AI fits, and where it honestly does not." },
  { title: "Pilot", body: "One workflow, production data, measurable result, fixed price." },
  { title: "Scale", body: "Roll out what the pilot proved. Kill what it did not." },
  { title: "Operate", body: "Monitoring, cost tracking, model upgrades over time." },
];

useHead({
  title: "AI Integration for Mid-Market Companies - Plusultra Labs",
  meta: [
    {
      name: "description",
      content:
        "We put AI inside your existing systems: model selection, EU/GDPR-compliant architecture, cost control, production monitoring. Engineers, not slideware.",
    },
  ],
});
</script>
