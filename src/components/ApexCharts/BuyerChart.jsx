import React from 'react';
import ReactApexChart from 'react-apexcharts';

const generateDayWiseTimeSeries = (baseval, count, range) => {
  const series = [];
  for (let i = 0; i < count; i++) {
    const x = baseval + i * 86400000; // Increment date by one day (86400000 ms)
    const y = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
    series.push({ x, y });
  }
  return series;
};

const BuyerChart = () => {
  const state = {
    series: [
      {
        name: 'South',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: 'North',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 20,
        }),
      },
      {
        name: 'Central',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 15,
        }),
      },
    ],
    options: {
      chart: {
        type: 'area',
        height: 350,
        stacked: true,
        events: {
          selection: function (chart, e) {
            console.log(new Date(e.xaxis.min));
          },
        },
      },
      colors: ['#008FFB', '#00E396', '#CED4DC'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth', // Corrected value
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.8,
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
      },
      xaxis: {
        type: 'datetime',
        labels: {
            style: {
              // colors: '#FFFFFF',
              fontSize: '12px'
            }
          }
      },
      yaxis: {
        labels: {
          style: {
            // colors: '#FFFFFF', 
            fontSize: '12px'
          }
        }
      },
    },
  };

  return (
    <div>
      <div id="chart" className=''>
        <ReactApexChart options={state.options} series={state.series} type="area" height={400} />
      </div>
    </div>
  );
};

export default BuyerChart;
