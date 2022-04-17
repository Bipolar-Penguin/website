<template>
  <FetchUserContainer #default="{login, jwt, log}">
    <div id="app" class="main_wrap">
      <TopMenu :login="login"/>
      <SessionPage :jwt="jwt" :log="log"/>
    </div>
  </FetchUserContainer>
</template>
<script>
import TopMenu from "@/components/TopMenu.vue";
import SessionPage from "@/components/SessionPage.vue";
import FetchUserContainer from '@/containers/FetchUserContainer'

export default {
  components: {
    TopMenu,
    SessionPage,
    FetchUserContainer,
  },
}
</script>

<style src="@/assets/app.css" />
