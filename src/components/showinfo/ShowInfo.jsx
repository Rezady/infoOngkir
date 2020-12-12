import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData, getValueTable, getIdCity } from "./useData.js";

function ShowInfo() {
  //ambil parameter url
  let { alamatAsal } = useParams();
  let { alamatTujuan } = useParams();
  let { berat } = useParams();

  const [dataTable, setDataTable] = useState({name:"", layanan:[], tarif:[]});

  // const idAlamatAsal = getIdCity(alamatAsal);
  // const idAlamatTujuan = getIdCity(alamatTujuan);
  const idBerat = parseInt(berat);

   useEffect(() => {
     async function fetchData () {
      try{
           const hasil = await getData( alamatAsal, alamatTujuan, idBerat, "tiki")
           setDataTable({name:hasil.name, layanan: hasil.layanan, tarif:hasil.layanan}) 
                 
      }catch(err){
        console.log('error', err)
      }
    }
    fetchData()
    
   },[])

  return (
    <div class="container py-5">
      {console.log("idalamatasal ", alamatAsal)}
      {/* {console.log('datajne', dataJne)} */}
      
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Kurir</th>
            <th scope="col">Jenis Layanan</th>
            <th scope="col">Tarif</th>
          </tr>
        </thead>
        <tbody id="target">
          {/* {[useDataTiki, useDataPos, useDataJne].map((data) =>
            valueTable(data)
          )} */}
          { console.log('firsttt')}
             {
             dataTable.layanan.map( (dataValue, key) => (
            <tr>
              <td>{ dataTable.name}</td>
              <td>{ dataValue}</td>
              <td>{ dataTable.tarif[key]}</td>
            </tr>
          ))
          }
                
        </tbody>
      </table>
    </div>
  );
}

export default ShowInfo;
