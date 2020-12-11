import React, { useState, useEffect } from "react";

import axios from "axios";

export const useData = (origin, destination, weight, courier) => {
  const [info, setInfo] = useState({
    name: "",
    layanan: [],
    tarif: [],
  });

  var bodyFormData = new FormData();
  bodyFormData.append("origin", origin);
  bodyFormData.append("destination", destination);
  bodyFormData.append("weight", weight);
  bodyFormData.append("courier", courier);
  bodyFormData.append("key", "4b37de4e5e95b6eaeb96d46a4ddd7ce7");

  useEffect(() => {
    async function fetchData() {
      try {
        const api = await axios({
          method: "post",
          url: "/starter/cost",
          data: bodyFormData,
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer dndiHksWuSyknEICDkIBlAP9LDflmTtiuRFUdOg9KeSEPlbKnEA65dX57Vb2R3z4534vspYIkMjeFI6tlI1mrcVZYIEW5ZdSIN5O",
            "Content-Type": "application/json",
          },
        });
        const resData = await api.data.rajaongkir.results;
        setInfo(async (prevState) => ({
          name: await resData[0].name,
          layanan: await resData[0].costs.map(
            async (data) => await [data.description]
          ),
          tarif: await resData[0].costs.map(
            async (data) => await [data.cost[0].value]
          ),
        }));
      } catch (err) {
        console.log(("error ", err));
      }
    }
    fetchData();
    //   .then(function (response) {
    //     //handle success
    //     return response.data.rajaongkir.results;
    //   })
    //   .then((resData) => {
    //     setInfo((prevState) => ({
    //       name: resData[0].name,
    //       layanan: resData[0].costs.map((data) => [data.description]),
    //       tarif: resData[0].costs.map((data) => [data.cost[0].value]),
    //     }));
    //   })
    //   .catch(function (response) {
    //     //handle error
    //     console.log(response);
    //   });
  }, [bodyFormData]);

  return info;
};

export const valueTable = async (data) =>
  await data.layanan.map((datavalue, key) => (
    <tr>
      <td>{data.name}</td>
      <td>{datavalue}</td>
      <td>{data.tarif[key]}</td>
    </tr>
  ));

export const useGetIdCity = (namaKota) => {
  const [idCity, setIdCity] = useState("");
  var config = {
    method: "get",
    url: "/starter/city/?key=4b37de4e5e95b6eaeb96d46a4ddd7ce7",
    headers: {
      Accept: "application/json",
      Authorization:
        "Bearer dndiHksWuSyknEICDkIBlAP9LDflmTtiuRFUdOg9KeSEPlbKnEA65dX57Vb2R3z4534vspYIkMjeFI6tlI1mrcVZYIEW5ZdSIN5O",
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const api = await axios(config);
        const dataApi = await api.data.rajaongkir.results;
        dataApi.map(async (data) => {
          if (data.city_name === namaKota) {
            console.log(data.city_name);
            await setIdCity(data.city_id);
          }
        });
      } catch (error) {
        console.log("error", error);
        // appropriately handle the error
      }
    }
    fetchData();

    //   .then((res) => {
    //     return res.data.rajaongkir.results;
    //   })
    //   .then((resData) => {
    //     resData.map((data) => {
    //       if (data.city_name === namaKota) {
    //         console.log(data.city_name);
    //         setIdCity(data.city_id);
    //       }
    //     });
    //   });
  }, []);

  return idCity;
};
