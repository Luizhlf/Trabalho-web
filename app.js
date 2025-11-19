function raspar(doc){
    let noticia = doc.querySelectorAll('._evg')
    let ul = document.createElement('ul')
    noticia.forEach(element => {
        let li = document.createElement('li')
        li.classList.add("item-noticia")
        li.innerHTML = element.innerHTML
        ul.appendChild(li)

  });
  document.body.appendChild(ul)
}


function scraping(){
    fetch("https://proxy.corsfix.com/?https://g1.globo.com/globonews/")
    .then(response => {
        if(!response.ok){
            throw new Error("Chamada HTTP Falhou")
        }
        return response.text()
    })
    .then(dados => {
        let parser = new DOMParser()
        let doc = parser.parseFromString(dados, "text/html")
        raspar(doc)
    })
    .catch(erro => alert(erro))
}

function popularEvento(){
    document.querySelector('#btn').addEventListener("click", evt => {
        scraping()
    })
}

window.onload = popularEvento