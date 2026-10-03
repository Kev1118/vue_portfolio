<script setup>
import { computed } from 'vue'
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Server,
  LayoutDashboard,
  Database,
  Wrench,
  Bot,
  Sparkles,
  BookOpen,
  Code,
} from 'lucide-vue-next'

const icons = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  mail: Mail,
  phone: Phone,
  pin: MapPin,
  server: Server,
  layout: LayoutDashboard,
  database: Database,
  wrench: Wrench,
  bot: Bot,
  sparkles: Sparkles,
  book: BookOpen,
  code: Code,
}

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 20 },
})

const component = computed(() => icons[props.name] ?? Code)
</script>

<template>
  <component :is="component" :size="size" aria-hidden="true" />
</template>
