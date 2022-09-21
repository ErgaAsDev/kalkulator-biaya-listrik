const namaBarang = document.querySelector(".namaBarang")
const daya = document.querySelector(".daya")
const durasi = document.querySelector(".durasi")
const tambah = document.querySelector("#tambah")
const dasarTarif = document.querySelector(".dasarTarif")
const listBarang = document.querySelector("#list-barang")
const listHarian = document.querySelector("#list-harian")
const listMingguan = document.querySelector("#list-mingguan")
const listBulanan = document.querySelector("#list-bulanan")
const totalHarian = document.querySelector("#total-harian")
const totalMingguan = document.querySelector("#total-mingguan")
const totalBulanan = document.querySelector("#total-bulanan")


tambah.addEventListener("click", ()=>{
    const nameList = document.createElement("li")
    const biayaHarian = document.createElement("li")
    biayaHarian.setAttribute("id", "hari")
    const biayaMingguan = document.createElement("li")
    biayaMingguan.setAttribute("id", "minggu")  
    const biayaBulanan = document.createElement("li")
    biayaBulanan.setAttribute("id", "bulan")

       
    if(namaBarang.value && 
        daya.value &&
        durasi.value &&
        dasarTarif.value ){
        nameList.textContent = namaBarang.value
        biayaHarian.textContent = (daya.value / 1000 * durasi.value * dasarTarif.value).toFixed(0)
        biayaMingguan.textContent = (daya.value / 1000 * durasi.value * dasarTarif.value * 7).toFixed(0) 
        biayaBulanan.textContent = (daya.value / 1000 * durasi.value * dasarTarif.value * 30).toFixed(0)
        listBarang.appendChild(nameList)
        listHarian.appendChild(biayaHarian)
        listMingguan.appendChild(biayaMingguan)
        listBulanan.appendChild(biayaBulanan)
        let resultHarian = Array.from(document.querySelectorAll("#hari")).reduce((a, {textContent}) => a + +textContent, 0);
        let resultMingguan = Array.from(document.querySelectorAll("#minggu")).reduce((a, {textContent}) => a + +textContent, 0);
        let resultBulanan = Array.from(document.querySelectorAll("#bulan")).reduce((a, {textContent}) => a + +textContent, 0);
        // console.log(resultHarian);
        // console.log(resultMingguan);    
        // console.log(resultBulanan);
        totalHarian.textContent = `Rp. ${resultHarian}`
        totalMingguan.textContent = `Rp. ${resultMingguan}`
        totalBulanan.textContent =  `Rp. ${resultBulanan}`

    } else if(namaBarang.value === ""){
        return false
    }
    
    return namaBarang.value = "", daya.value = "", durasi.value = "", dasarTarif.value = ""
} )

