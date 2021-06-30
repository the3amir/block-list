<template>
  <div>
      <Slidbar/>
      <AddSwiper/>
      <CardPerson/>
      <LabelCompany />
  </div>
</template>

<script>
import Slidbar from '~/components/Slidbar.vue';
import AddSwiper from '~/components/AddSwiper.vue';
import CardPerson from '../components/CardPerson.vue';
import LabelCompany from '../components/LabelCompany.vue'

export default {
    layout:'Registration',
    components: {
        Slidbar,
        AddSwiper,
        CardPerson,
        LabelCompany,
    }
}
</script>

<style>

</style>