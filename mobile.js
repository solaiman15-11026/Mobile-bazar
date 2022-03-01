// -----------buy alert(extra)--------
const buyAlret = () => {
    alert('Out of service now!')
}

//---------------------------Search phone input work here----------------------------
const seachButton = () => {
    const searchInput = document.getElementById('search-phone')
    const search = searchInput.value;
    searchInput.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`
    fetch(url)
        .then(response => response.json())
        .then(data => searchResult(data.data))
}
const searchResult = phones => {
    //console.log(phones)
    const createDiv = document.getElementById('result-show')
    createDiv.textContent = '';
    phones.forEach(phone => {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="col">
                <div class="card ">
                    <img src="${phone.image}" class="w-50 card-img-top mx-auto" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"><b>Model:</b> ${phone.phone_name}</h5>
                        <h6 class="card-title"><b>Brand:</b> ${phone.brand}</h6>
                        <button onclick="detailsButton('${phone.slug}')" type="button" class="btn btn-primary p-1">Details</button>
                    </div>
                </div> `;
        createDiv.appendChild(div);
    })
}

//------------------------- phone details work here-----------------------------

const detailsButton = findId => {
    const url = `https://openapi.programming-hero.com/api/phone/${findId} `
    fetch(url)
        .then(response => response.json())
        .then(data => detailsResult(data.data))
}

const detailsResult = mobile => {
    console.log(mobile)
    const newDiv = document.getElementById('details-show')
    newDiv.textContent = '';
    const div = document.createElement('div')
    div.innerHTML = `
        <div class="row g-0">
        <div class="col-md-4 my-auto">
            <img src="${mobile.image}" class="rounded-start p-3" alt="...">
        </div>
        <div class="col-md-8 degine">
            <div class="card-body">
                <h4 class="card-title">${mobile.name}</h4>
                <h6 class="card-title mb-3"><b>Release:</b> <small>${mobile.releaseDate ? mobile.releaseDate : 'No-release date found'}</small></h6>
                <h5 class="card-title mb-2 Fdesign"><b>Features:</b></h5>
                <h6 class="card-text mb-1 size"><b>Storage:</b> ${mobile.mainFeatures.storage}</h6>
                <h6 class="card-text mb-1 size"><b>Display:</b> ${mobile.mainFeatures.displaySize}</h6>
                <h6 class="card-text mb-1 size"><b>Chipset:</b> ${mobile.mainFeatures.chipSet}</h6>
                <h6 class="card-text mb-3 size"><b>Sensor:</b> ${mobile.mainFeatures.sensors}</h6>
                <h5 class="card-title mb-2 Fdesign"><b>Others:</b></h5>
                <h6 class="card-text mb-1 size"><b>WLAN:</b> ${mobile.others ? mobile.others.WLAN : 'not found'}</h6>
                <h6 class="card-text mb-1 size"><b>Bluetooth:</b> ${mobile.others ? mobile.others.Bluetooth : 'not found'}</h6>
                <h6 class="card-text mb-1 size"><b>GPS:</b> ${mobile.others ? mobile.others.GPS : 'not found'}</h6>
                <h6 class="card-text mb-1 size"><b>Radio:</b> ${mobile.others ? mobile.others.Radio : 'not found'}</h6>
                <h6 class="card-text size"><b>USB:</b> ${mobile.others ? mobile.others.USB : 'not found'}</h6>
              
            </div>
        </div>
    </div>`
    newDiv.appendChild(div);
}