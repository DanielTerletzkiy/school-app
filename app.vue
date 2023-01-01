<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">

import {useUser} from "~/stores/User";

const {refreshCurrentUser} = useUser();

onBeforeMount(() => {
  refreshCurrentUser();
})
</script>
