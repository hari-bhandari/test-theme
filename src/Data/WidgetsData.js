export const StatisticsItemCardData=[
    {
        header:"New items",
        value:"521",
        back:"bg-info"
    },
    {
        header:"Uploads",
        value:"902",
        back:"bg-secondary"
    },
    {
        header:"Feeds",
        value:"1050",
        back:"bg-warning"
    },
    {
        header:"Comments",
        value:"318",
        back:"bg-dark"
    },
]

export const sparkleCardData =[
    {
      heading:'EARNINGS',
      height:50,
    money:'$22,500',
    perText:'19% compared to last week',
    sparklineData:{
        type: 'line',
        data:[1,4,1,3,7,1],
        areaStyle:{
          color: "#f79647",
        },
        itemStyle: {
            color: "#f79647",
        },
        symbolSize: 1,
      }
    },
    {heading:'SALES',
    height:50,
    money:'$500',
    perText:'19% compared to last week',
    sparklineData:{
        type: 'line',
        data:[1,4,2,3,6,2],
        areaStyle:{
          color: "#604a7b",
        },
        itemStyle: {
            color: "#604a7b",
        },
        symbolSize: 1,
      }

    },
    {heading:'VISITS',
    height:50,
    money:'$21,215',
    perText:'19% compared to last week',
    sparklineData:{
        type: 'line',
        data:[1,4,2,3,1,5],
        areaStyle:{
          color: "#4aacc5",
        },
        itemStyle: {
            color: "#4aacc5",
        },
        symbolSize: 1,
      }
    },
    {heading:'LIKES',
    height:50,
    money:'$421,215',
    perText:'19% compared to last week',
    sparklineData:{
        type: 'line',
        data:[1,3,5,1,4,2],
        areaStyle:{
          color: "#4f81bc",
        },
        itemStyle: {
            color: "#4f81bc",
        },
        symbolSize: 1,
      }
    },
  ]

  export const MultiChartCardData =[
      {
        heading:'Likes',
        value:'22,500',
        icon:'fa fa-thumbs-o-up m-r-10',
        paddingRight:0,
        marginBottom:-1,
        sparklineData:{
            type: 'line',
            data:[0,0,0,0,2,3,1,5,4,7,8,2,3,1,4,6,5,4,4,2,3,1,5,4,7,8,2,3,1,4,6,5,4,4,0,0,0,0],
            areaStyle:{
              color: "#62a6ef",
              
            },
            itemStyle: {
                color: "#62a6ef",
                
            },
            symbolSize: 1,
          }
      },
      {
        heading:'Comments',
        value:'500',
        icon:"fa fa-comments-o m-r-10",
        paddingRight:0,
        marginBottom:0,
        sparklineData:{
            type: 'bar',
            data:[2,3,1,5,4,7,8,2,3,1,4,6,5,4,4,2,3,1,5,4,7,8,2,3],
            barWidth:5,
            areaStyle:{
              color: "#e66d7e",
              
            },
            itemStyle: {
                color: "#e66d7e",
                
            },
            symbolSize: 1,
          }
      },
      {
        heading:'Share',
        value:'2,215',
        icon:"fa fa-share-alt m-r-10",
        paddingRight:50,
        marginBottom:0,
        sparklineData:{
            type: 'line',
            data:[12,4,6,15,5,5,5,6,8,9,7,2,11,5,4,8,17,10,18,0,2,0,1,8,3,8,9,6],
            barWidth:5,
            
            itemStyle: {
                color: "#23c596",
                
            },
            symbolSize: 1,
          }
      },
      {
        heading:'View',
        value:'421,215',
        icon:"fa fa-eye m-r-10",
        paddingRight:0,
        marginBottom:0,
        sparklineData:{
            type: 'bar',
            data:[11,18,0,2,0,1,8,3,8,9,6,3,2,5,1,4,2,20,15,6,8,10,12,9,8,3,5,12,4,17,5,6],
            barWidth:5,
            
            itemStyle: {
                color: "#f7cf5c",
                
            },
            symbolSize: 1,
          }
      }
  ]

export const ProgressCardData =[
    {
        header:'Population',
        value:'4,254',
        seriesData:{
            type: 'bar',
            data:[6,4,8,6,8,10,5,7,9,5],
            barWidth:4,
            
            itemStyle: {
                color: "#f7cf5c",
                
            },
            symbolSize: 1,
          }

    },
    {
        header:'Usage',
        value:'98%',
        seriesData:[
            {
                type: 'pie',
                radius: '95%',
                center: ['50%', '60%'],
                label:{
                    show:false,
                    fontSize: '10',
                    position: 'inner',
                    formatter: '{d}%',
                    color:'#fff  '
                }, 
                data: [
                    {value: 25, name: '8'},
                    {value: 8, name: '8'},
                    {value: 30, name: '6'},
                    {value: 35, name: '4'}
                ],
            }
        ]

    },
    {
        header:'Page Views',
        value:'1,195',
        seriesData:{
            type: 'bar',
            data:[4,6,-3,-1,2,10,5,7,9,5],
            barWidth:4,
            
            itemStyle: {
                color: "#f7cf5c",
                
            },
            symbolSize: 1,
          }

    },
    {
        header:'Growth',
        value:'$1,243',
        seriesData:{
            type: 'line',
            data:[6,4,8,6,8,10,5,7,9,5],
            barWidth:4,
            
            itemStyle: {
                color: "#f7cf5c",
                
            },
            symbolSize: 1,
          }

    }
]

