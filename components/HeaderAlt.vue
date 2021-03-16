<template>
  <header class="p-2 border-b-2 border-gray-200 topnav h-54px">
    <div class="flex items-center justify-between mx-auto">
      <div class="flex items-center justify-start right">
        <Logo class="w-8 h-8 mr-3" />
        <h1 class="text-lg font-bold text-gray-700">{{ title }}</h1>
      </div>
      <div class="self-end left">
        <ul class="flex justify-around lang-switch" v-if="!isContentPage">
          <li v-if="$i18n.locale !== 'en'">
            <nuxt-link class="text-md" :to="switchLocalePath('en')"
              >EN</nuxt-link
            >
          </li>
          <li v-if="$i18n.locale !== 'es'">
            <nuxt-link class="text-md" :to="switchLocalePath('es')"
              >ES</nuxt-link
            >
          </li>
          <li v-if="$i18n.locale !== 'fr'">
            <nuxt-link class="text-md" :to="switchLocalePath('fr')"
              >FR</nuxt-link
            >
          </li>
        </ul>
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