<template>
  <div class="ma-8">
    <d-card max-width="600px" width="600px">
      <d-row gap class="px-2">
        <d-card-title class="pa-0">
          Random text
        </d-card-title>
        <d-spacer/>
        <d-textfield v-model="amount" type="number" filled solo :min="1">
          <template v-slot:prefix>
            <d-icon name="right-indent-alt" color="primary"/>
          </template>
        </d-textfield>
        <d-icon-button filled color="primary" @click="refresh" :disabled="pending">
          <d-icon name="refresh"/>
        </d-icon-button>
      </d-row>
      <d-card-content elevation="n4" class="pa-10">
        <HandlerWrapper :error="error" :pending="pending" :refresh="refresh">
          <d-card-subtitle elevation class="font-size-medium px-4" rounded="xl">
            {{ text }}
          </d-card-subtitle>
        </HandlerWrapper>
      </d-card-content>
    </d-card>
  </div>
</template>

<script setup lang="ts">

const amount = ref(1);

const {
  pending,
  data: text,
  error,
  refresh
} = await useLazyFetch(() => `http://metaphorpsum.com/sentences/${amount.value}`)
</script>

<style scoped lang="scss">

</style>
