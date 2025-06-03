const { createApp, reactive } = Vue;

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

    const handleSubmit = () => {
      alert('Формулярът е изпратен успешно!');
      console.log(JSON.stringify(form, null, 2));
      resetForm(); // Изчистване на полетата
    };

    const resetForm = () => {
      Object.keys(form).forEach(key => {
        form[key] = '';
      });
    };

    return { form, handleSubmit };
  }
}).mount('#app');
