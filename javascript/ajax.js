var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status == 200){  // Server'ın bize verdiği cevap hazır ve başarılı
        console.log(xhr.responseText);
    }
    else if(xhr.status == 404){
     console.log("Kaynak bulunamadı.")   
    }
   
    }

xhr.onprogress = function(){
    console.log("on progressing");  // Bilgi ekrana getirilirken loading gifi ile kullanıcıya göstermek için.
}

console.log("Hello parafin"); // Önce hello parafin yazdı. Çünkü üstteki kodlar serverdan bilgi bekliyor asenkron olarak çalıştı.
//Üsttekilerin illa bitmesini beklemedi.



xhr.open("GET","/ajax-xhr.txt",true);
xhr.send();