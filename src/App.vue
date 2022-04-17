<template>
  <FetchUserContainer #default="{login, jwt, log}">
    <div id="app" class="main_wrap">
      <TopMenu :login="login"/>
      <SessionPage :jwt="jwt" :log="log"/>
      <notifications group="foo" class="noty"/>
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
  data() {
    return{
      messages: [],
    };
  },
  methods: {
    handleOnMessage(event) {
      console.log(event)
    },
    addNotification(message, type) {
      this.$notify({
        group: 'foo',
        type: type,
        position: 'top left',
        text: message,
      });
    }
  },

  mounted() {
    const socket = new WebSocket('ws://svc-notificator:5000/ws/trading')
    socket.addEventListener('message', () => {
      console.log(1);
    } )

  },
}
</script>
<style scoped>
  .noty{
    position: fixed;
    top: 500px;
    left: 10px;
  }
</style>
<style src="@/assets/app.css" />
