export default defineNuxtPlugin((nuxtApp) => {
  const observers = new WeakMap<Element, IntersectionObserver>()

  nuxtApp.vueApp.directive('reveal', {
    getSSRProps() {
      return {}
    },

    mounted(el, binding) {
      const delay = typeof binding.value === 'number'
        ? binding.value
        : 0

      el.classList.add('reveal')
      el.style.setProperty('--reveal-delay', `${delay}ms`)

      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0]

          if (entry && entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        },
        { threshold: 0.12 }
      )

      observers.set(el, observer)
      observer.observe(el)
    },

    unmounted(el) {
      observers.get(el)?.disconnect()
      observers.delete(el)
    }
  })
})