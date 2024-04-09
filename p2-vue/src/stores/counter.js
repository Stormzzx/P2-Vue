import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const carrinhoCompras = ref([])
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  const updateCarrinhoCompras = (state) =>{
    carrinhoCompras.value = state
  }
  return { count, doubleCount, increment, updateCarrinhoCompras, carrinhoCompras
  }
})
