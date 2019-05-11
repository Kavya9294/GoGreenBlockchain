function processDataForBlockchain(){

}

function getDataFromBlockchain(){

}

function getCountryDetails() {
  country = {}
  country = {
    "name": "India",
    "CarbonToken": 45.08361,
    "img" : "indiaFlag.png"
  }

  getToday()

  return country;

}

function getToday(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        var span = document.getElementById('dispDate');
       span.appendChild(document.createTextNode(today) )
     }

