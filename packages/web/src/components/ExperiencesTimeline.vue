<template>
  <q-timeline layout="loose" color="secondary">
    <q-timeline-entry heading> {{ $t('experiences.title') }} </q-timeline-entry>
    <q-timeline-entry
      v-for="experience in experiences"
      :key="experience.id"
      :title="experience.title"
      :subtitle="experience.date"
      color="primary"
      side="left"
      :icon="'mdi-bed-clock'"
    >
      <div>
        {{ experience.description }}
      </div>
    </q-timeline-entry>

    <!-- <q-timeline-entry
      title="Estágio +A Educação"
      subtitle="February 22, 1986"
      color="red"
    >
      <div>
        Moment that I evolved a lot as a person and as a professional, I learned
        how to work in groups, how to be a better professional
      </div>
    </q-timeline-entry>

    <q-timeline-entry
      title="Estágio Back-end FEBEM"
      subtitle="1 mês"
      color="green"
      side="left"
    >
      <div>
        Worked as a Backend Developer, where I learned and have my first contact
        with PHP, MySQL.
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
        I studied at Colégio Maria Auxiliadora, where I learned a lot about life
        and how to be a better person.
      </div>
    </q-timeline-entry> -->
  </q-timeline>
</template>

<script lang="ts">
import experience from 'src/services/experience';
import ExperienceModel from 'src/components/models/ExperienceModel';
import { defineComponent, ref } from 'vue';

async function getAllExperiences(): Promise<ExperienceModel[]> {
  const experiences: ExperienceModel[] = await experience.getAll();

  return experiences;
}


export default defineComponent({
  name: 'ExperiencesTimeline',
  async setup() {
    const experiences = ref(await getAllExperiences())
    return {
      experiences
    };
  }
});
</script>

<style scoped></style>
