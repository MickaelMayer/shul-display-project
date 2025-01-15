// scripts/app.js
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour12: true });
    document.getElementById('time').textContent = timeString;
  }
  
  // Update every second
  setInterval(updateTime, 1000);
  updateTime();


  // async function fetchZmanim() {
  //   const url = "http://localhost:3000/zmanim?lat=37.4419&lng=-122.143";
  
  //   try {
  //     const response = await fetch(url);
  //     if (response.ok) {
  //       const data = await response.json();
  //       displayZmanim(data);
  //     } else {
  //       console.error("Error fetching Zmanim:", response.status);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }
  

  const fetchZmanim = async () => {
    const url = "http://localhost:3000/zmanim?lat=37.4419&lng=-122.143";
  
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayZmanim(data);
      } else {
        console.error("Error fetching Zmanim:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  const displayZmanim = (data) => {
    const zmanimContainer = document.getElementById("zmanim");
    zmanimContainer.innerHTML = `
      <h3>Zmanim for Today</h3>
      <ul>
        ${Object.entries(data).map(
          ([key, value]) => `<li>${key}: ${value}</li>`
        ).join("")}
      </ul>
    `;
  };
  
  fetchZmanim();













//   // Call fetchZmanim when the page loads
//   fetchZmanim();

//   const axios = require("axios");

// const getZmanim = async () => {
//   const apiUrl = "https://api.myzmanim.com/engine1.svc";
//   const params = {
//     email: "mickael@chabadpaloalto.com",
//     user: "0014145060",
//     key: "fa66eda38d891fbf7e4afa750e97166b14bb9bd8c506f920a8d9975eb5095ed6cf2c36c85a06c747",
//     lat: 37.4419,
//     lng: -122.143,
//     zmanim: true,
//   };

//   try {
//     const response = await axios.get(apiUrl, { params });
//     console.log("Zmanim Data:", response.data);
//   } catch (error) {
//     console.error("Error fetching Zmanim:", error.message);
//   }
// };

// getZmanim();