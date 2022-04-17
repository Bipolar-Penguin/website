<template>
  <div>
    <vue-highcharts :options="options" ref="lineCharts"></vue-highcharts>
  </div>
</template>

<script>
import VueHighcharts from 'vue2-highcharts'

let lineCharts
// let line

// const asyncData = {
//   name: 'Цена',
//   marker: {
//     symbol: 'square'
//   },
//   data: [150000, 140000, 130000, 120000, 112000]
// }
export default{
  components: {
    VueHighcharts
  },
  props: {
    asyncData: {
      type: Object,
      default: () => ({}),
    },
    categories: {
      type: Array,
      default: () => [],
    }
  },
  data(){
    return{
    options: {
      chart: {
      type: 'spline'
      },
      title: {
      text: 'График изменения цены'
      },
      xAxis: {
        categories: this.categories
        
      },
      yAxis: {
      title: {
        text: false
      },
      labels: {
        formatter: function () {
        return this.value + '₽';
        }
      }
      },
      tooltip: {
      crosshairs: true,
      shared: true
      },
      credits: {
      enabled: false
      },
      plotOptions: {
      spline: {
        marker: {
        radius: 4,
        lineColor: '#666666',
        lineWidth: 1
        }
      }
      },
      series: []
    }
    }
  },
  mounted() {
    this.load();
  },
  methods: {
    load(){
      lineCharts = this.$refs.lineCharts;
      lineCharts.addSeries(this.asyncData);
    }
  }
}
</script>