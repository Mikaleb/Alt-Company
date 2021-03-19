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
          <dropdown v-if="!isContentPage">
            <slot>
              <ul>
                <template v-for="locale in locales">
                  <li
                    :key="locale.code"
                    v-if="$i18n.locale !== locale.code.toLowerCase()"
                  >
                    <nuxt-link
                      class="text-md"
                      :to="switchLocalePath(locale.code.toLowerCase())"
                      >{{ locale.flag }} {{ locale.code }}</nuxt-link
                    >
                  </li>
                </template>
              </ul>
            </slot>
          </dropdown>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Dropdown from '@/components/Dropdown.vue'
export default {
  name: 'HeaderAlt',
  components: {
    Dropdown,
  },
  computed: {
    isContentPage() {
      return this.$route.params?.slug ? true : false
    },
  },

  data() {
    return {
      locales: [
        {
          flag: '🇫🇷',
          code: 'FRA',
        },
        {
          flag: '🇬🇧',
          code: 'ENG',
        },
        {
          flag: '🇪🇸',
          code: 'ESP',
        },
      ],
    }
  },
}
</script>