import { createApp, reactive } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import InvoiceFields from './components/InvoiceFields.js';
import MessageFields from './components/MessageFields.js';
import RequestFields from './components/RequestFields.js';

const app = createApp({
  template: `
    <h1>Динамични полета</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Име:
        <input v-model="form.name" required pattern="^[А-Яа-яA-Za-z\\s]+$" title="Използвайте само букви и интервали">
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

      <invoice-fields v-if="form.type === 'invoice'" :form="form" />
      <message-fields v-if="form.type === 'message'" :form="form" />
      <request-fields v-if="form.type === 'request'" :form="form" />

      <button type="submit">Изпрати</button>
    </form>
  `,
  setup() {
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
    });

    const handleSubmit = () => {
      alert('Формулярът е изпратен успешно!');
      console.log(JSON.stringify(form, null, 2));
      resetForm();
    };

    const resetForm = () => {
      Object.keys(form).forEach(key => {
        form[key] = '';
      });
    };

    return { form, handleSubmit };
  }
});

app.component('invoice-fields', InvoiceFields);
app.component('message-fields', MessageFields);
app.component('request-fields', RequestFields);

app.mount('#app');