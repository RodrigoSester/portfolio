<template>
  <q-page class="row justify-evenly">
      <div class="q-px-lg q-py-md">
        <q-timeline color="secondary">
          <q-timeline-entry heading>
            Experiences
          </q-timeline-entry>
    
          <q-timeline-entry
            title="Estágio +A Educação"
            subtitle="February 22, 1986"
          >
            <div>
              Moment that I evolved a lot as a person and as a professional, I learned how to work in groups, how to be a better professional
            </div>
          </q-timeline-entry>
    
          <q-timeline-entry
            title="Full Stack Developer"
            subtitle="February 21, 1986"
            :icon="'mdi-bed-clock'"
          >
            <div>
              Actually working as a Full Stack Developer at +A Educação, working with Vue.js, Quasar Framework, Node.js, Express.js, Git, Azure.
            </div>
          </q-timeline-entry>
          <q-timeline-entry
            title="Estágio Back-end FEBEM"
            subtitle="1 mês"
          >
            <div>
              Worked as a Backend Developer, where I learned and have my first contact with PHP, MySQL.
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
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
