<script setup>
import { ref, onMounted } from 'vue'
import AppIcon from './AppIcon.vue'
import { coreSkills, skillGroups } from '../data/portfolio'

// Animate the proficiency bars the first time the card scrolls into view
const barsRef = ref(null)
const showBars = ref(false)

onMounted(() => {
  if (!('IntersectionObserver' in window) || !barsRef.value) {
    showBars.value = true
    return
  }
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        showBars.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 },
  )
  observer.observe(barsRef.value)
})
</script>

<template>
  <section id="skills" class="section">
    <div v-reveal>
      <span class="section-label">Skills</span>
      <h2 class="section-title">Tools and technologies I work with</h2>
    </div>

    <div class="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
      <!-- Proficiency bars -->
      <div ref="barsRef" v-reveal class="card">
        <h3 class="mb-5 font-display text-lg font-semibold text-slate-900 dark:text-white">Core proficiency</h3>
        <ul class="space-y-4">
          <li v-for="(skill, i) in coreSkills" :key="skill.name">
            <div class="mb-1.5 flex items-center justify-between text-sm">
              <span class="font-medium text-slate-800 dark:text-slate-200">{{ skill.name }}</span>
              <span class="text-slate-500 dark:text-slate-400">{{ skill.level }}%</span>
            </div>
            <div
              class="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10"
              role="progressbar"
              :aria-valuenow="skill.level"
              aria-valuemin="0"
              aria-valuemax="100"
              :aria-label="skill.name"
            >
              <div
                class="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 transition-[width] duration-1000 ease-out"
                :style="{ width: showBars ? `${skill.level}%` : '0%', transitionDelay: `${i * 80}ms` }"
              ></div>
            </div>
          </li>
        </ul>
      </div>

      <!-- Skill groups -->
      <div class="grid gap-4 sm:grid-cols-2">
        <div
          v-for="(group, i) in skillGroups"
          :key="group.title"
          v-reveal="i * 60"
          class="card !p-5"
          :class="{ 'sm:col-span-2': i === skillGroups.length - 1 && skillGroups.length % 2 === 1 }"
        >
          <div class="mb-3 flex items-center gap-3">
            <span
              class="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
            >
              <AppIcon :name="group.icon" :size="18" />
            </span>
            <h3 class="font-semibold text-slate-900 dark:text-white">{{ group.title }}</h3>
          </div>
          <ul class="flex flex-wrap gap-2">
            <li v-for="item in group.items" :key="item" class="chip">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
