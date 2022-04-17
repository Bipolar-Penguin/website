<template>
  <div class="menu">
    <div class="content">
      <div class="logo">
        <img class="menu_logo" src="@/assets/img/logo.svg">
        <img class="menu_logo_minimal" src="@/assets/img/minimal.svg">
      </div>
      <div class="control">
        <div class="button_group">
          <button class="login_button" @click="openModal()">Войти</button>
          <button class="sign_button">Зарегистрироваться</button>
        </div>
      </div>
        
    </div>
    <div class="modal" id="modal">
      <form @submit.prevent="login(log); openModal()" class="modal_wrap">
        <input type="text" v-model="log" placeholder="Имя пользователя">
        <input type="password" v-model="pass" placeholder="Пароль">
        <button>Войти</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopMenu',
  props: {
    login: {
      type: Function,
      default: () => {},
    }
  },
  data() {
    return{
      log: '',
      pass: ''
    }
  },
  methods: {
    openModal() {
      document.getElementById('modal').classList.toggle('active')
    }
  },
}
</script>

<style lang="css" scoped>
  .modal{
    width: 100vw;
    height: 100vh;
    background-color: #000000d2;
    display: none;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  .active{
    display: flex;
  }
  .modal_wrap{
    width: 50%;
    height: 50%;
    background-color: #fff;
  }
  .menu{
    margin-bottom: 30px;
    width: 100vw;
    height: 76px;
    box-shadow: rgb(0 0 0 / 18%) 0px 1px 12px;
    padding: 1rem 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  .content{
    max-width: 1200px;
    width: 100%;
    padding: 0 5%;
    display: flex;
    justify-content: space-between;
  }
  .control{
    display: flex;
    gap: 20px;
  }
  .menu_img{
    width: 24px;
    height: 24px;
  }
  .menu_img_wrap{
    display: flex;
    gap: 20px;
    align-items: center;
  }
  .button_group button{
    cursor: pointer;
    border: none;
    outline: none;
    height: 48px;
    font-weight: 700;
    font-size: 1em;
    padding: 11px 21px;
  }
  .login_button{
    background-color: #fff;
    height: 48px;
    color: #00000099;
  }
  .login_button:hover{
    transition: .3s;
    color: #000;
  }
  .sign_button{
    color: #fff;
    background-color: rgb(219, 43, 33);
  }
  .sign_button:hover{
    transition: .3s;
    background-color: rgb(188, 37, 29);
  }
  .logo{
    display: flex;
    align-items: center;
  }
  .menu_logo_minimal{
    display: none;
  }
  .menu_logo{
    display: block;
  }
  @media (max-width: 800px){
    .menu_logo_minimal{
      display: block;
    }
    .menu_logo{
      display: none;
    }
  }
</style>