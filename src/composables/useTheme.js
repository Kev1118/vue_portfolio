import { useDark, useToggle } from '@vueuse/core'

// Toggles the `dark` class on <html> and persists the choice in localStorage ("theme").
const isDark = useDark({
  storageKey: 'theme',
  valueDark: 'dark',
  valueLight: 'light',
  initialValue: 'dark',
})
const toggleDark = useToggle(isDark)

export function useTheme() {
  return { isDark, toggleDark }
}
