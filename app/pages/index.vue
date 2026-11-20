<script setup lang="ts">
const students = [
  {
    name: 'Elaine Mae M. Balbada',
    image: '/images/elaine.png',
    course: '3rd Year - Bachelor of Science in Information Technology',
    description: 'A student exploring technology, creative design, and the development of meaningful digital experiences.',
    skills: [
      { label: 'UI/UX Design', icon: 'lucide:palette' },
      { label: 'Frontend Development', icon: 'lucide:code' },
      { label: 'Python Programming', icon: 'lucide:terminal' },
      { label: 'Database Management', icon: 'lucide:database' }
    ],
    socials: {
      facebook: 'https://web.facebook.com/eunaaaaaaaa',
      instagram: 'https://www.instagram.com/ecushla',
      github: 'https://github.com/elainemaebalbada'
    }
  },
  {
    name: 'Kiesha Jae T. Calderon',
    image: '/images/kiesha.png',
    course: '2nd Year - Bachelor of Science in Computer Science',
    description: 'A student interested in web technologies, creative work, and developing technical skills.',
    skills: [
      { label: 'Web Development', icon: 'lucide:code' },
      { label: 'HTML and CSS', icon: 'lucide:code-2' },
      { label: 'JavaScript', icon: 'lucide:braces' },
      { label: 'Graphic Design', icon: 'lucide:palette' }
    ],
    socials: {
      facebook: 'https://web.facebook.com/bby.kjae',
      instagram: 'https://www.instagram.com/bby.kjae',
      github: 'https://github.com/kieshajaecalderon'
    }
  },
  {
    name: 'Richelle Ann W. Calabroso',
    image: '/images/richelle.png',
    course: '3rd Year - Bachelor of Science in Information Systems',
    description: 'A student building knowledge in programming, web design, and technology.',
    skills: [
      { label: 'Programming', icon: 'lucide:terminal' },
      { label: 'Web Design', icon: 'lucide:layout' },
      { label: 'Database Management', icon: 'lucide:database' },
      { label: 'Problem Solving', icon: 'lucide:lightbulb' }
    ],
    socials: {
      facebook: 'https://web.facebook.com/search/top?q=richelle%20ann%20calabroso',
      instagram: 'https://www.instagram.com/chelleann_1317/',
      github: 'https://github.com/calabrosorichelleann-workac'
    }
  },
  {
    name: 'Ashley Shanne P. Caina',
    image: '/images/ashley.png',
    course: '4th Year - Bachelor of Science in Computer Science',
    description: 'A student exploring frontend development, creative design, and digital technologies.',
    skills: [
      { label: 'UI/UX Design', icon: 'lucide:palette' },
      { label: 'Frontend Development', icon: 'lucide:code' },
      { label: 'Python Programming', icon: 'lucide:terminal' },
      { label: 'Database Management', icon: 'lucide:database' }
    ],
    socials: {
      facebook: 'https://web.facebook.com/ashleyyshanne',
      instagram: 'https://www.instagram.com/ashleyyshanne/',
      github: 'https://github.com/ashleycaina21-beep'
    }
  },
  {
    name: 'Peter Paul S. Manatad Jr.',
    image: '/images/peter.png',
    course: '3rd Year - Bachelor of Science in Information Technology',
    description: 'A student who is passionate about technology and being creative.',
    skills: [
      { label: 'Frontend Development', icon: 'lucide:code' },
      { label: 'UI/UX Design', icon: 'lucide:palette' },
      { label: 'Database Management', icon: 'lucide:database' },
      { label: 'Python Programming', icon: 'lucide:terminal' }
    ],
    socials: {
      facebook: 'https://web.facebook.com/peterpaul.manatadjr',
      instagram: 'https://www.instagram.com/thatboipedroo/',
      github: 'https://github.com/peterpaulmanatad-debug'
    }
  }
]

