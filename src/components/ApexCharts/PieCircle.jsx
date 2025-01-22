import React from "react";
import ReactApexChart from "react-apexcharts";

const PieCircle = () => {
  const [state, setState] = React.useState({
    series: [25, 15, 44, 55, 41, 17],
    options: {
      chart: {
        width: "100%",
        height: "100%",
        type: "pie",
      },
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      theme: {
        monochrome: {
          enabled: true,
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            offset: -5,
          },
        },
      },
      grid: {
        padding: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
      dataLabels: {
        formatter(val, opts) {
          const name = opts.w.globals.labels[opts.seriesIndex];
          return [name, val.toFixed(1) + "%"];
        },
      },
      legend: {
        show: false,
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="pie"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default PieCircle;
