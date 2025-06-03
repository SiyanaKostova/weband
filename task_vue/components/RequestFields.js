export default {
  props: ['form'],
  template: `
    <div>
      <label>Град:
        <input v-model="form.city" required>
      </label>
      <label>Улица:
        <input v-model="form.street" required>
      </label>
      <label>Номер:
        <input v-model="form.number" required>
      </label>

      <label>Тип услуга:
        <select v-model="form.service_type" required>
          <option disabled value="">-- Изберете --</option>
          <option value="electricity">Ток</option>
          <option value="water">Вода</option>
          <option value="internet">Интернет</option>
        </select>
      </label>

      <div v-if="form.service_type === 'electricity'">
        <label>ЕГН:
          <input v-model="form.egn" maxlength="10" pattern="^\\d{10}$" required>
        </label>
        <label>Потребление (kWh):
          <input v-model="form.consumption" type="number" min="0" max="3000" required>
        </label>
      </div>

      <div v-if="form.service_type === 'water'">
        <label>Номер на водомер:
          <input v-model="form.meter_number" maxlength="8" pattern="^\\d{1,8}$" required>
        </label>
        <label>Последен отчет:
          <input v-model="form.last_reading" maxlength="10" required>
        </label>
      </div>

      <div v-if="form.service_type === 'internet'">
        <label>Доставчик:
          <input v-model="form.provider" minlength="2" required>
        </label>
        <label>Скорост (Mbps):
          <input v-model="form.speed" type="number" min="10" max="1000" step="10" required>
        </label>
      </div>
    </div>
  `
};