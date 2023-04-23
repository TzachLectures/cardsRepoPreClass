import { MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import Country from "./Country";

export default function ChooseCountry() {
  const [country, setCountry] = useState("");
  const [countryObject, setCountryObject] = useState(null);
  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  useEffect(() => {
    const getDetails1 = async (countryName) => {
      let result = await fetch(
        "https://restcountries.com/v3.1/name/" + countryName
      );
      result = await result.json();
      return result[0];
    };
    if (country != "") {
      getDetails1(country)
        .then((value) => setCountryObject(value))
        .catch((err) => {
          console.log(err);
        });
    }
  }, [country]);

  return (
    <div>
      <Select onChange={handleChange} value={country}>
        <MenuItem value="israel">israel</MenuItem>
        <MenuItem value="japan">japan</MenuItem>
        <MenuItem value="brazil">brazil</MenuItem>
      </Select>
      <Country country={countryObject} />
    </div>
  );
}
