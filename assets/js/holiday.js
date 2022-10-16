/*  VARIABLES  */
/* Global Variable */
var holidayAPIKey = "0f9da6ac-9370-47e6-8772-f0cc0cb723e7";
var holidayButton = document.getElementById('holiday-button');
var today = new Date();
var year = 2021;
var month = today.getMonth() + 1;
var day = today.getDate();
var country;
var holidayObjectArray = [];
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
    countryName: "UnitedStates",
    countryCode: "US",
    ethnicity: "American"
  },
  {
    countryName: "China",
    countryCode: "CN",
    ethnicity: "Chinese"
  },
  {
    countryName: "France",
    countryCode: "FR",
    ethnicity: "French"
  }, 
  {
    countryName: "Japan",
    countryCode: "JP",
    ethnicity: "Japanese"
  },
];

/*  FUNCTIONS  */
/* Fetch Holiday API Function - A function for fetching third-party API data about various holidays in different countries and reformatting that data into a useable 'holiday object' array, which is returned. */
async function getHoliday() {
  for (let i = 0; i < countryArrayTest.length; i++) {
    var countryObject = countryArrayTest[i];
    var country = countryObject.countryCode;
    var ethnicity = countryObject.ethnicity;

    var holidayAPIUrl = "https://holidayapi.com/v1/holidays?key=" + holidayAPIKey + "&country=" + country + "&year=" + year +"&month="+ month + "&day=" + day;
  
    var responseHoliday = await fetch(holidayAPIUrl);
    var holidayExcuseData = await responseHoliday.json();

    if(holidayExcuseData.holidays.length !== 0) {
      var holidayArray = holidayExcuseData.holidays

      for (let j = 0; j < holidayArray.length; j++) {
        var dataElement = holidayArray[j];
        var holidayObject = {
          holiday: dataElement.name,
          country: holidayExcuseData.holidays[0].country,
          ethnicity: ethnicity,
        };
        holidayObjectArray.push(holidayObject);
      }
    }
  }

  return holidayObjectArray;
};