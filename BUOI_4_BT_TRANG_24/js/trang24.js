const btnClassification = document.getElementById('btnClassification');
const nameStudent = document.getElementById('nameStudent');
const math = document.getElementById('math');
const physical = document.getElementById('physical');
const chemistry = document.getElementById('chemistry');
const showResult = document.getElementById('showResult');

const text1 = document.getElementById('text1')
const text2 = document.getElementById('text2')
const text3 = document.getElementById('text3')

let Average





// validation form
const formControl1 = document.querySelectorAll('.form-control-1');
const errorMessage = document.querySelectorAll('.error-message');
var message = ''
formControl1.forEach((formControl, index) => {
    formControl.addEventListener('keyup', e => {
        let Numberpattern = /[0-9]+/
        let TextPattern = /[A-Za-z]+/

        if (!Numberpattern.test(formControl.value) || TextPattern.test(formControl.value) || formControl.value > 10 || formControl.value <= 0) {
            message = 'Giá trị không hợp lệ'
            errorMessage[index].innerHTML = message
            if (message) {
                btnClassification.disabled = true
            }
        } else {
            message = ''
            errorMessage[index].innerHTML = message
            if (math.value !== '' && physical.value !== '' && chemistry.value !== '' && text1.innerHTML === '' && text2.innerHTML === '' && text3.innerHTML === '') {
                btnClassification.disabled = false
            }

        }
    })
})


//xử lý sự kiện onlick (onsubmit)
btnClassification.addEventListener('click', e => {
    Average = Number(((Number(math.value) + Number(physical.value) + Number(chemistry.value)) / 3).toFixed(1))
    var Average

    switch (true) {
        case (Average >= 8.5):
            classification = 'Học sinh giỏi'
            break;

        case (Average >= 6.5 && trungBinh < 8.5):
            classification = 'Học sinh khá'
            break;

        case (Average >= 5 && trungBinh < 6.5):
            classification = 'Học sinh trung bình'
            break;
        default:
            classification = 'Học sinh yếu'
            break;
    }

    showResult.innerHTML = `
        <tt>
            <h4>BẢNG ĐIỂM SINH VIÊN</h4>
            <div class="text-left mt-5">
                <h6><b>Họ và tên: ${nameStudent.value}</b></h6>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Môn</th>
                            <th>Điểm</th>
                            <th>Chú thích</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Toán</td>
                            <td>${math.value}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Lý</td>
                            <td>${physical.value}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Hoá</td>
                            <td>${chemistry.value}</td>
                            <td></td>
                        </tr>

                    </tbody>
                    <tfoot>
                        <tr>
                            <td class="text-center font-weight-bolder" colspan="2">ĐIỂM TRUNG BÌNH:</td>
                            <td class="font-weight-bolder">${Average}</td>
                        </tr>
                    </tfoot>
                </table>
                <h6 class="alert-success p-2"><b>Xếp loại: ${classification}</b></h6>
            </div>
        </tt>
    `
    e.preventDefault()

})

