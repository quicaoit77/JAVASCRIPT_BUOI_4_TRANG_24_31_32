const btnTamGiac = document.getElementById('btnTamGiac')
const canh1 = document.getElementById('canh1')
const canh2 = document.getElementById('canh2')
const canh3 = document.getElementById('canh3')
const showTamGiac = document.getElementById('showTamGiac')


btnTamGiac.addEventListener('click', e => {
    e.preventDefault();
    let a = Number(canh1.value)
    let b = Number(canh2.value)
    let c = Number(canh3.value)


    // validation 
    if (canh1.value === '' || canh2.value === '' || canh3.value === '') {
        alert('Không được bỏ trống.')

        showTamGiac.innerHTML = ``

    } else {

        if ((a === b && c !== b)
            || (a === c && a !== b)
            || (b === c && b !== a)) {

            showTamGiac.innerHTML = `Đây là tam giác cân`

        } else if (a === b && a === c) {

            showTamGiac.innerHTML = `Đây là tam giác đều`

        } else if (Math.pow(a, 2) === (Math.pow(b, 2) + Math.pow(c, 2))
            || Math.pow(b, 2) === (Math.pow(a, 2) + Math.pow(c, 2))
            || Math.pow(c, 2) === (Math.pow(a, 2) + Math.pow(b, 2))) {

            if ((a === b && c !== b)
                || (a === c && a !== b)
                || (b === c && b !== a)) {
                showTamGiac.innerHTML = `Đây là tam giác vuông cân`

            } else {
                showTamGiac.innerHTML = `Đây là tam giác vuông`

            }

        } else {

            showTamGiac.innerHTML = `Đây là tam giác thường`
        }
    }
})