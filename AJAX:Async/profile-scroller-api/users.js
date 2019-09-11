class User {
    constructor(){

    }

    async getUser(){
        const profile = await fetch(`https://randomuser.me/api/`);

        const profileData = await profile.json();
        
        return{
            profileData
        }
    }
}