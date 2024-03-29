class Github {
    constructor(){
        this.client_id = "77a902594648fa5905d3";
        this.client_secret = "6653b97d3d88f72e68cf3fd0c61d2e6c83aed6cb";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id${this.client_id}&client_secret=${this.client_secret}`)

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json();

        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}