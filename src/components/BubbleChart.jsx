import { Bubble } from 'react-chartjs-2';

const BubbleChart = ({chartData}) => {
  return (
    <Bubble data={chartData} />
  )
}

export default BubbleChart