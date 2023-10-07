function calcular() {

    const a = document.getElementById('a').value
    const b = document.getElementById('b').value
    const c = document.getElementById('c').value
    let msg = ``;
    let msg_vazio = ``;

    const delta = (b ** 2) - (4 * a * c)
    const raiz = Math.sqrt(delta)

    if (a <= 0) {
        msg = msg + `A não pode ser zero`;
    }

    else if (delta > 0) {
        const xI = (-(b) + raiz) / 2 * a
        const xII = (-(b) - raiz) / 2 * a
        msg = msg + `${xI.toFixed(2).replace(".", ",")} ; ${xII.toFixed(2).replace(".", ",")}`
    }
    
    else if (delta < 0) {
        msg = msg + `Valor de delta menor que zero.`
    }

    document.getElementById("resultado").innerHTML = msg;
}

function resetar() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById("resultado").innerHTML = '';
}