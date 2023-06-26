<template>
  <q-page>
    <knowledge-card />
    <!-- todo dialog tocando a música fluorescent adolescent -->
    <div class="q-px-lg q-py-md">
      <!-- <div class="row justify-between">
        <q-parallax
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBjb2RlfGVufDB8fDB8fHww&w=1000&q=80"
        :height="200"
        >
          <h1 class="text-white">Basic</h1>
        </q-parallax>
      </div> -->
      <experiences-timeline />
    </div>
    <footer-main />
  </q-page>
</template>

<script lang="ts">
import FooterMain from 'src/components/FooterMain.vue';
import KnowledgeCard from 'src/components/KnowledgeCard.vue'
import ExperiencesTimeline from 'src/components/ExperiencesTimeline.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { 
    FooterMain,
    KnowledgeCard,
    ExperiencesTimeline
  },
  setup() {
    const scrollInfo = ref({});
    return {
      scrollInfo,
      onScroll(info: object) {
        scrollInfo.value = info;
      }
    }
  }
});
</script>
