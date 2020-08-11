function checkPersonNameValid(name) {
  return name != "";
}

function checkPersonEmailValid(email) {
  let stringRegex = new RegExp("[0-9a-zA-Z.]+@{1}[0-9a-zA-Z.]+");
  let counterAdSign = 0;
  for (let i = 0; i < email.length; i++) {
    if (email.charAt(i) == "@") {
      counterAdSign += 1;
    }
  }
  return email != "" && stringRegex.test(email) && counterAdSign == 1;
}

function checkCompanyNameValid(name) {
  return name != "";
}

function checkCompanyPhoneValid(phone) {
  let stringRegex = new RegExp("^[d-s]+$");
  let counterDigit = 0;
  for (let i = 0; i < phone.length; i++) {
    if (phone.charAt(i) >= "0" && phone.charAt(i) <= "9") {
      counterDigit += 1;
    }
  }
  return phone != "" && stringRegex.test(phone) && counterDigit >= 6;
}

function solution() {
  if ($("#type_person").is(":checked")) {
    let firstName = $("#first_name").val();
    let lastName = $("#last_name").val();
    let email = $("#email").val();
    return (
      checkPersonNameValid(firstName) &&
      checkPersonNameValid(lastName) &&
      checkPersonEmailValid(email)
    );
  } else {
    let companyName = $("#company_name").val();
    let phone = $("#phone").val();
    return checkCompanyNameValid(companyName) && checkCompanyPhoneValid(phone);
  }
}
