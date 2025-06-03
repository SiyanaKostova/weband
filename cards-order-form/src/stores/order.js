import { defineStore } from 'pinia'

export const useOrderStore = defineStore('order', {
  state: () => ({
    // Стъпка 1: данни за формата
    name: '',
    email: '',
    cardCount: 1,                 
    deliveryMethod: 'От магазин', 

    // Стъпка 2: данни за доставка/получаване
    address: '',   
    econtOffice: '',
    phone: '',
    source: '',       
    sourceOther: '',
  }),

  getters: {
    cardsPrice(state) {
      return state.cardCount * 10
    },
    deliveryPrice(state) {
      if (state.deliveryMethod === 'Доставка до адрес') {
        return 6
      } else if (state.deliveryMethod === 'Еконт') {
        return 5
      }
      return 0 
    },
    totalPrice(state) {
      return state.cardCount * 10 + this.deliveryPrice
    },
  },

  actions: {
    resetOrder() {
      this.name = ''
      this.email = ''
      this.cardCount = 1
      this.deliveryMethod = 'От магазин'
      this.address = ''
      this.econtOffice = ''
      this.phone = ''
      this.source = ''
      this.sourceOther = ''
    },
  },
})