import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "./useData.js";

function ShowInfo() {
 
  //ambil parameter url
  let { alamatAsal } = useParams();
  let { alamatTujuan } = useParams();
  let { berat } = useParams();

  const beratNumb = parseInt(berat);
  
  // mengambil nilai yang akan ditampilkan di tabel
  const [dataTable, setDataTable] = useState([{
    name: "",
    layanan: [],
    tarif: [],
  }]);

  useEffect(() => {
    async function fetchData() {
      try {

        ["tiki", "jne", "pos"].forEach(async (data, index) => {
            const hasil = await getData(alamatAsal, alamatTujuan, beratNumb, data);
            setDataTable(prevState => [...prevState, {
              name: hasil.name,
              layanan: hasil.layanan,
              tarif: hasil.tarif,
            }]);
          })

        
      } catch (err) {
        console.log("error", err);
      }
    }
    fetchData();
  }, []);

  return (
    <div class="container py-5">
     
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Kurir</th>
            <th scope="col">Jenis Layanan</th>
            <th scope="col">Tarif</th>
          </tr>
        </thead>
        <tbody id="target">         
          {
          dataTable.map(data => data.layanan.map((dataValue, key) => (
            <tr>
              <td>{data.name}</td>
              <td>{dataValue}</td>
              <td>{data.tarif[key]}</td>
            </tr>
          )) )
          }
        </tbody>
      </table>
      
    </div>
  );
}

export default ShowInfo;
