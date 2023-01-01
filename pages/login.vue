<template>
  <d-row height="90vh" width="100%" justify="center" align="center">
    <d-card outlined>
      <d-card-title>
        Login
      </d-card-title>
      <form @submit.prevent="login">
        <d-column gap>
          <d-textfield v-model="email" label="Email" type="email" filled color="primary"/>
          <d-textfield v-model="password" label="Password" type="password" filled color="primary"/>
          <d-row>
            <d-spacer/>
            <d-button filled color="primary">
              login
            </d-button>
          </d-row>
        </d-column>
      </form>
    </d-card>
  </d-row>
</template>

<script setup lang="ts">

const config = useRuntimeConfig()
const router = useRouter()

const email = ref('');
const password = ref('');

async function login() {
  const result = await fetch(`${config.public.API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
    credentials: 'include'
  })
  if (result.ok) {
    router.replace('/timetable');
  }
}
</script>

<style scoped lang="scss">

</style>
