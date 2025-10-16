const init = () => {
    console.log('init');
}

const end = () => {
    console.log('end');
}

const process = (ini, final) => {
    ini();
    final();
}

process(init, end);

process(() => {console.log('init 1')}, () => {console.log('end 2')})