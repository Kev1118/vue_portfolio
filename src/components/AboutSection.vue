<script setup>
import { GraduationCap, MapPin, Mail } from 'lucide-vue-next'
import { profile, education } from '../data/portfolio'
</script>

<template>
  <section id="about" class="section">
    <div v-reveal>
      <span class="section-label">About me</span>
      <h2 class="section-title">Building dependable software, one system at a time</h2>
    </div>

    <div class="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
      <div v-reveal class="space-y-5 text-base leading-relaxed sm:text-lg">
        <p>{{ profile.summary }}</p>
        <p>{{ profile.summary2 }}</p>
      </div>

      <div v-reveal="120" class="card space-y-5">
        <div class="flex gap-4">
          <span
            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
          >
            <GraduationCap :size="22" />
          </span>
          <div>
            <h3 class="font-semibold text-slate-900 dark:text-white">{{ education.degree }}</h3>
            <p class="text-sm">{{ education.school }}</p>
            <p class="text-sm text-slate-500 dark:text-slate-400">{{ education.dates }}</p>
          </div>
        </div>
        <div class="flex gap-4">
          <span
            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400"
          >
            <MapPin :size="22" />
          </span>
          <div>
            <h3 class="font-semibold text-slate-900 dark:text-white">Based in</h3>
            <p class="text-sm">{{ profile.location }}</p>
          </div>
        </div>
        <div class="flex gap-4">
          <span
            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
          >
            <Mail :size="22" />
          </span>
          <div class="min-w-0">
            <h3 class="font-semibold text-slate-900 dark:text-white">Email</h3>
            <a :href="`mailto:${profile.email}`" class="break-all text-sm hover:text-indigo-500">{{ profile.email }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