export const AverageCardData =[
    {
        header:'47% Average',
        value:'457 512',
        seriesData:{
            type: 'bar',
            data:[1,1,2,2,3,3,4,4,5,5,6,6,5,5,4,4,3,3,2,2,1,1],
            barWidth:3,
            
            itemStyle: {
                color: "#00ced1",
                
            },
            symbolSize: 1,
          }

    },
    {
        header:'13% Average',
        value:'236 512',
        seriesData:{
            type: 'bar',
            data:[1,1,2,2,3,3,4,4,5,5,6,6,5,5,4,4,3,3,2,2,1,1],
            barWidth:3,
            
            itemStyle: {
                color: "#e4d354",
                
            },
            symbolSize: 1,
          }

    },
    {
        header:'47% Average',
        value:'236 512',
        seriesData:{
            type: 'bar',
            data:[1,2,3,4,5,4,3,2,1,2,3,4,5,6,7,8,7,6,5],
            barWidth:3,
            
            itemStyle: {
                color: "#7cb5ec",
                
            },
            symbolSize: 1,
          }

    },
    {
        header:'47% Average',
        value:'236 512',
        seriesData:{
            type: 'bar',
            data:[8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,7,6,5,4],
            barWidth:3,
            
            itemStyle: {
                color: "#f15c80",
                
            },
            symbolSize: 1,
          }

    }
]

export const PropertiesDetailsCardData =[
    {
        header:'Properties',
        value:'53,251',
        icon:'fa fa-building'
    },
    {
        header:'Growth',
        value:'62%',
        icon:'fa fa-area-chart'
    },
    {
        header:'Total Sales',
        value:'$3205',
        icon:'fa fa-shopping-cart'
    },
    {
        header:'Rented',
        value:'3,217',
        icon:'fa fa-tag'
    }
]

export const StatisticsPieCardData =[
    {
        header:'Satisfaction Rate',
        per:47,
        graphValue:66,
        graphColor:'rgb(38, 218, 210)'
    },
    {
        header:'Project Panding',
        per:13,
        graphValue:26,
        graphColor:'rgb(123, 105, 236)'
    },
    {
        header:'Productivity Goal',
        per:75,
        graphValue:76,
        graphColor:'rgb(249, 189, 83)'
    },
    {
        header:'Total Revenue',
        per:54,
        graphValue:88,
        graphColor:'rgb(0, 173, 239)'
    }
]

export const StatisticsSparkleCardData = [
    {
        
            heading:'Orders Received',
          money:'501',
          sparklineData:{
              type: 'line',
              data:[1,4,2,6,5,2,3,5],
              areaStyle:{
                color: "rgb(123, 105, 236)",
              },
              itemStyle: {
                  color: "rgb(123, 105, 236)",
              },
              symbolSize: 1,
            }
          
    },
    {
        
        heading:'Total Sales',
      money:'2501',
      sparklineData:{
          type: 'line',
          data:[2,9,5,5,8,5,4],
          areaStyle:{
            color: "rgb(0, 173, 239)",
          },
          itemStyle: {
              color: "rgb(0, 173, 239)",
          },
          symbolSize: 1,
        }
      
    },
    {
        
        heading:'Total Profit',
      money:'6051',
      sparklineData:{
          type: 'line',
          data:[1,5,3,6,6,3,6,7],
          areaStyle:{
            color: "#f15c80",
          },
          itemStyle: {
              color: "#f15c80",
          },
          symbolSize: 1,
        }
      
    }
]

export const StatisticsServerCardData = [
    {
        header:'Server',
        value:'62%',
        per:'6% higher than last month',
        outOff:'1tb',
        barValue:62,
        barType:"danger"
    },
    {
        header:'Traffic',
        value:'78',
        per:'4% higher than last month',
        outOff:'1tb',
        barValue:78,
        barType:"success"
    },
    {
        header:'Email',
        value:'31',
        per:'Total Registered email',
        outOff:'100',
        barValue:31,
        barType:"warning"
    },
    {
        header:'Domians',
        value:'2',
        per:'Total Registered Domain',
        outOff:'10',
        barValue:20,
        barType:""
    }
]

export const SocialIconCardData =[
    {
        icon:"fa fa-facebook",
        header:"Like",
        value:"123",
        class:"facebook-widget"
    },
    {
        icon:"fa fa-instagram",
        header:"Followers",
        value:"231",
        class:"instagram-widget"
    }, 
    {
        icon:"fa fa-twitter",
        header:"Followers",
        value:"31",
        class:"twitter-widget"
    },  
    {
        icon:"fa fa-google",
        header:"Like",
        value:"254",
        class:"google-widget"
    },
    {
        icon:"fa fa-linkedin",
        header:"Followers",
        value:"2510",
        class:"linkedin-widget"
    },
    {
        icon:"fa fa-behance",
        header:"Project",
        value:"121",
        class:"behance-widget"
    },
       
]