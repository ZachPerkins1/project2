import Home from "./frontend/src/components/Home";
import SignUp from "./frontend/src/components/SignUp";
import LogIn from "./frontend/src/components/LogIn";
import Vacations from "./frontend/src/components/Vacations";
import VacationForm from "./frontend/src/components/VacationForm";
import { submitVacation } from "./frontend/src/services/vacationform";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItineraryForm from "./frontend/src/components/ItineraryForm";
import Itinerary from "./frontend/src/components/Itinerary";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/vacations" element={<Vacations />} />
          <Route path="/create-vacation" element={<VacationForm submitVacation={submitVacation} />} />
          <Route path="/create-itinerary" element={<ItineraryForm/>}/>
          <Route path="/vacations/:id/" element={<Itinerary/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
