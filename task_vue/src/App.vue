<template>
  <div>
    <h1>Динамични полета</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Име:
        <input
          v-model="form.name"
          required
          pattern="^[А-Яа-яA-Za-z\s]+$"
          title="Използвайте само букви и интервали"
        />
      </label>

      <label>
        Тип:
        <select v-model="form.type" required>
          <option disabled value="">-- Изберете --</option>
          <option value="invoice">Фактура</option>
          <option value="message">Съобщение</option>
          <option value="request">Заявка</option>
        </select>
      </label>

      <InvoiceFields v-if="form.type === 'invoice'" :form="form" />
      <MessageFields v-if="form.type === 'message'" :form="form" />
      <RequestFields v-if="form.type === 'request'" :form="form" />

      <button type="submit">Изпрати</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import InvoiceFields from './components/InvoiceFields.vue'
import MessageFields from './components/MessageFields.vue'
import RequestFields from './components/RequestFields.vue'

defineProps() 
defineEmits()

const form = reactive({
  name: '',
  type: '',
  price: '',
  company_name: '',
  vat: '',
  for_whom: '',
  message: '',
  city: '',
  street: '',
  number: '',
  service_type: '',
  egn: '',
  consumption: '',
  meter_number: '',
  last_reading: '',
  provider: '',
  speed: ''
})

const resetForm = () => {
  Object.keys(form).forEach((key) => {
    form[key] = ''
  })
}

const handleSubmit = () => {
  alert('Формулярът е изпратен успешно!')
  console.log(JSON.stringify(form, null, 2))
  resetForm()
}
</script>

<script>
export default {
  components: {
    InvoiceFields,
    MessageFields,
    RequestFields
  }
}
</script>

<style scoped>
</style>