
<script setup lang="ts">
const objectives = [
  {
    number: '01',
    title: 'Showcase Individual Talents',
    description: 'Provide students with a platform to present their abilities, technical skills, and personal strengths.'
  },
  {
    number: '02',
    title: 'Highlight Personal Interests',
    description: 'Introduce the hobbies, passions, and activities that contribute to each student’s individuality.'
  },
  {
    number: '03',
    title: 'Recognize Student Growth',
    description: 'Appreciate the experiences, accomplishments, and continuous development of students.'
  }
]
</script>

<template>
  <div>
    <!-- Page Heading -->
    <section class="bg-[#F5F5F0] px-6 py-20 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <p class="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#738C78]">
          About the Platform
        </p>

        <h1 class="max-w-3xl font-heading text-4xl font-extrabold leading-tight text-[#193D30] sm:text-5xl">
          A closer look at the <span class="text-[#738C78]">people</span> behind every <span class="text-[#738C78]">profile.</span>
        </h1>

        <p class="mt-6 max-w-2xl text-sm leading-8 text-[#737D76]">
          Learn about StuRIA, its purpose, and the idea behind creating a space that celebrates <br>student individuality.
        </p>
      </div>
    </section>

    <!-- About Description -->
    <section class="bg-[#E8EDE7] px-6 py-20 lg:px-10">
      <div class="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
        <div class="overflow-hidden rounded-3xl">
          <img
            src="https://som.carsu.edu.ph/wp-content/uploads/2025/04/Group-Shot-9-1024x704.jpg"
            alt="Students working together"
            class="h-[350px] w-full object-cover"
          />
        </div>

        <div>
          <p class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#738C78]">
            Our Story
          </p>

          <h2 class="font-heading text-3xl font-bold leading-tight text-[#193D30]">
            Every individual brings something <span class="text-[#738C78]">different.</span>
          </h2>

          <p class="mt-6 text-sm leading-8 text-[#737D76]">
            StuRIA was created to provide a space where students can introduce themselves beyond their names and academic backgrounds. It brings together different profiles that highlight personal abilities, interests, and experiences.
          </p>

          <p class="mt-4 text-sm leading-8 text-[#737D76]">
            Through a collection of student profiles, the platform encourages appreciation of individual talents and recognizes that learning and personal growth take different forms for everyone.
          </p>
        </div>
      </div>
    </section>

    <!-- Objectives -->
    <section class="bg-[#F5F5F0] px-6 py-20 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div class="mb-12 max-w-2xl">
          <p class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#738C78]">
            Our Purpose
          </p>

          <h2 class="font-heading text-3xl font-bold text-[#193D30] sm:text-4xl">
            What StuRIA aims to achieve.
          </h2>

          <p class="mt-4 text-sm leading-7 text-[#737D76]">
            The platform focuses on recognizing the different qualities and experiences that make every student unique.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <InfoCard
            v-for="item in objectives"
            :key="item.number"
            :number="item.number"
            :title="item.title"
            :description="item.description"
          />
        </div>
      </div>
    </section>

    <!-- Closing -->
    <section class="bg-[#E8EDE7] px-6 py-20 text-center">
      <div class="mx-auto max-w-2xl">
        <h2 class="font-heading text-3xl font-bold text-[#193D30] sm:text-4xl">
        Every story deserves a space.
        </h2>

        <p class="mt-5 text-sm leading-7 text-[#737D76]">
        Discover the people, talents, and experiences that bring the StuRIA community together.
        </p>

        <div class="mt-8">
          <AppButton label="Meet Our Students" color="forest" to="/students" />
        </div>
      </div>
    </section>
  </div>
</template>
