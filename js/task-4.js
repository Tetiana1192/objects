const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line

const ownerName = apartment.owner.name;
console.log(ownerName);
const ownerPhone = apartment.owner.phone;
console.log(ownerPhone);
const ownerEmail = apartment.owner.email;
console.log(ownerEmail);
const tags = apartment.tags;
console.log(tags);
const numberOfTags = apartment.tags.length;
console.log(numberOfTags);
const firstTag = apartment.tags[0];
console.log(firstTag);
const lastTag = apartment.tags[2];
console.log(lastTag);
// Change code above this line



