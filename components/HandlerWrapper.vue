<template>
  <div class="wrapper">
    <div v-if="!error" class="result">
      <slot/>
    </div>
    <fade-transition>
      <suspense>
        <div v-if="pending" class="pending">
          <d-icon class="spinner" name="spinner-alt" :color="error?'error':'primary'"/>
        </div>
      </suspense>
    </fade-transition>
    <d-card v-if="error" color="error" class="error" glowing height="100%" width="100%">
      <d-column class="pa-4" gap block height="100%">
        <d-row gap>
          <d-icon name="exclamation-triangle" :size="40"/>
          <d-card-title color="inherit" class="text title font-weight-light pa-0">
            Error [{{ errorCount }}]
          </d-card-title>
        </d-row>
        <d-card-subtitle color="inherit" class="text error">
          {{ error }}
        </d-card-subtitle>
        <d-spacer/>
        <d-button color="inherit" glow :disabled="pending" @click="refresh">
          <template v-slot:prefix>
            <d-icon name="refresh"/>
          </template>
          refresh
        </d-button>
      </d-column>
    </d-card>
  </div>
</template>

<script setup lang="ts">
import {PropType} from "@vue/runtime-core";
import {FetchError} from "ofetch";

const props = defineProps({
  pending: {type: Boolean, required: true},
  error: {type: Object as PropType<FetchError>, required: true},
  refresh: {type: Function, required: true},
})

const errorCount = ref<number>(0);

watch(() => props.pending, () => {
  if (!props.pending) {
    if (props.error) {
      errorCount.value++;
    }
    if (!props.error) {
      errorCount.value = 0;
    }
  }
})
</script>

<style scoped lang="scss">
.wrapper {
  height: 100%;
  position: relative;

  .pending {
    position: absolute;
    top: 4px;
    right: 4px;
    z-index: 10;
    backdrop-filter: blur(10px);
    border-radius: 100%;

    .spinner {
      animation: rotate 1s linear infinite;
    }
  }

  .error {
    .text {
      &.error {
        font-family: monospace;
        max-width: 400px;
      }
    }
  }
}

@keyframes rotate{
  to{ transform: rotate(360deg); }
}
</style>
