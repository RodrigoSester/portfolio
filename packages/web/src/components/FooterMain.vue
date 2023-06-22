<template>
  <q-card class="card self-end">
    <q-card-section>
      <expansion-item
        :title="$t('common.footer.link')"
        :caption="$t('common.footer.findMe')"
        icon="mdi-link-variant"
        :content="links"
      ></expansion-item>
      <expansion-item
        :title="$t('common.footer.contact')"
        :caption="$t('common.footer.contactMe')"
        icon="mdi-account-box"
        :content="contacts"
      ></expansion-item>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import ExpansionItem from 'components/ExpansionItem.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterMain',
  components: { ExpansionItem },
  data() {
    return {
      links : [
        {
          id: 1,
          title: this.$t('common.apps.github'),
          icon: 'mdi-github',
          content: 'https://github.com/RodrigoSester'
        },
        {
          id: 2,
          title: this.$t('common.apps.linkedin'),
          icon: 'mdi-linkedin',
          content: 'https://www.linkedin.com/in/rodrigo-weber-sesterheim/'
        }
      ],
      contacts: [
        {
          id: 1,
          title: this.$t('common.apps.email'),
          icon: 'mdi-email',
          caption: 'rodrigowsesterheim@gmail.com',
          content: 'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSPFdNCTmlcsljZZtTkppjRxJZMgLlSdljjFCbhbCPBQhMzLJjFBHHscDHqHKSmvgrdkzWQd'
        },
        {
          id: 2,
          title: this.$t('common.apps.instagram'),
          icon: 'mdi-instagram',
          caption: '@weberses',
          content: 'https://www.instagram.com/weberses/'
        }
      ]
    }
  }
});
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  height: fit-content;
}
</style>