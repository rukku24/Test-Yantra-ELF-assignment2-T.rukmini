demo.addEventListener('click',function(){

    let movie=document.getElementById("movie");
  let demo=document.getElementById("b");
  let show=movie.value
    url1='http://www.omdbapi.com/?s='
  
    url3='&apikey=d0c2d96b'
  
    let url2=url1.concat(show)
   let url4=url2.concat(url3)
  console.log(url4);
  
  fetch(url4)
    .then(response => response.json())
    .then(json => 
      {
              const {Title,Poster,Search}=json
              console.log(Title,Poster)
              for (const key in Search) {
                const {Title,Poster}=Search[key]
                console.log(json)
              const div1= document.createElement("div");
              div1.className="card"
              const div2= document.createElement("div");
              div2.className="card-body"
              const img=document.createElement("img")
              img.src=Poster
          
              const p1=document.createElement("p")
              p1.className="card-text"
              p1.textContent =Title
            
              
              div2.appendChild(p1)
              
  
              
              div1.appendChild(img)
              div1.appendChild(div2)
  
              document.body.appendChild(div1)
              
              }
             
              
             
      })
      
    })
  