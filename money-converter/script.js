import currencyapi from '@everapi/currencyapi-js'
const client = new currencyapi('cur_live_1zAapSrlTbipUn9ggt4lvMGqI96FAlUELwN8gyLu')
let currencydata = await client.latest()


let isUpdating = false;

function updateSecondInput() {
    if (isUpdating) return;
    isUpdating = true;
    let firstValue = document.getElementById("pounds").value;
    let secondValue = firstValue * 1.18;
    document.getElementById("euros").value = secondValue;
    isUpdating = false;
}

function updateFirstInput() {
    if (isUpdating) return;
    isUpdating = true;
    let secondValue = document.getElementById("euros").value;
    let firstValue = secondValue / 1.18;
    document.getElementById("pounds").value = firstValue;
    isUpdating = false;
}