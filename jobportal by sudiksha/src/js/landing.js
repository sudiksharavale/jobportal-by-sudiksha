const navbar = document.querySelector(".nav-bar");
const sectionOne = document.querySelector(".header-container");
const links = document.querySelector(".links")
const sectionOneOptions = {
    roorMargin: "200px 0px 0px 0px"
};

// Intersection observer function to change color of the navigtion bar up on scroll
const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
    entries.forEach(entry => {
       if(!entry.isIntersecting){
           navbar.classList.add("nav-bar-on-white")
           links.classList.add("links-on-white");
       } else {
            navbar.classList.remove("nav-bar-on-white");
           links.classList.remove("links-on-white");

       }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// List of available jobs
let jobs = [
    {
        "logo": "assets/icons/nyala.png",
        "company": "Nyala Motors",
        "location": "Addis Ababa, Ethiopia",
        "jobRole": "Fullstack Developer",
        "jobType": "Full-Time",
        "description": "good salary job",
        "user": "admin",
    },
    {
        "logo": "assets/icons/lifan.png",
        "company": "Lifan Motors",
        "location": "Adigrat, Ethiopia",
        "jobRole": "Graphic Designer",
        "jobType": "Internship",
        "description": "good salary job",
        "user": "admin",
    },
    {
        "logo": "assets/icons/century.png",
        "company": "Century Mall",
        "location": "Addis Ababa, Ethiopia",
        "jobRole": "IOS Developer",
        "jobType": "Student",
        "description": "good salary job",
        "user": "admin",
    },
    {
        "logo": "assets/icons/cropped-Dashen-Bank-sc-Logo-Square.jpg",
        "company": "Dashen Bank",
        "location": "Hawassa, Ethiopia",
        "jobRole": "Android Developer",
        "jobType": "Part-Time",
        "description": "good salary job",
        "user": "admin",
    },
    {
        "logo": "assets/icons/ride.png",
        "company": "Ride",
        "location": "Addis Ababa, Ethiopia",
        "jobRole": "IOS Developer",
        "jobType": "Full-Time",
        "description": "good salary job",
        "user": "admin",
    },
    {
        "logo": "assets/icons/ethioTelecom.png",
        "company": "EthioTelecom",
        "location": "Hawassa, Ethiopia",
        "jobRole": "Graphic Designer",
        "jobType": "Part-Time",
        "description": "good salary job",
        "user": "admin",
    },
    {
        "logo": "assets/icons/ethiopianAirport.png",
        "company": "Ethiopian Airlines",
        "location": "Addis Ababa, Ethiopia",
        "jobRole": "Android Developer",
        "jobType": "Freelance",
        "description": "good salary job",
        "user": "admin",
    },
    {
        "logo": "assets/icons/cbe.png",
        "company": "Commercial Bank Of Ethiopia",
        "location": "Addis Ababa, Ethiopia",
        "jobRole": "Fullstack Developer",
        "jobType": "Full-Time",
        "description": "good salary job",
        "user": "admin",
    },
    {
        "logo": "assets/icons/ebc.png",
        "company": "Ethiopian Broadcasting Corporation",
        "location": "Bahir Dar, Ethiopia",
        "jobRole": "IOS Developer",
        "jobType": "Part-Time",
        "description": "good salary job",
        "user": "admin",
    },

];

const form = new FormData();
form.append('jobs',JSON.stringify(jobs))

fetch('/jobportal/src/php/jobIn.php',{
    method: 'POST',
    Headers: {
        'Content-Type': 'application/json'
    },
    body: form
    })
    .then(res=>res.text())
    .then(data=> data)



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-bar-links");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".links").forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))