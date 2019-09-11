const user = new User;

//call first profile
// nextProfile();

//next event 
document.getElementById('next').addEventListener('click', nextProfile);

//next profile display
function nextProfile(){

    user.getUser()
    .then(data => {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${data.profileData.results[0].name.first} ${data.profileData.results[0].name.last}</li>
            <li class="list-group-item">Email: ${data.profileData.results[0].email}</li>
            <li class="list-group-item">Gender: ${data.profileData.results[0].gender}</li>
            <li class="list-group-item">Name: ${data.profileData.results[0].location.city}, ${data.profileData.results[0].location.state}</li>
        </ul>
        `;

        document.getElementById('imageDisplay').innerHTML = `<img src="${data.profileData.results[0].picture.large}">`;

        document.getElementById('next').textContent = "Next";

       


        console.log(data.profileData);
    })
    
}

//Profile Iterator
// function profileIterator(profiles){
//     let nextIndex = 0;

//     return {
//         next: function(){
//             return nextIndex < profiles.length ? 
//             { value: profiles[nextIndex++], done: false } : 
//             { done: true }
//         }
//     };
// }