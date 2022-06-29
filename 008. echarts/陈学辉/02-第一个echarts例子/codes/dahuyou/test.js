import {barOpts, pieOpts} from "./options/index.js"
const chartBarIns = echarts.init(document.querySelector(".chart1"));
const chartPieIns = echarts.init(document.querySelector(".chart2"));

chartBarIns.setOption(barOpts);
chartPieIns.setOption(pieOpts);