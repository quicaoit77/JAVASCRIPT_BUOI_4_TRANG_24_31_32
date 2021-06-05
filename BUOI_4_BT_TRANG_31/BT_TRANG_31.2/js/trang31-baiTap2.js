const greeting = document.getElementById('greeting')
const btnGreeting = document.getElementById('btnGreeting')
const chaoHoiMessage = document.getElementById('greetingMessage')

btnGreeting.addEventListener('click', e => {
    e.preventDefault()
    switch (chaoHoi.value) {
        case 'B': {
            chaoHoiMessage.innerHTML = "Chào bố!"
            break;
        }
        case 'M': {
            chaoHoiMessage.innerHTML = "Chào mẹ!"
            break;
        }
        case 'A': {
            chaoHoiMessage.innerHTML = "Chào anh trai!"
            break;
        }
        default:
            chaoHoiMessage.innerHTML = "Chào em gái!"
            break;
    }
})