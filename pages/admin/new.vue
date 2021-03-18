<template>
  <div class="m-6">
    <input placeholder="title" v-model="contentHeader.title" class="mb-4" />
    <input
      placeholder="description"
      v-model="contentHeader.description"
      class="mb-4"
    />
    <client-only placeholder="loading...">
      <ckeditor-nuxt
        v-model="contentHolder"
        :config="editorConfig"
        @ready="onEditorReady"
      />
      <div class="mt-6"><p>Markdown output :</p></div>
    </client-only>

    <pre class="mt-6">
---
title: {{ contentHeader.title }}
description: {{ contentHeader.description }}
---

{{ contentMd }}
</pre
    >
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
      contentHeader: {
        title: '',
        description: '',
      },
    }
  },

  watch: {
    contentHolder(val) {
      const TurndownService = require('turndown').default
      const markdown = new TurndownService().turndown(val)
      this.contentMd = markdown
    },
  },

  methods: {
    onEditorReady(editor) {
      // Insert the toolbar before the editable area.
      editor.config.height = '500'
    },
  },
}
</script>
