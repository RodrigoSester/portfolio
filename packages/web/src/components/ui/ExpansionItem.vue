<template>
  <q-expansion-item
    :label="title"
    :caption="caption"
    :icon="icon"
  >
    <q-card>
      <q-card-section>
        <q-list>
          <q-item
            v-for="link in content"
            :key="link.id"
            v-bind="link"
          >
            <div class="row inline self-center">
              <q-icon :name="link.icon" style="font-size: 24px;" />
              <a :href="link.content">
                {{ link.title }}
              </a>
              <q-item-section>
                {{ link.caption }}
              </q-item-section>
            </div>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Information } from '../models';

export default defineComponent({
  name: 'InformationMe',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    icon: {
      type: String,
      default: ''
    },

    content: {
      type: Array<Information>,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
</style>