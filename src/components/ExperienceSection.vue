<script setup>
import { Briefcase } from 'lucide-vue-next'
import { experience } from '../data/portfolio'
</script>

<template>
  <section id="experience" class="section">
    <div v-reveal>
      <span class="section-label">Experience</span>
      <h2 class="section-title">Where I've worked</h2>
    </div>

    <ol class="relative mt-12 space-y-10 border-l-2 border-slate-200 pl-6 sm:pl-10 dark:border-white/10">
      <li v-for="(job, i) in experience" :key="job.company + job.dates" v-reveal="i * 80" class="relative">
        <span
          class="absolute -left-[2.15rem] top-1 flex h-7 w-7 items-center justify-center rounded-full border-4 border-slate-50 bg-gradient-to-br from-indigo-500 to-violet-500 text-white sm:-left-[3.15rem] dark:border-ink"
        >
          <Briefcase :size="12" />
        </span>

        <div class="card">
          <div class="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 class="font-display text-xl font-semibold text-slate-900 dark:text-white">{{ job.role }}</h3>
              <p class="font-medium text-indigo-600 dark:text-indigo-400">{{ job.company }}</p>
            </div>
            <p
              class="inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-300"
            >
              {{ job.dates }}
              <span v-if="job.current" class="rounded-full bg-emerald-500/15 px-2 py-0.5 text-emerald-600 dark:text-emerald-400"
                >Current</span
              >
            </p>
          </div>

          <ul class="mt-4 list-disc space-y-2 pl-5 marker:text-indigo-400">
            <li v-for="point in job.points" :key="point">{{ point }}</li>
          </ul>

          <ul class="mt-5 flex flex-wrap gap-2">
            <li v-for="tag in job.tags" :key="tag" class="chip">{{ tag }}</li>
          </ul>
        </div>
      </li>
    </ol>
  </section>
</template>
