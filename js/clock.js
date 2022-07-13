
let fullName = prompt("Adinizi Giriniz: ")
Name = document.querySelector("#myName")
Name.innerHTML = fullName

var tarih = new Date();


var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
let saat = new Date().getHours()
let dakika = new Date().getMinutes()
let saniye = new Date().getSeconds()
let ydakika;
if (dakika < 10){
    ydakika = `0${dakika}`
}else{
    ydakika = dakika
}

tar = document.querySelector("#myClock")
tar.innerHTML = `${saat} : ${ydakika} : ${saniye} ${gunler[tarih.getDay()]}`
