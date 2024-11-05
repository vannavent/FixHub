//sidebar toggle

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if (!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive")
        sidebarOpen = false;
    }
}


//CIRCULAR GAUGE CHART
var options = {
  chart: {
    height: 300,
    type: "radialBar",
  },

  series: [67],
  colors: ["#20E647"],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "70%",
        background: "#293450"
      },
      track: {
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          blur: 4,
          opacity: 0.15
        }
      },
      dataLabels: {
        name: {
          offsetY: -10,
          color: "#fff",
          fontSize: "13px"
        },
        value: {
          color: "#fff",
          fontSize: "30px",
          show: true
        }
      }
    }
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      gradientToColors: ["#87D4F9"],
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: "round"
  },
  labels: ["Progress"]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

  //AREA CHART

  const areaChartOptions = {
    series: [
      {
        name: '2023',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: '2024',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    colors: ['#4f35a1', '#246dec'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    markers: {
      size: 0,
    },
    yaxis: [
      {
        title: {
          text: '',
        },
      },
      {
        opposite: true,
        title: {
          text: '',
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
    },
  };
  
  const areaChart = new ApexCharts(
    document.querySelector('#area-chart'),
    areaChartOptions
  );
  areaChart.render();



//PIE CHART

  var pieChartOptions = {
    series: [44, 30, 20],
    chart: {
    type: 'pie',
  },
  labels: ['Preventiva', 'Preditiva', 'Corretiva'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 350,
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var piechart = new ApexCharts(document.querySelector("#pie-chart"), pieChartOptions);
  piechart.render();

//LINE CHART

var lineChartOptions = {
    series: [{
      name: "Eletricidade",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
  };

  var linechart = new ApexCharts(document.querySelector("#line-chart"), lineChartOptions);
  linechart.render();
