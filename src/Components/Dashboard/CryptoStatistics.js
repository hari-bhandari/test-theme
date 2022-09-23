import React from "react";
import ReactEcharts from "echarts-for-react";


var upColor = '#ec0000';
var upBorderColor = '#8A0000';
var downColor = '#00da3c';
var downBorderColor = '#008F28';
var data0 = splitData([

    ['1', 2364.54,2359.51,2330.86,2369.65],
    ['4', 2332.08,2273.4,2259.25,2333.54],
    ['5', 2274.81,2326.31,2270.1,2328.14],
    ['6', 2333.61,2347.18,2321.6,2351.44],
    ['7', 2340.44,2324.29,2304.27,2352.02],
    ['8', 2326.42,2318.61,2314.59,2333.67],
    ['11', 2314.68,2310.59,2296.58,2320.96],
    ['12', 2309.16,2286.6,2264.83,2333.29],
    ['13', 2282.17,2263.97,2253.25,2286.33],
    ['14', 2255.77,2270.28,2253.31,2276.22],
    ['15', 2269.31,2278.4,2250,2312.08],
    ['18', 2267.29,2240.02,2239.21,2276.05],
    ['19', 2244.26,2257.43,2232.02,2261.31],
    ['20', 2257.74,2317.37,2257.42,2317.86],
    ['21', 2318.21,2324.24,2311.6,2330.81],
    ['22', 2321.4,2328.28,2314.97,2332],
    ['25', 2334.74,2326.72,2319.91,2344.89],
    ['26', 2318.58,2297.67,2281.12,2319.99],
    ['27', 2299.38,2301.26,2289,2323.48],
    ['28', 2273.55,2236.3,2232.91,2273.55],
    ['29', 2238.49,2236.62,2228.81,2246.87],
    ['30', 2229.46,2234.4,2227.31,2243.95],
    ['2', 2234.9,2227.74,2220.44,2253.42],
    ['3', 2232.69,2225.29,2217.25,2241.34],
    ['8', 2196.24,2211.59,2180.67,2212.59],
    ['9', 2215.47,2225.77,2215.47,2234.73],
    ['10', 2224.93,2226.13,2212.56,2233.04],
    ['11', 2236.98,2219.55,2217.26,2242.48],
    ['12', 2218.09,2206.78,2204.44,2226.26],
    ['15', 2199.91,2181.94,2177.39,2204.99],
    ['16', 2169.63,2194.85,2165.78,2196.43],
    ['17', 2195.03,2193.8,2178.47,2197.51],
    ['18', 2181.82,2197.6,2175.44,2206.03],
    ['19', 2201.12,2244.64,2200.58,2250.11],
    ['22', 2236.4,2242.17,2232.26,2245.12],
    ['23', 2242.62,2184.54,2182.81,2242.62],
    ['24', 2187.35,2218.32,2184.11,2226.12],
    ['25', 2213.19,2199.31,2191.85,2224.63],
    ['26', 2203.89,2177.91,2173.86,2210.58],
    ['2', 2170.78,2174.12,2161.14,2179.65],
    ['3', 2179.05,2205.5,2179.05,2222.81],
    ['6', 2212.5,2231.17,2212.5,2236.07],
    ['7', 2227.86,2235.57,2219.44,2240.26],
    ['8', 2242.39,2246.3,2235.42,2255.21],
    ['9', 2246.96,2232.97,2221.38,2247.86],
    ['10', 2228.82,2246.83,2225.81,2247.67],
    ['13', 2247.68,2241.92,2231.36,2250.85],
    ['14', 2238.9,2217.01,2205.87,2239.93],
    ['15', 2217.09,2224.8,2213.58,2225.19],
    ['16', 2221.34,2251.81,2210.77,2252.87],
    ['17', 2249.81,2282.87,2248.41,2288.09],    
    ['20', 2286.33,2299.99,2281.9,2309.39],
    ['21', 2297.11,2305.11,2290.12,2305.3],
    ['22', 2303.75,2302.4,2292.43,2314.18],
    ['23', 2293.81,2275.67,2274.1,2304.95],
    ['24', 2281.45,2288.53,2270.25,2292.59],
    ['27', 2286.66,2293.08,2283.94,2301.7],
    ['28', 2293.4,2321.32,2281.47,2322.1],
    ['29', 2323.54,2324.02,2321.17,2334.33],
    ['30', 2316.25,2317.75,2310.49,2325.72],
    ['31', 2320.74,2300.59,2299.37,2325.53],
    ['3', 2300.21,2299.25,2294.11,2313.43],
    ['4', 2297.1,2272.42,2264.76,2297.1],
    ['5', 2270.71,2270.93,2260.87,2276.86],
    ['6', 2264.43,2242.11,2240.07,2266.69],
    ['7', 2242.26,2210.9,2205.07,2250.63],
    ['13', 2190.1,2148.35,2126.22,2190.1]
]);

