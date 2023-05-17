import BarChart from './BarChart';
import LineChart from './LineChart';
import BubbleChart from './BubbleChart';
import RadarChart from './RadarChart';

const Response = ({averageResponseTime, maxValue, minValue , totalBytes, responses, responsesSize}) => {

var index = responses.map((response, index) => (index + 1));

//Maximum and minimum response time- BarChart
  const maxAndMinValue = {
    //x-axis
    labels: ["Minimum Value", "Maximum Value"],
    //y-axis
    datasets: [{
      label: 'Response Time /ms',
      data: [minValue, maxValue],
      backgroundColor: ["#F6C6EA", "#B6EAFA"],
      borderColor: 'black',
      borderWidth: 1
    }]
  };
 
  //Response Time Vs Index-LineChart
  const responseTime = {
    labels: index,
    datasets: [{
      label: "Response Time /ms",
      data: responses.map((response, index) => response),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  //Response Sizes for each request,
  const responseSize = {
    labels: responsesSize.map((size, index) => (index+1)),
    datasets: [{
      label: "Response Sizes /bytes",
      data: responsesSize.map((size) => size),
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(75, 192, 192)', "#F6C6EA"]
    }]
  };

  //Average response time for all requests.
  const averageTime = {
    labels: ['Average Response Time'],
    datasets: [{
    label: 'Average Value',
    data: [averageResponseTime],
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)',
    radius: 13
    }]
  };

  return (
    <div className='container'>
            <div className='row mt-5 mb-5'>
              <div className='col-md-6'>
              <h3 className='text-center'>Response time for each request.</h3>
               <LineChart chartData={responseTime} />
              </div>
              <div className='col-md-6'>
      <h3 className='text-center'>Maximum and minimum response time.</h3>
              <BarChart chartData={maxAndMinValue} />
              </div>
            </div>
            <div className='row mt-5 mb-5'>
            <div className='col-md-6'>
                <h3 className='text-center'>Response sizes for each request.</h3>
                <BubbleChart chartData={responseSize} />
              </div>
              <div className='col-md-6'>
              <h3 className='text-center'>Average response time for all requests.</h3>
              <RadarChart chartData={averageTime} />
              </div>
            </div>
    </div>
  )
}

export default Response