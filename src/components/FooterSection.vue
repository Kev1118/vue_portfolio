<script setup>
import { profile } from '../data/portfolio'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-200 py-8 dark:border-white/10">
    <div
      class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 text-sm text-slate-500 sm:flex-row sm:px-8 dark:text-slate-400"
    >
      <p>© {{ year }} {{ profile.name }}. All rights reserved.</p>
      <p>Built with Vue 3 &amp; Tailwind CSS</p>
    </div>
  </footer>
</template>
