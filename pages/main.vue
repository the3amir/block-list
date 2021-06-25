<template>
  <div>
      <h1>her is</h1>
      <Slidbar/>
      <AddSwiper/>
  </div>
</template>

<script>
import Slidbar from '~/components/Slidbar.vue';
import AddSwiper from '~/components/AddSwiper.vue';

export default {
    layout:'Registration',
    components: {
        Slidbar,
        AddSwiper
    }
}
</script>

<style>

</style>