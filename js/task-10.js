const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = ["descr", "rating", "price"];
const values = ["Spacious apartment in the city center", 4, 2153];
// Change code below this line
for (const key in apartment) {
    console.log(key);
    console.log(apartment[key]);
}

for (const values in apartment) {
    console.log(values);
    console.log(apartment[values]);
}
