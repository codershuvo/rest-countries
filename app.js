fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data))

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div'); 
        countryDiv.className = 'country';
        const countryInfo = `
        <a class="display-link" href="#0" onclick="displayCountryDetail('${country.name}')">
            <h3 class="name">${country.name}</h3>
            <p class="capital">${country.capital}</p>
        </a>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });

}

const displayCountryDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`; 
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = country => {
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `
        <h1>${country.name}</h1>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <img src="${country.flag}">
    `; 
}