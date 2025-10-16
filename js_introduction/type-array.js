const arrayValor = [1, 2, 3, 4, 5, 6];

console.log(arrayValor);

const arrayObj = [
    {nome: "thigas", idade: 19, socio: true},
    {nome: "pedro", idade: 19, socio: false},
];

console.log('antes', arrayObj);

arrayObj.push(
    {nome: "juao", idade: 10, socio: false},
);

console.log('depois', arrayObj);
