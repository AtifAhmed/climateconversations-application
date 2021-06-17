import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoCard from './InfoCard';

const App=() =>{
  return (
    <div className="App">
      <main>
      <InfoCard heading="Personal Info" isTabOpen={true}>
        <p>
          Hi, My name is Atif Ahmed Mirza.  
        </p>
        <p>
          I am currently working as a front end web developer for a company in UK with the aim to support charity sector by providing them a platform to post their jobs, so basically it’s a niche job board for candidates looking for jobs in charity sector and for recruiters to post jobs.
        </p>   
        <p>
          I have been working with the company for over 8 years now. At the moment I am working on application manager tool to help recruiter manage their jobs' application. This application is built in React(front end) and .net(back end). Some of the features of this application are:
        </p>
        <p>
          <ul>
            <li> Drag and drop the hiring stages for a specific job</li>
            <li> Email component to send emails and add email templates</li>
            <li> Use of Draft editor</li>
            <li> Candidate evaluation</li>
            <li> User management</li>
            <li> Calendar feature to book and view interviews</li>
            <li> Support for intercom chat</li>
            <li> Have worked on redux, saga, reactstrap, material-ui, draft-js, formik, yup, moment, axios, oidc-client, react-beautiful-dnd, react-big-calendar etc</li>
          </ul>
        </p>
        <p>
          Frequently use console, network and element tab of google chrome developer tools for development and debugging of react app along with React extension for chrome to view/debug redux state.
        </p>
        <p>
          As part of my current work, I frequently communicate with sales, marketing and other non technical members of the staff. These are the people who use the products and their input is vital in terms of development of features and fixing of bugs.
        </p>
        <p>
          I also have experience with Azure a cloud service from Microsoft. Azure is used for live deployment of the product, along with other features like running of schedule jobs, database hosting, document storage, api deployment and analysing run time errors.

        </p>
      </InfoCard>
      <InfoCard  heading="Reason of application" >
        <p>
          I have always been involved with charity work. I have:-
          <li> volunteered my self during the 2005 earthquake in Pakistan (Humanity First)</li>
          <li> have been part of the team to collect and delivered food and clothes to homeless and needy people </li>
          <li> have been part of the cleanliness drive where a group of people will clean any local area.</li>
          <li>managing finance where I was responsible for collecting the contributions from members and then submitting them in banks and send the reports to organiser</li>
          <li> during the pandemic, I have been involved in delivering groceries to needy people</li>

        </p>
        <p>
          For me, it’s important for me to take care of our environment. This is something we all should worked on not just for us but for our future generations. This includes recycling plastic, paper and wood, saving water and having a clean surrounding. I always try to teach my 6 year old son and 3 year old daughter to do the same, as this is the work which needs to be passed on to our kids and then to their kids. We will be held responsible by our generation for not taking care of the climate.
         </p>
        <p>With my wife medical conditions and with 2 kids, it’s been a bit difficult to go out and work as a volunteer. I am applying for this job, hoping, that I can take part in saving the climate by working from home on my laptop and be part of the team. With my experience of react and have been working in the industry from over 15 years , I am sure I can be helpful.</p>
      </InfoCard>
      <InfoCard heading="Contact Details">
        <p> Best way to contact is via email at afutahmed@hotmail.com. I am happy to contact through other channels like. call on skype, Microsoft team, zoom etc, further down the line. </p>
      </InfoCard>
      <InfoCard heading="API Call">
        <p> The full url called to get upcoming events is:-</p>

        <p>https://api.raisely.com/v3/events?startAtGTE=2021-06-17T16%3A33%3A07.908Z&sort=startAt&order=ASC&limit=20&campaign=f2a3bc70-96d8-11e9-8a7b-47401a90ec39</p>    
        <p> where looking at the url startAtGTE means get events which are coming at or after the given date, sort by start date of the event and order by upcoming events </p>
  </InfoCard>
      </main>
    </div>
  );
}

export default App;
