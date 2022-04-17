<template>
  <div class="session-wrap">
    <div class="timer">
      <div :style="{fontSize: '14px', textAlign: 'start'}">
        До окончания сессии осталось:
      </div>
      <div class="clock">
        <div class="clock_block_wrap">
          <div class="clock_block">{{currentTime.d > 9 ? currentTime.d : '0' + currentTime.d}}</div>
          Дней
        </div>
        <div class="clock_block_wrap">
          <div class="clock_block">{{currentTime.h > 9 ? currentTime.h : '0' + currentTime.h}}</div>
          Часов
        </div>
        <div class="clock_block_wrap">
          <div class="clock_block">{{currentTime.m > 9 ? currentTime.m : '0' + currentTime.m}}</div>
          Минут
        </div>
        <div class="clock_block_wrap">
          <div class="clock_block">{{currentTime.s > 9 ? currentTime.s : '0' + currentTime.s}}</div>
          Секунд
        </div>
      </div>
    </div>
    <div class="price">
      <div :style="{opacity: '0.5', fontSize: '14px'}">Начальная цена</div>
      <div :style="{fontSize: '24px'}" >{{ maxPrice.toString().slice(0, -2) }},{{ maxPrice.toString().slice(-2) }}₽</div>
      <div :style="{opacity: '0.5', fontSize: '14px'}">Снижение в ходе сессии</div>
      <div :style="{fontSize: '24px', marginLeft: '10px'}">{{ deltaPrice.toString().slice(0, -2) }},{{ deltaPrice.toString().slice(-2) }}₽ </div>
    </div>
    <div class="current_price">
      <div :style="{fontSize: '20px'}">Текущая цена</div>
      <div :style="{fontSize: '24px', color: 'rgb(38, 75, 130)'}">{{ currentPrice.toString().slice(0, -2) }},{{ currentPrice.toString().slice(-2) }}₽</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SessionTimer',
  props: {
    date: {
      type: Object,
      default: () => ({}),
    },
    maxPrice: {
      type: Number,
      default: 0,
    },
    currentPrice: {
      type: Number,
      default: 0,
    }
  },
  computed: {
    deltaPrice() {
      return this.maxPrice - this.currentPrice;
    }
  },
  data() {
    return {
      currentTime: {
        d: 0,
        h: 0,
        m: 0,
        s: 0,
      },
    }
  },
  mounted() {
    setInterval(() => {
      const countDownDate = new Date(this.date.end).getTime();
      const now = new Date().getTime();
      const timeleft = countDownDate - now;
      this.currentTime = {
        d: Math.floor(timeleft / (1000 * 60 * 60 * 24)),
        h: Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        m: Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)),
        s: Math.floor((timeleft % (1000 * 60)) / 1000),
      }
    }, 1000);
  },
}
</script>

<style scoped>
.session-wrap{
  background-color: #E7EEF7;
  padding: 20px;
  max-width: 400px;
  width: 100%;
}
.timer{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background-color: #fff;
  padding: 20px 0;
}
.price{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px 0;
  background-color: #E7EEF7;
}
.current_price{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px 0;
  background-color: #fff;
}
.clock{
  display: flex;
  gap: 8px;
}
.clock_block_wrap{
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  color: #7F8792;
  font-size: 12px;
}

.clock_block{
  width: 55px;
  height: 55px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #E7EEF7;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(38, 75, 130);
  font-size: 24px;
  font-weight: 300;
}
</style>