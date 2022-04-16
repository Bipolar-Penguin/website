<template>
  <div>
    <div class="timer-wrap">

    </div>
    <div class="information-wrap">
      <div class="information__number">
        Котировочная сессия <strong>{{ id }}</strong>
      </div>
      <div class="information_status" :style="{color: currentStatus.color}">
        <div class="dot" :style="{backgroundColor: currentStatus.color}"></div>  
        {{ currentStatus.title }}
      </div>
    </div>
    <div class="session-wrap">

    </div>
  </div>
</template>

<script>

export default {
  data() {
    return{
      id: 1234567,
      status: "canseled",
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    currentStatus() {
      switch (this.status) {
        case "active":
          return {title: 'АКТИВНАЯ', color: '#0d9b68'}
        case "done":
          return {title: 'УСПЕШНО ЗАВЕРШЕНА', color: '#167c85'}
        case "canseled":
          return {title: 'НЕ СОСОТОЯЛАСЬ', color: '#db2b21'}
      }
    }
  },
}
</script>

<style scoped>
.dot{
  width: 10.5px;
  height: 10.5px;
  border-radius: 10.5px;
}
</style>
