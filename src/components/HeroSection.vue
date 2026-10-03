<script setup>
import { ArrowDown, Download } from 'lucide-vue-next'
import AppIcon from './AppIcon.vue'
import { profile, socials, stats } from '../data/portfolio'
import { useTyped } from '../composables/useTyped'

const typed = useTyped(profile.roles)
</script>

<template>
  <section id="home" class="relative isolate overflow-hidden">
    <!-- Decorative background -->
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div class="bg-grid absolute inset-0"></div>
      <div
        class="animate-float absolute -left-24 top-24 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl sm:h-96 sm:w-96"
      ></div>
      <div
        class="animate-float absolute -right-20 top-48 h-64 w-64 rounded-full bg-cyan-400/25 blur-3xl sm:h-80 sm:w-80"
        style="animation-delay: -3s"
      ></div>
      <div
        class="animate-float absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-violet-500/25 blur-3xl"
        style="animation-delay: -5s"
      ></div>
    </div>

    <div
      class="mx-auto grid min-h-screen w-full max-w-6xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.25fr_1fr] lg:gap-8"
    >
      <div class="order-2 text-center lg:order-1 lg:text-left">
        <p
          class="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400"
        >
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          Open to new opportunities
        </p>

        <h1
          class="font-display text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
        >
          Hi, I'm <span class="gradient-text">{{ profile.name }}</span
          >.
        </h1>

        <p class="mt-4 flex min-h-8 items-center justify-center gap-1 text-xl font-medium text-slate-700 sm:text-2xl lg:justify-start dark:text-slate-200">
          <span>{{ typed }}</span
          ><span class="animate-blink inline-block h-6 w-0.5 bg-indigo-500"></span>
        </p>

        <p class="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0 dark:text-slate-400">
          {{ profile.tagline }}
        </p>

        <div class="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
          <a href="#projects" class="btn btn-primary">
            View my work
            <ArrowDown :size="18" />
          </a>
          <a :href="profile.resume" download class="btn btn-ghost">
            <Download :size="18" />
            Download résumé
          </a>
        </div>

        <ul class="mt-8 flex items-center justify-center gap-3 lg:justify-start">
          <li v-for="s in socials" :key="s.name">
            <a
              :href="s.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="s.name"
              class="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 text-slate-600 transition hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/15 dark:text-slate-300 dark:hover:text-white"
            >
              <AppIcon :name="s.icon" :size="20" />
            </a>
          </li>
        </ul>
      </div>

      <!-- Photo -->
      <div class="order-1 mx-auto lg:order-2">
        <div class="relative">
          <div
            class="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 opacity-70 blur-xl"
            aria-hidden="true"
          ></div>
          <div
            class="relative h-56 w-56 overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl sm:h-72 sm:w-72 lg:h-80 lg:w-80 dark:border-white/10"
          >
            <img
              :src="profile.photo"
              :alt="`Portrait of ${profile.name}`"
              class="h-full w-full object-cover"
              width="320"
              height="320"
            />
          </div>
          <div
            class="card absolute -bottom-5 -left-4 !px-4 !py-3 text-sm font-semibold text-slate-800 shadow-lg sm:-left-10 dark:text-white"
          >
            <span class="gradient-text text-xl font-bold">5+</span> years of experience
          </div>
        </div>
      </div>
    </div>

    <!-- Stats strip -->
    <div class="mx-auto -mt-6 max-w-6xl px-5 pb-4 sm:px-8">
      <dl class="card grid grid-cols-2 gap-6 text-center md:grid-cols-4">
        <div v-for="s in stats" :key="s.label" class="flex flex-col">
          <dt class="order-2 text-sm text-slate-500 dark:text-slate-400">{{ s.label }}</dt>
          <dd class="font-display text-3xl font-bold text-slate-900 dark:text-white">{{ s.value }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
