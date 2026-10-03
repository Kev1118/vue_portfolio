<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Menu, X, Sun, Moon } from 'lucide-vue-next'
import { nav, profile } from '../data/portfolio'
import { useTheme } from '../composables/useTheme'

const { isDark, toggleDark } = useTheme()
const open = ref(false)
const scrolled = ref(false)
const active = ref('')

let observer = null

function onScroll() {
  scrolled.value = window.scrollY > 16
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  // Highlight the nav link for the section currently in view
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) active.value = `#${entry.target.id}`
      })
    },
    { rootMargin: '-40% 0px -55% 0px' },
  )
  nav.forEach((item) => {
    const el = document.querySelector(item.href)
    if (el) observer.observe(el)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  observer?.disconnect()
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="
      scrolled || open
        ? 'border-b border-slate-200/70 bg-white/80 backdrop-blur-lg dark:border-white/10 dark:bg-ink/80'
        : 'border-b border-transparent'
    "
  >
    <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
      <a href="#home" class="font-display text-lg font-bold text-slate-900 dark:text-white">
        {{ profile.name.split(' ')[0] }}<span class="gradient-text">.</span>
      </a>

      <ul class="hidden items-center gap-1 lg:flex">
        <li v-for="item in nav" :key="item.href">
          <a
            :href="item.href"
            class="rounded-lg px-3 py-2 text-sm font-medium transition-colors"
            :class="
              active === item.href
                ? 'text-indigo-600 dark:text-indigo-400'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            "
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-2">
        <button
          type="button"
          class="rounded-lg p-2 text-slate-600 transition hover:bg-slate-200/70 dark:text-slate-300 dark:hover:bg-white/10"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleDark()"
        >
          <Sun v-if="isDark" :size="20" />
          <Moon v-else :size="20" />
        </button>
        <a href="#contact" class="btn btn-primary hidden !py-2 sm:inline-flex">Hire me</a>
        <button
          type="button"
          class="rounded-lg p-2 text-slate-700 hover:bg-slate-200/70 lg:hidden dark:text-slate-200 dark:hover:bg-white/10"
          :aria-expanded="open"
          aria-label="Toggle menu"
          @click="open = !open"
        >
          <X v-if="open" :size="22" />
          <Menu v-else :size="22" />
        </button>
      </div>
    </nav>

    <!-- Mobile / tablet menu -->
    <div v-show="open" class="border-t border-slate-200/70 px-5 pb-5 pt-2 lg:hidden dark:border-white/10">
      <ul class="grid gap-1 sm:grid-cols-2">
        <li v-for="item in nav" :key="item.href">
          <a
            :href="item.href"
            class="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
            @click="open = false"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
