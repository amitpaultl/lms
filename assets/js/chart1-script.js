// Chart 1 Start
var options = {
    chart: {
        height: "100%",
        type: "area"
    },
    dataLabels: {
        enabled: false
    },
    series: [
        {
            name: "Series 1",
            data: [45, 52, 38, 45, 19, 23, 2]
        }
    ],
    fill: {
        type: "gradient",
        colors: ['#5e3fd7'],
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
        }
    },
    markers: {
        size: 4,
        colors: ['#fff'],
        strokeColors: '#5e3fd7',
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
            size: undefined,
            sizeOffset: 3
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 3,
        dashArray: 0,
    },
    xaxis: {
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun"
        ],
        axisBorder: {
            show: false,
            color: '#E7E3EB',
            height: 1,
            width: '100%',
            offsetX: 0,
            offsetY: 0
        },
        axisTicks: {
            show: false,
            borderType: 'solid',
            color: '#E7E3EB',
            height: 6,
            offsetX: 0,
            offsetY: 0
        },
    },
    yaxis: {
        show: true,
        showAlways: true,
        showForNullSeries: true,
        opposite: false,
        reversed: false,
        logarithmic: false,
        // logBase: 10,
        // tickAmount: 6,
        // min: 0.0,
        // max: 100.0,
        type: 'numeric',
        categories: [
            '5','10', '15', '20', '25', '30', '35', '40'
        ],
        axisBorder: {
            show: false,
            color: '#E7E3EB',
            offsetX: 0,
            offsetY: 0
        },
        axisTicks: {
            show: false,
            borderType: 'solid',
            color: '#E7E3EB',
            width: 6,
            offsetX: 0,
            offsetY: 0
        },
    },
};
var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();