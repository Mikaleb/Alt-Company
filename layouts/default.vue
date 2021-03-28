<template>
  <div>
    <HeaderContent />
    <Nuxt />
  </div>
</template>

<script>
import HeaderContent from '@/components/Header/Content'

export default {
  name:'default',
  components: {
    HeaderContent
  }
}
</script>