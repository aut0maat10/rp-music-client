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
  <div id="contact" class="flex flex-col justify-center bg-tapes bg-contain py-20">
    <h2 class="text-magenta font-bold text-5xl mx-auto mb-4">Contact</h2>
    <div class="form flex flex-col gap-1 my-4 justify-center items-center bg-black p-2 lg:p-8 my-8 rounded w-full md:w-1/2 m-auto shadow-lg">
      <label for="firstname" class="text-lg text-white self-start">First name</label>
      <InputText type="text" id="firstname" class="border py-2 px-3 text-black w-full focus:outline focus:outline-green rounded" v-model="form.firstName" />
      <label for="lastname" class="text-lg text-white self-start">Last name</label>
      <InputText type="text" id="lastname" class="border py-2 px-3 text-black w-full focus:outline focus:outline-green rounded" v-model="form.lastName" />
      <label for="email" class="text-lg text-white self-start">Email</label>
      <InputText type="text" id="email" class="border py-2 px-3 text-black w-full focus:outline focus:outline-green rounded" v-model="form.email" />
      <label for="message" class="text-white text-lg self-start">Message</label>
      <Textarea id="message" v-model="form.message" rows="5" cols="30" class="border py-2 px-3 text-black w-full focus:outline focus:outline-green rounded" />
      <Button @click="handleSubmit" class="bg-magenta px-8 py-2 mt-4 rounded hover:bg-green hover:text-magenta"><span class="pi pi-send mr-4 ml-0"></span>Send</Button>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>