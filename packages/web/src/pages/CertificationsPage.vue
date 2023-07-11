<template>
  <Certifications />
</template>

<script lang="ts">
import Certifications from 'src/components/certifications/CertificationsList.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CertificationsPage',
  components: {
    Certifications,
  },
});
</script>

<style scoped>

</style>