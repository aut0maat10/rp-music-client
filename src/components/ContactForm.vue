<script setup>
import { reactive } from 'vue'
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
const form = reactive({
  firstName: '',
  lastName: '',
  message: ''
})
</script>
<template>
  <div class="form flex flex-col gap-1 my-4 justify-center items-center">
    <label for="firstname" class="text-black">First name</label>
    <InputText type="text" id="firstname" v-model="form.firstName" />
    <label for="lastname" class="text-black">Last name</label>
    <InputText type="text" id="lastname" v-model="form.lastName" />
    <label for="email" class="text-black">Email</label>
    <InputText type="text" id="email" v-model="form.lastName" />
    <label for="message" class="text-black">Message</label>
    <Textarea id="message" v-model="form.message" rows="5" cols="30" />
  </div>
</template>


<style lang="scss" scoped>

</style>