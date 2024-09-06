alert("hai");
async function getData(){
    try{
        const res=await fetch("http://localhost:3000/getdonors")
        const data= await res.json();
        console.log(data);
        str=``
        data.map((donor)=>{
            console.log(donor);
            
            str+=` <div class="div1">
            <label for="input"></label>
            <input type="text" value=${donor.name}  id="name-${id}" placeholder="name" disabled=true>
            <input type="text" value=${donor.email} id="email-${id}"  placeholder="email" disabled=true>
            <input type="text" value=${donor.phone} id="phone-${id}"  placeholder="phone" disabled=true>
        </div>
        <div class="div2">
            <input type="text" value=${donor.bloodgroup} id="bloodgroup-${id}" placeholder="blood group" disabled=true>
            <input type="text" value=${donor.gender} id="gender-${id}" placeholder="gender" disabled=true>
        </div>
        
        <div class="btn1">
            <button onclick="handleEdit('${donor._id}')">Edit</button>
            <button onclick="hanldeSave('${donor._id}')">Save</button>
            <button onclick="handleDelete('${donor._id}')">Delete</button>
        </div>
            
            `
        })
        
    }catch(error){
        console.log(error);
        
    }
    document.getElementById("main").innerHTML=str;
}
getData();

//edit data
// ---------------------------------------------------------------------------
function handleEdit(id){
    //to get the id of each input field and make it disabled to false
    document.getElementById(`name-${id}`).disabled=false
    document.getElementById(`email-${id}`).disabled=false
    document.getElementById(`phone-${id}`).disabled=false
    document.getElementById(`bloodgroup-${id}`).disabled=false
    document.getElementById(`gender-${id}`).disabled=false
}
handleEdit()
//delete
async function handleDelete(id){

    //request
    const res= await fetch("http://localhost:3000/delete",{
        method:"delete",
        headers:{"Content-Type":"type/plain"},
        body:id

    });
console.log(res);

    //get response from the server

     //one way
    // // ---------------------------------------------------
    const data =await res.text()
    // console.log(data);
    // getData()
  
    res.status==200?alert(data):alert(data);
    getData()
   
}
handleDelete()