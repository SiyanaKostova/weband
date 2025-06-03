<template>
  <div>
    <label>
      Цена:
      <input v-model="form.price" type="number" min="0.01" step="0.01" />
    </label>
    <label>
      Фирма:
      <input v-model="form.company_name" minlength="2" />
    </label>
    <label>
      ДДС:
      <input v-model="form.vat" type="number" min="0" max="100" step="0.01" />
    </label>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  form: Object
})
</script>

<style scoped>
</style>