<template>
  <FetchSessionContainer
    :auto-load="true"
    #default="{sessions, loading}"
  >
    <FetchAllBitsContainer #default="{ currentPrice}" :session="sessions" :log="log" @updated="updateChart">
      <div class="wrap">
        <div class="session_page-wrap">
          <SessionInformation :session="sessions" v-if="!loading" :currentPrice="currentPrice"/>
          <SessionTimer :date="sessions.date" :max-price="sessions.max_price" :current-price="currentPrice"/>
        </div>
        <SessionChart :async-data="data" :key="data.data.length" :categories="categories"/>
        <SessionBit @setbit="setBit(sessions)" :userCan="userCan" :jwt="jwt" :current-price="currentPrice" :delta="(sessions.max_price - currentPrice)"/>
      </div>
    </FetchAllBitsContainer>
  </FetchSessionContainer>
</template>

<script>
import FetchAllBitsContainer from '@/containers/FetchAllBitsContainer';
import FetchSessionContainer from '@/containers/FetchSessionContainer';
import SessionInformation from '@/components/SessionPageAssets/SessionInformation.vue';
import SessionChart from '@/components/SessionPageAssets/SessionChart.vue';
import SessionTimer from '@/components/SessionPageAssets/SessionTimer.vue';
import SessionBit from '@/components/SessionPageAssets/SessionBit.vue';

import axios from 'axios';

export default {
  components: {
    FetchAllBitsContainer,
    FetchSessionContainer,
    SessionInformation,
    SessionTimer,
    SessionChart,
    SessionBit,
  },
  props: {
    jwt: {
      type: String,
      default: '',
    },
    log: {
      type: String,
      default: '',
    },
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
      categories: [12],
    }
  },
  
  methods: {
    async setBit(sessions){
      const res = await axios.post(`http://localhost:8000/session/${sessions.id}`, {}, {
        headers: {
          'authorization': this.jwt
        }
      }) 
      console.log(res.data)
      this.userCan = false;
    },
    updateChart(event){
      console.log(event)
      this.userCan = this.log !== event.userCan
      console.log(event)
      this.data.data = event.value.reverse()
      this.categories = event.date.reverse()
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
