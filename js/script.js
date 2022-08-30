function sim()
{
    document.getElementById("herois");
    var heroi = document.getElementById("herois").value;

    var qtd = parseInt(document.getElementById("qtd").value);
    console.log(typeof(qtd));

    var lista = document.getElementById("lista");

    var img = document.createElement('img')

    img.src = `../imgs/${heroi}.jpg`


    for(x = 1; x <= qtd; x++)
    {
        lista.innerHTML += `<img src='../imgs/${heroi}.jpg' height='200px'>`;
    }
}