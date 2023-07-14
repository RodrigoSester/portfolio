<template>
  <div class="q-pa-md">
    <div class="row justify-center q-gutter-sm">
      <q-card
        flat
        bordered
        class="example-item q-ma-sm row items-center justify-center"
      >
        <q-card-section class="row items-center justify-center">
          <div class="row justify-center items-center">
            <q-file
              class="file-uploader"
              hide-bottom-space
              borderless
            >
              <template v-slot:default>
                <div>
                  <q-icon name="mdi-cloud-upload-outline" color="primary" size="48px" />
                </div>
              </template>
            </q-file>
          </div>
        </q-card-section>
      </q-card>
      <q-intersection
        v-for="index in 60"
        :key="index"
        transition="scale"
        class="example-item"
      >
        <q-card flat bordered class="q-ma-sm">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">

          <q-card-section>
            <div class="text-h6">Card #{{ index }}</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>
  </div>
</template>

<script lang="ts">

</script>

<style scoped>
.example-item {
  height: 300px;
  width: 250px;
}

.file-uploader{
  width: min-content;
}
</style>