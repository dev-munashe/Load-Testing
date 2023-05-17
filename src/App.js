import { useState } from 'react';
import Header from './components/Header';
import Response from './components/Response';

function App() {

  const [url, setUrl] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [number, setNumber] = useState(0);
  const [responses, setResponse] = useState([]);
  const [averageResponseTime, setAverageResponseTime] = useState(0);
  const [maxValue, setMaxValue] = useState("");
  const [minValue, setMinValue] = useState("");
  const [responseSizes, setResponseSizes] = useState([]);
  const [totalBytes, setTotalBytes] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {

    e.preventDefault(); 
  
    //gaudy clause
    if (!validateUrl(url)) {
      setErrorMessage('Please enter a valid URL');
      return;
    }

    if(number <= 0) {
      setErrorMessage("Please enter a valid number of times");
      return;
    }
  
    try {
      const responseTimes = [];
      const responseSizes = [];

      for(let i=0; i < number; i++) {
        const startTime = performance.now()

      //Sending request to the inputted endpoint url.
        const res = await fetch(url);

      if (!res.ok) {
        throw new Error('Request failed');
      }

      // Implementing a mechanism to measure the response time for each request.
      const endTime = performance.now();
      const responseTime = endTime - startTime;
      responseTimes.push(responseTime);

      //Capturing the size of the response in bytes for each request.
      const responseBody = await res.text();
      const responseSizeInBytes = new Blob([responseBody]).size;
      responseSizes.push(responseSizeInBytes);

      } 
      
      //Calculating the average response time for all requests.
      const totalResponseTime = responseTimes.reduce((a, b) => a + b, 0);
    const avgResponseTime = totalResponseTime / responseTimes.length || 0;

    //Calculating the maximum and minimum response times.
    let min = Math.min.apply(null, responseTimes);
    let max = Math.max.apply(null, responseTimes);

    // Calculating the total bytes sent for all requests.
    var totalResponseBytes = responseSizes.reduce((a, b) => a + b, 0);
  
      setResponse(responseTimes);
      setMaxValue(max);
      setMinValue(min);
      setAverageResponseTime(avgResponseTime);
      setTotalBytes(totalResponseBytes);
      setResponseSizes(responseSizes);
      setIsSubmitted(true);
      setErrorMessage('');
    } catch (error) {
      console.log(error);
      setErrorMessage('An error occurred while processing the request');
    }
  };
  
  const validateUrl = (value) => {
    const urlPattern = /^(https?:\/\/)?[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(value);
  };
  
  return (
    <div className="container">
      <Header />
      <form onSubmit={handleSubmit} className='row mt-5 mb-5 mx-5' action="post" style={{textAlign:'center'}}>
            <div className='col-md-8'>
            <label className="form-label">Endpoint Url</label>
            <input onChange={(e) => {setUrl(e.target.value)}} name="url" value={url} type="text" className="form-control" placeholder='enter endpoint URL here'/>
            </div>
           <div className='col-md-4'>
           <label className="form-label">Number of Times</label>
           <input onChange={(e) => {setNumber(e.target.value)}} name="number" value={number} type="number" className="form-control" placeholder='Number Of Times'/>
           </div>
           <div className='col-12 mt-3'>
           <button className="btn btn-outline-danger" type='submit'>Send Request</button>              
           </div>
           <div>
           {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
           </div>
      </form>
        {isSubmitted && (<Response 
            averageResponseTime={averageResponseTime}
            maxValue={maxValue}
            minValue={minValue}
            totalBytes={totalBytes}
            responses={responses}
            responsesSize={responseSizes}
            />)}
    </div>
  );
}

export default App;
