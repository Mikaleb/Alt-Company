<template>
  <div class="m-6">
    <client-only placeholder="loading...">
      <ckeditor-nuxt v-model="contentHolder" />
      <p>Markdown output :</p>
      <textarea v-html="contentMd"></textarea>
    </client-only>
    <button class="btn" @click="saveContent">
      💾 <span class="mx-1">Save</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'New',
  components: {
    'ckeditor-nuxt': () => {
      if (process.client) {
        return import('@blowstack/ckeditor-nuxt')
      }
    },
  },
  data() {
    return {
      editorConfig: {
        simpleUpload: {
          uploadUrl: 'path_to_image_controller',
          headers: {
            Authorization: 'optional_token',
          },
        },
      },
      contentHolder: '',
      contentMd: '',
    }
  },

  watch: {
    contentHolder(val) {
      const TurndownService = require('turndown').default
      const turndownService = new TurndownService()
      const markdown = turndownService.turndown(val)
      console.log(
        '🚀 ~ file: new.vue ~ line 40 ~ contentHolder ~ markdown',
        markdown
      )
      this.contentMd = markdown

      console.log(val)
    },
  },

  methods: {
    saveContent() {
      alert(this.content)
    },
  },
}
</script>
