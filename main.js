let apiURL = "https://covid19.ddc.moph.go.th/api/Cases";
let currentDate = document.querySelector('.current-date');
let updatedDate = document.querySelector('.updated-date')
let newCase = document.querySelector('.new-case');
let totalCase = document.querySelector('.total-case');
let newDeath = document.querySelector('.new-death');
let totalDeath = document.querySelector('.total-death');
let newRecovered = document.querySelector('.new-recovered');
let totalRecovered = document.querySelector('.total-recovered');
let table = document.getElementById('countries-stat');


function getCovidDaily() {
    axios.get(apiURL + '/today-cases-all')
    .then(function(response) {
        currentDate.innerHTML = response.data[0].txn_date;
        updatedDate.innerHTML = response.data[0].update_date;
        newCase.innerHTML = response.data[0].new_case;
        totalCase.innerHTML = response.data[0].total_case;
        newDeath.innerHTML = response.data[0].new_death;
        totalDeath.innerHTML = response.data[0].total_death;
        newRecovered.innerHTML = response.data[0].new_recovered;
        totalRecovered.innerHTML = response.data[0].total_recovered;
    })
    .catch(function(error) {
        console.log(error);
    })
}

function getProvinceData() {
    axios.get(apiURL + '/today-cases-by-provinces')
    .then(function(response) {
        let countProvince = 78;
        for(let i=0; i < countProvince; i++) {
            // console.log(response.data[i].province); 
            let row = table.insertRow(i+1);
            let province = row.insertCell(0);
            let newCase = row.insertCell(1);
            let totalCase = row.insertCell(2);
            let newDeath = row.insertCell(3);
            let totalDeath = row.insertCell(4);
       
            province.innerHTML = response.data[i].province;
            newCase.innerHTML = response.data[i].new_case;
            totalCase.innerHTML = response.data[i].total_case;
            newDeath.innerHTML = response.data[i].new_death;
            totalDeath.innerHTML = response.data[i].total_death;
        }
    })
    .catch(function(error) {
        console.log(error);
    })
}

getCovidDaily();
getProvinceData();