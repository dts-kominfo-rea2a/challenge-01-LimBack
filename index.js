// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
let name = "Monica";
let gender = "Female";
let age = 17;
let email = "monica@dingdong.com";

let favoriteColor = new Set();
    favoriteColor.add("Yellow");
    favoriteColor.add("Pink");
    favoriteColor.add("White");
    favoriteColor.add("Purple");
    favoriteColor.add("Pink");

let isHavePet = "Yes";

let education = [];
let detailEducation = {
    name : "SD 01",
    city : "Jakarta",
    graduate : "2016",
};
education.push(detailEducation);
detailEducation = {
    name : "SMP 02",
    city : "Jakarta",
    graduate : "2019",
};
education.push(detailEducation);
detailEducation = {
    name : "SMA 03",
    city : "Tanggerang",
};
education.push(detailEducation);

let favoriteRestaurant = new Set();
    favoriteRestaurant.add("Bento");
    favoriteRestaurant.add("Shusi");
    favoriteRestaurant.add("Pancake"),
    favoriteRestaurant.add("Eggy");
    favoriteRestaurant.add("Tempura");
    favoriteRestaurant.add("Bento");
    favoriteRestaurant.add("Eggy");
    favoriteRestaurant.add("Bento");
    favoriteRestaurant.add("Padang");
    favoriteRestaurant.add("Tteok");
    favoriteRestaurant.add("Tteok");
    favoriteRestaurant.add("Sushi");

const firstUser = {
    name: name,
    gender: gender,
    age: age,
    email: email,
    favoriteColor: [...favoriteColor],
    isHavePet: isHavePet,
    education: education,
    favoriteRestaurant: [...favoriteRestaurant],
};

name = "Wendy";
gender = "Male";
age = 22;
email = "wendy@dingdong.com";

favoriteColor = new Set();
    favoriteColor.add("Blue");
    favoriteColor.add("Black");
    favoriteColor.add("Grey");
    favoriteColor.add("Black");

isHavePet = "No";

education = new Array();
detailEducation = {
    name : "SD 02",
    city : "Jakarta",
    graduate : "2010",
};
education.push(detailEducation);
detailEducation = {
    name : "SMP 03",
    city : "Bogor",
    graduate : "2013",
};
education.push(detailEducation);
detailEducation = {
    name : "SMA 01",
    city : "Surabaya",
    graduate : "2016",
};
education.push(detailEducation);
detailEducation = {
    name : "Universitas Maju",
    city : "Tanggerang",
};
education.push(detailEducation);

favoriteRestaurant = new Set();
    favoriteRestaurant.add("Tempura");
    favoriteRestaurant.add("Bento");
    favoriteRestaurant.add("Sushi");
    favoriteRestaurant.add("Pancake");
    favoriteRestaurant.add("Padang");
    favoriteRestaurant.add("Katsu");
    favoriteRestaurant.add("Geprek");
    favoriteRestaurant.add("Pancake");
    favoriteRestaurant.add("Eggy");

const secondUser = {
    name: name,
    gender: gender,
    age: age,
    email: email,
    favoriteColor: [...favoriteColor],
    isHavePet: isHavePet,
    education: education,
    favoriteRestaurant: [...favoriteRestaurant],
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser,secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
}; 