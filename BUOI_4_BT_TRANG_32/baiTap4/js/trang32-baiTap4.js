const btnxaNhat = document.getElementById('btnxaNhat');
const nameA = document.getElementById('nameA');
const xA = document.getElementById('xA');
const yA = document.getElementById('yA');
const nameB = document.getElementById('nameB');
const xB = document.getElementById('xB');
const yB = document.getElementById('yB');
const nameC = document.getElementById('nameC');
const xC = document.getElementById('xC');
const yC = document.getElementById('yC');
const xT = document.getElementById('xT');
const yT = document.getElementById('yT');



const showXaNhat = document.getElementById('showXaNhat');


function myFunction4() {
    if (nameA.value !== '' && nameB.value !== '' && nameC.value !== '' &&
        xA.value !== '' && xB.value !== '' && xC.value !== '' && xT.value !== '' &&
        yA.value !== '' && yB.value !== '' && yC.value !== '' && yT.value !== ''
    ) {
        btnxaNhat.disabled = false;
    }

}

btnxaNhat.addEventListener('click', e => {

    if ((xA.value === xB.value && yA.value === yB.value) ||
        (xA.value === xC.value && yA.value === yC.value) ||
        (xB.value === xC.value && yB.value === yC.value)) {
        btnxaNhat.disabled = true;
        alert('Toạ độ của 3 bạn phải khác nhau.')
    } else {
        e.preventDefault();
        let numberXA = Number(xA.value)
        let numberYA = Number(yA.value)

        let numberXB = Number(xB.value)
        let numberYB = Number(yB.value)

        let numberXC = Number(xC.value)
        let numberYC = Number(yC.value)

        let numberXT = Number(xT.value)
        let numberYT = Number(yT.value)


        let nameXaNhat

        //khai báo biến khoảng cách
        let kcAT
        let kcBT
        let kcCT



        // Tính khoảng cách
        kcAT = Math.sqrt(Math.pow((numberXT - numberXA), 2) + Math.pow((numberYT - numberYA), 2));

        kcBT = Math.sqrt(Math.pow((numberXT - numberXB), 2) + Math.pow((numberYT - numberYB), 2));

        kcCT = Math.sqrt(Math.pow((numberXT - numberXC), 2) + Math.pow((numberYT - numberYC), 2));

        if ((kcAT > kcBT && kcAT > kcCT) || (kcAT > kcBT && kcBT > kcCT) || (kcAT > kcCT && kcCT > kcBT)) {
            nameXaNhat = nameA.value
        } else if ((kcBT > kcAT && kcBT > kcCT) || (kcBT > kcAT && kcAT > kcCT) || (kcBT > kcCT && kcCT > kcAT)) {
            nameXaNhat = nameB.value
        } else if ((kcCT > kcAT && kcCT > kcBT) || (kcCT > kcAT && kcAT > kcBT) || (kcCT > kcBT && kcBT > kcAT)) {
            nameXaNhat = nameC.value
        } else {
            nameXaNhat = 'Đây là trường hợp đặc biệt. Hoặc là 3 toạ độ của 3 bạn trùng nhau. Hoặc là 2 trong số 3 toạ độ trùng nhau và toạ độ đó lại là toạ độ xa nhất. Phản khoa học. MIỄN GIẢI TRƯỜNG HỢP NÀY!'
        }

        showXaNhat.innerHTML = `${nameXaNhat} là bạn ở xa trường nhất.`
        console.log(nameXaNhat + 'la ket qua cuoi cung')
    }
})