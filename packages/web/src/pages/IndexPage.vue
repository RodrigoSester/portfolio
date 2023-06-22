<template>
  <q-page class="row justify-evenly">
    <footer-main></footer-main>
  </q-page>
</template>

<script lang="ts">
import FooterMain from 'src/components/FooterMain.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { FooterMain }
});
</script>
