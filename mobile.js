// -----------buy alert(extra)--------
const buyAlret = () => {
    alert('Out of service now!')
}

//Search phone input work here--------
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
    //console.log(data)
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
                    </div>
                </div> `;
        createDiv.appendChild(div);
    })
}