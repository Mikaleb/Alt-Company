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
          <h3>{{ post.title }}</h3>
          <p class="text-base text-gray-700">
            {{ post.description }}
          </p>
        </div>
        <footer class="p-4">
          <nuxt-link :to="post.path" class="mb-2 text-xl font-bold">
            <button :to="post.path" class="btn btn-teal">
              {{ $t('read-more') }}
            </button>
          </nuxt-link>
        </footer>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  async asyncData(context) {
    const { $content, app } = context
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

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
