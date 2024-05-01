const getEmployees = document.querySelector("#getEmployees");
const tbody = document.querySelector("#tbody");
const loadImage = document.querySelector("#loading");


getEmployees.addEventListener('click',loadEmployee);

function loadEmployee(){

  loadImage.style.display = "block";
  const xhr = new XMLHttpRequest();
  xhr.open('GET','employees.json',true); // true -> asenkron olarak mı gelsin ?

  setTimeout(() =>{

    xhr.onload = function(){
      loadImage.style.display = "none";
      if(this.status === 200){
        let employees = JSON.parse(this.responseText); // string ifadeyi json'a çevirdik. employee -> json tipinde bir obje. 
        
        //this.responseText -> sunucudan gelen string yanıt.
        let html = "";
        employees.forEach(employee => {
          html +=
           `<tr>
          <td>${employee.id}</td>
          <td>${employee.firstName}</td>
          <td>${employee.lastName}</td>
          <td>${employee.age}</td>
          </tr>
          `
        });
        
        
       
        tbody.innerHTML =html;
      }
    }
    xhr.send();


  }, 600);

  

 

  

}