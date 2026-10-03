<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import { projects } from '../data/portfolio'
</script>

<template>
  <section id="projects" class="section">
    <div v-reveal>
      <span class="section-label">Projects</span>
      <h2 class="section-title">Featured systems</h2>
      <p class="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
        A selection of in-house and internal systems I've designed and built.
      </p>
    </div>

    <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <a
        v-for="(project, i) in projects"
        :key="project.title"
        v-reveal="(i % 3) * 80"
        :href="project.href"
        target="_blank"
        rel="noopener noreferrer"
        class="group card relative flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-indigo-400/60 hover:shadow-xl hover:shadow-indigo-500/10"
      >
        <div
          class="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/30 to-cyan-400/20 blur-2xl transition group-hover:scale-150"
          aria-hidden="true"
        ></div>

        <div class="relative flex items-start justify-between">
          <span
            class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 font-display text-sm font-bold text-white"
          >
            {{ project.short }}
          </span>
          <ArrowUpRight
            :size="22"
            class="text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-500"
          />
        </div>

        <h3 class="relative mt-5 font-display text-lg font-semibold text-slate-900 dark:text-white">
          {{ project.title }}
        </h3>
        <p class="relative mt-2 flex-1 text-sm leading-relaxed">{{ project.description }}</p>

        <ul class="relative mt-5 flex flex-wrap gap-2">
          <li v-for="tag in project.tags" :key="tag" class="chip">{{ tag }}</li>
        </ul>
        <span class="sr-only">(opens in a new tab)</span>
      </a>
    </div>
  </section>
</template>
