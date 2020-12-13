import React, { useState } from "react";
import "../../css/form/form-item.css";

import { NavLink } from "react-router-dom";

function FormItem() {
  const [alamatTujuan, setAlamatTujuan] = useState("");
  const [alamatAsal, setAlamatAsal] = useState("");
  const [berat, setBerat] = useState("");

  return (
    <main class="form-item">
      <div class="container py-5">
        <form>
          <div class="form-group">
            <label for="inputNama">Nama</label>
            <input
              type="text"
              class="form-control"
              id="inputNama"
              placeholder="Nama"
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>

            <div class="form-group col-md-6">
              <label for="inputNoHp">No Hp</label>
              <input
                type="tel"
                class="form-control"
                id="inputNoHp"
                placeholder="Nomor Telpon"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-5">
              <label for="inputNama">Alamat Asal</label>
              <input
                type="text"
                class="form-control"
                id="inputAlamatAsal"
                placeholder="Alamat Asal"
                onChange={(e) => setAlamatAsal(e.target.value)}
              />
            </div>
            <div class="form-group col-md-5">
              <label for="inputNama">Alamat Tujuan</label>
              <input
                type="text"
                class="form-control"
                id="inputAlamatTujuan"
                placeholder="Alamat Tujuan"
                onChange={(e) => setAlamatTujuan(e.target.value)}
              />
            </div>
            <div class="form-group col-md-2">
              <label for="inlineFormInputGroupUsername">Berat</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">Gram</div>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="inlineFormInputGroupUsername"
                  placeholder="Berat"
                  onChange={(e) => setBerat(e.target.value)}
                />
              </div>
            </div>
          </div>

          <NavLink
            to={"/form/"
              .concat(alamatAsal)
              .concat("/")
              .concat(alamatTujuan)
              .concat("/")
              .concat(berat)}
          >
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </NavLink>
        </form>
      </div>
    </main>
  );
}

export default FormItem;
