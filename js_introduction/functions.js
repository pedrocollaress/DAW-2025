// func without return
function init() {
    const message = "estou iniciando"
    console.log(message);
}

// func with return
function process() {
    const message = 'estou processando';
    return message;
}

init();

const processed = process();
console.log(processed);
