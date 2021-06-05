let date = document.getElementById('date')
let month = document.getElementById('month')
let year = document.getElementById('year')

const prev = document.getElementById('prev')
const next = document.getElementById('next')


// validation


function myFunction () {
    if (Number(date.value) > 31 || Number(date.value) < 0 || Number(month.value) >12 || Number(month.value) < 0) {
        alert('Giá trị nhập vào không chính xác. Ngày phải là số lớn hơn 0 và bé hơn hoặc bằng 31. Tháng phải là số lớn hơn 0 và bé hơn hoặc bằng 12.')
        date.value = ''
        month.value = ''
    }
}


prev.addEventListener('click', e => {  /////////////////////////// PREV ///////////////////////////////////
    let d = Number(date.value);
    let m = Number(month.value);
    let y = Number(year.value);
    // console.log(d, m, y)
    if (y%4 == 0 || y%400 ==0) {                                                //nam nhuan
        if (m === 1 || m === 01) { //thang 1
            if (d < 2) {
                date.value = "31";
                month.value = "12"
                year.value--
            } else {
                date.value--
            }
        } else if (m === 2 || m === 02) { //thang 2
            if(d < 2) {
                date.value = "31";
                month.value = "01"
            } else {
                date.value--
            }
        } else if (m === 3 || m === 03) { //thang 3
            if(d < 2) {
                date.value = "29";
                month.value = "02"
            } else {
                date.value--
            }
        } else if (m === 4 || m === 04) { //thang 4
            if(d < 2) {
                date.value = "31";
                month.value = "03"
            } else {
                date.value--
            }
        } else if (m === 5 || m === 05) { //thang 5
            if(d < 2) {
                date.value = "30";
                month.value = "04"
            } else {
                date.value--
            }
        } else if (m === 6 || m === 06) { //thang 6
            if(d < 2) {
                date.value = "31";
                month.value = "05"
            } else {
                date.value--
            }
        } else if (m === 7 || m === 07) { //thang 7
            if(d < 2) {
                date.value = "30";
                month.value = "06"
            } else {
                date.value--
            }
        } else if (m === 8 || m === 08) { //thang 8
            if(d < 2) {
                date.value = "31";
                month.value = "07"
            } else {
                date.value--
            }
        } else if (m === 9 || m === 09) { //thang 9
            if(d < 2) {
                date.value = "31";
                month.value = "08"
            } else {
                date.value--
            }
        } else if (m === 10) { //thang 10
            if(d < 2) {
                date.value = "30";
                month.value = "09"
            } else {
                date.value--
            }
        } else if (m === 11) { //thang 11
            if(d < 2) {
                date.value = "31";
                month.value = "10"
            } else {
                date.value--
            }
        } else if (m === 12) { //thang 12
            if(d < 2) {
                date.value = "30";
                month.value = "11"
            } else {
                date.value--
            }
        } 
    } else if (y%4 != 0 && y%400!=0) {                                                     //nam khong nhuan
        if (m === 1 || m === 01) { //thang 1
            if (d < 2) {
                date.value = "31";
                month.value = "12"
                year.value--
            } else {
                date.value--
            }
        } else if (m === 2 || m === 02) { //thang 2
            if(d < 2) {
                date.value = "31";
                month.value = "01"
            } else {
                date.value--
            }
        } else if (m === 3 || m === 03) { //thang 3
            if(d < 2) {
                date.value = "28";
                month.value = "02"
            } else {
                date.value--
            }
        } else if (m === 4 || m === 04) { //thang 4
            if(d < 2) {
                date.value = "31";
                month.value = "03"
            } else {
                date.value--
            }
        } else if (m === 5 || m === 05) { //thang 5
            if(d < 2) {
                date.value = "30";
                month.value = "04"
            } else {
                date.value--
            }
        } else if (m === 6 || m === 06) { //thang 6
            if(d < 2) {
                date.value = "31";
                month.value = "05"
            } else {
                date.value--
            }
        } else if (m === 7 || m === 07) { //thang 7
            if(d < 2) {
                date.value = "30";
                month.value = "06"
            } else {
                date.value--
            }
        } else if (m === 8 || m === 08) { //thang 8
            if(d < 2) {
                date.value = "31";
                month.value = "07"
            } else {
                date.value--
            }
        } else if (m === 9 || m === 09) { //thang 9
            if(d < 2) {
                date.value = "31";
                month.value = "08"
            } else {
                date.value--
            }
        } else if (m === 10) { //thang 10
            if(d < 2) {
                date.value = "30";
                month.value = "09"
            } else {
                date.value--
            }
        } else if (m === 11) { //thang 11
            if(d < 2) {
                date.value = "31";
                month.value = "10"
            } else {
                date.value--
            }
        } else if (m === 12) { //thang 12
            if(d < 2) {
                date.value = "30";
                month.value = "11"
            } else {
                date.value--
            }
        }
    }

    // date.value--
    // month.value++
})



