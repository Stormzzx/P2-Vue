<template>
  <button @click="getCategoria('Pasta')">Refeicao</button>
  <div style="display: flex; gap: 5px; flex-wrap: wrap;">
    <button @click="getCategoria(prato.strCategory)">
    <img src="" alt=""></button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
  const refeicao =ref([]);
  const categoria =ref([]);
  const getRefeicao= (parametro)=> fetch("https://www.themealdb.com/api/json/v1/1/categories.php"+parametro)
  .then(res=>res.json())
  .then(resultado=> refeicao.value= resultado.categories);

  const getCategoria=(parametro)=> fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+parametro)
  .then(res=>res.json())
  .then(resultado=> categoria.value=resultado.meals)
  onMounted(
    ()=>{
      getRefeicao()
    }
  )
</script>

<script>
export default {
  data(){
    return{
      refeicoes:[1,2,3]
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

button{
  width: 100px;
  height: 100px
}
</style>
