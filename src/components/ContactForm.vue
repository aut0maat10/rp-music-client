<script setup>
import { reactive } from 'vue'
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  message: ''
})
const handleSubmit = () => {
  alert('submitted!')
}
</script>
<template>
  <div class="flex flex-col justify-center bg-gray pt-8">
    <h2 class="text-black font-bold text-4xl mx-auto">Contact</h2>
    <div class="form flex flex-col gap-1 my-4 justify-center items-center bg-black p-2 lg:p-8 my-8 rounded w-1/3 md:w-1/2 m-auto shadow-lg">
      <label for="firstname" class="text-lg text-white self-start">First name</label>
      <InputText type="text" id="firstname" class="border py-2 px-3 text-black w-full focus:outline focus:outline-green rounded" v-model="form.firstName" />
      <label for="lastname" class="text-lg text-white self-start">Last name</label>
      <InputText type="text" id="lastname" class="border py-2 px-3 text-black w-full focus:outline focus:outline-green rounded" v-model="form.lastName" />
      <label for="email" class="text-lg text-white self-start">Email</label>
      <InputText type="text" id="email" class="border py-2 px-3 text-black w-full focus:outline focus:outline-green rounded" v-model="form.email" />
      <label for="message" class="text-white text-lg self-start">Message</label>
      <Textarea id="message" v-model="form.message" rows="5" cols="30" class="border py-2 px-3 text-black w-full focus:outline focus:outline-green rounded" />
      <Button @click="handleSubmit" class="bg-magenta px-4 py-2 mt-4 rounded"><span class="pi pi-send mr-4 ml-0"></span>Send</Button>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>