<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const formSubmitted = ref(false)
// vee-validate + yup
const { errors, handleSubmit, defineField, meta } = useForm({
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
  try {
    const payload = JSON.stringify(values)
    const response = axios.post(import.meta.env.VITE_FORM_API_URL, payload, {headers: {'Content-Type': 'application/json'}})
    formSubmitted.value = true
    console.log(response)
  } catch(error) {
    console.log(error)
  }  
});
</script>

<template>
  <div id="contactform" class="flex flex-col justify-center items-center bg-tapes bg-contain py-12 lg:py-20 p-2">
    <h2 class="text-magenta font-bold text-5xl mx-auto mb-4">Contact</h2>
    <form v-if="!formSubmitted" @submit="onSubmit" class="form flex flex-col gap-1 my-4 justify-center items-center bg-black px-2 py-8 md:p-8 my-8 rounded w-full md:w-2/3 lg:w-1/2 m-auto shadow-lg">
      <label for="firstname" class="text-lg text-white self-start">First name *<span class="text-green ml-4">{{ errors.firstName }}</span></label>
      <input type="text" id="firstname" class="border py-2 px-3 text-black w-full focus:outline focus:outline-green rounded" v-model="firstName" :firstNameAttrs="firstNameAttrs" required />
      <label for="lastname" class="text-lg text-white self-start">Last name</label>
      <input type="text" id="lastname" class="border py-2 px-3 text-black w-full focus:outline focus:outline-green rounded" v-model="lastName" :lastNameAttrs="lastNameAttrs" />
      <label for="email" class="text-lg text-white self-start">Email *<span class="text-green ml-4">{{ errors.email }}</span></label>
      <input type="text" id="email" class="border py-2 px-3 text-black w-full focus:outline focus:outline-green rounded" v-model="email" :emailAttrs="emailAttrs" />
      <label for="message" class="text-white text-lg self-start">Message *<span class="text-green ml-4">{{ errors.message }}</span></label>
      <textarea id="message" v-model="message" :messageAttrs="messageAttrs" rows="5" cols="30" class="border py-2 px-3 text-black w-full focus:outline focus:outline-green rounded" />
      <button :disabled="!meta.valid" class="bg-magenta transition duration-300 ease-in-out px-8 py-2 mt-8 rounded hover:bg-green disabled:bg-darkred disabled:pointer-events-none disabled:text-gray"><span class="pi pi-send mr-4 ml-0"></span>Send</button>
    </form>
    <div v-if="formSubmitted" class="bg-black flex flex-col justify-center items-center md:w-[50vw] m-2 rounded py-24">
      <h3 class="text-4xl">Great to hear from you!</h3>
      <p>Thanks for your message. I will get back to you ASAP.</p>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>