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
      { label: 'Programming', icon: 'lucide:terminal' },
      { label: 'Web Design', icon: 'lucide:layout' },
      { label: 'Database Management', icon: 'lucide:database' },
      { label: 'Problem Solving', icon: 'lucide:lightbulb' }
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
      { label: 'Frontend Development', icon: 'lucide:code' },
      { label: 'HTML and CSS', icon: 'lucide:code-2' },
      { label: 'JavaScript', icon: 'lucide:braces' },
      { label: 'Creative Design', icon: 'lucide:palette' }
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
</script>

<template>
  <div>
    <!-- Page Introduction -->
    <section v-reveal class="bg-[#F5F5F0] px-6 py-20 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <p class="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#738C78]">
          The STURIA Community
        </p>

        <h1 class="font-heading text-4xl font-extrabold text-[#193D30] sm:text-5xl">
          Meet Our <span class="text-[#738C78]">Students.</span>
        </h1>

        <p class="mt-5 max-w-2xl text-sm leading-8 text-[#737D76]">
          Every student brings a unique combination of abilities, interests, and experiences. Explore their profiles and discover what makes each one different.
        </p>
      </div>
    </section>

    <!-- Student Directory -->
    <section class="min-h-[500px] bg-[#E8EDE7] px-6 py-16 lg:px-10">
      <div class="mx-auto max-w-7xl">

        <!-- Directory Heading -->
        <div v-reveal class="mb-12">
          <p class="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#738C78]">
            Explore the Community
          </p>

          <div class="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 class="font-heading text-4xl font-extrabold leading-tight text-[#193D30] sm:text-5xl">
                Student <span class="text-[#738C78]">Directory.</span>
              </h2>

              <p class="mt-4 max-w-2xl text-sm leading-7 text-[#737D76]">
                Discover the people behind each profile. Explore their academic backgrounds, technical skills, interests, and individual strengths.
              </p>
            </div>

            <div class="flex items-center gap-3 self-start rounded-xl border border-[#DDE3DC] bg-white px-5 py-3 md:self-auto">
              <span class="font-heading text-3xl font-bold text-[#193D30]">
                {{ students.length }}
              </span>

              <span class="text-xs font-semibold leading-5 text-[#737D76]">
                Students<br />Featured
              </span>
            </div>
          </div>
        </div>

        <!-- Student Cards -->
        <div class="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <StudentCard
            v-for="student in students"
            :key="student.name"
            v-bind="student"
          />
        </div>

      </div>
    </section>
  </div>
</template>
