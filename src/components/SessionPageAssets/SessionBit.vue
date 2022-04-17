<template>
  <div class="bit_menu">
    <div class="bit_menu_content">
      <div class="bit_title">
        <img v-if="userCan" src="@/assets/img/bit.svg">
        <img v-if="!userCan" src="@/assets/img/bit2.svg">
        <div v-if="userCan" :style="{color: 'rgb(219, 43, 33)',}">Возможная ставка</div>
        <div v-if="!userCan">Ваша текущая ставка</div>
      </div>
      <div class="current_price">
        150000
      </div>

      <div class="current_down">
        <div :style="{opacity: '0.5', fontSize: '14px'}">Cнижение от текущей цены</div>
        <div :style="{fontSize: '1em'}">
          123123
        </div>
      </div>

      <div class="bit_button" v-if="userCan">
        <button class="sign_button" @click="setBit()">Сделать ставку</button>
      </div>
      <div class="bit_button" v-if="!userCan">
        <button class="sign_button_neg" >Вы сделали ставку</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userCan: {
      type: Boolean,
      default: true,
    }
  },
  methods: {
    setBit() {
      this.$emit('setbit')
    }
  }
}
</script>

<style scoped>
  .bit_menu{
    width: 100vw;
    height: 88px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .bit_menu_content{
    width: 70%;
    display: flex;
    justify-content: space-between;
  }
  .bit_title{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .bit_title div{
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
  }
  .bit_button{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .current_price{
    color: #264b82;
    font-size: 40px !important;
    line-height: 34px !important;
    margin: 0px !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sign_button, .sign_button_neg{
    cursor: pointer;
    border: none;
    outline: none;
    height: 48px;
    font-weight: 700;
    font-size: 1em;
    padding: 11px 21px;
    color: #fff;
    background-color: rgb(219, 43, 33);
  }
  .sign_button_neg{
    cursor: auto;
    background-color: #264b82;
  }
  .sign_button:hover{
    transition: .3s;
    background-color: rgb(188, 37, 29);
  }
  .current_down{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 800px){
    .bit_title{
      display: none;
    }
    .current_down{
      display: none;
    }
    .bit_menu_content{
      width: 95%;
    }
  }
</style>