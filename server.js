// const express = require("express");
// const axios = require("axios");

// const app = express();
// const PORT = 3000;

// // MyZmanim API credentials
// const myZmanimAPI = {
//   email: "mickael@chabadpaloalto.com",
//   user: "0014145060",
//   key: "fa66eda38d891fbf7e4afa750e97166b14bb9bd8c506f920a8d9975eb5095ed6cf2c36c85a06c747",
// };

// // Route to fetch Zmanim
// app.get("/zmanim", async (req, res) => {
//   const { lat = 37.4419, lng = -122.143 } = req.query; // Default to Palo Alto coordinates
//   const apiUrl = "https://api.myzmanim.com/engine1.svc";

//   try {
//     const response = await axios.get(apiUrl, {
//       params: {
//         email: myZmanimAPI.email,
//         user: myZmanimAPI.user,
//         key: myZmanimAPI.key,
//         lat,
//         lng,
//         zmanim: true,
//       },
//     });

//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching Zmanim:", error.message);
//     res.status(500).json({ error: "Failed to fetch Zmanim" });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });



const express = require("express");
const cors = require("cors"); // Import CORS middleware
const axios = require("axios");

const app = express();
const PORT = 3000;

// Enable CORS for all origins
app.use(cors());

app.get("/zmanim", async (req, res) => {
    const { lat = 37.4419, lng = -122.143 } = req.query;
    const apiUrl = "https://api.myzmanim.com/engine1.svc";

    try {
        const response = await axios.get(apiUrl, {
            params: {
                email: "mickael@chabadpaloalto.com",
                user: "0014145060",
                key: "fa66eda38d891fbf7e4afa750e97166b14bb9bd8c506f920a8d9975eb5095ed6cf2c36c85a06c747",
                lat,
                lng,
                zmanim: true,
            },
        });

        res.json(response.data);
    } catch (error) {
        console.error("Error fetching Zmanim:", error.message);
        res.status(500).json({ error: "Failed to fetch Zmanim" });
    }
});

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));


const axios = require("axios");

const getZmanim = async () => {
  const apiUrl = "https://api.myzmanim.com/engine1.svc";
  const params = {
    email: "mickael@chabadpaloalto.com",
    user: "0014145060",
    key: "fa66eda38d891fbf7e4afa750e97166b14bb9bd8c506f920a8d9975eb5095ed6cf2c36c85a06c747",
    lat: 37.4419,
    lng: -122.143,
    zmanim: true,
  };

  try {
    const response = await axios.get(apiUrl, { params });
    console.log("Zmanim Data:", response.data);
  } catch (error) {
    console.error("Error fetching Zmanim:", error.message);
  }
};

getZmanim();
