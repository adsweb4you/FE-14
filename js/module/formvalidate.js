   function getpost(url,  output) {
    
    fetch(url)
    .then(response => response.json())
    .then(resp => {
       for (let s = 0; s < resp.length; s++) {
           const element = resp[s];
           output.innerHTML += `<p>${element.title}</p>`
       }
    })

  }
 


  export   {getpost }