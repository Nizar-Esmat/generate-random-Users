
function fetchdata() {
  showSpinner(); 

  fetch("https://randomuser.me/api/") 
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      return res.json();
    })
    .then((data) => {
      postdata(data.results[0]); 
      hideSpinner(); 
    })
    .catch((err) => {
      console.error(err); 
      document.getElementById("user").innerHTML = `
        <p class="text-red-500 text-center text-2xl">${err.message}</p>
      `; 
      hideSpinner(); 
    });
}


function postdata(data) {
  if(data.gender === "female"){
    document.body.style.backgroundColor="#BFDBF7"
  }else{
    document.body.style.backgroundColor="#E1E5F2"
  }
  createData(data)
}

function createData(data){
  document.getElementById("user").innerHTML=
    `      <div id="user" class="mt-6">
        <div class="flex justify-between">
         <div class="flex">
           <img
             class="w-48 h-48 rounded-full mr-8"
             src=${data.picture.medium}
           />
           <div class="space-y-3">
             <p class="text-xl">
               <span class="font-bold">Name: </span>${data.name.first} ${data.name.last}
             </p>
             <p class="text-xl">
               <span class="font-bold">Email: </span> ${data.email}
             </p>
             <p class="text-xl">
               <span class="font-bold">Phone: </span> ${data.phone  }
             </p>
             <p class="text-xl">
               <span class="font-bold">Location: </span> ${data.location.city}
             </p>
             <p class="text-xl"><span class="font-bold">Age: </span> ${data.dob.age}</p>
           </div>
         </div>
       </div>
     </div>`
  
}

function showSpinner(){
  document.querySelector(".spinner").classList.remove("hidden")
}

function hideSpinner(){
  document.querySelector(".spinner").classList.add("hidden")
}
document.getElementById("generate").addEventListener("click" , fetchdata)
fetchdata()