function splitData(rawData) {
    var categoryData = [];
    var values = []
    for (var i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i].splice(0, 1)[0]);
        values.push(rawData[i])
    }
    return {
        categoryData: categoryData,
        values: values
    };
}

class CryptoStatistics extends React.Component {
  render() {
      const { currency,value,icon } = this.props;
    return (
        <div className="col-lg-12 col-md-12">
                    <div className="card user_statistics">
                        <div className="header">
                            <h2>Crypto Statistics <small>9% High then last week</small></h2>
                            <ul className="header-dropdown">
                                <li><a href="#" title=""><i className="fa fa-envelope"></i></a></li>
                                <li><a href="#" title=""><i className="fa fa-download"></i></a></li>
                                <li className="dropdown">
                                    <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another Action</a></li>
                                        <li><a href="javascript:void(0);">Something else</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="body">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <ul className="nav nav-tabs-new2">
                                        <li className="nav-item"><a className="nav-link show active" data-toggle="tab" href="#Bitcoin-new2">Bitcoin</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Neo-new2">Neo</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Ethereum-new2">Ethereum</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <select className="custom-select custom-select-sm">
                                        <option>Open this select menu</option>
                                        <option value="1">Today’s</option>
                                        <option value="2">This Week</option>
                                        <option selected="" value="3">Last Week</option>
                                        <option value="4">This Month</option>
                                        <option value="5">Last Month</option>
                                        <option value="6">Last 12 Month</option>
                                        <option value="7">Custom Dates</option>
                                    </select>
                                </div>
                            </div>
                            <ReactEcharts
                                option={{
                                    title: {
                                        text: '',
                                        left: 0
                                    },
                                    tooltip: {
                                        trigger: 'axis',
                                        axisPointer: {
                                            type: 'cross'
                                        }
                                    },
                                    legend: {
                                        show:false
                                        //data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
                                    },
                                    grid: {
                                        left: '5%',
                                        right: '5%',
                                        bottom: '15%'
                                    },
                                    xAxis: {
                                        type: 'category',
                                        data: data0.categoryData,
                                        scale: false,
                                        boundaryGap: false,
                                        axisLine: {onZero: false},
                                        splitLine: {show: false},
                                        splitNumber: 20,
                                        min: 'dataMin',
                                        max: 'dataMax'
                                    },
                                    yAxis: {
                                        scale: true,
                                        splitArea: {
                                            show: false
                                        }
                                    },
                                    dataZoom: [
                                        {
                                            type: 'inside',
                                            start: 50,
                                            end: 100
                                        }
                                    ],
                                    series: [
                                        {
                                            name: '日K',
                                            type: 'candlestick',
                                            data: data0.values,
                                            itemStyle: {
                                                color: upColor,
                                                color0: downColor,
                                                borderColor: upBorderColor,
                                                borderColor0: downBorderColor
                                            },
                                            // markPoint: {
                                            //     label: {
                                            //         show:false,
                                            //         normal: {
                                            //             formatter: function (param) {
                                            //                 return param != null ? Math.round(param.value) : '';
                                            //             }
                                            //         }
                                            //     },
                                            //     data: [
                                            //         {
                                            //             name: '',
                                            //             coord: ['31', 2300],
                                            //             value: 2300,
                                            //             itemStyle: {
                                            //                 color: 'rgb(41,60,85)'
                                            //             }
                                            //         },
                                            //         {
                                            //             name: 'highest value',
                                            //             type: 'max',
                                            //             valueDim: 'highest'
                                            //         },
                                            //         {
                                            //             name: 'lowest value',
                                            //             type: 'min',
                                            //             valueDim: 'lowest'
                                            //         },
                                            //         {
                                            //             name: 'average value on close',
                                            //             type: 'average',
                                            //             valueDim: 'close'
                                            //         }
                                            //     ],
                                            //     tooltip: {
                                            //         // formatter: function (param) {
                                            //         //     return param.name + '<br>' + (param.data.coord || '');
                                            //         // }
                                            //     }
                                            // },
                                           
                                        },
                                       
                                
                                    ]
                                }}
                                    opts={{renderer: 'svg'}} // use svg to render the chart.
                                    
                                    />
                        
                        </div>
                    </div>
        </div>
    );
  }
}
export default CryptoStatistics
