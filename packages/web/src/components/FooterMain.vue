<template>
  <q-card class="card">
    <q-card-section>
      <information-me
        :title="$t('common.footer.link')"
        :caption="$t('common.footer.findMe')"
        icon="mdi-link-variant"
        :content="links"
      ></information-me>
      <information-me
        :title="$t('common.footer.contact')"
        :caption="$t('common.footer.contactMe')"
        icon="mdi-account-box"
        :content="contacts"
      ></information-me>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { Information } from 'components/models';
import InformationMe from 'components/InformationMe.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterMain',
  components: { InformationMe },
  setup() {
    const links = new Array<Information>(
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

    const contacts = new Array<Information>(
      {
        id: 1,
        title: 'Email',
        icon: 'mdi-email',
        caption: 'rodrigowsesterheim@gmail.com',
        content: 'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSPFdNCTmlcsljZZtTkppjRxJZMgLlSdljjFCbhbCPBQhMzLJjFBHHscDHqHKSmvgrdkzWQd'
      },
      {
        id: 2,
        title: 'Instagram',
        icon: 'mdi-instagram',
        caption: '@weberses',
        content: 'https://www.instagram.com/weberses/'
      }
    );
    return { links, contacts };
  }
});
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  bottom: 0;
}
</style>