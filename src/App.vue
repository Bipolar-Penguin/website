
const app = initializeApp(firebaseConfig);

<template>
  <div id="app" class="main_wrap">
    <TopMenu />
    <SessionPage />
  </div>
</template>
<script>
import TopMenu from "@/components/TopMenu.vue";
import SessionPage from "@/components/SessionPage.vue";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCR0D9v-i7Eysaj2v7MF0LlfD3gfZFn0v8",
  authDomain: "pwa-push-2118.firebaseapp.com",
  projectId: "pwa-push-2118",
  storageBucket: "pwa-push-2118.appspot.com",
  messagingSenderId: "577307638683",
  appId: "1:577307638683:web:223bb814fe1c3312d37f3e"
};

const app = initializeApp(firebaseConfig);


export default {
  components: {
    TopMenu,
    SessionPage,
  },
}
</script>

<style src="@/assets/app.css" />
