/* 
Ejercicio consiste en adivinar un número, el programa debe permitir registrar la respuesta de una persona,
 y deberá terminar en el momento que alguna persona acierte el número. Al finalizar deberá mostrar quien es el ganador
 y dar las gracias a las personas que participaron.
*/

let personas = [
  {
  name: 'robert',
  word:1
  }, 
  {
    name: 'eduardo',
    word:2
  },
  {
    name: 'felipe',
    word:2
  }, 
  {
    name: 'camilo',
    word:3
  },
  {
    name: 'andres',
    word:5
  },
  {
    name: 'ricardo',
    word:3
  },
]

const answer=5;

function btnFor() {
  for (let i = 0; i < personas.length; i++) {
  const persona = personas[i];
  if (persona.word === answer) {
    alert('Ya tenemos un ganador')
    break
  }
  console.log(persona)
  }

  /*Mostrar el participante que gano */
  for (let i = 0; i < personas.length; i++) {
    const persona = personas[i];
    if (persona.word === answer) {
      console.log (`Felicitaciones ${persona.name} eres el feliz ganador `);
      continue
    } 
    console.log (`Gracias ${persona.name} por participar`);
  }
}

/* Resolviendo el desafio con el ciclo while*/
function btnWhile() {
  let y = 0;
  while (y < personas.length) {
    const person = personas[y];
    y++;
    if (person.word === answer) { 
      alert('Ya tenemos un ganador')
      break
    }
  }

  let i = 0;
  while (i < personas.length) {
    const lista = personas[i];
    i++;
    if (lista.word === answer) { 
      console.log(`Felicitaciones ${lista.name} eres el feliz ganador`);
      continue
    }
    console.log(`Gracias ${lista.name} por participar`);
  }
}