/* eslint-disable */
import "bootstrap";
import "./style.css";

const form = document.getElementById("form");
const card = document.getElementById("validationCard");
const cvc = document.getElementById("validationCVC");
const amount = document.getElementById("validationAmount");
const firstname = document.getElementById("validationFirstName");
const lastname = document.getElementById("validationLastName");
const city = document.getElementById("validationCity");
const state = document.getElementById("validationState");
const postalcode = document.getElementById("validationPostalCode");
const message = document.getElementById("validationMessage");

form.addEventListener("submit", e => {
  e.preventDefault();

  if (card.value === "" || card.value == null) {
    document.querySelector("#validationCard").style.background = "#ffe6e6";
    let x = document.querySelectorAll("#card")[0].children.length;
    if (x == 2) {
      let new_elem1 = document.createElement("label");
      new_elem1.innerHTML = "Card Number is required";
      new_elem1.style.color = "red";
      document.querySelector("#card").appendChild(new_elem1);
    }
  } else {
    document.querySelector("#validationCard").style.background = "#f2ffe5";
    let x = document.querySelectorAll("#card")[0].children.length;
    if (x == 3) {
      let rm_elem1 = document.querySelector("#card").lastChild;
      rm_elem1.parentNode.removeChild(rm_elem1);
    }
  }
  if (cvc.value === "" || cvc.value == null) {
    document.querySelector("#validationCVC").style.background = "#ffe6e6";
    let x = document.querySelectorAll("#cvc")[0].children.length;
    if (x == 2) {
      let new_elem1 = document.createElement("label");
      new_elem1.innerHTML = "CVC Number is required";
      new_elem1.style.color = "red";
      document.querySelector("#cvc").appendChild(new_elem1);
    }
  } else {
    document.querySelector("#validationCVC").style.background = "#f2ffe5";
    let x = document.querySelectorAll("#cvc")[0].children.length;
    if (x == 3) {
      let rm_elem1 = document.querySelector("#cvc").lastChild;
      rm_elem1.parentNode.removeChild(rm_elem1);
    }
  }

  if (amount.value === "" || amount.value == null) {
    document.querySelector("#validationAmount").style.background = "#ffe6e6";
    let x = document.querySelectorAll("#amount")[0].children.length;
    if (x == 2) {
      let new_elem1 = document.createElement("label");
      new_elem1.innerHTML = "Amount is required";
      new_elem1.style.color = "red";
      document.querySelector("#amount").appendChild(new_elem1);
    }
  } else {
    document.querySelector("#validationAmount").style.background = "#f2ffe5";
    let x = document.querySelectorAll("#amount")[0].children.length;
    if (x == 3) {
      let rm_elem1 = document.querySelector("#amount").lastChild;
      rm_elem1.parentNode.removeChild(rm_elem1);
    }
  }

  if (firstname.value === "" || fname.value == null) {
    document.querySelector("#validationFirstName").style.background = "#ffe6e6";
    let x = document.querySelectorAll("#fname")[0].children.length;
    if (x == 2) {
      let new_elem1 = document.createElement("label");
      new_elem1.innerHTML = "First Name is required";
      new_elem1.style.color = "red";
      document.querySelector("#fname").appendChild(new_elem1);
    }
  } else {
    document.querySelector("#validationFirstName").style.background = "#f2ffe5";
    let x = document.querySelectorAll("#fname")[0].children.length;
    if (x == 3) {
      let rm_elem1 = document.querySelector("#fname").lastChild;
      rm_elem1.parentNode.removeChild(rm_elem1);
    }
  }

  if (lastname.value === "" || lname.value == null) {
    document.querySelector("#validationLastName").style.background = "#ffe6e6";
    let x = document.querySelectorAll("#lname")[0].children.length;
    if (x == 2) {
      let new_elem1 = document.createElement("label");
      new_elem1.innerHTML = "Last Name is required";
      new_elem1.style.color = "red";
      document.querySelector("#lname").appendChild(new_elem1);
    }
  } else {
    document.querySelector("#validationLastName").style.background = "#f2ffe5";
    let x = document.querySelectorAll("#lname")[0].children.length;
    if (x == 3) {
      let rm_elem1 = document.querySelector("#lname").lastChild;
      rm_elem1.parentNode.removeChild(rm_elem1);
    }
  }

  if (city.value === "" || city.value == null) {
    document.querySelector("#validationCity").style.background = "#ffe6e6";
    let x = document.querySelectorAll("#city")[0].children.length;
    if (x == 2) {
      let new_elem1 = document.createElement("label");
      new_elem1.innerHTML = "City is required";
      new_elem1.style.color = "red";
      document.querySelector("#city").appendChild(new_elem1);
    }
  } else {
    document.querySelector("#validationCity").style.background = "#f2ffe5";
    let x = document.querySelectorAll("#city")[0].children.length;
    if (x == 3) {
      let rm_elem1 = document.querySelector("#city").lastChild;
      rm_elem1.parentNode.removeChild(rm_elem1);
    }
  }

  if (city.value === "" || city.value == null) {
    document.querySelector("#validationCity").style.background = "#ffe6e6";
    let x = document.querySelectorAll("#city")[0].children.length;
    if (x == 2) {
      let new_elem1 = document.createElement("label");
      new_elem1.innerHTML = "City is required";
      new_elem1.style.color = "red";
      document.querySelector("#city").appendChild(new_elem1);
    }
  } else {
    document.querySelector("#validationCity").style.background = "#f2ffe5";
    let x = document.querySelectorAll("#city")[0].children.length;
    if (x == 3) {
      let rm_elem1 = document.querySelector("#city").lastChild;
      rm_elem1.parentNode.removeChild(rm_elem1);
    }
  }

  if (state.value === "" || state.value == null) {
    document.querySelector("#validationState").style.background = "#ffe6e6";
    let x = document.querySelectorAll("#state")[0].children.length;
    if (x == 2) {
      let new_elem1 = document.createElement("label");
      new_elem1.innerHTML = "State is required";
      new_elem1.style.color = "red";
      document.querySelector("#state").appendChild(new_elem1);
    }
  } else {
    document.querySelector("#validationState").style.background = "#f2ffe5";
    let x = document.querySelectorAll("#state")[0].children.length;
    if (x == 3) {
      let rm_elem1 = document.querySelector("#state").lastChild;
      rm_elem1.parentNode.removeChild(rm_elem1);
    }
  }

  if (zip.value === "" || zip.value == null) {
    document.querySelector("#validationPostalCode").style.background =
      "#ffe6e6";
    let x = document.querySelectorAll("#zip")[0].children.length;
    if (x == 2) {
      let new_elem1 = document.createElement("label");
      new_elem1.innerHTML = "Postal Code is required";
      new_elem1.style.color = "red";
      document.querySelector("#zip").appendChild(new_elem1);
    }
  } else {
    document.querySelector("#validationPostalCode").style.background =
      "#f2ffe5";
    let x = document.querySelectorAll("#zip")[0].children.length;
    if (x == 3) {
      let rm_elem1 = document.querySelector("#zip").lastChild;
      rm_elem1.parentNode.removeChild(rm_elem1);
    }
  }
});
