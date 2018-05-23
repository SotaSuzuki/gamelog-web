<template>
  <div id="app">
    <div class="nav-container">
      <global-navigation/>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
</style>

<script>
import { GlobalNavigation } from '@/components'

export default {
  components: {
    GlobalNavigation,
  },
}
</script>
