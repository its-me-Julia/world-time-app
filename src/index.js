let citiesDropdown = document.querySelector("#cities-dropdown");
let citiesDiv = document.querySelector("#cities-div");
let showAllBtn = document.querySelector("#show-all-btn");

function showTime(event) {
  clearInterval(interval);
  let timezone = event.target.value;
  if (timezone === "select") {
    citiesDiv.innerHTML = `<div class="select-city-js">Please select a city!</div>`;
  }
  if (timezone === "current-location") {
    let currentLoc = moment.tz.guess();
    let currentLocCityFormat = currentLoc.split("/");
    let currentLocCity = currentLocCityFormat[1].replace("_", " ");
    let currentLocDate = moment.tz(currentLoc).format("dddd, Do [of] MMMM");
    let currentLocTime = moment.tz(currentLoc).format("HH:mm:ss");
    citiesDiv.innerHTML = `<div class="city" id="city">
          <div class="place-date">
            <h3 class="place">${currentLocCity}</h3>
            <h7 class="date">${currentLocDate}</h7>
          </div>
          <div class="time"><h7>${currentLocTime}</h7></div>    
        </div>`;
  }
  let cityFormat = timezone.split("/");
  let city = cityFormat[1].replace("_", " ");
  let date = moment.tz(timezone).format("dddd, Do [of] MMMM");
  let time = moment.tz(timezone).format("HH:mm:ss");
  citiesDiv.innerHTML = `<div class="city" id="city">
          <div class="place-date">
            <h3 class="place">${city}</h3>
            <h7 class="date" id="date">${date}</h7>
          </div>
          <div class="time" id="time"><h7>${time}</h7></div>  
        </div>
        `;

  function updateTime() {
    let cityDiv = citiesDiv.querySelector("#city");
    if (cityDiv) {
      let dateUpdate = moment.tz(timezone).format("dddd, Do [of] MMMM");
      let timeUpdate = moment.tz(timezone).format("HH:mm:ss");
      cityDiv.innerHTML = `<div class="place-date">
            <h3 class="place">${city}</h3>
            <h7 class="date" id="date">${dateUpdate}</h7>
          </div>
          <div class="time" id="time"><h7>${timeUpdate}</h7></div>`;
    }
  }
  interval = setInterval(updateTime, 1000);
}

let interval = null;
citiesDropdown.addEventListener("change", showTime);

function showAllCities() {
  let values = [
    "Europe/London",
    "America/New_York",
    "Australia/Sydney",
    "Africa/Johannesburg",
    "Pacific/Honolulu",
  ];
  let repeatCity = `<div>`;
  values.forEach((value) => {
    let oneCityDiv = `<div class="city" id="city">`;
    let cityValueFormat = value.split("/");
    let cityValue = cityValueFormat[1].replace("_", " ");
    let dateValue = moment.tz(value).format("dddd, Do [of] MMMM");
    let timeValue = moment.tz(value).format("HH:mm:ss");
    let placeDateTimeDiv = `<div class="place-date">
            <h3 class="place">${cityValue}</h3>
            <h7 class="date" id="date">${dateValue}</h7>
          </div>
          <div class="time" id="time"><h7>${timeValue}</h7></div>`;
    oneCityDiv = oneCityDiv + placeDateTimeDiv + `</div><hr class="js-hr" />`;
    repeatCity = repeatCity + oneCityDiv;
  });
  if (showAllBtn.innerHTML === "Show all cities") {
    showAllBtn.innerHTML = "Hide all cities";
  } else {
    showAllBtn.innerHTML = "Show all cities";
  }
  citiesDiv.innerHTML = repeatCity;
}

showAllBtn.addEventListener("click", showAllCities);
