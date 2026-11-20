<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  color?: 'forest' | 'white' | 'sage'
  to?: string
}>(), {
  color: 'forest',
  to: ''
})

const colors = {
  forest: 'bg-[#193D30] text-white hover:bg-[#285642]',
  white: 'bg-white text-[#193D30] border border-[#DDE3DC] hover:bg-[#E8EDE7]',
  sage: 'bg-[#E8EDE7] text-[#193D30] hover:bg-[#A5B9A8]'
}
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:translate-y-0 active:scale-[0.98]"
    :class="colors[color]"
  >
    {{ label }}
  </NuxtLink>

  <button
    v-else
    type="button"
    class="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:translate-y-0 active:scale-[0.98]"
    :class="colors[color]"
  >
    {{ label }}
  </button>
</template>