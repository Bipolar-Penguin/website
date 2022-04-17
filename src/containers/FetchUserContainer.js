import axios from 'axios';

export default {
  name: 'FetchUserContainer',
  methods: {
    async login (mock) {
      let id = 'a'
      switch (mock) {
        case 'ilia':
          id = 'a'
          this.log = 'a'
          break;
        case 'semen':
          id = 'b'
          this.log = 'b'
          break;
        case 'denis':
          id = 'c'
          this.log = 'c'
          break;
      }
      const res = await axios.post('http://localhost:8000/user/auth', {
        user_id: id
      })
      this.jwt = res.data;
    }
  },
  data() {
    return {
      log: '',
      loading: true,
      jwt: ''
    }
  },
  render() {
    return this.$scopedSlots.default({
      login: this.login,
      jwt: this.jwt,
      log: this.log
    })
  }
}