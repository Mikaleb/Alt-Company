<template>
  <div class="container mx-auto blog">
    <section class="grid grid-cols-3 gap-4 pt-12">
      <article
        class="flex flex-col max-w-sm overflow-hidden rounded shadow-lg post"
        v-for="(post, $index) in posts"
        :key="`post-${$index}`"
      >
        <img
          v-if="post.media"
          class="w-full"
          :src="post.media"
          :alt="post.title"
        />
        <div class="px-6 py-4 flex-2">
          <nuxt-link
            class="title"
            :to="{
              name: 'slug___' + $i18n.locale,
              params: { slug: post.slug },
            }"
            >{{ post.title }}</nuxt-link
          >
          <p class="text-base text-gray-700">
            {{ post.description }}
          </p>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  async asyncData(ctx) {
    const { $content, app } = ctx
    const defaultLocale = app.i18n.locale
    const posts = await $content(`${defaultLocale}`).fetch()

    return {
      posts: posts.map((post) => ({
        ...post,
        path: post.path.replace(`/${defaultLocale}`, ''),
      })),
    }
  },
}
</script>
