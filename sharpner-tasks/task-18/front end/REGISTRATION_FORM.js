// var form = document.querySelector("form");
// var ul = document.querySelector("ul");
// let myObj;

// form.addEventListener("submit",onSubmit);

// async function onSubmit(e){
//     e.preventDefault();
    
//     myObj = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         phone: document.getElementById("phone").value,
//     }
    
//    try{
//     const response = await axios.post("http://localhost:8000/user/add-user",myObj);
//     console.log(response);
//     getRequest();
//    } catch(error){
//     console.log(error);
//    }

//    // clear fields
//    document.getElementById("name").value = "";
//    document.getElementById("email").value = "";
//    document.getElementById("phone").value = "";
// }

// async function getRequest(){
//     try{
//         const response = await axios.get("http://localhost:8000/user/get-users");
//         console.log(response);

//         const users = response.data.allUsers; // Extract the users array from the response

//         ul.innerHTML = ''; // clear previous items

//         for(var i=0;i<users.length;i++){
//             showInUi(users[i]);
//         }
//     } catch(error){
//         console.log(error);
//     }
// }

// function showInUi(data){
  
//     var li = document.createElement("li");
//     li.className = "list-group-item mb-2";
//     li.appendChild(document.createTextNode(data.name+" - "+data.phone));
    
//     // add delete button
//     deleteBtn = document.createElement("button");
//     deleteBtn.className = "btn btn-danger btn-sm float-end delete"
//     deleteBtn.appendChild(document.createTextNode("X"));
//     li.appendChild(deleteBtn);

//     ul.appendChild(li);
    
//     // adding functionality to deleteBtn
//     deleteBtn.addEventListener("click",onDeleteClick);

//     async function onDeleteClick(e) {
//         var userId = data.id;
//         console.log('deleting id',userId);
//         // delete HTTP function
//         try {
//             const response = await axios.delete("http://localhost:8000/user/delete-user/" + userId); // Add a slash before the :id parameter
//             console.log(response);
//             getRequest();
//         } catch (error) {
//             console.log(error);
//         }
//     }

// }

// document.addEventListener("DOMContentLoaded",()=>{
//     getRequest();
// });

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var form = document.querySelector("form");
var ul = document.querySelector("ul");
let myObj;

form.addEventListener("submit",onSubmit);

async function onSubmit(e){
    e.preventDefault();
    
    myObj = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
    }
    
   try{
    const response = await axios.post("http://localhost:8000/user/add-user",myObj);
    console.log(response);
    showInUi(response.data.newUserDetails);
   } catch(error){
    console.log(error);
   }

   // clear fields
   document.getElementById("name").value = "";
   document.getElementById("email").value = "";
   document.getElementById("phone").value = "";
}

async function getRequest(){
    try{
        const response = await axios.get("http://localhost:8000/user/get-users");
        console.log(response);

        const users = response.data.allUsers; // Extract the users array from the response

        ul.innerHTML = ''; // clear previous items

        for(var i=0;i<users.length;i++){
            showInUi(users[i]);
        }
    } catch(error){
        console.log(error);
    }
}

function showInUi(data){
  
    var li = document.createElement("li");
    li.className = "list-group-item mb-2";
    li.appendChild(document.createTextNode(data.name+" - "+data.phone));
    
    // add delete button
    deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-end delete"
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);

    ul.appendChild(li);
    
    // adding functionality to deleteBtn
    deleteBtn.addEventListener("click",onDeleteClick);

    async function onDeleteClick(e) {
        var userId = data.id;
        console.log('deleting id',userId);
        // delete HTTP function
        try {
            const response = await axios.delete("http://localhost:8000/user/delete-user/" + userId); // Add a slash before the :id parameter
            console.log(response);
            getRequest();
        } catch (error) {
            console.log(error);
        }
    }

}

document.addEventListener("DOMContentLoaded",()=>{
    getRequest();
});

  


 

























      



















      











