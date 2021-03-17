<template>
  <div class="m-6">
    <input placeholder="title" class="mb-4" />
    <client-only placeholder="loading...">
      <ckeditor-nuxt
        v-model="contentHolder"
        :config="editorConfig"
        @ready="onEditorReady"
      />
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
        return import('@mikaleb/ckeditor-nuxt')
      }
    },
  },
  data() {
    return {
      editorConfig: {
        removePlugins: ['Title'],
        height: '500px',
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
    async saveContent() {
      console.log(this.contentMd)
      const { app } = context
      const defaultLocale = app.i18n.locale
      const url = `http://localhost:3000/_content/${defaultLocale}`
      const content = this.contentMd
      await fetch(url, {
        method: 'PUT',
        body: JSON.stringify({ file: content }),
      }).then((res) => res.json())
    },
    onEditorReady(editor) {
      console.log('🚀 ~ file: new.vue ~ line 69 ~ onReady ~ editor', { editor })
      // Insert the toolbar before the editable area.
      editor.config.height = '500'
    },
  },
}
</script>
