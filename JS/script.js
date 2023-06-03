// HM 2
// const x = prompt('Write a hour, i will conwert it into seconds');

// console.log(x);

// const y = x * 3600;

// console.log(y);
// alert(`in ${x} hours ${y} seconds`);

// console.log();
// END HM 2

// // form lesson
// const userAge = null;
// const obj = {
//   // age: userAge !== undefined &§ userAge !as null ? userAge : -1, age: userAge ?? -1,
//   age: userAge ?? -1,
// };
// console.log(obj.age);

// HM 3

// let numOrStr = prompt('input number or string');
// console.log(numOrStr);

// if (numOrStr === null) {
//   console.log('ви відмінили');
// } else if (numOrStr.trim() === '') {
//   console.log('Empty String');
// } else if (isNaN(+numOrStr)) {
//   console.log(' number is Ba_NaN');
// } else {
//   console.log('OK!');
// }

// let numOrStr = prompt('Input number or string');
// console.log(numOrStr);

// switch (true) {
//   case numOrStr === null:
//     console.log('Ви відмінили');
//     break;
//   case numOrStr.trim() === '':
//     console.log('Empty String');
//     break;
//   case isNaN(+numOrStr):
//     console.log('Number is NaN');
//     break;
//   default:
//     console.log('OK!');
//     break;
// }
// END HM 3

// HM 4
// Prompt for the user's year of birth
let yearOfBirth = prompt('Enter your year of birth');
if (yearOfBirth === null) {
  alert("It's a pity that you did not want to enter your year of birth.");
} else {
  // Prompt for the city the user lives in
  let city = prompt('Enter the city you live in');
  if (city === null) {
    alert("It's a pity that you did not want to enter your city.");
  } else {
    // Prompt for the user's favorite sport
    let favoriteSport = prompt('Enter your favorite sport');
    if (favoriteSport === null) {
      alert("It's a pity that you did not want to enter your favorite sport.");
    } else {
      // Calculate the user's age
      let currentYear = new Date().getFullYear();
      let age = currentYear - yearOfBirth;

      // Construct the message based on the inputs
      let message = 'Your age: ' + age;
      if (city === 'Kyiv' || city === 'Washington' || city === 'London') {
        message += 'You live in the capital of ' + city;
      } else {
        message += 'You live in the city: ' + city;
      }

      let champions = {
        Football: 'Lionel Messi',
        Basketball: 'LeBron James',
        Tennis: 'Serena Williams',
      };
      if (favoriteSport in champions) {
        message +=
          'Cool! Do you want to become ' + champions[favoriteSport] + '?';
      }

      // Display the information in an alert
      alert(message);
    }
  }
}
// END HM 4

// HM 5

// END HM 5

// HM 6

// END HM 6
