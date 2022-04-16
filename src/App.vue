<template>
  <div id="app" class="main_wrap">
    <TopMenu />
    <SessionPage />
  </div>
</template>
<script>
import TopMenu from "@/components/TopMenu.vue";
import SessionPage from "@/components/SessionPage.vue";

export default {
  components: {
    TopMenu,
    SessionPage,
  },
}
</script>

<style src="@/assets/app.css" />
