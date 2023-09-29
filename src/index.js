let citiesSelect = document.querySelector("#cities");

function updateCity(event) {
  let cityTz = event.target.value;
  let cityTimeZone = moment().tz(cityTz);
  let cityName = cityTz.replace("_", " ").split("/")[1];
  let cityElement = document.querySelector("#cities-div");
  cityElement.innerHTML = `<div class="city">
          <div class="place-date">
            <h3 class="place">${cityName}</h3>
            <h7 class="date">${cityTimeZone.format(`MMMM D YYYY`)}</h7>
          </div>
          <div class="time"><h7>${cityTimeZone.format("HH:mm:ss")}</h7></div>
        </div>`;
}

citiesSelect.addEventListener("change", updateCity);

function updateTime() {
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
}

updateTime();
setInterval(updateTime, 1000);
