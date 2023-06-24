<template>
  <q-page class="row justify-evenly">
    <div class="q-px-lg q-py-md">
      <q-card>
        <q-list separator>
          <q-item>
            <q-circular-progress
              rounded
              :value="71"
              size="90px"
              :thickness="0.2"
              color="lime"
              center-color="grey-8"
              track-color="transparent"
              class="q-ma-md"
            />
            <q-item-label header>
              <h4>VueJS</h4>
            </q-item-label>
            <q-item-section>
              abc de
            </q-item-section>
          </q-item>
          <q-item>
            <q-circular-progress
              rounded
              :value="71"
              size="90px"
              :thickness="0.2"
              color="orange"
              center-color="grey-8"
              track-color="transparent"
              class="q-ma-md"
            />
            <q-item-label header>
              <h4>NodeJS</h4>
            </q-item-label>
            <q-item-section>
              abc de
            </q-item-section>
          </q-item>
        </q-list>
        <div class="col justify-center">
        </div>
      </q-card>
      <!-- <div class="row justify-between">
        <q-parallax
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBjb2RlfGVufDB8fDB8fHww&w=1000&q=80"
        :height="200"
        >
          <h1 class="text-white">Basic</h1>
        </q-parallax>
      </div> -->
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
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { FooterMain },
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
