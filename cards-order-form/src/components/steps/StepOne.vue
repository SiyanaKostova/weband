<template>
  <div class="step-one">
    <h2>Стъпка 1: Информация</h2>

    <div class="form-group">
      <label for="name">Име:</label>
      <input
        id="name"
        type="text"
        v-model="name"
        @input="validate"
        placeholder="Въведете вашето име"
      />
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <input
        id="email"
        type="email"
        v-model="email"
        @input="validate"
        placeholder="пример@domain.com"
      />
    </div>

    <div class="form-group">
      <label for="cardCount">Брой карти:</label>
      <select id="cardCount" v-model.number="cardCount" @change="validate">
        <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
      </select>
    </div>

    <div class="form-group">
      <label for="deliveryMethod">Начин на получаване:</label>
      <select id="deliveryMethod" v-model="deliveryMethod" @change="validate">
        <option>От магазин</option>
        <option>Доставка до адрес</option>
        <option>Еконт</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useOrderStore } from "../../stores/order";

const emit = defineEmits(["valid", "invalid"]);

const orderStore = useOrderStore();

const name = computed({
  get: () => orderStore.name,
  set: (val) => {
    orderStore.name = val;
  },
});

const email = computed({
  get: () => orderStore.email,
  set: (val) => {
    orderStore.email = val;
  },
});

const cardCount = computed({
  get: () => orderStore.cardCount,
  set: (val) => {
    orderStore.cardCount = val;
  },
});

const deliveryMethod = computed({
  get: () => orderStore.deliveryMethod,
  set: (val) => {
    orderStore.deliveryMethod = val;
  },
});

function validate() {
  const isNameValid = name.value.trim().length > 0;
  const isEmailValid = /^\S+@\S+\.\S+$/.test(email.value);
  const isCardCountValid = cardCount.value >= 1 && cardCount.value <= 5;
  const validDeliveryMethods = ["От магазин", "Доставка до адрес", "Еконт"];
  const isDeliveryMethodValid = validDeliveryMethods.includes(
    deliveryMethod.value
  );

  if (
    isNameValid &&
    isEmailValid &&
    isCardCountValid &&
    isDeliveryMethodValid
  ) {
    emit("valid");
  } else {
    emit("invalid");
  }
}

validate();
</script>

<style scoped>
.step-one {
  margin-bottom: 1.5rem;
}

.step-one h2 {
  margin-bottom: 1rem;
  font-size: 1.25rem;
  color: #333;
}

.form-group {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: #555;
}

.form-group input,
.form-group select {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #3490dc;
  box-shadow: 0 0 0 2px rgba(52, 144, 220, 0.2);
}
</style>