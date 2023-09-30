function saklarRuangKeluarga() {
  let toggle1 = document.getElementById("default-toggle1");
  let toggle2 = document.getElementById("default-toggle2");
  let toggle3 = document.getElementById("default-toggle3");

  let lampu1 = document.getElementById("lampu1");
  let lampu2 = document.getElementById("lampu2");
  let lampu3 = document.getElementById("lampu3");

  // Mendapatkan elemen dengan ID "ruang-keluarga" yang sudah ada
  let backgroundRuangKeluarga = document.getElementById("ruang-keluarga");

  if (toggle1.checked) {
    lampu1.src = "assets/images/lampu-nyala.png";
  } else {
    lampu1.src = "assets/images/lampu-mati.png";
  }

  if (toggle2.checked) {
    lampu2.src = "assets/images/lampu-nyala.png";
  } else {
    lampu2.src = "assets/images/lampu-mati.png";
  }

  if (toggle3.checked) {
    lampu3.src = "assets/images/lampu-nyala.png";
  } else {
    lampu3.src = "assets/images/lampu-mati.png";
  }

  // Memeriksa apakah ketiga toggle dicentang
  if (toggle1.checked && toggle2.checked && toggle3.checked) {
    // Mengubah latar belakang elemen "background"
    backgroundRuangKeluarga.style.backgroundImage = "url('assets/images/ruang-keluarga-nyala.png')";
  } else {
    // Jika salah satu toggle tidak dicentang, kembalikan latar belakang ke semula
    backgroundRuangKeluarga.style.backgroundImage = "url('assets/images/ruang-keluarga-mati.png')";
  }
}

function saklarRuangMakan() {
  let toggle4 = document.getElementById("default-toggle4");

  let lampu4 = document.getElementById("lampu4");

  let backgroundRuangMakan = document.getElementById("ruang-makan");

  if (toggle4.checked) {
    lampu4.src = "assets/images/lampu-nyala.png";
  } else {
    lampu4.src = "assets/images/lampu-mati.png";
  }

  if (toggle4.checked) {
    backgroundRuangMakan.style.backgroundImage = "url('assets/images/ruang-makan-nyala.png')";
  } else {
    backgroundRuangMakan.style.backgroundImage = "url('assets/images/ruang-makan-mati.png')";
  }
}

function saklarRuangTidur() {
  let toggle5 = document.getElementById("default-toggle5");
  let toggle6 = document.getElementById("default-toggle6");

  let lampu5 = document.getElementById("lampu5");
  let lampu6 = document.getElementById("lampu6");

  let backgroundRuangTidur = document.getElementById("ruang-tidur");

  if (toggle5.checked) {
    lampu5.src = "assets/images/lampu-nyala.png";
  } else {
    lampu5.src = "assets/images/lampu-mati.png";
  }

  if (toggle6.checked) {
    lampu6.src = "assets/images/lampu-nyala.png";
  } else {
    lampu6.src = "assets/images/lampu-mati.png";
  }

  if (toggle5.checked && toggle6.checked) {
    backgroundRuangTidur.style.backgroundImage = "url('assets/images/ruang-tidur-nyala.png')";
  } else {
    backgroundRuangTidur.style.backgroundImage = "url('assets/images/ruang-tidur-mati.png')";
  }
}

function saklarRuangTamu() {
  let toggle7 = document.getElementById("default-toggle7");
  let toggle8 = document.getElementById("default-toggle8");
  let toggle9 = document.getElementById("default-toggle9");
  let toggle10 = document.getElementById("default-toggle10");

  let lampu7 = document.getElementById("lampu7");
  let lampu8 = document.getElementById("lampu8");
  let lampu9 = document.getElementById("lampu9");
  let lampu10 = document.getElementById("lampu10");

  let backgroundRuangTamu = document.getElementById("ruang-tamu");

  if (toggle7.checked) {
    lampu7.src = "assets/images/lampu-nyala.png";
  } else {
    lampu7.src = "assets/images/lampu-mati.png";
  }

  if (toggle8.checked) {
    lampu8.src = "assets/images/lampu-nyala.png";
  } else {
    lampu8.src = "assets/images/lampu-mati.png";
  }

  if (toggle9.checked) {
    lampu9.src = "assets/images/lampu-nyala.png";
  } else {
    lampu9.src = "assets/images/lampu-mati.png";
  }

  if (toggle10.checked) {
    lampu10.src = "assets/images/lampu-nyala.png";
  } else {
    lampu10.src = "assets/images/lampu-mati.png";
  }

  if (toggle7.checked && toggle8.checked && toggle9.checked && toggle10.checked) {
    backgroundRuangTamu.style.backgroundImage = "url('assets/images/ruang-tamu-nyala.png')";
  } else {
    backgroundRuangTamu.style.backgroundImage = "url('assets/images/ruang-tamu-mati.png')";
  }
}
