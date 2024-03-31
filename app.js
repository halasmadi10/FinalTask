let form = document.getElementById("taskForm");
let card = document.getElementById("taskCards");



form.addEventListener('submit',(event)=>
{
    event.preventDefault();


    let firstName = event.target.first;  // first == name of firstnameinput;
    let lastName = event.target.last;
    let email = event.target.e_mail;
    let phone = event.target.phonenum;
    let dob = event.target.birth;
    let gender = event.target.mf;
    let address = event.target.addr;

    if(firstName.value !== "" &&  lastName.value !=="" &&  email.value !=="" && phone.value !==""
    &&  dob.value !=="" &&  gender.value !=="" && address.value !==""){

        createCard(firstName.value,lastName.value,email.value,phone.value,
                    dob.value,gender.value,address.value );

                    firstName.value = "";
           lastName.value = "";
           email.value = "";
           phone.value = "";
           dob.value = "";
           gender.value = "";
           address.value = "";

       }else{
        alert("Enter  The Info ")
       }

})



 const createCard = (firstName, lastName, email, phone, dob, gender, address) => {
    // Create Bootstrap card HTML structure
    let cardHTML = `
        <div class="col-md-6">
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${firstName} ${lastName}</h5>
                    <p class="card-text"><strong>Email:</strong> ${email}</p>
                    <p class="card-text"><strong>Phone:</strong> ${phone}</p>
                    <p class="card-text"><strong>Date of Birth:</strong> ${dob}</p>
                    <p class="card-text"><strong>Gender:</strong> ${gender}</p>
                    <p class="card-text"><strong>Address:</strong> ${address}</p>
                </div>
            </div>
        </div>
    `;

    // Append the card HTML to the taskCards container
    card.innerHTML += cardHTML;
    form.reset();

 
};



const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', function() {
        form.reset();
    });
