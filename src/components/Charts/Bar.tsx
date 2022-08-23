import { FC } from "react"
import { IData } from "./Charts"

import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import BarChart from "fusioncharts/fusioncharts.charts";
ReactFC.fcRoot(FusionCharts, BarChart);


interface IPieProps {
  data: IData[]
}

const Pie:FC<IPieProps> = (props) => {
  const {data} = props

  const chartConfigs = {
    type: "bar3d", 
    width: "100%", 
    height: "300", 
    dataFormat: "json", 
    dataSource: {
      chart: {
        caption: "Most Stars",
        captionFontColor: "#102a42",
        captionFontSize: 20,
        baseFontSize: 16,
        baseFontColor: "#3289da",
        smartLineColor: "#3289da",
        paletteColors:
          "#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA",
        use3DLighting: 1,
        decimals: 0,
        animation: 1,
        pieYScale: 70,
        showHoverEffect : 1,
      },
      data,
    },
  };
  return (
    <div className='bg-white rounded-md py-4 shadow-lg mb-6'>
      <ReactFC {...chartConfigs} />
    </div>
  )
}

export default Pie