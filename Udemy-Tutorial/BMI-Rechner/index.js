function berechneBMI () {

    let m = document.getElementById("kg").value
    let l = document.getElementById("cm").value
    l = l / 100

    let bmi = m / (l * l)

    alert(bmi)
}