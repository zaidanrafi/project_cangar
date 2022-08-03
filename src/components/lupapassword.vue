<template>
    <div class="absolute top-0 w-full h-full">
        <div class="flex w-full justify-center items-center h-full">
            <div class=" bg-gray-1 z-30 w-10/12 sm:w-2/5 rounded-2xl">
                <section class=" text-right mr-3 mt-1 ">
                    <button @click="$emit('close-lupapassword')" class=" font-semibold text-xl">x</button>
                </section>
                <section class="w-full text-center pt-7 text-2xl font-bold pb-2 mb-1">
                    <p>LUPA PASSWORD</p>
                </section>
                <form v-if="sent == false" @submit.prevent="submit" class="pt-6">
                    <section class="flex flex-col pb-7 items-center justify-center w-full">
                        <label class="w-3/4 pb-1">E-mail</label>
                        <input v-model="username" type="email" placeholder="masukkan email..." class="w-3/4 px-2 py-1 bg-white rounded-xl border h-9">
                    </section>
                    <section class="flex w-full justify-center pb-8">
                        <section class="flex flex-row justify-center w-full">
                            <button type="submit" class=" bg-blue-purple mt-9 hover:bg-opacity-80 transition-colors duration-200 py-2 px-7 rounded-lg">
                                <span v-if="isLoading == false">kirim e-mail</span>
                                <span v-if="isLoading == true">loading...</span> 
                            </button>
                        </section>
                    </section> 
                </form>
                <div v-if="sent == true" class="w-full text-center pt-7 pb-8 mb-1 px-5">
                    <p class="text-lg">link reset password telah dikirim melalui email anda</p>
                    <p class=" text-sm">cek folder spam jika tidak menemukan email</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
//import firebase from '../utilities/firebase'
export default {
data(){
        return{
            username:"zaidanr4f1@gmail.com",
            sent: false,
            isLoading:false,
        }
    },
    mounted(){
        //this.refs.usernameRef.focus();
    },
    methods:{
        submit(){
            this.isLoading = true;
            //submit
            const auth = getAuth();
            sendPasswordResetEmail(auth, this.username)
            .then(() => {
                this.isLoading = false;
                this.sent = true;
                //alert('permintaan reset password telah dikirim ke email anda');
              // ..
            })
            .catch((error) => {
              const errorCode = error.code;
              console.log(errorCode);
              const errorMessage = error.message;
              console.log(errorMessage);
              this.isLoading = false
            });
        },
    }
}
</script>

<style>

</style>