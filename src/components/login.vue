<template>
    <div class="absolute top-0 w-full h-full">
        <div class="flex w-full justify-center items-center h-full">
            <div class=" bg-gray-1 z-30 w-10/12 sm:w-2/5 rounded-2xl">
                <section class=" text-right mr-3 mt-1 ">
                    <button @click="$emit('close-login')" class=" font-semibold text-xl">x</button>
                </section>
                <section class="w-full text-center pt-7 text-2xl font-bold pb-8">
                    <p>MASUK</p>
                </section>
                <form @submit.prevent="submit">
                    <section class="flex flex-col pb-7 items-center justify-center w-full">
                        <label class="w-3/4 pb-1">E-mail</label>
                        <input v-model="username" type="email" placeholder="masukkan email..." class="w-3/4 px-2 py-1 bg-white rounded-xl border h-9">
                    </section>
                    <section class="flex flex-col items-center justify-center w-full"> 
                        <label class="w-3/4 pb-1">Password</label>
                        <input v-model="password" type="password" placeholder="masukkan password..." class="w-3/4 bg-white px-2 py-1 rounded-xl border h-9">
                    </section>
                    <section class="w-full flex justify-center">
                        <section class="pb-10 w-3/4 text-right ">
                            <div @click="$emit('open-lupapassword')" class="hover:text-blue-1 cursor-pointer transition-colors duration-200 text-sm">lupa password?</div>
                        </section>
                    </section>
                    <section class="flex w-full justify-center pb-8">
                        <section class="flex flex-row justify-between w-3/4">
                            <div @click="$emit('open-register')" class="cursor-pointer text-blue-purple hover:text-black transition-colors duration-200">Daftar</div>
                            <button type="submit" class=" bg-blue-purple hover:bg-opacity-80 transition-colors duration-200 py-2 px-7 rounded-lg">
                                <span v-if="isLoading == false">MASUK</span>
                                <span v-if="isLoading == true">loading...</span> 
                            </button>
                            
                        </section>
                    </section> 
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//import firebase from '../utilities/firebase'
export default {
    data(){
        return{
            username:"123@123.123",
            password:"123123",
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
            signInWithEmailAndPassword(auth, this.username, this.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                this.isLoading = false;
                user.emailVerified = this.emailVerified;
                this.username = "";
                this.password = "";
                this.$emit("close-login");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                const errorMessage = error.message;
                console.log(errorMessage);
                this.isLoading = false;
                this.username = "";
                this.password = "";
            }) 
        }
    }
}


</script>

<style>

</style>