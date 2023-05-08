const carArray = [
    
    {
        // CRIANDO UM OBJETO 
        name: 'fries',
        img: 'imagem/fries.png',
    },
    {
        name: 'cheeseburg',
        img: 'imagem/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'imagem/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'imagem/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'imagem/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'imagem/pizza.png'
    },
    {
        // CRIANDO UM OBJETO 
        name: 'fries',
        img: 'imagem/fries.png',
    },
    {
        name: 'cheeseburg',
        img: 'imagem/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'imagem/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'imagem/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'imagem/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'imagem/pizza.png'
    }

]

// FUNÇÃO PARA ESCOLHER UMA IMAGEM ALEATÓRIA
carArray.sort(() => 0.5 - Math.random())

//console.log(carArray) --> USA-SE PARA VERIFICAR SE A FUNÇÃO ESTÁ FUNCIONANDO CORRETAMENTE

const gridDispaly = document.querySelector('#grid') // '#' ESTE SIMBOLA É PARA SELECIONAR O ID
//console.log(gridDispaly)

const resultDisplay = document.querySelector('#result')

let cardsChosen = [] // SEU VALOR SERÁ MODIFICADO 
let cardsChosenIds = [] // SEU VALOR SERÁ MODIFICADO 
//VENCEDOR
const cardsWon = []
// FUNÇÃO PARA CRIAR O TABLADO 
function createBoard () {
    for (let i = 0; i < carArray.length; i++) {
        const card = document.createElement('img') // FUNÇÃO PARA CRIAR AS IMG's
        card.setAttribute('src', 'imagem/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        //console.log(card, i)
        gridDispaly.appendChild(card) // MULTIPLICAR A IMAGEM NA TELA.
    }
}

createBoard() // CHAMANDO A FUNÇÃO PARA VERIFICAÇÃO 

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    console.log(cards)
    console.log("Check for match")

    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'imagem/blank.png')
        cards[optionTwoId].setAttribute('src', 'imagem/blank.png')
        alert('Você clicou na mesma imagem!')
    }

    if (cardsChosen[0] == cardsChosen [1]) {
        alert('Você encontrou o par!')
        cards[optionOneId].setAttribute('src', 'imagem/branco.png')
        cards[optionTwoId].setAttribute('src', 'imagem/branco.png')

        //FUNÇÃO PARA REMOVER A CARTA 
        cards[optionOneId].removeEventListener('clck', flipCard)
        cards[optionTwoId].removeEventListener('clck', flipCard)
        //FUNÇÃO PARA CONTAR AS VITÓRIAS
        cardsWon.push(cardsChosen)
    }
    else {
        cards[optionOneId].setAttribute('src', 'imagem/blank.png')
        cards[optionTwoId].setAttribute('src', 'imagem/blank.png')
        alert('Desculpe, tente novamente!')
    }

    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == carArray.length/2) {
        resultDisplay.textContent = 'Parabéns, você encontrou todas as cartas!'
    }
}





// FUNÇÃO PARA VIRAR CARTA

function flipCard() {

    //console.log(carArray)
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(carArray[cardId].name)
    cardsChosenIds.push(cardId)
    //console.log(carArray[cardId].name)
    //console.log('clicked', cardId)
    //console.log(cardsChosen)
    this.setAttribute('src', carArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }

}