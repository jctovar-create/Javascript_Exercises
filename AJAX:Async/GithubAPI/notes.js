//app.js

//Init Github
const github = new Github;

//Init UI
const ui = new UI;

//Search input
const searchUser = document.getElementById("searchUser");

//Search input event listener
searchUser.addEventListener("keyup", (e) => {
    //Get input text
    const userText = e.target.value;

    if(userText !== ""){
       //Make HTTP call 
       github.getUser(userText)
       .then(data => {
           if(data.profile.message === "Not Found"){
               console.log("error handling here")
               //Show an alert that the users not found
               ui.showAlert("User not found", "alert alert-danger");
           } else { //console.log the profile
            ui.showProfile(data.profile);
           } 
       })
    } else {
        ui.clearProfile();
    }
});

//github.js

class Github {
    constructor(){
        this.client_id = "77a902594648fa5905d3";
        this.client_secret = "6653b97d3d88f72e68cf3fd0c61d2e6c83aed6cb";
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }

    }
}


//ui.js

class UI {
    constructor(){
        this.profile = document.getElementById("profile");
    }
    //display profile in UI
    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span> 
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span> 
                    <span class="badge badge-success">Followers: ${user.followers}</span> 
                    <span class="badge badge-info">Following: ${user.following}</span> 
                    <br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3>Latest Repos</h3>
        <div id="repos"></div>
        `;
    }
    
     //Show alert if user not found
     showAlert(message, className){
        //Clear any remaining alerts
        this.clearAlert();
        //create div
        const div = document.createElement("div");
        // Add Classes
        div.className = className;
        //Add Text
        div.appendChild(document.createTextNode(message));
        //Get parent
        const container = document.querySelector('.searchContainer');
        //get search box
        const search = document.querySelector('.search');
        //insert alert
        container.insertBefore(div, search)
        setTimeout(() => {
            this.clearAlert();
        }, 1200);
    }

    //clear the alert message 
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    //clear profile when nothing is entered
    clearProfile(){
        this.profile.innerHTML = "";
    }
}

