const btnDocSo = document.getElementById('btnDocSo')
const number = document.getElementById('number')
const showDocSo = document.getElementById('showDocSo')


function myFunction3() {
    if (Number(number.value) >= 100 && Number(number.value) <= 999) {
        btnDocSo.disabled = false
    } else {
        btnDocSo.disabled = true
    }
}

btnDocSo.addEventListener('click', e => {
    e.preventDefault()
    let tram = Math.floor(number.value / 100)
    let chuc = Math.floor((number.value - tram * 100) / 10)
    let donVi = number.value - tram * 100 - chuc * 10

    let docTram
    let docChuc
    let docDonVi
    switch (tram) {
        case 1: {
            docTram = 'Một trăm'
            break;
        }

        case 2: {
            docTram = 'Hai trăm'
            break;
        }

        case 3: {
            docTram = 'Ba trăm'
            break;
        }

        case 4: {
            docTram = 'Bốn trăm'
            break;
        }

        case 5: {
            docTram = 'Năm trăm'
            break;
        }

        case 6: {
            docTram = 'Sáu trăm'
            break;
        }

        case 7: {
            docTram = 'Bảy trăm'
            break;
        }

        case 8: {
            docTram = 'Tám trăm'
            break;
        }

        case 9: {
            docTram = 'Chín trăm'
            break;
        }
    }

    switch (chuc) {
        case 1: {
            docChuc = 'mười'
            break;
        }

        case 2: {
            docChuc = 'hai mươi'
            break;
        }

        case 3: {
            docChuc = 'ba mươi'
            break;
        }

        case 4: {
            docChuc = 'bốn mươi'
            break;
        }

        case 5: {
            docChuc = 'năm mươi'
            break;
        }

        case 6: {
            docChuc = 'sáu mươi'
            break;
        }

        case 7: {
            docChuc = 'bảy mươi'
            break;
        }

        case 8: {
            docChuc = 'tám mươi'
            break;
        }

        case 9: {
            docChuc = 'chín mươi'
            break;
        }

        default: {
            if (chuc === 0 && donVi === 0) {
                docChuc = ''
            } else {
                docChuc = 'lẻ'
            }
            break;
        }
    }

    switch (donVi) {
        case 1: {
            docDonVi = 'mốt.'
            break;
        }

        case 2: {
            docDonVi = 'hai.'
            break;
        }

        case 3: {
            docDonVi = 'ba.'
            break;
        }

        case 4: {
            docDonVi = 'bốn.'
            break;
        }

        case 5: {
            docDonVi = 'lăm.'
            break;
        }

        case 6: {
            docDonVi = 'sáu.'
            break;
        }

        case 7: {
            docDonVi = 'bảy.'
            break;
        }

        case 8: {
            docDonVi = 'tám.'
            break;
        }

        case 9: {
            docDonVi = 'chín.'
            break;
        }

        default: {
            docDonVi = 'chẳn.'
            break;
        }
    }

    showDocSo.innerHTML = `Số ${number.value} được đọc là: ${docTram} ${docChuc} ${docDonVi}`
})
