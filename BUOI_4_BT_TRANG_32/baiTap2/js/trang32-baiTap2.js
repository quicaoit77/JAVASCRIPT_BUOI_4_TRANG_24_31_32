const btnDocSo = document.getElementById('btnDocSo')
const thang = document.getElementById('thang')
const nam = document.getElementById('nam')
const showSoNgay = document.getElementById('showSoNgay')

// validation

function myFunction2() {
    if (Number(thang.value) > 12 || Number(thang.value) < 0) {
        alert('Tháng phải là số từ 1 đến 12.')
        thang.value = ''
    }
}

btnDocSo.addEventListener('click', e => {
    e.preventDefault()

    if (thang.value === '' || nam.value === '' || Number(nam.value) < 0 || Number(thang.value) === 0) {
        alert(' Không được bỏ trống ')
    } else {
        let t = Number(thang.value)
        let n = Number(nam.value)
        let soNgay
        if (n % 4 === 0 || n % 400 === 0) {
            if (t === 1 || t === 3 || t === 5 || t === 7 || t === 8 || t === 10 || t === 12) {
                soNgay = 31;
            } else if (t === 4 || t === 6 || t === 9 || t === 11) {
                soNgay = 30;
            } else {
                soNgay = 29;
            }
        } else {
            if (t === 1 || t === 3 || t === 5 || t === 7 || t === 8 || t === 10 || t === 12) {
                soNgay = 31;
            } else if (t === 4 || t === 6 || t === 9 || t === 11) {
                soNgay = 30;
            } else {
                soNgay = 28;
            }
        }

        showSoNgay.innerHTML = `<span class="p-2 py-3 d-inline-block"> Tháng ${thang.value} có ${soNgay} ngày.`
        console.log(soNgay)
    }

})