const highlights = [
  {
    number: '01',
    title: 'Discover Talents',
    description: 'Explore the different skills, strengths, and abilities that students bring to the community.'
  },
  {
    number: '02',
    title: 'Explore Interests',
    description: 'Get to know students beyond academics through their hobbies, passions, and interests.'
  },
  {
    number: '03',
    title: 'Celebrate Growth',
    description: 'Recognize the experiences, accomplishments, and personal development of every student.'
  }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section v-reveal class="bg-[#F5F5F0]">
      <div class="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
        <div>
          <p class="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#738C78]">
            A Student Portfolio Platform
          </p>

          <h1 class="max-w-xl font-heading text-4xl font-extrabold leading-[1.15] tracking-tight text-[#193D30] sm:text-5xl lg:text-6xl">
            Every student <br>has a story worth <span class="text-[#738C78]">showcasing.</span>
          </h1>

          <p class="mt-6 max-w-lg text-base leading-8 text-[#737D76]">
            Discover the skills, interests, and experiences that make every student unique. A space where talents are recognized and individual journeys are celebrated.
          </p>

          <div class="mt-9 flex flex-wrap gap-3">
            <AppButton label="Explore Students" color="forest" to="/students" />
            <AppButton label="Learn More" color="white" to="/about" />
          </div>
        </div>

        <div>
          <img
            src="https://i.ytimg.com/vi/EMw4kNR7Lz8/maxresdefault.jpg"
            alt="University students collaborating"
            class="h-[360px] w-full rounded-3xl object-cover shadow-lg sm:h-[450px]"
          />
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section v-reveal class="bg-[#E8EDE7] px-6 py-20 lg:px-10">
      <div class="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#738C78]">
            Get to Know StuRIA
          </p>

          <h2 class="font-heading text-3xl font-bold leading-tight text-[#193D30] sm:text-4xl">
            More than a name,<br><span class="text-[#738C78]">a collection of possibilities.</span>
          </h2>
        </div>

        <div>
          <p class="text-sm leading-8 text-[#737D76]">
            StuRIA is a student portfolio platform designed to highlight individual abilities, academic backgrounds, and personal interests. It provides a space where students can present who they are and what they can do.
          </p>

          <p class="mt-4 text-sm leading-8 text-[#737D76]">
            Through each profile, visitors can discover different talents, explore areas of interest, and appreciate the unique experiences that shape every student's journey.
          </p>
        </div>
      </div>
    </section>

    <!-- Featured Students -->
    <section v-reveal class="bg-[#F5F5F0] px-6 py-20 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div class="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#738C78]">
              Meet the Community
            </p>

            <h2 class="font-heading text-3xl font-bold text-[#193D30] sm:text-4xl">
              Featured Students
            </h2>

            <p class="mt-3 max-w-lg text-sm leading-7 text-[#737D76]">
              Get to know the individuals behind the skills, creativity, and experiences.
            </p>
          </div>

          <AppButton label="View All Students" color="white" to="/students" />
        </div>

        <div class="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <StudentCard
            v-for="student in students.slice(0, 3)"
            :key="student.name"
            v-bind="student"
          />
        </div>
      </div>
    </section>

    <!-- Highlights -->
    <section v-reveal class="bg-[#E8EDE7] px-6 py-20 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div class="mx-auto mb-12 max-w-2xl text-center">
          <p class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#738C78]">
            What Makes StuRIA
          </p>

          <h2 class="font-heading text-3xl font-bold text-[#193D30] sm:text-4xl">
            A space to discover more.
          </h2>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <InfoCard
            v-for="item in highlights"
            :key="item.number"
            :number="item.number"
            :title="item.title"
            :description="item.description"
          />
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section v-reveal class="bg-[#F5F5F0] px-6 py-20 text-center lg:px-10">
      <div class="mx-auto max-w-2xl">
        <p class="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#738C78]">
          Your Journey Matters
        </p>

        <h2 class="font-heading text-3xl font-bold leading-tight text-[#193D30] sm:text-4xl">
          Every skill has a story. <br><span class="text-[#738C78]">Every student has potential.</span>
        </h2>

        <p class="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#737D76]">
          Explore the different people, abilities, and experiences that make up the StuRIA community.
        </p>

        <div class="mt-8">
          <AppButton label="Discover Our Students" color="forest" to="/students" />
        </div>
      </div>
    </section>
  </div>
</template>