
import axios from "axios";

export const getIdCity = async (namaKota) => {
  
  var dataId = "";
  var config = {
    method: "get",
    url:
      "https://api.rajaongkir.com/starter/city/?key=7f6c715726a9ed5d91a77626e6cd408d",
    headers: {
      Accept: "application/json",
      Authorization:
        "Bearer dndiHksWuSyknEICDkIBlAP9LDflmTtiuRFUdOg9KeSEPlbKnEA65dX57Vb2R3z4534vspYIkMjeFI6tlI1mrcVZYIEW5ZdSIN5O",
      "Content-Type": "application/json",
    },
  };

  try {
    const api = await axios(config);
    const dataApi = await api.data.rajaongkir.results;

    await dataApi.map((data) => {
      if (data.city_name === namaKota) {
        console.log(data.city_name);
        
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
    url: "https://api.rajaongkir.com/starter/cost",
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

