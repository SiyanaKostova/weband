<template>
  <div class="step-three">
    <h2>Стъпка 3: Потвърждение на поръчката</h2>

    <dl class="review-list">
      <dt>Име:</dt>
      <dd>{{ name }}</dd>

      <dt>Email:</dt>
      <dd>{{ email }}</dd>

      <dt>Брой карти:</dt>
      <dd>{{ cardCount }} × 10 лв = {{ cardsPrice }} лв</dd>

      <dt>Начин на получаване:</dt>
      <dd>{{ deliveryMethod }}</dd>

      <template v-if="deliveryMethod === 'Доставка до адрес'">
        <dt>Адрес:</dt>
        <dd>{{ address }}</dd>
      </template>
      <template v-else-if="deliveryMethod === 'Еконт'">
        <dt>Офис Еконт:</dt>
        <dd>{{ econtOffice }}</dd>
      </template>
      <template v-else>
        <dt>От магазин:</dt>
        <dd>
          Магазини: „Балканско“ на пл. „Княз Александър I“ 1 или бул. „Витоша“ 4
        </dd>
      </template>

      <dt>Тел. номер:</dt>
      <dd>{{ phone }}</dd>

      <dt>Откъде разбрахте за нас?</dt>
      <dd>
        {{ source }}
        <span v-if="source === 'Друго'"> ({{ sourceOther }})</span>
      </dd>

      <dt>Цена на доставка:</dt>
      <dd>{{ deliveryPrice }} лв</dd>

      <dt>Крайна цена:</dt>
      <dd>
        <strong>{{ totalPrice }} лв</strong>
      </dd>
    </dl>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useOrderStore } from "../../stores/order";

const emit = defineEmits(["submit"]);

const orderStore = useOrderStore();

const name = computed(() => orderStore.name);
const email = computed(() => orderStore.email);
const cardCount = computed(() => orderStore.cardCount);
const deliveryMethod = computed(() => orderStore.deliveryMethod);
const address = computed(() => orderStore.address);
const econtOffice = computed(() => orderStore.econtOffice);
const phone = computed(() => orderStore.phone);
const source = computed(() => orderStore.source);
const sourceOther = computed(() => orderStore.sourceOther);

const cardsPrice = computed(() => orderStore.cardsPrice);
const deliveryPrice = computed(() => orderStore.deliveryPrice);
const totalPrice = computed(() => orderStore.totalPrice);

function emitSubmit() {
  emit("submit");
}
</script>

<style scoped>
.step-three {
  margin-bottom: 1.5rem;
}

.step-three h2 {
  margin-bottom: 1rem;
  font-size: 1.25rem;
  color: #333;
}

.review-list {
  display: grid;
  grid-template-columns: max-content 1fr;
  row-gap: 0.5rem;
  column-gap: 1rem;
  margin-bottom: 1.5rem;
}

.review-list dt {
  font-weight: bold;
  color: #555;
}

.review-list dd {
  margin: 0;
  color: #333;
}

.btn-submit {
  background-color: #38c172;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #2f9e58;
}
</style>