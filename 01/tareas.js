// TODO: ¿ es solo para el index o para todas las web del sitio web? 

window.onload = function () {

    // 1. Trau un alert informant del número d’enllaços que hi ha:
    const enlaces = document.getElementsByTagName("a");
    alert(`En esta web existen ${ enlaces.length } enlaces.`);

    // 2. Modifica dinàmicament la imatge del logo
    const header = document.getElementById('header');
    const imgLogo = header.firstElementChild;
    imgLogo.setAttribute('src', './images/logoIvan.png');

    // 3. Modifica dinàmicament els textos del menú principal
    const ul = header.children[1];
    const li = ul.children;

    let text = "";
    for (let i = 0; i < li.length; i++) {
        let a = li[i].firstChild;
        text = `Menú ${i + 1}`;
        a.innerHTML = text;
    }

    // 4. Elimina dinàmicament la part dels favorite links.
    const div = document.querySelector('.lightBlueBg');
    const ele = div.childNodes


    for (let i = 0; i < ele.length; i++) {
        if (ele[i].innerHTML === "Favorite <span class=\"dark\">Links</span>") {
             div.removeChild(ele[i]);
            for (let j = i; j < ele.length; j++) {
                div.removeChild(ele[i]);
            }
        }
    }



}