next.addEventListener('click', e => {   /////////////////////////// NEXT ///////////////////////////////////
    let d = Number(date.value);
    let m = Number(month.value);
    let y = Number(year.value);
    // console.log(d, m, y)
    if (y%4 == 0 || y%400 ==0) {                                                //nam nhuan
        if (m === 1 || m === 01) { //thang 1
            if (d > 30) {
                date.value = "01";
                month.value = "02"
            } else {
                date.value++
            }
        } else if (m === 2 || m === 02) { //thang 2
            if(d > 28) {
                date.value = "01";
                month.value = "03"
            } else {
                date.value++
            }
        } else if (m === 3 || m === 03) { //thang 3
            if(d > 30) {
                date.value = "01";
                month.value = "04"
            } else {
                date.value++
            }
        } else if (m === 4 || m === 04) { //thang 4
            if(d > 29) {
                date.value = "01";
                month.value = "05"
            } else {
                date.value++
            }
        } else if (m === 5 || m === 05) { //thang 5
            if(d > 30) {
                date.value = "01";
                month.value = "06"
            } else {
                date.value++
            }
        } else if (m === 6 || m === 06) { //thang 6
            if(d > 29) {
                date.value = "01";
                month.value = "07"
            } else {
                date.value++
            }
        } else if (m === 7 || m === 07) { //thang 7
            if(d > 30) {
                date.value = "01";
                month.value = "08"
            } else {
                date.value++
            }
        } else if (m === 8 || m === 08) { //thang 8
            if(d > 30) {
                date.value = "01";
                month.value = "09"
            } else {
                date.value++
            }
        } else if (m === 9 || m === 09) { //thang 9
            if(d > 29) {
                date.value = "01";
                month.value = "10"
            } else {
                date.value++
            }
        } else if (m === 10) { //thang 10
            if(d > 30) {
                date.value = "01";
                month.value = "11"
            } else {
                date.value++
            }
        } else if (m === 11) { //thang 11
            if(d > 29) {
                date.value = "01";
                month.value = "12"
            } else {
                date.value++
            }
        } else if (m === 12) { //thang 12
            if(d > 30) {
                date.value = "01";
                month.value = "01"
                year.value++
            } else {
                date.value++
            }
        } 
    } else if (y%4 != 0 && y%400!=0) {                                                     //nam khong nhuan
        if (m === 1 || m === 01) { //thang 1
            if (d > 30) {
                date.value = "01";
                month.value = "02"
            } else {
                date.value++
            }
        } else if (m === 2 || m === 02) { //thang 2
            if(d > 27) {
                date.value = "01";
                month.value = "03"
            } else {
                date.value++
            }
        } else if (m === 3 || m === 03) { //thang 3
            if(d > 30) {
                date.value = "01";
                month.value = "04"
            } else {
                date.value++
            }
        } else if (m === 4 || m === 04) { //thang 4
            if(d > 29) {
                date.value = "01";
                month.value = "05"
            } else {
                date.value++
            }
        } else if (m === 5 || m === 05) { //thang 5
            if(d > 30) {
                date.value = "01";
                month.value = "06"
            } else {
                date.value++
            }
        } else if (m === 6 || m === 06) { //thang 6
            if(d > 29) {
                date.value = "01";
                month.value = "07"
            } else {
                date.value++
            }
        } else if (m === 7 || m === 07) { //thang 7
            if(d > 30) {
                date.value = "01";
                month.value = "08"
            } else {
                date.value++
            }
        } else if (m === 8 || m === 08) { //thang 8
            if(d > 30) {
                date.value = "01";
                month.value = "09"
            } else {
                date.value++
            }
        } else if (m === 9 || m === 09) { //thang 9
            if(d > 29) {
                date.value = "01";
                month.value = "10"
            } else {
                date.value++
            }
        } else if (m === 10) { //thang 10
            if(d > 30) {
                date.value = "01";
                month.value = "11"
            } else {
                date.value++
            }
        } else if (m === 11) { //thang 11
            if(d > 29) {
                date.value = "01";
                month.value = "12"
            } else {
                date.value++
            }
        } else if (m === 12) { //thang 12
            if(d > 30) {
                date.value = "01";
                month.value = "01"
                year.value++
            } else {
                date.value++
            }
        } 
    }
})
