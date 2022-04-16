<template>
  <div>
    <div class="timer-wrap">

    </div>
    <div class="information-wrap">
      <div class="information__number">
        Котировочная сессия <strong>{{ id }}</strong>
      </div>
      <div class="information_status">
        <div class="dot"></div>  
        {{ currentStatus }}
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
      status: "done",
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    currentStatus() {
      switch (this.status) {
        case "active":
          return "АКТИВНАЯ"
        case "done":
          return "УСПЕШНО ЗАВЕРШЕНА"
        case "canseled":
          return "НЕ СОСОТОЯЛАСЬ"
      }
    }
  },
}
</script>
