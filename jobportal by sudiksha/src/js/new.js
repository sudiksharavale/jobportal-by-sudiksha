let jobs = [
    {
        "logo": "assets/icons/nyala.png",
        "company": "Nyala Motors",
        "location": "Addis Ababa, Ethiopia",
        "jobRole": "Fullstack Developer",
        "jobType": "Full-Time",
        "description": "good salary job"
    },
    {
        "logo": "assets/icons/lifan.png",
        "company": "Lifan Motors",
        "location": "Adigrat, Ethiopia",
        "jobRole": "Graphic Designer",
        "jobType": "Internship",
        "description": "good salary job"
    },
    {
        "logo": "assets/icons/century.png",
        "company": "Century Mall",
        "location": "Addis Ababa, Ethiopia",
        "jobRole": "IOS Developer",
        "jobType": "Student",
        "description": "good salary job"
    },
    {
        "logo": "assets/icons/cropped-Dashen-Bank-sc-Logo-Square.jpg",
        "company": "Dashen Bank",
        "location": "Hawassa, Ethiopia",
        "jobRole": "Android Developer",
        "jobType": "Part-Time",
        "description": "good salary job"
    },
    {
        "logo": "assets/icons/ride.png",
        "company": "Ride",
        "location": "Addis Ababa, Ethiopia",
        "jobRole": "IOS Developer",
        "jobType": "Full-Time",
        "description": "good salary job"
    },
    {
        "logo": "assets/icons/ethioTelecom.png",
        "company": "EthioTelecom",
        "location": "Hawassa, Ethiopia",
        "jobRole": "Graphic Designer",
        "jobType": "Part-Time",
        "description": "good salary job"
    },
    {
        "logo": "assets/icons/ethiopianAirport.png",
        "company": "Ethiopian Airlines",
        "location": "Addis Ababa, Ethiopia",
        "jobRole": "Android Developer",
        "jobType": "Freelance",
        "description": "good salary job"
    },
    {
        "logo": "assets/icons/cbe.png",
        "company": "Commercial Bank Of Ethiopia",
        "location": "Addis Ababa, Ethiopia",
        "jobRole": "Fullstack Developer",
        "jobType": "Full-Time",
        "description": "good salary job"
    },
    {
        "logo": "assets/icons/ebc.png",
        "company": "Ethiopian Broadcasting Corporation",
        "location": "Bahir Dar, Ethiopia",
        "jobRole": "IOS Developer",
        "jobType": "Part-Time",
        "description": "good salary job"
    },

];

const form = new FormData();
form.append('jobs',JSON.stringify(jobs))

fetch('/jobportal/src/php/jobs.php',{
    method: 'POST',
    Headers: {
        'Content-Type': 'application/json'
    },
    body: form
    })
    .then(res=>res.text())
    .then(data=> console.log(data))