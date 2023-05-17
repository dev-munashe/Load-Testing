import {  Pie } from 'react-chartjs-2';

const BubbleChart = ({chartData}) => {
  return (
    <Pie data={chartData} />
  )
}

export default BubbleChart