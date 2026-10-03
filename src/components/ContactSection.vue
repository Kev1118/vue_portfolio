<script setup>
import { reactive } from 'vue'
import { Send } from 'lucide-vue-next'
import AppIcon from './AppIcon.vue'
import { profile, socials } from '../data/portfolio'

const form = reactive({ name: '', email: '', message: '' })

// No backend needed: opens the visitor's email app with the message prefilled.
function submit() {
  const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
  const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
}

const fieldClass =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40 dark:border-white/15 dark:bg-white/5 dark:text-white'
</script>

<template>
  <section id="contact" class="section">
    <div v-reveal class="text-center">
      <span class="section-label">Contact</span>
      <h2 class="section-title">Let's build something together</h2>
      <p class="mx-auto mt-3 max-w-xl text-slate-600 dark:text-slate-400">
        Have a project, a role or a legacy system that needs attention? Send me a message and I'll get back to you.
      </p>
    </div>

    <div class="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
      <div v-reveal class="card space-y-6">
        <a :href="`mailto:${profile.email}`" class="flex items-center gap-4 hover:text-indigo-500">
          <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
            <AppIcon name="mail" />
          </span>
          <span class="min-w-0 break-all text-sm font-medium">{{ profile.email }}</span>
        </a>
        <a :href="`tel:${profile.phoneHref}`" class="flex items-center gap-4 hover:text-indigo-500">
          <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
            <AppIcon name="phone" />
          </span>
          <span class="text-sm font-medium">{{ profile.phone }}</span>
        </a>
        <div class="flex items-center gap-4">
          <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500">
            <AppIcon name="pin" />
          </span>
          <span class="text-sm font-medium">{{ profile.location }}</span>
        </div>

        <ul class="flex gap-3 border-t border-slate-200 pt-6 dark:border-white/10">
          <li v-for="s in socials" :key="s.name">
            <a
              :href="s.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="s.name"
              class="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 text-slate-600 transition hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-600 dark:border-white/15 dark:text-slate-300 dark:hover:text-white"
            >
              <AppIcon :name="s.icon" />
            </a>
          </li>
        </ul>
      </div>

      <form v-reveal="100" class="card space-y-4" @submit.prevent="submit">
        <div class="grid gap-4 sm:grid-cols-2">
          <div>
            <label for="name" class="mb-1.5 block text-sm font-medium text-slate-800 dark:text-slate-200">Name</label>
            <input id="name" v-model.trim="form.name" type="text" required autocomplete="name" :class="fieldClass" placeholder="Your name" />
          </div>
          <div>
            <label for="email" class="mb-1.5 block text-sm font-medium text-slate-800 dark:text-slate-200">Email</label>
            <input id="email" v-model.trim="form.email" type="email" required autocomplete="email" :class="fieldClass" placeholder="you@example.com" />
          </div>
        </div>
        <div>
          <label for="message" class="mb-1.5 block text-sm font-medium text-slate-800 dark:text-slate-200">Message</label>
          <textarea id="message" v-model.trim="form.message" required rows="5" :class="fieldClass" placeholder="Tell me about your project..."></textarea>
        </div>
        <button type="submit" class="btn btn-primary w-full sm:w-auto">
          Send message
          <Send :size="18" />
        </button>
      </form>
    </div>
  </section>
</template>
