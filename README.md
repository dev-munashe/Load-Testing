## Response Time Tracker ##
Response Time Tracker is a web application that allows you to measure the response time of an endpoint URL and capture various statistics such as average response time, maximum and minimum response times, and response sizes. This README file provides instructions on how to run and use the application.

# Prerequisites
Before running the application, make sure you have the following installed:

Node.js: Download and install Node.js

# Getting Started
Clone the repository to your local machine:
bash
Copy code
git clone https://github.com/dev-munashe/Load-Testing.git
Navigate to the project directory:
bash
Copy code
cd response-time-tracker
Install the dependencies:
bash
Copy code
npm install

# Running the Application
To run the application locally, follow these steps:

bash
Copy code
npm start
Open your web browser and visit http://localhost:3000 to access the application.

# Using the Application
Enter the endpoint URL: In the input field labeled "Endpoint URL," enter the URL of the endpoint you want to measure the response time for.

Enter the number of times: In the input field labeled "Number of Times," enter the number of times you want to hit the endpoint.

Click "Send Request": Click the "Send Request" button to initiate the requests to the endpoint.

View the results: Once the requests have been processed, you will see the following information displayed on the page:

Response time for each request: The response time for each request will be listed individually.
Average response time: The average response time for all requests.
Maximum and minimum response times: The maximum and minimum response times recorded.
Total response size: The total size of the response in bytes.
Charts: The application also provides visual representations of the data using charts. The charts include:

Line chart: Displays the response time for each request.
Bar chart: Displays the maximum and minimum response times.
Radar chart: Displays the average response time.
Bubble chart: Displays the response sizes for each request.

# Contributing
If you would like to contribute to this project, please follow these steps:

Fork the repository.

Create a new branch for your feature or bug fix:

bash
Copy code
git checkout -b feature/your-feature-name
Make the necessary changes and commit your code:
bash
Copy code
git commit -m "Add your commit message here"
Push your changes to your forked repository:
bash
Copy code
git push origin feature/your-feature-name
Create a pull request on the original repository.

# License
This project is licensed under the MIT License.

# Acknowledgements
This project was developed using React.js and various charting libraries.
Feel free to modify this README file to suit your specific project requirements. Provide clear instructions, including prerequisites, setup steps, usage guidelines, and any additional information that would help users understand and utilize your application effectively.

# Deployment 
This project is also deployed on vercel.
Just open this url: https://load-testing-app.vercel.app/