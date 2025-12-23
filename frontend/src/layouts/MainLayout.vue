<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-accent text-white">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title> SmartWallet </q-toolbar-title>
        <div>  <q-btn
      flat
      dense
      round
      icon="logout"
      aria-label="Sair"
    /></div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-dark text-white">
      <q-list>
        <q-item class="q-pa-md flex flex-center">
          <q-item-section avatar>
            <q-img src="~assets/icon_coin.png" style="width: 90px; height: 90px"/>
          </q-item-section>
          <!-- <q-item-section>
        <div class="text-h6">SmartWallet</div>
        <div class="text-caption text-grey">Controle financeiro</div>
      </q-item-section> -->
          </q-item>
        <!-- <q-item-label header class="text-white"> Acesso rápido </q-item-label> -->
        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container class="bg-warning text-white">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';

const linksList: EssentialLinkProps[] = [
  {
    title: 'Usuários',
    // caption: 'Gerenciar usuários',
    icon: 'person',
    link: '/usuarios',
  },
  {
    title: 'Entradas',
    // caption: 'Receitas',
    icon: 'trending_up',
    link: '/entradas',
  },
  {
    title: 'Despesas',
    // caption: 'Gastos',
    icon: 'trending_down',
    link: '/despesas',
  },
  {
    title: 'Balanço',
    // caption: 'Resumo financeiro',
    icon: 'account_balance',
    link: '/balanco',
  },
];


const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
