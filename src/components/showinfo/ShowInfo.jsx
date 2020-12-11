import React from "react";
import { useParams } from "react-router-dom";
import { useData, valueTable, useGetIdCity } from "./useData.jsx";

function ShowInfo() {
  //ambil parameter url
  let { alamatAsal } = useParams();
  let { alamatTujuan } = useParams();
  let { berat } = useParams();

  const idAlamatAsal = useGetIdCity(alamatAsal);
  const idAlamatTujuan = useGetIdCity(alamatTujuan);
  // const idBerat = parseInt(berat);

  const useDataTiki = useData(idAlamatAsal, idAlamatTujuan, berat, "tiki");
  const useDataPos = useData(idAlamatAsal, idAlamatTujuan, berat, "pos");
  const useDataJne = useData(idAlamatAsal, idAlamatTujuan, berat, "jne");

  return (
    <div class="container py-5">
      {console.log(idAlamatAsal)}
      {/* {console.log(idBerat)} */}
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Kurir</th>
            <th scope="col">Jenis Layanan</th>
            <th scope="col">Tarif</th>
          </tr>
        </thead>
        <tbody>
          {[useDataTiki, useDataPos, useDataJne].map((data) =>
            valueTable(data)
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ShowInfo;
