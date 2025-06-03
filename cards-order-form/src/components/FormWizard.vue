<template>
  <div class="form-wizard">
    <div class="steps-indicator"></div>

    <component
      :is="currentComponent"
      @valid="onStepValid"
      @invalid="onStepInvalid"
    />

    <PriceInfo />

    <NavigationButtons
      :current-step="currentStep"
      :can-go-next="canGoNext"
      @next="goNext"
      @back="goBack"
      @submit="onSubmit"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useOrderStore } from "../stores/order";
import StepOne from "./steps/StepOne.vue";
import StepTwo from "./steps/StepTwo.vue";
import StepThree from "./steps/StepThree.vue";
import NavigationButtons from "./shared/NavigationButtons.vue";
import PriceInfo from "./shared/PriceInfo.vue";

const orderStore = useOrderStore();
const currentStep = ref(1);
const canGoNext = ref(false);

const currentComponent = computed(() => {
  if (currentStep.value === 1) return StepOne;
  if (currentStep.value === 2) return StepTwo;
  return StepThree;
});

function onStepValid() {
  canGoNext.value = true;
}
function onStepInvalid() {
  canGoNext.value = false;
}

function goNext() {
  if (currentStep.value < 3 && canGoNext.value) {
    currentStep.value++;
    canGoNext.value = false;
  }
}

function goBack() {
  if (currentStep.value > 1) {
    currentStep.value--;
    canGoNext.value = true;
  }
}

function onSubmit() {
  alert("Вашата поръчка беше изпратена успешно!");
  orderStore.resetOrder();
  currentStep.value = 1;
  canGoNext.value = false;
}
</script>

<style scoped>
.form-wizard {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.steps-indicator {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.step-circle {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: #e6e6e6;
  border-radius: 50%;
  color: #555;
  font-weight: 600;
  position: relative;
}

.step-circle.active {
  background-color: #3490dc;
  color: #fff;
}

.step-circle span {
  font-size: 1.25rem;
}

.step-circle small {
  font-size: 0.7rem;
  margin-top: 0.25rem;
}

.step-line {
  flex-grow: 1;
  height: 4px;
  background-color: #e6e6e6;
  margin: 0 0.5rem;
}

.step-circle.active ~ .step-line {
  background-color: #3490dc;
}
</style>