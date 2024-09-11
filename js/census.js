var censusTimer,start_date="20240907",date=new Date,end_date=""+date.getFullYear()+(8<date.getMonth()?date.getMonth()+1:"0"+(date.getMonth()+1))+(9<date.getDate()?date.getDate():"0"+date.getDate()),access_token="",site_id="",dataUrl=access_token+"&site_id="+site_id,metrics="pv_count",metricsName="pv_count"===metrics?"访问次数":"visitor_count"===metrics?"访客数":"",color="light"===document.documentElement.getAttribute("data-theme")?"#4c4948":"rgba(255,255,255,0.7)";function mapChart(){let s=document.createElement("script");fetch(dataUrl+("&start_date="+start_date+"&end_date="+end_date+"&metrics="+metrics+"&method=overview/getDistrictRpt")).then(e=>e.json()).then(e=>{var t=e.result.items[0],r=e.result.items[1],o=[],e=r[0][0];for(let e=0;e<t.length;e++)o.push({name:t[e][0],value:r[e][0]});var a=JSON.stringify(o);s.innerHTML=`
      var mapChart = echarts.init(document.getElementById('map-chart'), 'light');
      var mapOption = {
        title: {
          text: '网站访客地域分布图🌏',
          x: 'center',
          textStyle: {
            color: '${color}'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        visualMap: {
          min: 0,
          max: ${e},
          left: 'left',
          top: 'bottom',
          text: ['多','少'],
          color: ['#39c5bb', '#b9ebe4'],
          textStyle: {
            color: '${color}'
          },
          calculable: true
        },
        series: [{
          name: '${metricsName}',
          type: 'map',
          mapType: 'china',
          showLegendSymbol: false,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true,
              color: '#617282'
            }
          },
          itemStyle: {
            normal: {
              areaColor: 'rgb(230, 232, 234)',
              borderColor: 'rgb(255, 255, 255)',
              borderWidth: 1
            },
            emphasis: {
              areaColor: 'gold'
            }
          },
          data: ${a}
        }]
      };
      mapChart.setOption(mapOption);
      window.addEventListener("resize", () => { 
        mapChart.resize();
      });`,document.getElementById("map-chart").after(s)}).catch(function(e){console.log(e)})}function trendsChart(){let n=document.createElement("script");fetch(dataUrl+("&start_date="+start_date+"&end_date="+end_date+"&metrics="+metrics+"&method=trend/time/a&gran=month")).then(e=>e.json()).then(e=>{var t=[],r=[],o=e.result.items[0],a=e.result.items[1];for(let e=o.length-1;0<=e;e--)t.push(o[e][0].substring(0,7).replace("/","-")),r.push("--"!==a[e][0]?a[e][0]:0);var e=JSON.stringify(t),s=JSON.stringify(r);n.innerHTML=`
      var trendsChart = echarts.init(document.getElementById('trends-chart'), 'light');
      var trendsOption = {
        title: {
          text: '网站访客日期分布图📅',
          x: 'center',
          textStyle: {
            color: '${color}'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          name: '日期',
          type: 'category',
          boundaryGap: false,
          nameTextStyle: {
            color: '${color}'
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            color: '${color}'
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '${color}'
            }
          },
          data: ${e}
        },
        yAxis: {
          name: '${metricsName}',
          type: 'value',
          nameTextStyle: {
            color: '${color}'
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            color: '${color}'
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '${color}'
            }
          }
        },
        series: [{
          name: '${metricsName}',
          type: 'line',
          smooth: true,
          lineStyle: {
              width: 0
          },
          showSymbol: false,
          itemStyle: {
            opacity: 1,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(128, 255, 165)'
            },
            {
              offset: 1,
              color: 'rgba(1, 191, 236)'
            }])
          },
          areaStyle: {
            opacity: 1,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(128, 255, 165)'
            }, {
              offset: 1,
              color: 'rgba(1, 191, 236)'
            }])
          },
          data: ${s},
          markLine: {
            data: [{
              name: '平均值',
              type: 'average',
              label: {
                color: '${color}'
              }
            }]
          }
        }]
      };
      trendsChart.setOption(trendsOption);
      window.addEventListener("resize", () => { 
        trendsChart.resize();
      });`,document.getElementById("trends-chart").after(n)}).catch(function(e){console.log(e)})}function sourcesChart(){let a=document.createElement("script");fetch(dataUrl+("&start_date="+start_date+"&end_date="+end_date+"&metrics="+metrics+"&method=source/all/a")).then(e=>e.json()).then(e=>{var t=e.result.items[0],r=e.result.items[1],o=[];for(let e=0;e<t.length;e++)o.push({name:t[e][0].name,value:r[e][0]});e=JSON.stringify(o);a.innerHTML=`
      var sourcesChart = echarts.init(document.getElementById('sources-chart'), 'light');
      var sourcesOption = {
        title: {
          text: '网站访客来源分布图🎨',
          x: 'center',
          textStyle: {
            color: '${color}'
          }
        },
        legend: {
          top: 'bottom',
          textStyle: {
            color: '${color}'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        series: [{
          name: '${metricsName}',
          type: 'pie',
          radius: [30, 80],
          center: ['50%', '50%'],
          roseType: 'area',
          label: {
            color: '${color}',
            formatter: "{b} : {c} ({d}%)"
          },
          data: ${e},
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(255, 255, 255, 0.5)'
            }
          }
        }]
      };
      sourcesChart.setOption(sourcesOption);
      window.addEventListener("resize", () => { 
        sourcesChart.resize();
      });`,document.getElementById("sources-chart").after(a)}).catch(function(e){console.log(e)})}function switchVisitChart(){var e="light"===document.documentElement.getAttribute("data-theme")?"#4c4948":"rgba(255,255,255,0.7)";if(document.getElementById("map-chart")&&mapOption)try{var t=mapOption;t.title.textStyle.color=e,t.visualMap.textStyle.color=e,mapChart.setOption(t)}catch(e){console.log(e)}if(document.getElementById("trends-chart")&&trendsOption)try{var r=trendsOption;r.title.textStyle.color=e,r.xAxis.nameTextStyle.color=e,r.yAxis.nameTextStyle.color=e,r.xAxis.axisLabel.color=e,r.yAxis.axisLabel.color=e,r.xAxis.axisLine.lineStyle.color=e,r.yAxis.axisLine.lineStyle.color=e,r.series[0].markLine.data[0].label.color=e,trendsChart.setOption(r)}catch(e){console.log(e)}if(document.getElementById("sources-chart")&&sourcesOption)try{var o=sourcesOption;o.title.textStyle.color=e,o.legend.textStyle.color=e,o.series[0].label.color=e,sourcesChart.setOption(o)}catch(e){console.log(e)}}document.getElementById("map-chart")&&mapChart(),document.getElementById("trends-chart")&&trendsChart(),document.getElementById("sources-chart")&&sourcesChart();try{document.addEventListener("click",function(){clearTimeout(censusTimer),censusTimer=setTimeout(switchVisitChart,100)})}catch(e){}