<template>
  <div class="min-h-screen dark:bg-gray-800">
    <HeaderContent />
    <Nuxt />
  </div>
</template>

<script>
import HeaderContent from '@/components/Header/Content'

export default {
  name: 'default',
  components: {
    HeaderContent,
  },
}
</script>
