<template>
  <div class="step-two">
    <h2>Стъпка 2: Начин на получаване</h2>

    <div v-if="deliveryMethod === 'От магазин'" class="info-text">
      <p>
        Можете да получите своята карта срещу предоставяне на ваучер в следните
        обекти в центъра на София:
      </p>
      <ol>
        <li>Магазин “Балканско” пл. „Княз Александър I“ 1</li>
        <li>Магазин “Балканско” бул. „Витоша“ 4</li>
      </ol>
    </div>

    <div v-if="deliveryMethod === 'Доставка до адрес'" class="form-group">
      <label for="address">Адрес за доставка:</label>
      <input
        id="address"
        type="text"
        v-model="address"
        @input="validate"
        placeholder="Въведете адрес за доставка"
      />
    </div>

    <div v-if="deliveryMethod === 'Еконт'" class="form-group">
      <label for="econtOffice">Офис на Еконт:</label>
      <input
        id="econtOffice"
        type="text"
        v-model="econtOffice"
        @input="validate"
        placeholder="Напишете офис или населено място"
      />
    </div>

    <div class="form-group">
      <label for="phone">Тел. номер:</label>
      <input
        id="phone"
        type="text"
        v-model="phone"
        @input="validate"
        placeholder="например 0879123456"
      />
    </div>

    <div class="form-group">
      <label for="source">Откъде разбрахте за нас?</label>
      <select id="source" v-model="source" @change="validate">
        <option disabled value="">-- Изберете --</option>
        <option>Приятел или колега</option>
        <option>Facebook</option>
        <option>Instagram</option>
        <option>Друго</option>
      </select>
    </div>

    <div v-if="source === 'Друго'" class="form-group">
      <label for="sourceOther">Моля посочете:</label>
      <input
        id="sourceOther"
        type="text"
        v-model="sourceOther"
        @input="validate"
        placeholder="Напишете откъде"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useOrderStore } from "../../stores/order";

const emit = defineEmits(["valid", "invalid"]);

const orderStore = useOrderStore();

const deliveryMethod = computed(() => orderStore.deliveryMethod);
const address = computed({
  get: () => orderStore.address,
  set: (val) => {
    orderStore.address = val;
  },
});
const econtOffice = computed({
  get: () => orderStore.econtOffice,
  set: (val) => {
    orderStore.econtOffice = val;
  },
});
const phone = computed({
  get: () => orderStore.phone,
  set: (val) => {
    orderStore.phone = val;
  },
});
const source = computed({
  get: () => orderStore.source,
  set: (val) => {
    orderStore.source = val;
  },
});
const sourceOther = computed({
  get: () => orderStore.sourceOther,
  set: (val) => {
    orderStore.sourceOther = val;
  },
});

function validate() {
  let isValid = true;

  if (!/^\d{5,}$/.test(phone.value)) {
    isValid = false;
  }
  if (
    deliveryMethod.value === "Доставка до адрес" &&
    address.value.trim() === ""
  ) {
    isValid = false;
  }
  if (deliveryMethod.value === "Еконт" && econtOffice.value.trim() === "") {
    isValid = false;
  }
  if (source.value === "") {
    isValid = false;
  } else if (source.value === "Друго" && sourceOther.value.trim() === "") {
    isValid = false;
  }

  if (isValid) emit("valid");
  else emit("invalid");
}

validate();
</script>

<style scoped>
.step-two {
  margin-bottom: 1.5rem;
}

.step-two h2 {
  margin-bottom: 1rem;
  font-size: 1.25rem;
  color: #333;
}

.info-text {
  margin-bottom: 1rem;
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

.info-text p {
  margin: 0 0 0.5rem 0;
}

.info-text ol {
  margin: 0.5rem 0 0 1.25rem;
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