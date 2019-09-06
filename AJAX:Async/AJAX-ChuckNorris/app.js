document.getElementById("button").addEventListener("click", loadJoke);

function loadJoke(e){
    const number = document.getElementById("number").value;

    const xhr = new XMLHttpRequest();

    xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`,true);

    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText).value;
            console.log(response);
        

        let output = "";
        response.forEach(function(joke){
            output += `
            <li>${joke.joke}</li>
            `;
        });
        document.querySelector("#jokes").innerHTML = output;
    }
}
    

    xhr.send();

    
    e.preventDefault();
}