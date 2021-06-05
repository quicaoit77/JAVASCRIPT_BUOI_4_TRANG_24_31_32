const btnInteger = document.getElementById("btnInteger")
const integer1 = document.getElementById("integer1")
const integer2 = document.getElementById("integer2")
const integer3 = document.getElementById("integer3")
const showInteger = document.getElementById("showInteger")


btnInteger.addEventListener('click', e => {
    e.preventDefault();


    // validation 
    if (chanLe1.value === "" || chanLe2.value === "" || chanLe3.value === ""
        || integer1.value.includes(".") || integer2.value.includes(".") || integer3.value.includes(".")
        || integer1.value.includes(",") || integer2.value.includes(",") || integer3.value.includes(",")) {
        alert("Không được bỏ trống và phải là số nguyên.")
        showChanLe.innerHTML = ``

    } else {

        let chan = 0;
        let le = 0;

        Math.abs(chanLe1.value) % 2 === 0 ? chan++ : le++
        Math.abs(chanLe2.value) % 2 === 0 ? chan++ : le++
        Math.abs(chanLe3.value) % 2 === 0 ? chan++ : le++


        showChanLe.innerHTML = `Số chẳn là: ${chan}. Số lẻ là: ${le}`
    }

})