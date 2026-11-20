<script setup lang="ts">
defineProps<{
  name: string
  course: string
  image: string
  description: string
  skills: {
    label: string
    icon: string
  }[]
  socials: {
    facebook?: string
    instagram?: string
    github?: string
  }
}>()
</script>

<template>
  <!-- Scroll Reveal Wrapper -->
  <div v-reveal>
    <!-- Student Card -->
    <article class="student-card group overflow-hidden rounded-2xl border border-[#E3E8E1] bg-white">

      <!-- Student Image -->
      <div class="aspect-[4/3] overflow-hidden bg-[#E8EDE7]">
        <img
          :src="image"
          :alt="`Portrait of ${name}`"
          class="student-card-image h-full w-full object-cover"
        />
      </div>

      <!-- Student Information -->
      <div class="p-6">

        <!-- Name -->
        <h3 class="font-heading text-xl font-bold text-[#193D30]">
          {{ name }}
        </h3>

        <!-- Course -->
        <p class="mb-3 text-xs font-semibold leading-5 text-[#738C78]">
          {{ course }}
        </p>

        <!-- Description -->
        <p class="mt-2 text-sm leading-6 text-[#737D76]">
          {{ description }}
        </p>

        <!-- Skills -->
        <div class="mt-6 border-t border-[#E3E8E1] pt-5">
          <h4 class="mb-3 text-xs font-bold uppercase tracking-wider text-[#193D30]">
            Skills
          </h4>

          <div class="space-y-3">
            <div
              v-for="skill in skills"
              :key="skill.label"
              class="flex items-center gap-3"
            >
              <Icon
                :name="skill.icon"
                size="17"
                class="text-[#738C78]"
              />

              <span class="text-sm text-[#526B60]">
                {{ skill.label }}
              </span>
            </div>
          </div>
        </div>

        <!-- Social Media -->
        <div class="mt-6 border-t border-[#E3E8E1] pt-4">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-[#737D76]">
              Connect
            </span>

            <div class="flex items-center gap-4">
              <a
                v-if="socials.facebook"
                :href="socials.facebook"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`${name}'s Facebook profile`"
                class="text-[#737D76] transition-colors hover:text-[#1877F2]"
              >
                <Icon name="simple-icons:facebook" size="19" />
              </a>

              <a
                v-if="socials.instagram"
                :href="socials.instagram"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`${name}'s Instagram profile`"
                class="text-[#737D76] transition-colors hover:text-[#E4405F]"
              >
                <Icon name="simple-icons:instagram" size="19" />
              </a>

              <a
                v-if="socials.github"
                :href="socials.github"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`${name}'s GitHub profile`"
                class="text-[#737D76] transition-colors hover:text-[#193D30]"
              >
                <Icon name="simple-icons:github" size="19" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </article>
  </div>
</template>