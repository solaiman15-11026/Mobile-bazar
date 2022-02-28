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
const searchResult = data => {
    console.log(data)
    const createDiv = document.getElementById('result-show')
    for (let phone of data) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="col">
                <div class="card h-100">
                    <img height-50% src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <h6 class="card-title">${phone.brand}</h6>
                    </div>
                </div> `
        createDiv.appendChild(div)
    }
}