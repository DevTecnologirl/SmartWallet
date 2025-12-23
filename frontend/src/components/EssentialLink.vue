<template>
  <q-item
    clickable
    v-ripple
    :to="link"
    tag="router-link"
  >
    <q-item-section avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
export interface EssentialLinkProps {
  title: string
  icon: string
  link: string
}

defineProps<EssentialLinkProps>()
</script>
