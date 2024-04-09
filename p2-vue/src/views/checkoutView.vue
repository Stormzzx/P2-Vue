<script setup>
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore()
</script>

<template>
    {{ store.carrinhoCompras }}
</template>