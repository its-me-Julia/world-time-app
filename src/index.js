setInterval(function () {
  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  londonDateElement.innerHTML = moment().format(`MMMM D YYYY`);
  let londonTimeElement = londonElement.querySelector(".time");
  londonTimeElement.innerHTML = moment().tz(`Europe/London`).format("HH:mm:ss");

  //New York
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  newYorkDateElement.innerHTML = moment().format(`MMMM D YYYY`);
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  newYorkTimeElement.innerHTML = moment()
    .tz(`America/New_York`)
    .format("HH:mm:ss");

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  sydneyDateElement.innerHTML = moment().format(`MMMM D YYYY`);
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  sydneyTimeElement.innerHTML = moment()
    .tz(`Australia/Sydney`)
    .format("HH:mm:ss");

  //Johannesburg
  let johannesburgElement = document.querySelector("#johannesburg");
  let johannesburgDateElement = johannesburgElement.querySelector(".date");
  johannesburgDateElement.innerHTML = moment().format(`MMMM D YYYY`);
  let johannesburgTimeElement = johannesburgElement.querySelector(".time");
  johannesburgTimeElement.innerHTML = moment()
    .tz(`Africa/Johannesburg`)
    .format("HH:mm:ss");
}, 1000);
