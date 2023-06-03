/*
    Sololearn Form Page
    Created by T0N1, June 01 2023.
    All rights reserved.
   -->
*/
function toggleForm() {
  let signinForm = document.getElementById("signin");
  let signupForm = document.getElementById("signup");

  if (signupForm.style.display === "none") {
    signupForm.style.display = "block";
    signinForm.style.display = "none";
  } else {
    signupForm.style.display = "none";
    signinForm.style.display = "block";
  }
}
