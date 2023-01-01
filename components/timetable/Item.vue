<template>
  <div class="wrapper">
    <d-card class="item font-weight-bold" background-color="transparent" rounded="md" glowing :color="color">
      <slot/>
    </d-card>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  color: {type: String, required: true},
  from: {type: Number, required: true},
  to: {type: Number, required: true},
  offset: {type: Number, required: true},
})

const height = computed(() => `${props.to - props.from}px`)
const top = computed(() => `${props.from-props.offset}px`)
</script>


<style scoped lang="scss">
.wrapper {
  position: absolute;
  top: v-bind(top);
  height: v-bind(height);
  width: 100%;
  padding: 2px;

  .item {
    backdrop-filter: blur(5px) brightness(1.2);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }
}
</style>
