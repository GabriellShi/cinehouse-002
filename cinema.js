var catalogo = require("./catalogo.json")
console.log(catalogo.data)
var catalogoString = JSON.stringify(catalogo);
var catalogoObj = JSON.parse(catalogoString);
// console.log(catalogoObj)

function ListarTodosOsFilmes(filmes) {
    for (let i = 0; i < filmes.length; i++) {
        console.log(filmes[ i ].titulo);
    }
}
// ListarTodosOsFilmes(catalogoObj.data);


// function listarFilmesEmCartaz(filmes) {
//     const filmesEmCartaz = filmes.filter((filme) => {
//       if (filme.emCartaz === true) {
//         return true;
//       }
//     });
//     return filmesEmCartaz;
//   }
//   console.log(listarFilmesEmCartaz(catalogoObj.data));



// const listarFilmesEmCartaz = (filmes) =>
//   filmes.filter((filme) => filme.emCartaz);

function listarFilmesEmCartaz(filmes) {
    return filmes.filter((filme) => filme.emCartaz);
  }
  console.log(listarFilmesEmCartaz(catalogoObj.data));