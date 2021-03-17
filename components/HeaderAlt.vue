<template>
  <header
    class="p-2 bg-white border-b-2 border-gray-200 shadow dark:bg-gray-800 topnav h-54px"
  >
    <div
      class="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start right">
          <a href="/">
            <Logo class="w-48 mr-3" />
          </a>
        </div>
        <div class="self-end left">
          <ul class="flex justify-around lang-switch" v-if="!isContentPage">
            <li v-if="$i18n.locale !== 'en'">
              <nuxt-link class="text-md" :to="switchLocalePath('en')"
                >🇬🇧 EN</nuxt-link
              >
            </li>
            <li v-if="$i18n.locale !== 'es'">
              <nuxt-link class="text-md" :to="switchLocalePath('es')"
                >🇪🇸 ES</nuxt-link
              >
            </li>
            <li v-if="$i18n.locale !== 'fr'">
              <nuxt-link class="text-md" :to="switchLocalePath('fr')"
                >🇫🇷 FR</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderAlt',
  computed: {
    isContentPage() {
      return this.$route.name.includes('slug')
    },
  },
}
</script>