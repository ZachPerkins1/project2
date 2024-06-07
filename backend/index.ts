const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.NODE_ENV === "test" ? 3001 : 3000;
const itineraryQueries = require("./src/itineraryQueries.js");
require("dotenv").config();
const vacationQueries = require("./src/vacationQueries.js");

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/api/vacations", vacationQueries.getVacations);
app.post("/api/vacations/", vacationQueries.createVacation);

app.get("/api/vacation/itinerary/:id", itineraryQueries.getItinerary);
app.post("/api/vacation/itinerary/", itineraryQueries.createItineraryItem);
app.put(
  "/api/vacation/itinerary/item/:id",
  itineraryQueries.updateItineraryItem
);
app.delete(
  "/api/vacation/itinerary/item/:id",
  itineraryQueries.deleteItineraryItem
);

app.use("/api/auth/users", require("./src/controller/user.js"));

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`App running on port http://localhost:${port}`);
    console.log(itineraryQueries);
    console.log(vacationQueries);
  });
}

module.exports = { app };
