<template>
  <div class="absolute top-0 w-full h-full">
      <div class="flex w-full justify-center items-center h-full">
          <div class=" bg-gray-1 z-30 w-10/12 sm:w-2/5 rounded-2xl">
              <section class=" text-right mr-3 mt-1 ">
                  <button @click="$emit('close-verifikasi')" class=" font-semibold text-xl">x</button>
              </section>
              <section class="w-full text-center pt-7 text-2xl font-bold pb-8">
                  <p>VERIFIKASI</p>
              </section>
              <form @submit.prevent="submit">
                  <section v-if="emailSent == false" class="text-center mb-10">link verifikasi akan dikirim ke {{userEmail}} </section>
                  <section v-if="emailSent == false" class="flex w-full justify-center pb-8">
                      <section class="flex flex-row justify-center items-center w-3/4">
                          <button type="submit" class=" bg-blue-purple hover:bg-opacity-80 transition-colors duration-200 py-2 px-7 rounded-lg">
                              <span v-if="isLoading == false">Kirim</span>
                              <span v-if="isLoading == true">loading...</span> 
                          </button>
                      </section>
                  </section> 
                  <div v-if="emailSent == true" class="w-full text-center pt-7 pb-8 mb-1 px-5">
                    <p class="text-lg">link verifikasi akun telah dikirim ke {{userEmail}}</p>
                    <p class=" text-sm">cek folder spam jika anda tidak menemukan email</p>
                  </div>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
import { getAuth, sendEmailVerification, onAuthStateChanged } from "firebase/auth";
export default {
data(){
        return{
            username:"",
            password:"",
            isLoading:false,
            emailVerified: '',
            emailSent: false,
            userEmail:"",
        }
    },
    mounted(){
        const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
      if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          //const uid = user.uid;
          console.log(user.email);
          this.userEmail = user.email;
          if(user.emailVerified == true){
                this.emailVerified = true;
            }
          //console.log(uid);
          //console.log(user.displayName);
          //console.log(user.emailVerified);

          // ...
      } else {
          // User is signed out
          // ...
          console.log('no user');
          this.isLoggedIn = false;
      }
      });   
    },
    methods:{
        submit(){
            this.isLoading = true;
            //submit
            const auth = getAuth();
            const actionCodeSettings = {
                    //url: `${process.env.VUE_APP_HOST_NAME}/sign-in/?email=${user.email}`,
                    url: `http://localhost:8080/`,
                  };
                sendEmailVerification(auth.currentUser, actionCodeSettings)
                .then(() => {
                //const user = userCredential.user;
                  // Email verification sent!
                  this.isLoading = false;
                  this.emailSent = true;
                  
                });
        },
    }
}
</script>

<style>

</style>