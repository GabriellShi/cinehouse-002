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
ListarTodosOsFilmes(catalogoObj.data);