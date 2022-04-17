<template>
  <FetchSessionContainer
    :auto-load="true"
    #default="{sessions, loading}"
  >
    <div>
      <div class="session_page-wrap">
        <SessionInformation :session="sessions" v-if="!loading"/>
        <SessionTimer :date="sessions.date" :max-price="sessions.max_price"/>
      </div>
      <SessionChart :async-data="data" :key="data.data.length" :categories="categories"/>
      <button @click="test()">Push</button>
    </div>
  </FetchSessionContainer>
</template>

<script>
import FetchSessionContainer from '@/containers/FetchSessionContainer';
import SessionInformation from '@/components/SessionPageAssets/SessionInformation.vue';
import SessionChart from '@/components/SessionPageAssets/SessionChart.vue';
import SessionTimer from '@/components/SessionPageAssets/SessionTimer.vue';

export default {
  components: {
    FetchSessionContainer,
    SessionInformation,
    SessionTimer,
    SessionChart,
  },
  data() {
    return{
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
    test(){
      this.data.data.push(111111)
      this.categories.push(123)
    }
  },
}
</script>

<style scoped>
  .session_page-wrap{
    width: 90vw;
    display: grid;
    grid-template-columns: 6fr 4fr;
    justify-content: center;
  }
  @media (max-width: 800px){
    .session_page-wrap{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
