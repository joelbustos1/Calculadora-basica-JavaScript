const operaciones = require("./operaciones");
// El método match de JavaScript se usa para buscar coincidencias en una cadena de texto utilizando una expresión regular. Devuelve un array con las coincidencias encontradas o null si no hay coincidencias.
// ejemplo 4+5. match = ["4+5", "4", "+", "5"]
function parsearTerminos(texto) {
  const regex = /(\d+)([\+\-\*\/])(\d+)/;
  const match = texto.match(regex);
  if (match) {
    return {
      primerTermino: parseInt(match[1], 10),
      segundoTermino: parseInt(match[3], 10),
      operacion: match[2],
    };
  }
}

function ejecutarOperacion(objetoOperacion) {
  const mapa = {
    "+": operaciones.suma,
    "-": operaciones.resta,
    "/": operaciones.division,
    "*": operaciones.multiplicacion,
  };
  const simbolo = objetoOperacion.operacion;
  const ejecutor = mapa[simbolo];
  return ejecutor(
    objetoOperacion.primerTermino,
    objetoOperacion.segundoTermino
  );
}

function main() {
  const operacionParseada = parsearTerminos(process.argv[2]);
  console.log(ejecutarOperacion(operacionParseada));
}

main();
