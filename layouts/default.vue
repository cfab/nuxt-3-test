<script setup>
//const user = useUser();
</script>
<template>
  <div>
    <nav style="display: flex; gap: 10px">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <NuxtLink to="/spar">spa</NuxtLink>
      <NuxtLink to="/ssr">ssr</NuxtLink>
      <NuxtLink to="/swr">SWR</NuxtLink>
      <NuxtLink to="/static">static</NuxtLink>
      <NuxtLink to="/21600">21600</NuxtLink>
      <NuxtLink to="/600">600</NuxtLink>
    </nav>
    <slot></slot>
  </div>
</template>
