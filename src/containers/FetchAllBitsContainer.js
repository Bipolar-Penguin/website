import axios from 'axios';

export default {
  name: 'FetchAllBitsContainer',
  methods: {
    async getBits () {
      const res = await axios.get(`http://62.109.10.249:8000/session/1345497a-1f76-46a2-9561-b5fdf77b722e`);
      // const res = await axios.get('http://localhost:8000/session');
      this.bits = res.data;
      this.currentPrice = res.data[0].bid
      // this.userCan = res.data[0].user_id !== this.log
      this.chartData = []
      this.chartTime = []
      this.bits.forEach(el => {
        this.chartData.push(el.bid)
        const date = new Date(el.date)
        this.chartTime.push(`${date.getHours()}:${date.getMinutes()}`)
      })
      this.$emit('updated', {
        value: this.chartData,
        date: this.chartTime,
        userCan: res.data[0].user_id
      });
    },
  },
  computed: {
    currentPrice(){
      return this.bits[0].bid
    }
  },
  props: {
    session: {
      type: Object,
      default: () => ({})
    },
    log: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      chartData: [],
      chartTime: [],
      currentPrice: 0,
      bits: [],
      // userCan: true,
    }
  },
  mounted() {
    setInterval(() => {
      this.getBits();
    }, 1000)
  },
  render() {
    return this.$scopedSlots.default({
      bits: this.bits,
      currentPrice: this.currentPrice,
      chartData: this.chartData,
      chartTime: this.chartTime,
      // userCan: this.userCan,
    })
  }
}