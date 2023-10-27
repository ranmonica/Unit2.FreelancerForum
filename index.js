const freelancers = [
    { name: 'Alice', price: 30, occupation: "Writer" },
    { name: "Bob", price: 50, occupation: "Teacher" },
    { name: "Carol", price: 70, occupation: "Programmer" }, 
];


function renderLancers() {
    let availableLancers = document.querySelector('availableFL')
    for (let i = 0; i < freelancers.length; i++) {
        let currentLancer = freelancers[i]

        let lancerDiv = document.createElement('div')
        lancerDiv.className = 'freelancers'

        lancerDiv.innerHTML = `<h2>${currentLancer.name}</h2>
                                <h3>Price: $ ${currentLancer.price}</h3>
                                <h3>Occupation: $ ${currentLancer.occupation}</h3>`
                                
        availableLancers.appendChild(lancerDiv)
    }
}

render();

function randomlancer() {
    const randomFL = freelancers[Math.floor(Math.random() * freelancers.length)];
}

freelancers.push({name, price, occupation});

render();
