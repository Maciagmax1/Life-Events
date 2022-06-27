const name = "Max Maciag";
const age = "22";
const birthday = "July 19";
const pineapplePizza = false;
const lifeEvents = [
  "I was born in Ann Arbor, Michigan",
  "I went to Washtenaw Community College",
  "I started working in a laboratory when I was 19",
  "I love to play soccer",
];
if (pineapplePizza) {
  console.log(
    `my name is ${name} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`
  );
} else {
  console.log(
    `my name is ${name} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber != 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5`
    );
    break;
  }
}
