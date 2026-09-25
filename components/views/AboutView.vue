<template>
  <div>
    <!-- Hero: the blue field, the studio in one line, the facts beside it. -->
    <section class="bg-ultra text-white">
      <div
        class="mx-auto grid max-w-site gap-10 px-5 pb-12 pt-10 md:grid-cols-[1.3fr_0.7fr] md:items-end md:gap-20 md:px-10 md:pb-24 md:pt-[88px]"
      >
        <div>
          <p class="pu-fade mb-5 text-[15px] font-semibold text-ultra-muted md:mb-8 md:text-[18px]">
            {{ c.about.kicker }}
          </p>
          <h1
            class="pu-rise mb-6 max-w-[16ch] font-display text-[clamp(40px,6.4vw,92px)] font-extrabold leading-[0.95] md:mb-8"
            style="letter-spacing: -0.04em"
          >
            {{ c.about.heading }}
          </h1>
          <p
            class="pu-rise max-w-[56ch] text-[17px] leading-[1.5] text-ultra-soft md:text-[20px]"
            style="animation-delay: 0.1s"
          >
            {{ c.about.lead }}
          </p>
        </div>
        <dl class="pu-fade grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-1 md:gap-6" style="animation-delay: 0.3s">
          <div class="border-t-[3px] border-white pt-3">
            <dt class="text-[14px] font-bold text-ultra-muted">{{ c.common.basedIn }}</dt>
            <dd class="mt-1.5 text-[17px] font-bold leading-[1.35] md:text-[19px]">{{ c.common.location }}</dd>
          </div>
          <div class="border-t-[3px] border-white pt-3">
            <dt class="text-[14px] font-bold text-ultra-muted">{{ c.about.clientsLabel }}</dt>
            <dd class="mt-1.5 text-[17px] font-bold leading-[1.35] md:text-[19px]">{{ c.about.clientsValue }}</dd>
          </div>
          <div class="col-span-2 border-t-[3px] border-white pt-3 md:col-span-1">
            <dt class="text-[14px] font-bold text-ultra-muted">{{ c.about.teamLabel }}</dt>
            <dd class="mt-1.5 font-display text-[36px] font-extrabold leading-none md:text-[44px]">
              {{ team.length }} {{ c.about.peopleUnit }}
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Step 1 · Founder story -->
    <section id="alberto" class="scroll-mt-24 py-14 md:py-28">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <SectionKicker data-reveal :step="1" :text="c.about.storyKicker" class="mb-8 md:mb-12" />
        <div class="grid gap-10 md:grid-cols-[0.42fr_1fr] md:gap-20">
          <div data-reveal>
            <div class="bg-paper-2 md:sticky md:top-28">
              <img
                src="/alberto.jpg"
                :alt="c.about.founderAlt"
                width="480"
                height="640"
                class="aspect-square w-full object-cover md:aspect-[3/4]"
                loading="lazy"
              />
              <div class="flex flex-col gap-1 p-5 md:p-6">
                <div class="font-display text-[26px] font-extrabold leading-tight">Alberto</div>
                <div class="text-[15px] font-bold text-accent">{{ c.about.founderRole }}</div>
                <a
                  :href="`mailto:${org.email}`"
                  class="group mt-3 flex min-h-[44px] items-center justify-between gap-3 border-t-[1.5px] border-line pt-3 text-[15px] font-semibold transition-colors duration-[250ms] hover:text-accent"
                >
                  {{ org.email }}
                  <ChevronIcon :size="12" class="text-accent transition-transform duration-[250ms] group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          <div data-reveal>
            <h2
              class="mb-7 max-w-[20ch] font-display text-[32px] font-extrabold leading-[1.02] md:mb-9 md:text-[52px] md:leading-none"
            >
              {{ c.about.storyHeading }}
            </h2>
            <div class="max-w-[62ch]">
              <p
                v-for="p in c.about.story"
                :key="p"
                class="mb-5 text-[17px] leading-[1.62] text-muted last:mb-0 md:text-[18px]"
              >
                {{ p }}
              </p>
            </div>
            <p
              class="mt-10 max-w-[24ch] border-t-[3px] border-accent pt-5 font-display text-[28px] font-extrabold leading-[1.1] md:mt-14 md:text-[40px]"
            >
              {{ c.about.storyPullQuote }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Step 2 · Principles -->
    <section class="bg-paper-2 py-14 md:py-28">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div data-reveal class="mb-8 flex flex-col gap-5 md:mb-14 md:gap-6">
          <SectionKicker :step="2" :text="c.about.principlesKicker" />
          <h2 class="max-w-[22ch] font-display text-[32px] font-extrabold leading-[1.02] md:text-[56px] md:leading-none">
            {{ c.about.principlesHeading }}
          </h2>
        </div>
        <ol class="grid gap-3 md:grid-cols-3 md:gap-6">
          <li
            v-for="(item, i) in c.about.principles"
            :key="item.title"
            data-reveal
            class="flex flex-col gap-3 bg-paper p-6 md:gap-4 md:p-9"
          >
            <RouteMark :step="i + 1" :width="70" class="text-accent" />
            <h3 class="pt-2 font-display text-[22px] font-extrabold leading-[1.1] md:text-[26px]">{{ item.title }}</h3>
            <p class="text-[16px] leading-[1.6] text-muted">{{ item.body }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- Step 3 · Team -->
    <section class="py-14 md:py-28">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div data-reveal class="mb-8 grid gap-5 md:mb-14 md:grid-cols-[1.3fr_1fr] md:items-end md:gap-20">
          <div class="flex flex-col gap-5 md:gap-6">
            <SectionKicker :step="3" :text="c.about.teamKicker" />
            <h2 class="font-display text-[32px] font-extrabold leading-[1.02] md:text-[56px] md:leading-none">
              {{ c.about.teamHeading }}
            </h2>
          </div>
          <p class="text-[16px] leading-[1.55] text-muted md:text-[18px]">
            {{ fill(c.about.teamIntro, { n: team.length }) }}
          </p>
        </div>
        <ul class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
          <li
            v-for="member in team"
            :key="member.name"
            data-reveal
            class="flex flex-col items-start gap-4 bg-paper-2 p-5 md:p-6"
          >
            <TeamAvatar :person="member.avatar" :size="88" />
            <div>
              <div class="text-[17px] font-bold leading-tight">{{ member.name }}</div>
              <p class="mt-1 text-[14px] leading-[1.35] text-muted">{{ c.team[member.avatar] }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- The arrowhead: the call. -->
    <section class="relative overflow-hidden bg-ultra text-white">
      <svg
        class="pointer-events-none absolute -right-[120px] top-6 h-[340px] w-[300px] md:-right-[60px] md:top-10 md:h-[520px] md:w-[450px]"
        viewBox="0 0 30 34"
        aria-hidden="true"
      >
        <path d="M3 2 L27 17 L3 32" fill="none" stroke="#1b2c96" stroke-width="3" />
      </svg>
      <div
        class="relative mx-auto flex max-w-site flex-col gap-8 px-5 py-14 md:flex-row md:items-end md:justify-between md:gap-16 md:px-10 md:py-28"
      >
        <h2
          data-reveal
          class="max-w-[18ch] font-display text-[38px] font-extrabold leading-none md:text-[clamp(44px,4.6vw,68px)] md:leading-[0.98]"
          style="letter-spacing: -0.04em"
        >
          {{ c.about.ctaHeading }}
        </h2>
        <div data-reveal class="flex w-full flex-col gap-3 md:w-auto md:min-w-[340px]">
          <BookCallButton variant="onInk" size="lg" class="justify-between" arrow>
            {{ c.common.bookScopingCall }}
          </BookCallButton>
          <div class="text-[14px] text-ultra-muted md:text-[15px]">{{ c.common.repliesWithinTz }}</div>
        </div>
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
