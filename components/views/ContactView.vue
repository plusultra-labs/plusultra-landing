<template>
  <div>
    <section class="border-b border-line">
      <div class="mx-auto max-w-site px-5 md:px-10">
        <div class="grid items-end gap-12 py-16 md:grid-cols-[1.25fr_0.75fr] md:gap-16 md:pb-16 md:pt-[88px]">
          <div>
            <div class="pu-fade mb-[22px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {{ c.contact.kicker }}
            </div>
            <h1
              class="pu-rise mb-[26px] max-w-[20ch] font-display text-[clamp(40px,4.8vw,68px)] font-normal leading-[1.03] tracking-[-0.022em]"
            >
              {{ c.contact.heading }} <em class="italic text-accent">{{ c.contact.headingEmphasis }}</em>
            </h1>
            <p
              class="pu-rise max-w-[56ch] text-[19px] leading-[1.55] text-muted"
              style="animation-delay: 0.1s"
            >
              {{ c.contact.lead }}
            </p>
          </div>

          <div class="pu-fade grid gap-4" style="animation-delay: 0.3s">
            <div class="mb-2 flex items-center gap-5 border border-line bg-paper-2 p-5">
              <img
                src="/alberto.jpg"
                :alt="c.about.founderAlt"
                width="88"
                height="88"
                class="h-[88px] w-[88px] shrink-0 border border-line object-cover"
              />
              <div>
                <div class="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
                  {{ c.contact.speakingWith }}
                </div>
                <div class="mt-1.5 font-display text-[24px] leading-tight">Alberto</div>
                <div class="mt-1 text-[14.5px] leading-[1.5] text-muted">
                  {{ c.contact.founderNote }}
                </div>
              </div>
            </div>
            <BookCallButton size="lg" class="justify-between" arrow />
            <a
              :href="`mailto:${org.email}`"
              class="flex h-[58px] items-center justify-between rounded-sm border border-line-2 px-6 text-[16px] transition-[border-color,background-color] duration-[250ms] hover:border-ink hover:bg-paper-2"
            >
              {{ org.email }}
              <span aria-hidden="true">&rarr;</span>
            </a>
            <div class="mt-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              {{ c.common.repliesWithinTz }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-b border-line bg-paper-2">
      <div class="mx-auto max-w-site px-5 py-16 md:px-10 md:py-[92px]">
        <div data-reveal class="grid items-start gap-10 md:grid-cols-[0.44fr_1fr] md:gap-16">
          <div>
            <div class="mb-[18px] font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {{ c.contact.prepKicker }}
            </div>
            <h2
              class="font-display text-[clamp(28px,3vw,36px)] font-normal leading-[1.1] tracking-[-0.016em]"
            >
              {{ c.contact.prepHeading }}
            </h2>
          </div>
          <div class="border-t border-line-2">
            <div
              v-for="item in c.contact.prep"
              :key="item.title"
              class="grid gap-4 border-b border-line py-5 md:grid-cols-[1fr_1.4fr] md:gap-8"
            >
              <span class="text-[16px] font-medium">{{ item.title }}</span>
              <span class="text-[15.5px] leading-[1.6] text-muted">{{ item.body }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { org } from "~/data/org";

const c = useCopy();

useHead({
  title: () => c.value.contact.meta.title,
  meta: [{ name: "description", content: () => c.value.contact.meta.description }],
});
</script>
