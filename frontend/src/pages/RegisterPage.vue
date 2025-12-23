<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-lg shadow-10" style="width: 380px">

      <div class="text-center q-mb-lg">
        <q-img
          src="~assets/icon_coin.png"
          style="width: 80px"
          fit="contain"
        />
        <div class="text-h6 q-mt-sm">Criar conta</div>
      </div>

      <q-input
        v-model="name"
        label="Nome"
        outlined
        dense
      />

      <q-input
        v-model="email"
        label="E-mail"
        type="email"
        outlined
        dense
        class="q-mt-sm"
      />

      <q-input
        v-model="password"
        label="Senha"
        type="password"
        outlined
        dense
        class="q-mt-sm"
      />

      <q-input
        v-model="confirmPassword"
        label="Confirmar senha"
        type="password"
        outlined
        dense
        class="q-mt-sm"
      />

      <q-btn
        label="Cadastrar"
        color="accent"
        class="full-width q-mt-md"
        @click="register"
      />

      <div class="text-center q-mt-md">
        <q-btn
          flat
          dense
          label="Voltar para login"
          color="accent"
          @click="goToLogin"
        />
      </div>

    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

function register () {
  if (password.value !== confirmPassword.value) {
    alert('As senhas não coincidem')
    return
  }

  console.log('register', name.value, email.value)
}

function goToLogin () {
  void router.push('/login')
}
</script>
