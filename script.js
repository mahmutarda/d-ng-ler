// For döngüsü
for(var i = 0; i <= 5; i++) {
    // Her döngüde bir uyarı penceresi görüntülenir
    alert("Döngü Değeri: " + i);
}

// forEach döngüsü
var isimler = ["ahmet", "mehmet", "can"];
isimler.forEach((isim) => {
    // Her isim için bir uyarı penceresi görüntülenir
    alert(isim);
});

// For döngüsü (dizinin elemanlarını numaralandırma)
for(var i = 0; i < isimler.length; i++) {
    // Her ismin sırasıyla konsola yazdırılması
    console.log(i + 1 + ". isim: " + isimler[i]);
}

// While döngüsü
var dd = 15;
while (dd > 5){
    // dd değeri 5'ten büyük olduğu sürece konsola yazdırılır
    console.log("dd = " + dd);
    // dd değeri her döngüde bir azaltılır
    dd -= 1;
}
