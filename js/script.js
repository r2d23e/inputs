let doc = document

let but = doc.querySelector('.but1')
let need = doc.querySelectorAll('.need')
let form = doc.querySelector('form')
let all_inp = doc.querySelectorAll('.input')
let erro = doc.querySelector('.error')
let succ = doc.querySelector('.succ')
let num = 0


succ.innerHTML = '0'
let all = 12
erro.innerHTML = '0'

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let mass1 = []
    let mass2 = []
    let mass3 = []

    
    for (let i of need) {
        if (i.value != '') {
            i.classList.add('border')
            i.classList.remove('r_border')
            mass3.push(i.value)

            if (mass3.length == 7) {
                const formdata = new FormData(event.target)
                const keys = Object.fromEntries(formdata.entries())
                console.log(keys);
                let hulu = JSON.stringify(keys)
                console.log(hulu);
            }
        }
        else {
            i.classList.add('r_border')
        }
    }


    for (let it of all_inp) {

        if (it.value != "") {
            mass1.push(it)
            num = mass1.length
            succ.innerHTML = num
        }
        else {
            mass2.push(it)
            all = mass2.length
            erro.innerHTML = all
        }
    }

})



for (let bg of need) {
    bg.classList.add('border')
}
