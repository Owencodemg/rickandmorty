
let img = document.getElementById('img-back')
new simpleParallax(img, {scale: 1.5})

const darkModeInput = document.getElementById('darkmode');

darkModeInput.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark:bg-slate-900')
})
darkModeInput.addEventListener('click', () => {
    document.documentElement.classList.toggle('text-white')
})

let urlBase = 'https://rickandmortyapi.com/api'
let characterApi = '/character'

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})

const fetchData = async () => {
    try {
        loadindData(true);

        const res = await fetch(`${urlBase}`+`${characterApi}`);
        const data = await res.json();
        console.log(data)
        pintarCard(data)
    } catch (error) {
        console.log(error);
    }finally {
        loadindData(false);
    }
}

const pintarCard = (data) => {
    const cards = document.getElementById('card-dinamicas')
    const templateCard = document.getElementById('card-template').content;
    const fragment = document.createDocumentFragment()

    data.results.forEach((item) => {
    
        const clone = templateCard.cloneNode(true);
        clone.querySelector("h3").textContent = item.name;
        clone.querySelector("p").textContent = item.species;
        clone.querySelector(".gender").textContent = item.gender;
        clone.querySelector(".created").textContent = item.location.name;
        clone.querySelector(".status").textContent = item.status;

        clone.querySelector("#imgtop").setAttribute("src",item.image);

        fragment.appendChild(clone);
    });

    cards.appendChild(fragment)
}

const loadindData = estado => {
    const loading = document.getElementById('loading')
    if(estado){
        loading.classList.remove('hidden')
    } else {
        loading.classList.add('hidden')
    }

}



// window.sr = ScrollReveal();

//     sr.reveal('titlereveal', {
//         duration: 3000,
//         origin : 'top' ,
//         distance : '-100px'

//     })

ScrollReveal().reveal('.titlereveal', { delay: 500 });
ScrollReveal().reveal('.personajes', { delay: 500 });
ScrollReveal().reveal('.letterpersonajes', { delay: 500 });
ScrollReveal().reveal('.card-template', { delay: 1000 });
