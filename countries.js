const loadCountries = () => {
  fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries()
const displayCountries = countries => {
  const countryDiv = document.getElementById('countries')
  //    for(const country of countries){
  //        const p=document.createElement('p')
  //        p.innerText=`Country Name:${country.name}`
  //        countryDiv.appendChild(p)

  //    }
  countries.forEach(country => {
    const div = document.createElement('div')
    div.classList.add('country-list')
    div.innerHTML = `
        <h3>Country Name : ${country.name}</h3>
        <p>Capital Name :${country.capital}</p> 
        <p>Population : ${country.population}</p>
        <button onclick="loadCountryByName( '${country.name}')"> Details </button>
          `;
    // const h3=document.createElement('h3')
    // h3.innerText=`Country Name : ${country.name}`
    // const p=document.createElement('p')
    // const p1=document.createElement('p')
    //  p.innerText=`Country Capital : ${country.capital}`
    //  p1.innerText=`Country Population : ${country.population}`
    //   div.appendChild(h3)
    // div.appendChild(p)
    // div.appendChild(p1)
    countryDiv.appendChild(div)
  })
}
const loadCountryByName = name => {

  const url = `https://restcountries.eu/rest/v2/name/${name}`
  fetch(url)
    // fetch('https://restcountries.eu/rest/v2/name/{name}')
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}
const displayCountryDetail = country => {
  const countrydetailsDiv = document.getElementById('country-details')
  countrydetailsDiv.innerHTML = `<h5>${country.name}</h5>
  <p>${country.population}</p>
  <img width="200px" src="${country.flag}"></img>`
}