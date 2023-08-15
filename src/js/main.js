emailjs.init('RETmhXWCcPUvdpHHX')

function generateOtp() {
  otp = Math.floor(100000 + Math.random() * 900000);
  return otp;
}

//Toggle menu for navbar
const btn = document.querySelector("#navBar");
const menu = document.querySelector("#navContent");
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Touch anywhere to close the navbar
document.getElementById("mainWebpage").addEventListener("click", () => {
  if (!document.getElementById("navContent").classList.contains("hidden")) {
    document.getElementById("navContent").classList.add("hidden");
  }
});

//Toggle menu for user
const btnUserMain = document.querySelector("#btnUser");
const userMenuMain = document.querySelector("#userMenu");
btnUserMain.addEventListener("click", () => {
  userMenuMain.classList.toggle("hidden");
});

//Registration modal
let regModal = document.getElementById("registerModal");
let regBtn = document.getElementById("open-register-btn");
let regCross = document.getElementById("regCross");

regBtn.onclick = function () {
  regModal.style.display = "block";
}
regCross.onclick = function () {
  regModal.style.display = "none";
}
document.getElementById('registerBtn').addEventListener('click', function (revent) {
  revent.preventDefault();
  email = document.getElementById("regEmail").value;
  pass = document.getElementById("regPassword").value;
  confirmPass = document.getElementById("confirmPassword").value;

  if (pass != confirmPass) {
    document.getElementById("confirmPassCheck").innerText = ("Password not match!");
  }
  else {

    //send otp

    rootp = generateOtp();

    var regPassword = {
      user: email,
      otp: rootp
    };

    emailjs.send('service_q8m42ho', 'template_frigbdt', regPassword)
      .then(function (response) {
        alert('SUCCESS!', response.status, response.text);

        document.getElementById("registerForm").classList.add("hidden");
        document.getElementById("regOtpform").classList.remove("hidden");

      }, function (error) {
        alert('FAILED...', error);
      });
    document.getElementById('regCheckOtp').addEventListener('click', function (rcevent) {
      rcevent.preventDefault();
      rcotp = document.getElementById("regOtp").value;
      if (rootp == rcotp) {
        alert("Account created Successfully");
        regOtpform.classList.add("hidden");
        document.getElementById("regDetailsForm").classList.remove("hidden");

        //on submit registration details form
        submitDetails = document.getElementById("regDetails").addEventListener("click", function (detailsEvent) {
          detailsEvent.preventDefault();
          alert("Form Submited Successfully..");
          document.getElementById("registerForm").classList.remove("hidden");
          document.getElementById("regOtpform").classList.add("hidden");
          document.getElementById("regDetailsForm").classList.add("hidden");
          regModal.style.display = "none";
          document.getElementById("regEmail").innerText = "";
          document.getElementById("regPassword").innerText = "";
          document.getElementById("confirmPassword").innerText = "";
        });
      }
      else {
        alert("OTP not matched");
      }
    });

  }
});

//Login modal
let loginModal = document.getElementById("loginModal");
let loginBtn = document.getElementById("open-login-btn");
let loginBtnForReg = document.getElementById("open-login-btn2");
let loginCross = document.getElementById("loginCross");

loginBtn.onclick = function () {
  loginModal.style.display = "block";
}
loginBtnForReg.onclick = function () {
  regModal.style.display = "none";
  loginModal.style.display = "block";
}
loginCross.onclick = function () {
  loginModal.style.display = "none";
}

//Forgot Password modal
let fpModal = document.getElementById("forgotPassModal");
let fpBtn = document.getElementById("forgot-pass");
let fpCross = document.getElementById("fpCross");

fpBtn.onclick = function () {
  loginModal.style.display = "none";
  fpModal.style.display = "block";
}
fpCross.onclick = function () {
  fpModal.style.display = "none";
}

// Reset Password
document.getElementById('sendOtp').addEventListener('click', function (event) {
  event.preventDefault();
  sotp = generateOtp();
  sendOtpForm = document.getElementById("sendForm");
  checkOtpForm = document.getElementById("otpform");
  userEmail = document.getElementById("resetEmail").value;

  var resetPassword = {
    user: userEmail,
    otp: sotp
  };

  emailjs.send('service_q8m42ho', 'template_frigbdt', resetPassword)
    .then(function (response) {
      alert('SUCCESS!', response.status, response.text);
      sendOtpForm.classList.add("hidden");
      checkOtpForm.classList.remove("hidden");
    }, function (error) {
      alert('FAILED...', error);
    });
});


// Check otp to reset password
document.getElementById('checkOtp').addEventListener('click', function (cevent) {
  cevent.preventDefault();
  cotp = document.getElementById("otp").value;
  newPassword = document.getElementById("newPasswordForm");
  if (cotp == sotp) {
    checkOtpForm.classList.add("hidden");
    newPassword.classList.remove("hidden");



    // compair new pass and confirm pass
    document.getElementById('newPasswordBtn').addEventListener('click', function (nevent) {
      nevent.preventDefault();
      newPass = document.getElementById("newPassword").value;
      newConfirmPass = document.getElementById("confirmNewPassword").value;

      if (newPass != newConfirmPass) {
        document.getElementById("newConfirmPassCheck").innerText = ("Password not match!");
      }
      else {
        alert("Password changed successfully!");
        fpModal.style.display = "none";
        checkOtpForm.classList.add("hidden");
        newPassword.classList.add("hidden");
        sendForm.classList.remove("hidden");
      }
    });
  }
  else {
    document.getElementById("checkOtpMessage").innerText = "Wrong OTP";
  }
});
