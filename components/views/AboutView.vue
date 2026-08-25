<template>
  <div>
    <!-- Hero -->
    <section class="border-b border-line">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div class="grid items-end gap-12 py-16 md:grid-cols-[1.25fr_0.75fr] md:gap-16 md:pb-16 md:pt-[88px]">
          <div>
            <div class="pu-fade mb-[22px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {{ c.about.kicker }}
            </div>
            <h1
              class="pu-rise mb-[26px] max-w-[20ch] font-display text-[clamp(40px,4.8vw,68px)] font-normal leading-[1.03] tracking-[-0.022em]"
            >
              {{ c.about.heading }}
            </h1>
            <p
              class="pu-rise max-w-[56ch] text-[19px] leading-[1.55] text-muted"
              style="animation-delay: 0.1s"
            >
              {{ c.about.lead }}
            </p>
          </div>
          <div class="pu-fade grid gap-5 border-line md:border-l md:pl-8" style="animation-delay: 0.3s">
            <div>
              <div class="mb-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
                {{ c.common.basedIn }}
              </div>
              <div class="text-[15.5px] leading-[1.5]">{{ c.common.location }}</div>
            </div>
            <div class="h-px bg-line" />
            <div>
              <div class="mb-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
                {{ c.about.clientsLabel }}
              </div>
              <div class="text-[15.5px] leading-[1.5]">{{ c.about.clientsValue }}</div>
            </div>
            <div class="h-px bg-line" />
            <div>
              <div class="mb-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
                {{ c.about.teamLabel }}
              </div>
              <div class="font-display text-[32px] leading-none">
                {{ team.length }} {{ c.about.peopleUnit }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Founder story -->
    <section id="alberto" class="scroll-mt-28 border-b border-line">
      <div class="mx-auto max-w-site px-5 py-16 md:px-10 md:py-[92px]">
        <div data-reveal class="mb-[18px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {{ c.about.storyKicker }}
        </div>
        <div class="grid gap-12 md:grid-cols-[0.42fr_1fr] md:gap-16">
          <div data-reveal>
            <div class="border border-line bg-paper-2 p-3">
              <img
                src="/alberto.jpg"
                :alt="c.about.founderAlt"
                width="480"
                height="640"
                class="aspect-[3/4] w-full border border-line object-cover"
                loading="lazy"
              />
              <div class="pt-4">
                <div class="font-display text-[24px] leading-tight">Alberto</div>
                <div class="mt-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">
                  {{ c.about.founderRole }}
                </div>
                <a
                  :href="`mailto:${org.email}`"
                  class="mt-3 inline-block text-[14.5px] text-muted transition-colors duration-[250ms] hover:text-ink"
                >
                  {{ org.email }}
                </a>
              </div>
            </div>
          </div>

          <div data-reveal>
            <h2
              class="mb-7 max-w-[22ch] font-display text-[clamp(28px,3vw,40px)] font-normal leading-[1.1] tracking-[-0.018em]"
            >
              {{ c.about.storyHeading }}
            </h2>
            <div class="max-w-[62ch]">
              <p
                v-for="p in c.about.story"
                :key="p"
                class="mb-5 text-[17.5px] leading-[1.62] text-muted last:mb-0"
              >
                {{ p }}
              </p>
              <p class="mt-9 border-l-2 border-accent pl-6 font-display text-[22px] leading-[1.4]">
                {{ c.about.storyPullQuote }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Principles -->
    <section class="border-b border-line bg-paper-2">
      <div class="mx-auto max-w-site px-5 py-16 md:px-10 md:py-[92px]">
        <div data-reveal class="mb-[18px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {{ c.about.principlesKicker }}
        </div>
        <h2
          data-reveal
          class="mb-12 max-w-[24ch] font-display text-[clamp(28px,3vw,40px)] font-normal leading-[1.1] tracking-[-0.018em]"
        >
          {{ c.about.principlesHeading }}
        </h2>
        <div class="grid gap-px border border-line bg-line md:grid-cols-3">
          <div
            v-for="item in c.about.principles"
            :key="item.title"
            data-reveal
            class="bg-paper-2 px-7 py-8"
          >
            <h3 class="mb-2.5 text-[17px] font-semibold">{{ item.title }}</h3>
            <p class="text-[15px] leading-[1.6] text-muted">{{ item.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="border-b border-line">
      <div class="mx-auto max-w-site px-5 py-16 md:px-10 md:py-[92px]">
        <div data-reveal class="mb-[18px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {{ c.about.teamKicker }}
        </div>
        <h2
          data-reveal
          class="mb-5 font-display text-[clamp(28px,3vw,40px)] font-normal leading-[1.1] tracking-[-0.018em]"
        >
          {{ c.about.teamHeading }}
        </h2>
        <p data-reveal class="mb-14 max-w-[58ch] text-[16.5px] leading-[1.62] text-muted">
          {{ fill(c.about.teamIntro, { n: team.length }) }}
        </p>
        <div class="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          <div
            v-for="member in team"
            :key="member.name"
            data-reveal
            class="flex flex-col items-center text-center"
          >
            <TeamAvatar :person="member.avatar" :size="128" />
            <b class="mt-4 block text-[16px] font-medium">{{ member.name }}</b>
            <p class="mt-0.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted">
              {{ c.team[member.avatar] }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="border-b border-line">
      <div
        class="mx-auto flex max-w-site flex-wrap items-center justify-between gap-10 px-5 py-16 md:px-10 md:py-[88px]"
      >
        <h2
          class="max-w-[24ch] font-display text-[clamp(30px,3.2vw,44px)] font-normal leading-[1.08] tracking-[-0.018em]"
        >
          {{ c.about.ctaHeading }}
        </h2>
        <BookCallButton size="lg" arrow />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { team } from "~/data/site";
import { SITE_URL, org } from "~/data/org";

const c = useCopy();
const locale = useLocale();

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: computed(() =>
        JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          inLanguage: locale.value,
          mainEntity: {
            "@type": "Person",
            "@id": `${SITE_URL}/about#alberto`,
            name: org.founder.name,
            jobTitle: c.value.about.founderRole,
            image: org.founder.image,
            email: org.founder.email,
            worksFor: { "@id": `${SITE_URL}/#organization` },
            knowsAbout: [...org.knowsAbout],
            description: c.value.about.personDescription,
          },
        }),
      ),
    },
  ],
  title: () => c.value.about.meta.title,
  meta: [{ name: "description", content: () => c.value.about.meta.description }],
});
</script>
