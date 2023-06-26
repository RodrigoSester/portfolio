<template>
  <q-card bordered flat square class="card-knowledge">
    <q-card-section horizontal>
      <q-list separator>
        <q-item dense class="row wrap items-center justify-start q-py-sm">
          <q-circular-progress
            show-value
            rounded
            :value="71"
            size="30px"
            :thickness="0.2"
            color="lime"
            center-color="grey-8"
            class="q-mr-sm"
          />
          <q-item-label>
            VueJS
          </q-item-label>
        </q-item>
        <q-item dense class="row wrap items-center justify-start q-py-sm">
          <q-circular-progress
            show-value
            rounded
            :value="71"
            size="30px"
            :thickness="0.2"
            color="orange"
            center-color="grey-8"
            track-color="transparent"
            class="q-mr-sm"
          />
          <q-item-label>
            NodeJS
          </q-item-label>
        </q-item>
        <q-item dense class="row wrap items-center justify-start q-py-sm">
          <q-circular-progress
            show-value
            rounded
            :value="71"
            size="30px"
            :thickness="0.2"
            color="red"
            center-color="grey-8"
            track-color="transparent"
            class="q-mr-sm"
          />
          <q-item-label>
            SQL
          </q-item-label>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">

</script>

<style scoped>
.card-knowledge {
  width: fit-content;
  float: right;
}
</style>