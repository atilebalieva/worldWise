import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout/AppLayout";
import Login from "./pages/Login/Login";
import CityList from "./components/City/CityList";
import CountryList from "./components/Country/CountryList";
import City from "./components/City/City";

const BASE_URL = "http://localhost:9000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/cities`);
        const data = await response.json();
        console.log(data);
        setCities(data);
      } catch (error) {
        alert(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="app" element={<AppLayout />}>
            <Route path="cities" element={<CityList isLoading={isLoading} cities={cities} />} />
            <Route path="cities/:id" element={<City isLoading={isLoading} cities={cities} />} />
            <Route path="countries" element={<CountryList isLoading={isLoading} cities={cities} />} />
            <Route path="form" element={<p>Form</p>} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
