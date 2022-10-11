var APIKey = "0f9da6ac-9370-47e6-8772-f0cc0cb723e7";
var holidayButton = document.getElementById('holiday-button');
var today = new Date()
var year = 2021;
var month = today.getMonth() + 1;
var day = today.getDate();
var country = "";
var countryArray = [
  {
    countryName: "Australia",
    countryCode: "AU"
  }, 
  {
    countryName: "Brazil",
    countryCode: "BR"
  }, 
  {
    countryName: "Canada",
    countryCode: "CA"
  }, 
  {
    countryName: "China",
    countryCode: "CN"
  }, 
  {
    countryName: "Cuba",
    countryCode: "CU"
  }, 
  {
    countryName: "Germany",
    countryCode: "DE"
  }, 
  {
    countryName: "Spain",
    countryCode: "ES"
  }, 
  {
    countryName: "France",
    countryCode: "FR"
  }, 
  {
    countryName: "England",
    countryCode: "GB"
  }, 
  {
    countryName: "Ireland",
    countryCode: "IE"
  }, 
  {
    countryName: "Italy",
    countryCode: "IT"
  }, 
  {
    countryName: "Japan",
    countryCode: "JP"
  }, 
  {
    countryName: "SouthKorea",
    countryCode: "KR"
  },
  {
    countryName: "Norway",
    countryCode: "NO"
  },
  {
    countryName: "Portugal",
    countryCode: "PT"
  },
  {
    countryName: "Singapore",
    countryCode: "SG"
  },
  {
    countryName: "UnitedStates",
    countryCode: "US"
  },
  {
    countryName: "Vietnam",
    countryCode: "VN"
  },
];
var countryArrayTest = [
  {
    countryName: "China",
    countryCode: "CN"
  },
  {
    countryName: "France",
    countryCode: "FR"
  }, 
  {
    countryName: "Japan",
    countryCode: "JP"
  },
  {
    countryName: "UnitedStates",
    countryCode: "US"
  }
];

console.log(today);
console.log(year);
console.log(month);
console.log(day);

for (let i = 0; i < countryArrayTest.length; i++) {
  const countryElement = countryArrayTest[i];
  // console.log(countryElement);
  console.log(countryElement.countryName);
  // console.log(countryElement.countryCode);

  country = countryElement.countryCode;
  console.log(country);
  var APIUrl = "https://holidayapi.com/v1/holidays?key=" + APIKey + "&country=" + country + "&year=" + year +"&month="+ month + "&day=" + day;
  console.log(APIUrl);

  // console.log(APIUrl);

  fetch(APIUrl)
  .then(function (response) {
    if (response.ok) {
      // console.log(response);
      response.json().then(function (data) {
        // console.log(data);
        if(data.holidays.length !== 0) {
          console.log("These are the holidays for " + data.holidays[0].country + ":");
          console.log(data.holidays);
          var holidayArray = data.holidays

          for (let j = 0; j < holidayArray.length; j++) {
            const dataElement = holidayArray[j];
            console.log(dataElement);
            console.log(dataElement.name);
          }
        }
        // console.log("Sending holiday data to display data function.")
        // displayData(data, country);
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  })
  .catch(function (error) {
    alert('Unable to connect to holiday API.');
  });
}