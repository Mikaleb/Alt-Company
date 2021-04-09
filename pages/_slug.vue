<template>
  <div class="pt-6 mx-auto">
    <article v-if="post" class="mx-6 card">
      <header class="p-4 mb-6 rounded">
        <img v-if="post.media" :src="post.media" alt="post.title" />
        <div class="">
          <h1 class="">{{ post.title }}</h1>
          <p class="text-sm text-gray-700">
            {{ $t('published-at') }} {{ getDate }}
          </p>
          <!-- <button>Edit</button> -->
        </div>
      </header>
      <nuxt-content class="text-gray-800" :document="post" />
    </article>
  </div>
</template>

<script>
import { format } from 'date-fns'

export default {
  name: 'Post',
  computed: {
    getDate() {
      return format(new Date(this.post.createdAt), 'dd/MM')
    },
  },
  head() {
    return {
      title: this.post.title,
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description,
        },
        {
          property: 'og:title',
          hid: 'og:title',
          content: this.post.title,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.post.media,
        },
      ],
    }
  },
  async asyncData({ $content, app, params, error }) {
    const slug = params.slug || 'index'
    const defaultLocale = app.i18n.locale
    const post = await $content(defaultLocale, slug)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'Post not found' })
      })

    return {
      post,
    }
  },
}
</script>
