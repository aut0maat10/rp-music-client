<script setup>
// import { reactive } from 'vue'
// import InputText from 'primevue/inputtext';
import Button from 'primevue/button'
// import Textarea from 'primevue/textarea';
import axios from 'axios'

import { useForm } from 'vee-validate';
import * as yup from 'yup';

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    firstName: yup.string().required('Name is required'),
    lastName: yup.string(),
    email: yup.string().email('Email must be a valid email').required('Email is required'),
    message: yup.string().required('Message is required').max(5000)
  }),
});

const [email, emailAttrs] = defineField('email');
const [firstName, firstNameAttrs] = defineField('firstName');
const [lastName, lastNameAttrs] = defineField('lastName');
const [message, messageAttrs] = defineField('message');

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
});

// const schema = yup.object({
//   email: yup.string().required().email(),
// });

// const form = reactive({
//   firstName: '',
//   lastName: '',
//   email: '',
//   message: ''
// })
// const handleSubmit = async () => {
//   const payload = JSON.stringify({
//     firstName: form.firstName,
//     lastName: form.lastName,
//     email: form.email,
//     message: form.message
//   })
//   try {
//     console.log('success')
//     // const response = await axios.post(import.meta.env.VITE_FORM_API_URL, payload, {headers: {'Content-Type': 'application/json'}})
//     // console.log(response)
//   } catch(error) {
//     console.log(error)
//   }
  
// }
</script>
<template>
  <div id="contactform" class="flex flex-col justify-center bg-tapes bg-contain py-20">
    <h2 class="text-magenta font-bold text-5xl mx-auto mb-4">Contact</h2>
    <form @submit="onSubmit" class="form flex flex-col gap-1 my-4 justify-center items-center bg-black px-2 py-8 md:p-8 my-8 rounded w-full md:w-2/3 lg:w-1/2 m-auto shadow-lg">
      <label for="firstname" class="text-lg text-white self-start">First name *<span class="text-green ml-4">{{ errors.firstName }}</span></label>
      <input type="text" id="firstname" class="border py-2 px-3 text-black w-full focus:outline focus:outline-green rounded" v-model="firstName" :firstNameAttrs="firstNameAttrs" required />
      <label for="lastname" class="text-lg text-white self-start">Last name</label>
      <input type="text" id="lastname" class="border py-2 px-3 text-black w-full focus:outline focus:outline-green rounded" v-model="lastName" :lastNameAttrs="lastNameAttrs" />
      <label for="email" class="text-lg text-white self-start">Email *<span class="text-green ml-4">{{ errors.email }}</span></label>
      <input type="text" id="email" class="border py-2 px-3 text-black w-full focus:outline focus:outline-green rounded" v-model="email" :emailAttrs="emailAttrs" />
      <label for="message" class="text-white text-lg self-start">Message *<span class="text-green ml-4">{{ errors.message }}</span></label>
      <textarea id="message" v-model="message" :messageAttrs="messageAttrs" rows="5" cols="30" class="border py-2 px-3 text-black w-full focus:outline focus:outline-green rounded" />
      <Button class="bg-magenta px-8 py-2 mt-8 rounded hover:bg-green hover:text-magenta"><span class="pi pi-send mr-4 ml-0"></span>Send</Button>
    </form>
  </div>
</template>


<style lang="scss" scoped>

</style>