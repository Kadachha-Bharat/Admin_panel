import {
    getCountryList,
  } from "../index";
  const axios = require("axios");
  
  export const countryListApi = () => {
    return async (dispatch, store) => {
        await axios.get("http://localhost:9090/country/getAllCountry").then((res) => {
                dispatch(getCountryList(res.data.data));
              })
              .catch((err) => {
                  console.log(err);
              })
    };
  };
  
 