<template>
  <div class="information-wrap">
    <div class="information__number">
      <div>
          Котировочная сессия <strong>{{ session.id.slice(0, 7) }}</strong>
      </div>
      <div class="information_status" :style="{color: currentStatus.color}">
        <div class="dot" :style="{backgroundColor: currentStatus.color}"></div>  
        {{ currentStatus.title }}
      </div>
    </div>
    <div class="information__title">
      {{session.title}}
    </div>
    <div class="information__conditional" :style="{marginBottom: '20px'}">
      <div :style="{fontSize: '14px', color: '#1a1a1a88', marginBottom: '10px'}">Условия исполнения контракта</div>
      <div :style="{display: 'flex', alignItems: 'center', gap: '8px'}">
        <img src="@/assets/img/law.svg" :style="{width: '25px', height: '25px'}">
        Обязательное электронное исполнение с использованием УПД
      </div>
    </div>
    <div class="information__customer" :style="{marginBottom: '20px'}">
      <div :style="{fontSize: '14px', color: '#1a1a1a88', marginBottom: '10px'}">Заказчик</div>
      <div class="customer">
        {{ session.description }}
      </div>
    </div>
    <div class="information__conditional" :style="{marginBottom: '20px'}">
      <div :style="{fontSize: '14px', color: '#1a1a1a88', marginBottom: '10px'}">Заключение происходит в соответствии с законом</div>
      <div :style="{display: 'flex', alignItems: 'center', gap: '8px'}">
        <img src="@/assets/img/law.svg" :style="{width: '25px', height: '25px'}">
        44-ФЗ
      </div>
    </div>
    <div class="information__time" :style="{marginBottom: '20px'}">
      <div :style="{fontSize: '14px', color: '#1a1a1a88', marginBottom: '10px'}">Даты проведения</div>
      <div :style="{display: 'flex', alignItems: 'center', gap: '8px'}">
        <img src="@/assets/img/calendar.svg" :style="{width: '25px', height: '25px'}">
        {{session.date.start}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SessionInformation',
  props: {
    session: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
  // eslint-disable-next-line vue/return-in-computed-property
  currentStatus() {
    switch (this.session.status) {
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
.information__number{
  display: flex;
  gap: 30px;
}
.information_status{
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans","Helvetica Neue",Arial,Helvetica,sans-serif;
  font-weight: 700;
}
.information__title{
  color: #264b82;
  font-weight: 700;
  font-size: 1.28571429em;
  margin-top: 20px;
  margin-bottom: 20px;
}
.customer{
  color: #264b82;
}
.information-wrap{
  
}

.timer-wrap{
  width: 100px;
  height: 100px;
  background-color: #e7eef7;
}

.information-wrap div{
}

</style>