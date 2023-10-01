import React, { useEffect } from "react";
import countriesData from "../countries.json";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CountrySelect({ formData, setFormData }) {
  const countries = countriesData.countries;
  const usStates = countriesData.regions["United States"];
  const cadProvinces = countriesData.regions["Canada"];

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    const region =
      selectedCountry === "United States" || selectedCountry === "Canada"
        ? ""
        : countriesData.regions[selectedCountry] || "n/a";

    setFormData((prevData) => ({
      ...prevData,
      country: selectedCountry,
      region: region,
    }));
  };

  const handleRegionChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      region: e.target.value,
    }));
  };

  return (
    <div className="grid grid-cols-1 mb-4">
      <div className="w-full mb-4">
        <label className="font-bold text-sm" htmlFor="country">
          Country
        </label>
        <select
          id="country"
          name="country"
          onChange={handleCountryChange}
          value={formData.country}
          className="bg-white text-black text-sm px-2 py-3 w-full border rounded mt-2"
        >
          <option value="">Select a country</option>
          {countries.sort().map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full">
        <label className="font-bold text-sm" htmlFor="region">
          {formData.country === "Canada"
            ? "Province"
            : formData.country === "United States"
            ? "States"
            : "Region"}
        </label>
        <select
          id="region"
          name="region"
          onChange={(e) => {
            handleRegionChange(e);
          }}
          value={formData.region || ""}
          disabled={
            !formData.country || !countriesData.regions[formData.country]
          }
          className="bg-white text-black text-sm px-2 py-3  w-full border rounded mt-2"
        >
          <option value="" disabled>
            {formData.country !== "Canada" &&
            formData.country !== "United States"
              ? ""
              : "Select One"}
          </option>
          {formData.country &&
            (formData.country === "United States"
              ? usStates.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))
              : formData.country === "Canada"
              ? cadProvinces.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))
              : null)}
        </select>
      </div>
    </div>
  );
}

export default CountrySelect;
