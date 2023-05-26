let layar = document.querySelector(".text-layar");
var a = document.addEventListener("keydown", function (event) {
  var keyCode = event.keyCode || event.which;

  getTombol(keyCode);

  // Mendapatkan nama tombol berdasarkan kode tombol
  var keyName = event.key || String.fromCharCode(keyCode);
  layar.innerHTML = "Nama tombol: " + keyName;
  // Menampilkan nama tombol
  event.preventDefault();
});

function getTombol(no) {
  console.log(no);
  var a = document.querySelector(".b" + no);
  console.log(a);
  a.classList.add("btn-click");
}
