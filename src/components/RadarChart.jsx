import {Radar} from 'react-chartjs-2';

const RadarChart = ({chartData}) => {
  return (
    <div>
        <Radar data={chartData} />
    </div>
  )
}

export default RadarChart