<template>
  <div class="price-info">
    <p>
      Брой карти: <strong>{{ cardCount }}</strong> ({{ cardsPrice }} лв)
    </p>
    <p>
      Доставка: <strong>{{ deliveryPrice }} лв</strong>
    </p>
    <p>
      <strong>Общо: {{ totalPrice }} лв</strong>
    </p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useOrderStore } from "../../stores/order";

const orderStore = useOrderStore();

const cardCount = computed(() => orderStore.cardCount);
const cardsPrice = computed(() => orderStore.cardsPrice);
const deliveryPrice = computed(() => orderStore.deliveryPrice);
const totalPrice = computed(() => orderStore.totalPrice);
</script>

<style scoped>
.price-info {
  margin: 1.5rem 0;
  padding: 1rem;
  background-color: #f1f5f8;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

.price-info p {
  margin: 0.3rem 0;
  font-size: 1rem;
  color: #333;
}

.price-info strong {
  color: #2d3748;
}
</style>