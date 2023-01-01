<template>
  <DRoot>
    <template v-slot:toolbar>
      <DToolbar>
        <NuxtLink to="/">
          School
        </NuxtLink>
        <NuxtLink to="/timetable">
          timetable
        </NuxtLink>
        <d-spacer/>
        <LazyUser :user="currentUser"/>
      </DToolbar>
    </template>
    <template v-slot:notifications>
      <d-notification-wrapper/>
    </template>
    <slot/>
  </DRoot>
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useUser} from "~/stores/User";

const {currentUser} = storeToRefs(useUser())
</script>

<style scoped lang="scss">

</style>
