<template>
  <FetchSessionContainer
    :auto-load="true"
    #default="{sessions, loading}"
  >
    <div class="session_page-wrap">
      <SessionInformation :session="sessions" v-if="!loading"/>
      <SessionTimer :date="sessions.date" :max-price="sessions.max_price"/>
    </div>
  </FetchSessionContainer>
</template>

<script>
import FetchSessionContainer from '@/containers/FetchSessionContainer';
import SessionInformation from '@/components/SessionPageAssets/SessionInformation.vue';
import SessionTimer from '@/components/SessionPageAssets/SessionTimer.vue';

export default {
  components: {
    FetchSessionContainer,
    SessionInformation,
    SessionTimer,
  },
}
</script>

<style scoped>
  .session_page-wrap{
    width: 90vw;
    display: grid;
    grid-template-columns: 6fr 4fr;
  }
  @media (max-width: 800px){
    .session_page-wrap{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
