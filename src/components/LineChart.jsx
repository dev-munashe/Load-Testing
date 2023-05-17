import {Line} from 'react-chartjs-2';

const LineChart = (props) => {
  return (
        <Line data={props.chartData} />
  )
}

export default LineChart