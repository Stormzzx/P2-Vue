<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script setup>
const url = 'https://epic-store-games.p.rapidapi.com/onSale?searchWords=Mount&locale=us&country=us';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '294dbc253fmsh1d14f71ce1537dbp1f08d3jsn43655135933d',
    'X-RapidAPI-Host': 'epic-store-games.p.rapidapi.com'
  }
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
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
</style>
