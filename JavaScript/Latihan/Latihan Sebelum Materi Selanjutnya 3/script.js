let users = [
  { nama: "Andi", umur: 16 },
  { nama: "Budi", umur: 20 },
  { nama: "Siti", umur: 18 },
  { nama: "Rina", umur: 15 }
];


// 1. Filter user yang umur >= 18
let dewasa = users.filter(function(user) {
  return user.umur >= 18;
});

// 2. Ambil nama user dewasa
let namaDewasa = dewasa.map(function(user) {
  return user.nama;
});

// 3. Tampilkan hasil
console.log(namaDewasa);
