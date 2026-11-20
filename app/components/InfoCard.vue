<script setup lang="ts">
defineProps<{
  title: string
  description: string
  number?: string
}>()
</script>

<template>
  <div v-reveal>
    <article class="info-card rounded-2xl border border-[#E3E8E1] bg-white p-6">
      <p
        v-if="number"
        class="mb-3 font-heading text-xl font-semibold text-[#A5B9A8]"
      >
        {{ number }}
      </p>

      <h3 class="mb-2 font-heading text-lg font-bold text-[#193D30]">
        {{ title }}
      </h3>

      <p class="text-sm leading-7 text-[#737D76]">
        {{ description }}
      </p>
    </article>
  </div>
</template>