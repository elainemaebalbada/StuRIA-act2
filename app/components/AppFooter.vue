<template>
  <footer class="bg-[#193D30] text-white">

    <!-- Main Footer -->
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-12 md:grid-cols-[1fr_auto] lg:px-10">

      <!-- Brand and Description -->
      <div>
        <NuxtLink to="/" class="inline-flex items-center">
          <img
            src="/logo-footer.png"
            alt="STURIA"
            class="h-12 w-auto object-contain"
          />
        </NuxtLink>

        <p class="mt-6 max-w-md text-sm leading-7 text-white/70">
          A space to discover student talents, skills,
          and individual stories.
        </p>

        <!-- Social Icons -->
        <div class="mt-6 flex items-center gap-5 text-white">
          <span aria-label="Facebook">
            <Icon name="simple-icons:facebook" size="23" />
          </span>

          <span aria-label="Instagram">
            <Icon name="simple-icons:instagram" size="23" />
          </span>

          <span aria-label="TikTok">
            <Icon name="simple-icons:tiktok" size="23" />
          </span>

          <span aria-label="GitHub">
            <Icon name="simple-icons:github" size="23" />
          </span>
        </div>
      </div>

      <!-- Navigation -->
      <div class="md:min-w-[140px]">
        <h3 class="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#A5B9A8]">
          Explore
        </h3>

        <ul class="space-y-4 text-sm text-white/85">
          <li>
            <NuxtLink to="/" class="hover:text-[#A5B9A8]">
              Home
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/students" class="hover:text-[#A5B9A8]">
              Students
            </NuxtLink>
          </li>

          <li>
            <NuxtLink to="/about" class="hover:text-[#A5B9A8]">
              About
            </NuxtLink>
          </li>
        </ul>
      </div>

    </div>

    <!-- Footer Bottom -->
    <div class="border-t border-white/15">
      <div class="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-5 text-center sm:flex-row sm:text-left lg:px-10">

        <p class="text-xs text-white/60">
          © {{ new Date().getFullYear() }} StuRIA. All rights reserved.
        </p>

        <p class="text-xs text-white/60">
          Designed and developed with excellence.
        </p>

      </div>
    </div>

  </footer>
</template>