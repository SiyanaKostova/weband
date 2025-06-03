<template>
  <div class="nav-buttons">
    <button
      class="btn-back"
      :disabled="currentStep === 1"
      @click="$emit('back')"
    >
      Назад
    </button>

    <button
      v-if="currentStep < 3"
      class="btn-next"
      :disabled="!canGoNext"
      @click="$emit('next')"
    >
      Напред
    </button>

    <button v-else class="btn-submit" @click="$emit('submit')">Потвърди</button>
  </div>
</template>

<script setup>
defineProps({
  currentStep: { type: Number, required: true },
  canGoNext: { type: Boolean, required: true },
});
</script>

<style scoped>
.nav-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}

button {
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #3490dc;
  color: #fff;
  transition: background-color 0.2s ease;
}

button:disabled {
  background-color: #b8c2cc;
  cursor: not-allowed;
}

.btn-back:hover:not(:disabled),
.btn-next:hover:not(:disabled) {
  background-color: #2779bd;
}

.btn-submit {
  background-color: #38c172;
}

.btn-submit:hover {
  background-color: #2f9e58;
}
</style>
