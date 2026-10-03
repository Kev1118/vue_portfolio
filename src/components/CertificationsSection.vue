<script setup>
import { Award } from 'lucide-vue-next'
import { certifications } from '../data/portfolio'
</script>

<template>
  <section id="certifications" class="section">
    <div v-reveal>
      <span class="section-label">Training &amp; certifications</span>
      <h2 class="section-title">Always learning</h2>
    </div>

    <ul class="mt-10 grid gap-5 sm:grid-cols-2">
      <li v-for="(cert, i) in certifications" :key="cert.title" v-reveal="i * 70" class="card flex items-start gap-4">
        <span
          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400"
        >
          <Award :size="22" />
        </span>
        <div>
          <h3 class="font-semibold text-slate-900 dark:text-white">{{ cert.title }}</h3>
          <p class="text-sm">{{ cert.issuer }}</p>
          <p class="text-sm text-slate-500 dark:text-slate-400">{{ cert.date }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>
