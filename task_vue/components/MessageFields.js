export default {
  props: ['form'],
  template: `
    <div>
      <label>За:
        <input v-model="form.for_whom" required>
      </label>
      <label>Съобщение:
        <textarea v-model="form.message" maxlength="500" required></textarea>
      </label>
    </div>
  `
};