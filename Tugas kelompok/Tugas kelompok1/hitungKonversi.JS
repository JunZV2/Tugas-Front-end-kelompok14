/*Bahan referensi
https://www.w3schools.com/js/js_errors.asp
*/
function hitungKonversi(){
    const dari = document.getElementById("dariBerat").value;
    const ke = document.getElementById("keBerat").value;
    const nilai = parseFloat(document.getElementById("nilai").value);
    const hasil = document.getElementById("hasil");
    const error = document.getElementById("error");
    
    error.textContent = "";
    hasil.textContent = "";

    if(!dari || !ke){
        error.textContent = "Silakan pilih satuan berat yang ingin dikonversi";
        return;
    }

    if(dari === ke){
        error.textContent = "Satuan berat asal dan tujuan tidak boleh sama!";
        return;
    }

    if(isNaN(nilai)){
        error.textContent = "Silahkan masukkan nilai berat yang ingin dikonversi";
        return;
    }

    let nilaikonversi;

    if(dari === "KG")nilaikonversi = nilai;
    if(dari === "G")nilaikonversi = nilai/1000;
    if(dari === "MG")nilaikonversi = nilai/1000000;

    let hasilkonversi;

    if(ke === "KG")hasilkonversi = nilaikonversi;
    if(ke === "G")hasilkonversi = nilaikonversi*1000;
    if(ke === "MG")hasilkonversi = nilaikonversi*1000000;

    hasil.textContent = `Hasil : ${nilai} ${dari} = ${hasilkonversi} ${ke}`;
}