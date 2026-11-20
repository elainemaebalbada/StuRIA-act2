<script setup lang="ts">
const route = useRoute()

const links = [
  { label: 'Home', to: '/' },
  { label: 'Students', to: '/students' },
  { label: 'About', to: '/about' }
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-[#E3E8E1] bg-[#F5F5F0]/95 backdrop-blur-md">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
      <NuxtLink to="/" class="flex items-center">
        <img
            src="/logo-navbar.png"
            alt="STURIA"
            class="h-10 w-auto object-contain"
        />
      </NuxtLink>

      <div class="flex items-center gap-7">
        <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="relative text-sm font-medium text-[#193D30] hover:text-[#285642]
            after:absolute after:-bottom-2 after:left-0 after:h-[2px]
            after:w-full after:bg-[#193D30] after:opacity-0
            hover:after:opacity-100"
        >
        {{ link.label }}
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>