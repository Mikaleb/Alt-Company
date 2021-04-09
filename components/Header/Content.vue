<template>
  <header
    class="p-2 bg-white border-b-2 border-gray-200 shadow dark:bg-gray-800 topnav h-54px"
  >
    <div
      class="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start right">
          <nuxt-link to="/">
            <Logo class="w-48 mr-3" />
          </nuxt-link>
        </div>
        <div class="self-end left">
          <dropdown v-if="!isContentPage">
            <template v-slot:dropdownBtn
              ><span class="text-black dark:text-white"
                >🌐 {{ $i18n.locale }}</span
              ></template
            >
            <template v-slot:content>
              <ul>
                <template v-for="(locale, index) in availableLocales">
                  <li :key="index" v-if="$i18n.locale !== locale.code">
                    <nuxt-link
                      class="capitalize text-md dark:text-white"
                      :to="switchLocalePath(locale.code)"
                      >{{ locale.code }}</nuxt-link
                    >
                  </li>
                </template>
              </ul>
            </template>
          </dropdown>
          <theme-switcher></theme-switcher>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Dropdown from '@/components/Dropdown.vue'
import ThemeSwitcher from '@/components/Header/ThemeSwitcher.vue'

export default {
  name: 'HeaderAlt',
  components: {
    Dropdown,
    ThemeSwitcher
  },
  computed: {
    isContentPage() {
      return this.$route.params?.slug ? true : false
    },
    availableLocales () {
    return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
}
</script>