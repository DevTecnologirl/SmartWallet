<template>
  <q-page class="flex flex-center bg-dark">
    <q-card class="q-pa-lg shadow-10" style="width: 380px">

      <div class="text-center q-mb-lg">
        <q-img
          src="~assets/icon_coin.png"
          style="width: 80px"
          fit="contain"
        />
        <div class="text-h6 q-mt-sm">SmartWallet</div>
        <div class="text-caption text-grey">
          Controle financeiro pessoal
        </div>
      </div>

      <q-input
        v-model="email"
        label="E-mail"
        type="email"
        outlined
        dense
      />

      <q-input
        v-model="password"
        label="Senha"
        type="password"
        outlined
        dense
        class="q-mt-sm"
      />

      <q-btn
        label="Entrar"
        color="accent"
        class="full-width q-mt-md"
        @click="login"
      />

      <div class="text-center q-mt-md">
        <span class="text-caption">Não tem conta?</span>
        <q-btn
          flat
          dense
          label="Cadastre-se"
          color="accent"
          @click="goToRegister"
        />
      </div>

    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')

function login () {
  // depois conectamos no backend
  console.log('login', email.value, password.value)
}

function goToRegister () {
  void router.push('/register')
}
</script>
