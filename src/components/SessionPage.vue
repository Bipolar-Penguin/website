<template>
  <FetchSessionContainer
    :auto-load="true"
    #default="{sessions, loading}"
  >
    <div class="wrap">
      <div class="session_page-wrap">
        <SessionInformation :session="sessions" v-if="!loading"/>
        <SessionTimer :date="sessions.date" :max-price="sessions.max_price"/>
      </div>
      <SessionChart :async-data="data" :key="data.data.length" :categories="categories"/>
      <SessionBit @setbit="setBit()" :userCan="userCan"/>
    </div>
  </FetchSessionContainer>
</template>

<script>
import FetchSessionContainer from '@/containers/FetchSessionContainer';
import SessionInformation from '@/components/SessionPageAssets/SessionInformation.vue';
import SessionChart from '@/components/SessionPageAssets/SessionChart.vue';
import SessionTimer from '@/components/SessionPageAssets/SessionTimer.vue';
import SessionBit from '@/components/SessionPageAssets/SessionBit.vue';

export default {
  components: {
    FetchSessionContainer,
    SessionInformation,
    SessionTimer,
    SessionChart,
    SessionBit,
  },
  data() {
    return{
      userCan: true,
      data: {
        name: 'Цена',
        marker: {
          symbol: 'square'
        },
        data: [123]
      },
      categories: [12]
    }
  },
  methods: {
    setBit(){
      this.userCan = false;
      this.data.data.push(111111);
      this.categories.push(123);
    }
  },
}
</script>

<style scoped>
  .wrap{
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .session_page-wrap{
    width: 90vw;
    display: grid;
    grid-template-columns: 6fr 4fr;
    column-gap: 20px;
    justify-content: center;
  }
  @media (max-width: 1350px){
    .session_page-wrap{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
