// 1、引入依赖脚本
import * as echarts from '../../ec-canvas/echarts';

let chart = null;

// 2、进行初始化数据
function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    
    series: [{
      data: [{
        name:"MON",
        value: 250
      },
      {
        name:"TUE",
        value: 100
      },
      {
        name:"WED",
        value: 350
      },
      {
        name:"THU",
        value: 270
      },
      {
        name:"FRI",
        value: 460
      },
      {
        name:"SAT",
        value: 120
      },
      {
        name:"SUN",
        value: 500
      }],
      type: 'pie',
      radius:'40%',
      roseType: 'angle'
    }, ]
  };

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts',
      path: '/pages/index/index',
      success: function () {},
      fail: function () {}
    }
  },
  data: {
    ec: {
      onInit: initChart // 3、将数据放入到里面
    },
    dt: {
      lazyLoad: true
    },
    items: [{
      name:"mon",
      value: 20
    },
    {
      name:"tue",
      value: 20
    },
    {
      name:"wed",
      value: 20
    },
    {
      name:"thu",
      value: 20
    },
    {
      name:"fri",
      value: 20
    },
    {
      name:"sat",
      value: 20
    },
    {
      name:"sun",
      value: 20
    }
    ]
  },
  onShow() {
    this.echartsComponent = this.selectComponent('#mychart');
    this.init_chart();
    console.log(this.data.items);
  },
  init_chart() {
    this.echartsComponent.init((canvas, width, height) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      chart.setOption(this.getOption());
      return chart;
    })

  },
  getOption() {
    var week = [];
    var value = [];
    for(let i = 0;i < this.data.length;i++){

    }
    var option = {
      xAxis: {
        type: 'category'
      },
      yAxis: {
        type: 'value'
      },
      dataset: {
        source:this.data.items
        // source: [{
        //     name:"mon",
        //     value: 20
        //   },
        //   {
        //     name:"tue",
        //     value: 20
        //   },
        //   {
        //     name:"wed",
        //     value: 20
        //   },
        //   {
        //     name:"thu",
        //     value: 20
        //   },
        //   {
        //     name:"fri",
        //     value: 20
        //   },
        //   {
        //     name:"sat",
        //     value: 20
        //   },
        //   {
        //     name:"sun",
        //     value: 20
        //   }]
      },
      series: [{
        type: 'line',
        encode: {
          x: 0,
          y: 1
        }
      }]
    }
    return option;
  },
  onReady() {
    // setTimeout(function () {
    //   // 获取 chart 实例的方式
    //   console.log(chart)
    // }, 2000);
  }
});