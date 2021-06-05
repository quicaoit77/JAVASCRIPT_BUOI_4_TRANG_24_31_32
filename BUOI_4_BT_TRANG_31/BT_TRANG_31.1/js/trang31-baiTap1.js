const btnSort = document.getElementById("btnSort")
const Int1 = document.getElementById("Int1")
const Int2 = document.getElementById("Int2")
const Int3 = document.getElementById("Int3")
const showSort = document.getElementById("showSort")


sapXepBtn.addEventListener("click", e => {
    let a = Number(Int1.value)
    let b = Number(Int2.value)
    let c = Number(Int3.value)

    e.preventDefault();


    // validation 
    if (Int1.value === "" || Int2.value === "" || Int3.value === ""
        || Int1.value.includes(".") || Int2.value.includes(".") || Int3.value.includes(".")
        || Int1.value.includes(",") || Int2.value.includes(",") || Int3.value.includes(",")) {
        alert("Không được bỏ trống, và phải là số nguyên.")
        showSort.innerHTML = ``

    } else {

        if (a >= b && a >= c && b >= c) {
            showSort.innerHTML = `${Int3.value}, ${Int2.value}, ${Int1.value}`;
        }

        if (b >= a && b >= c && a >= c) {
            showSort.innerHTML = `${Int3.value}, ${Int1.value}, ${Int2.value}`;
        }

        if (a >= b && a >= c && b <= c) {
            showSort.innerHTML = `${Int2.value},  ${Int3.value}, ${Int1.value}`;
        }

        if (c >= a && c >= b && b <= a) {
            showSort.innerHTML = `${Int2.value},  ${Int1.value}, ${Int3.value}`;
        }

        if (a <= b && a <= c && b >= c) {
            showSort.innerHTML = `${Int1.value},  ${Int3.value}, ${Int2.value}`;

        }

        if (a <= b && a <= c && b <= c) {
            showSort.innerHTML = `${Int1.value},  ${Int2.value}, ${Int3.value}`;

        }
    }




})