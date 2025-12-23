<template>
  <q-page class="q-pa-md ">
    <div class="page-container">
   <div class="row items-center q-mb-md">
  <div class="text-h5">Usuários</div>

  <q-space />

  <q-input
    dense
    debounce="300"
    v-model="filter"
    placeholder="Buscar"
    outlined
    color="white"
    bg-color="white"
    input-class="text-black"
    class="filter-input q-mr-sm"
  >
    <template #append>
      <q-icon name="search" color="black" />
    </template>
  </q-input>

  <q-btn
    color="primary"
    icon="person_add"
    label="Novo usuário"
    @click="novoUsuario"
  />
</div>

<q-table
  flat
  bordered
  class="bg-black text-white"
  table-class="text-white"
  table-header-class="bg-warning text-white"
  :rows="usuarios"
  :columns="columns"
  row-key="email"
  :rows-per-page-options="[5, 10, 20]"
>
<template #body-cell-acoes="props">
  <q-td align="center">
    <q-btn
      dense
      flat
      icon="edit"
      color="grey"
      @click="editarUsuario(props.row)"
    />
    <q-btn
      dense
      flat
      icon="delete"
      color="negative"
      @click="excluirUsuario(props.row)"
    />
  </q-td>
</template>
</q-table>
</div>
</q-page>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { Dialog } from 'quasar';

interface Usuario {
  nome: string
  idade: number
  email: string
  profissao: string
}

// const columns = [
//   {
//     name: 'nome',
//     label: 'Nome',
//     field: 'nome',
//     align: 'left',
//     sortable: true,
//   },
//   {
//     name: 'idade',
//     label: 'Idade',
//     field: 'idade',
//     align: 'center',
//     sortable: true,
//   },
//   {
//     name: 'email',
//     label: 'E-mail',
//     field: 'email',
//     align: 'left',
//     sortable: true,
//   },
//   {
//     name: 'profissao',
//     label: 'Profissão',
//     field: 'profissao',
//     align: 'left',
//     sortable: true,
//   },
// ];

const columns = [
    { name: 'acoes', label: '', field: 'acoes' },
  { name: 'nome', label: 'Nome', field: 'nome', sortable: true },
  { name: 'idade', label: 'Idade', field: 'idade', sortable: true },
  { name: 'email', label: 'E-mail', field: 'email', sortable: true },
  { name: 'profissao', label: 'Profissão', field: 'profissao' },
];

const filter = ref('');
const usuarios = ref<Usuario[]>([
  {
    nome: 'Camilly Duarte',
    idade: 24,
    email: 'camilly@email.com',
    profissao: 'Desenvolvedora',
  },
  {
    nome: 'João Silva',
    idade: 30,
    email: 'joao@email.com',
    profissao: 'Designer',
  },
]);

function novoUsuario () {
  console.log('Abrir modal ou ir para cadastro');
}
function editarUsuario (usuario: Usuario) {
  console.log('Editar', usuario);
}

function excluirUsuario (usuario: Usuario) {
  Dialog.create({
    title: 'Confirmar exclusão',
    message: `Deseja excluir ${usuario.nome}?`,
    cancel: true,
    persistent: true,
  }).onOk(() => {
    usuarios.value = usuarios.value.filter(u => u.email !== usuario.email);
  });
}
</script>

<style scoped>
.filter-input {
  width: 220px;
}
.page-container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
