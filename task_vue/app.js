import { createApp, reactive } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import InvoiceFields   from './scr/components/InvoiceFields.js';
import MessageFields   from './scr/components/MessageFields.js';
import RequestFields   from './scr/components/RequestFields.js';

createApp({
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

    function resetForm() {
      Object.keys(form).forEach(k => (form[k] = ''));
    }

    function handleSubmit() {
      alert('Формулярът е изпратен успешно!');
      console.log(JSON.stringify(form, null, 2));
      resetForm();
    }

    return { form, handleSubmit };
  }
})
  .component('invoice-fields',  InvoiceFields)
  .component('message-fields',  MessageFields)
  .component('request-fields',  RequestFields)
  .mount('#app');
