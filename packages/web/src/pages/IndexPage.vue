<template>
  <q-page class="row items-center justify-evenly">
    <information-me
      title="Links"
      caption="Find me on"
      icon="mdi-link-variant"
      :content="content"
    ></information-me>
  </q-page>
</template>

<script lang="ts">
import { Information } from 'components/models';
import InformationMe from 'components/InformationMe.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { InformationMe },
  setup() {
    const content = new Array<Information>(
      {
        id: 1,
        title: 'GitHub',
        icon: 'mdi-github',
        content: 'https://github.com/RodrigoSester'
      },
      {
        id: 2,
        title: 'LinkedIn',
        icon: 'mdi-linkedin',
        content: 'https://www.linkedin.com/in/rodrigo-weber-sesterheim/'
      }
    );
    return { content };
  }
});
</script>
