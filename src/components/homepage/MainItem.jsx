import React from "react";
import "../../css/main-item.css";
import video from "../../video/video.mp4";
import photo from "../../image/google-play-badge.png";

function MainItem() {
  return (
    <main class="main-item">
      <div class="container">
        <div class="row ">
          <div class="col-sm">
            <strong>
              <h1>akses info mudah dan Akurat di InfoOngkir</h1>
            </strong>
            <p>Platform sejak 2014</p>
            <p>di InfoOngkir, semua informasi tersaji secara lengkap</p>
            <div class="col-md-4 mx-0">
              <a href="#">
                <img src={photo} alt="..." class="img-thumbnail"></img>
              </a>
            </div>
          </div>
          <div class="embed-responsive embed-responsive-16by9 col-sm shadow p-3 mb-5 bg-white px-5">
            <iframe
              class="embed-responsive-item shadow p-3 mb-5 bg-white rounded"
              src={video}
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainItem;
