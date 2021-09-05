const contacts = ["Ashraf:55808701", "Rasiya:9447756397", "Shayas:7510551026", "Sameera:9895055102", "Shahanas:77808701", "Shahalas:66251005"];
const input = document.querySelector("input");
const btn = document.querySelector("button");
const para = document.querySelector("p");

btn.addEventListener("click", () => {
    let searchName = input.value.toUpperCase();
    for (let i = 0; i < contacts.length; i++) {
        let splitContact = contacts[i].split(":");
        if (splitContact[0].toUpperCase() === searchName) {
            para.textContent = ("Contact Name is: " + splitContact[0]+ " -- " + "Contact Number is: " + splitContact[1]);
            break;
        }
        else if (i === contacts.length - 1) {
            para.textContent = ("Contact Not Found");
        }
    }
});

// btn.addEventListener('click', function() {
//     let searchName = input.value.toLowerCase();
//     input.value = '';
//     input.focus();
//     for (let i = 0; i < contacts.length; i++) {
//       let splitContact = contacts[i].split(':');
//       if (splitContact[0].toLowerCase() === searchName) {
//         console.log(splitContact[0] + '\'s number is ' + splitContact[1] + '.');
//       } else if (i === contacts.length - 1) {
//         console.log('Contact not found.');
//       }
//     }
//   });