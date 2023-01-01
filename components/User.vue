<template>
  <d-card height="54px" class="user" elevation="2" glow :color="props.user.role.color">
    <d-row gap class="pr-6">
      <d-avatar :src="props.user.avatar" class="avatar ma-1" size="48" elevation="4"/>
      <d-column no-padding>
        <d-card-title class="font-size-medium px-0 pt-1 name">
          {{ props.user.name }}
        </d-card-title>
        <d-card-subtitle class="px-0 surname">
          {{ props.user.surname }}
        </d-card-subtitle>
      </d-column>
    </d-row>
  </d-card>
</template>

<script setup lang="ts">
import {PropType} from "@vue/runtime-core";
import User from "~/types/User";

const props = defineProps({
  user: {type: Object as PropType<User>, required: true}
})
</script>

<style scoped lang="scss">
.user {
  .role {
    zoom: 0.8;
    text-transform: capitalize;
  }
}
</style>
