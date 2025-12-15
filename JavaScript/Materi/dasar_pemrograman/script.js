let nama = 'muhammad yusar ghani' // tipe string
let usia = 30 // tipe integer number
let tinggiBadan = 173.5 // tipe double float //koma menjadi titik
let beratBadan // tipe kosong aja/tidak ada nilai dan bisa di isi nanti /lihat di no 9
let pacar = null // tidak bernilai atau kosong
let namaGuru = ['jordi', 'bunga', 'rahman']// array bisa mencangku beberapa nama dan urutannya di mualai dari 0
namaGuru.push('dea', 'fikri') // untuk menambahkan
namaGuru.shift() // untuk menghapus index pertama/ yang bernama Jordi
namaGuru.pop() // untuk menghilangkan index terakhir atau fikri

beratBadan = 65

// == artinya comparasi/perbandingan
if(pacar == null){
    pacar = 'belum punya'
}else {
    pacar = 'udah punya'
}// jika pacar di isi dan tidak bersifat null maka akan memunculkan "udah punya"

// switch(pacar){
//     case 1:
//         pacar = 'punya 1 aja'
//     break
//     case 2:
//         pacar = 'punya pacar 2'
//     break
//     default:
//         pacar = 'belum punya pacar'
//     break
// }// sama seperti if else

let saldoAwal = 50000
let saldoTambahan = 80000
const hutang = 30000
const saldoAkhir = saldoAwal + saldoTambahan - hutang

alert(namaGuru[0])

alert(`nama saya ${nama} usia saya itu ${usia} tinggi badan saya adalah ${tinggiBadan} berat badan saya ${beratBadan} dan pacar saya ${pacar}`, )

alert(`saldo awal saya sebesar ${saldoAwal} & saldoo tambahan yang akan saya miliki sebesar ${saldoTambahan} jadi total saldo yang saya miliki adalah sebanyak RP.${saldoAkhir}`,)

