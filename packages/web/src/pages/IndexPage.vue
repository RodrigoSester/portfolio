<template>
  <q-page class="row justify-evenly">
    <div class="q-pa-md q-gutter-md">
      <div class="row justify-between">
        <q-parallax src="https://cdn.quasar.dev/img/parallax2.jpg">
          <h1 class="text-white">Basic</h1>
        </q-parallax>
      </div>
    </div>
    <div class="q-px-lg q-py-md">
      <q-timeline layout="loose" color="secondary">
        <q-timeline-entry heading> Experiences </q-timeline-entry>
        <!-- todo: add more experiences and save them in database -->
        <q-timeline-entry
          title="Full Stack Developer"
          subtitle="February 21, 1986"
          color="primary"
          side="left"
          :icon="'mdi-bed-clock'"
        >
          <div>
            Actually working as a Full Stack Developer at +A Educação, working
            with Vue.js, Quasar Framework, Node.js, Express.js, Git, Azure.
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Estágio +A Educação"
          subtitle="February 22, 1986"
          color="red"
        >
          <div>
            Moment that I evolved a lot as a person and as a professional, I
            learned how to work in groups, how to be a better professional
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Estágio Back-end FEBEM"
          subtitle="1 mês"
          color="green"
          side="left"
        >
          <div>
            Worked as a Backend Developer, where I learned and have my first
            contact with PHP, MySQL.
          </div>
        </q-timeline-entry>

        <q-timeline-entry heading> Education </q-timeline-entry>

        <q-timeline-entry
          title="UNISINOS - Análise e Desenvolvimento de Sistemas"
          subtitle="February 22, 1986"
          color="purple"
        >
          <div>
            I'm currently studying at UNISINOS, where I'm learning a lot about
            programming.
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Ensino médio - Colégio Maria Auxiliadora"
          subtitle="February 22, 1986"
          color="blue"
          side="left"
        >
          <div>
            I studied at Colégio Maria Auxiliadora, where I learned a lot about
            life and how to be a better person.
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
  components: { FooterMain },
});
</script>
