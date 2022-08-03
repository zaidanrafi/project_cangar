<template>
  <div class="absolute top-0 w-full h-full">
      <div class="flex w-full justify-center items-center h-full">
          <div class=" bg-gray-1 z-30 w-10/12 sm:w-2/5 rounded-2xl">
              <section class=" text-right mr-3 mt-1 ">
                  <button @click="$emit('close-register')" class=" font-semibold text-xl">x</button>
              </section>
              <section class="w-full text-center pt-7 text-2xl font-bold pb-8">
                  <p>DAFTAR</p>
              </section>
              <form @submit.prevent="submit">
                  <section v-if="emailSent == false" class="flex flex-col pb-7 items-center justify-center w-full">
                      <label class="w-3/4 pb-1">E-mail</label>
                      <input  v-model="username" type="email" placeholder="masukkan email..." class="w-3/4 px-2 py-1 bg-white rounded-xl border h-9">
                  </section>
                  <section v-if="emailSent == false" class="flex flex-col pb-10 items-center justify-center w-full"> 
                      <label class="w-3/4 pb-1">Password</label>
                      <input v-model="password" type="password" placeholder="buat password baru..." class="w-3/4 bg-white px-2 py-1 rounded-xl border h-9">
                  </section>
                  <section v-if="emailSent == false" class="flex w-full justify-center pb-8">
                      <section class="flex flex-row justify-between w-3/4">
                          <button @click="$emit('open-login')" class=" text-blue-purple hover:text-black transition-colors duration-200">Masuk</button>
                          <button v-if="emailVerified" type="submit" class=" bg-blue-purple hover:bg-opacity-80 transition-colors duration-200 py-2 px-7 rounded-lg">
                            <span v-if="isLoading == false">DAFTAR</span>
                            <span v-if="isLoading == true">loading...</span>
                          </button>
                          <button type="submit" v-else class=" bg-blue-purple hover:bg-opacity-80 transition-colors duration-200 py-2 px-7 rounded-lg">
                              <span v-if="isLoading == false">DAFTAR</span>
                              <span v-if="isLoading == true">loading...</span> 
                          </button>
                      </section>
                  </section> 
                  <div v-if="emailSent == true" class="w-full text-center pt-7 pb-8 mb-1 px-5">
                    <p class="text-lg">link verifikasi akun telah dikirim melalui email anda</p>
                    <p class=" text-sm">cek folder spam jika anda tidak menemukan email</p>
                  </div>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
export default {
data(){
        return{
            username:"",
            password:"",
            isLoading:false,
            emailVerified: '',
            emailSent: false,
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
        createUserWithEmailAndPassword(auth, this.username, this.password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            const actionCodeSettings = {
                    //url: `${process.env.VUE_APP_HOST_NAME}/sign-in/?email=${user.email}`,
                    url: `http://localhost:8080/`,
                  };
                
                sendEmailVerification(auth.currentUser, actionCodeSettings)
                .then(() => {
                  // Email verification sent!
                  
                  this.emailSent = true;
                  if(user.emailVerified == true){
                    this.emailVerified = true;
                  }
                });
                this.isLoading = false;
                this.username = "";
                this.password = "";

                //this.$emit("close-register");
          })
          .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                const errorMessage = error.message;
                console.log(errorMessage);
                this.isLoading = false;
                this.username = "";
                this.password = "";
            // ..
          });

        },
    }
}
</script>

<style>

</style>