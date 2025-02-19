import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexCharts = ({theme}) => {
  const [state, setState] = React.useState({
    series: [{
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: [
          "2018-09-19T00:00:00.000Z", 
          "2018-09-19T01:30:00.000Z", 
          "2018-09-19T02:30:00.000Z", 
          "2018-09-19T03:30:00.000Z", 
          "2018-09-19T04:30:00.000Z", 
          "2018-09-19T05:30:00.000Z", 
          "2018-09-19T06:30:00.000Z"
        ],
        labels: {
          style: {
            colors: '#FFFFFF', // Set x-axis label color to white
            fontSize: '12px'
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: '#FFFFFF', // Set y-axis label color to white
            fontSize: '12px'
          }
        }
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    }
  });

  return (
    <div>
      <div id="chart"  className={`md:p-10 p-4 rounded-lg shadow-2xl${
      theme === "light"
        ? "backdrop-blur-xl bg-gradient-to-r from-[#a5a5a5] to-[#f3f3f3] "
        : "dark:bg-gradient-to-r from-[#020710] to-[#1b2028] dark:text-white"
    } z-10`}>
        <h2 className=' font-bold text-center text-2xl pb-4'>Worker Chart</h2>
        <ReactApexChart 
          options={state.options} 
          series={state.series} 
          type="area" 
          height={350} 
    
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexCharts;
