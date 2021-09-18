const preloader = document.querySelector("img#loader");
const items = document.querySelector("div#items");
const currencyUrl = "https://netology-slow-rest.herokuapp.com";

const request = new XMLHttpRequest();
request.open("GET", currencyUrl, true);
request.onloadstart = function (e) {
    preloader.classList.add("loader_active");
}
request.onloadend = function (e) {
    preloader.classList.remove("loader_active");
}

request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        const courses = response.response.Valute;
        console.log(courses);
        for (prop in courses) {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add("item");
            const itemCode = document.createElement('div');
            itemCode.classList.add("item__code");
            const itemValue = document.createElement('div');
            itemValue.classList.add("item__value");
            const itemCurrency = document.createElement('div');
            itemCurrency.classList.add("item__currency");
            itemCode.textContent = courses[prop].CharCode;
            itemValue.textContent = courses[prop].Value;
            itemCurrency.textContent = "руб.";
            itemDiv.append(itemCode);
            itemDiv.append(itemValue);
            itemDiv.append(itemCurrency);
            items.append(itemDiv);
        }
    }
};

request.send();

