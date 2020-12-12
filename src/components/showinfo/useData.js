// import React, { useState, useEffect } from "react";

import axios from "axios";

export const getIdCity = async (namaKota) => {
  // const [idCity, setIdCity] = useState("");
  var dataId = "";
  var config = {
    method: "get",
    url: "/starter/city/?key=7f6c715726a9ed5d91a77626e6cd408d",
    headers: {
      Accept: "application/json",
      Authorization:
        "Bearer dndiHksWuSyknEICDkIBlAP9LDflmTtiuRFUdOg9KeSEPlbKnEA65dX57Vb2R3z4534vspYIkMjeFI6tlI1mrcVZYIEW5ZdSIN5O",
      "Content-Type": "application/json",
    },
  };

  // useEffect(() => {

  try {
    const api = await axios(config);
    const dataApi = await api.data.rajaongkir.results;

    await dataApi.map((data) => {
      if (data.city_name === namaKota) {
        console.log(data.city_name);
        // setIdCity(data.city_id);
        dataId = data.city_id;
      }
    });
  } catch (error) {
    console.log("errorget ", error);
  }

  return dataId;
};

export const getData = async (origin, destination, weight, courier) => {
  var newData = {
    name: "",
    layanan: [],
    tarif: [],
  };
  const idOrigin = await getIdCity(origin);
  const idDestination = await getIdCity(destination);

  var bodyFormData = new FormData();
  bodyFormData.append("origin", idOrigin);
  bodyFormData.append("destination", idDestination);
  bodyFormData.append("weight", weight);
  bodyFormData.append("courier", courier);
  bodyFormData.append("key", "7f6c715726a9ed5d91a77626e6cd408d");
  console.log("getdatastart");

  return axios({
    method: "post",
    url: "/starter/cost",
    data: bodyFormData,
    headers: {
      Accept: "application/json",
      Authorization:
        "Bearer dndiHksWuSyknEICDkIBlAP9LDflmTtiuRFUdOg9KeSEPlbKnEA65dX57Vb2R3z4534vspYIkMjeFI6tlI1mrcVZYIEW5ZdSIN5O",
      "Content-Type": "application/json",
    },
  })
    .then((api) => {
      const resData = api.data.rajaongkir.results;
      console.log("resData : ", resData);
      newData = {
        name: resData[0].name,
        layanan: resData[0].costs.map((data) => [data.description]),
        tarif: resData[0].costs.map((data) => [data.cost[0].value]),
      };
      console.log("newdata : ", newData);
      return newData;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getValueTable = async (origin, destination, weight, courier) => {
  const varCallback = await getData(origin, destination, weight, courier);
  await varCallback.layanan.map((dataValue, key) => (
    <tr>
      <td>{varCallback.name}</td>
      <td>{dataValue}</td>
      <td>{varCallback.tarif[key]}</td>
    </tr>
  ));
};
