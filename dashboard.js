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


//BAR CHART

const barChartOptions = {
    series: [
      {
        data: [10, 8, 6, 4, 2],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: '40%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera'],
    },
    yaxis: {
      title: {
        text: 'Count',
      },
    },
  };
  
  const barChart = new ApexCharts(
    document.querySelector('#bar-chart'),
    barChartOptions
  );
  barChart.render();


  //AREA CHART

  const areaChartOptions = {
    series: [
      {
        name: 'Purchase Orders',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'Sales Orders',
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
          text: 'Purchase Orders',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Sales Orders',
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
    series: [44, 55, 13, 43, 22],
    chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
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