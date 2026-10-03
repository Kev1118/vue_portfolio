import { ref, onMounted, onBeforeUnmount } from 'vue'

// Cycles through `words` with a typewriter effect.
export function useTyped(words, { typeMs = 70, deleteMs = 35, holdMs = 1500 } = {}) {
  const text = ref(words[0] ?? '')
  let timer = null
  let wordIndex = 0
  let charIndex = words[0]?.length ?? 0
  let deleting = true

  const reduced =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  function tick() {
    const word = words[wordIndex]
    if (deleting) {
      charIndex--
      text.value = word.slice(0, Math.max(charIndex, 0))
      if (charIndex <= 0) {
        deleting = false
        wordIndex = (wordIndex + 1) % words.length
        timer = setTimeout(tick, 300)
        return
      }
      timer = setTimeout(tick, deleteMs)
    } else {
      charIndex++
      text.value = word.slice(0, charIndex)
      if (charIndex >= word.length) {
        deleting = true
        timer = setTimeout(tick, holdMs)
        return
      }
      timer = setTimeout(tick, typeMs)
    }
  }

  onMounted(() => {
    if (reduced) return
    timer = setTimeout(tick, holdMs)
  })
  onBeforeUnmount(() => clearTimeout(timer))

  return text
}
