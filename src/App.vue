<template>
  <Header />

  
  <router-view></router-view>
</template>

<script>
//import { getAuth} from "firebase/auth";
//import landingpage from './components/landingpage.vue'
import './utilities/firebase'
import Header from './components/header.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
components:{ Header},
data(){
    return{
      isLoginOpen: true,
      isLoggedIn:""
    };
  },
  mounted(){
    const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            console.log(uid);
            //console.log(user.displayName);
            //console.log(user.emailVerified);
            this.isLoggedIn = true;
            // ...
        } else {
            // User is signed out
            // ...
            console.log('no user');
            this.isLoggedIn = false;
        }
        });   
  },
}
</script>

<style>

</style>