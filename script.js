let formulaire = document.querySelector('#formulaire');
let input      = document.querySelector('#prix');
let error      = document.querySelector("small");
let regame     = document.querySelector('#regame');

error.style.display  = "none";
regame.style.display = "none";

let nbAleatoire = Math.floor(Math.random() * 1001);
let coups       = 0;
let nbChoisi;

function verifier(nombre) {
  
    let instruction = document.createElement('div');
  
    if(nombre < nbAleatoire) {
      // C'est plus
      instruction.textContent = "#" + coups + " ( " + nombre + " ) C'est plus !";
      instruction.className = "instruction plus";
    }
    else if(nombre > nbAleatoire) {
      // C'est moins
      instruction.textContent = "#" + coups + " ( " + nombre + " ) C'est moins !";
      instruction.className = "instruction moins";
    }
    else {
      // Félicitations vous avez trouvé le juste prix !
      instruction.textContent = "#" + coups + " ( " + nombre + " ) Félicitations vous avez trouvé le juste prix !";
      instruction.className = "instruction fini";
      input.disabled = true;
      regame.style.display = "inline";
    }
  
    // Ajouter l'élément devant les autres
    document.querySelector('#instructions').prepend(instruction);
  
}

input.addEventListener('keyup', () => {
    if (isNaN(input.value)) {
        error.style.display = "inline";
    } else {
        error.style.display = "none";
    }
})

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();

    if (isNaN(input.value) || input.value == '') {
        input.style.borderColor = "red";
    } 
    else {
        coups ++;
        input.style.borderColor = "silver";
        nbChoisi = input.value;
        input.value = '';
        verifier(nbChoisi);
    }
})