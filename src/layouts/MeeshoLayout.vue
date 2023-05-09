<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <meesho-header></meesho-header>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import meeshoHeader from 'components/Meesho/header.vue'

export default {
  components: { meeshoHeader }

}
</script>
