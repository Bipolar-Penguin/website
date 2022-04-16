import axios from 'axios';

export default {
  name: 'FetchSessionContainer',
  props: {
    autoLoad: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    async loadSessions() {
      this.loading = true;
      this.sessions = await this.getSessions();
      this.loading = false;
    },
    async getSessions () {
      const res = await axios.get('http://192.168.247.4:8000/session');
      return res.data[0];
    },
  },
  data() {
    return {
      sessions: [],
      loading: true,
    }
  },
  mounted() {
    if (this.autoLoad === true){
      this.loadSessions();
    }
  },
  render() {
    return this.$scopedSlots.default({
      loadSessions: this.loadSessions,
      sessions: this.sessions,
      loading: this.loading,
    })
  }
}