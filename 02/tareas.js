window.onload = function () {

    // 1. Canvia dinàmicament el text del menú principal i els menús secundaris.
    const divMenuPrincipal = document.querySelector("#menu");
    const ulMenuPrincipal = divMenuPrincipal.children[0];
    const lisMenuPrincipal = ulMenuPrincipal.children

    let textMenuPrincipal = "";
    for (let i = 0; i < lisMenuPrincipal.length; i++) {
        let a = lisMenuPrincipal[i].firstChild;
        textMenuPrincipal = `Menú Principal ${i + 1}`;
        a.innerHTML = textMenuPrincipal;
    }

    const divMenuSecundario = document.querySelector("#sidebar");
    const ulMenuSecundario = divMenuSecundario.children[1];
    const lisMenuSecundaro = ulMenuSecundario.children


    let textMenuSecundario = "";
    for (let i = 0; i < lisMenuSecundaro.length; i++) {
        let a = lisMenuSecundaro[i].firstChild;
        textMenuSecundario = `Menú Secundario ${i + 1}`;
        a.innerHTML = textMenuSecundario;
    }

    // 2. Canvia el color de la lletra dels menús dinàmicament.
    for (let i = 0; i < lisMenuPrincipal.length; i++) {
        let a = lisMenuPrincipal[i].firstChild;
        a.setAttribute("style", "color: gold")
    }

    for (let i = 0; i < lisMenuSecundaro.length; i++) {
        let a = lisMenuSecundaro[i].firstChild;
        a.setAttribute("style", "color: green")
    }

    // 3. Esborra el contingut del <div> que té per id="content" i 
    // fes que apareguen tres paragrafs predefinits per tu.

    const divContent = document.querySelector("#content")
    divContent.innerHTML = ""

    const newDiv = `<div class="content">
     <div class="entry">
        <div class="entry-title">
            <a href="#">Nuevo título</a>
        </div>
        <div class="date">11 de Octubre 2023</div>
        <p>Esto es el parráfo 1.Esto es el parráfo 1.Esto es el parráfo 1.
        Esto es el parráfo 1.Esto es el parráfo 1.Esto es el parráfo 1.
        </p>
        <p>Esto es el parráfo 2.Esto es el parráfo 2.Esto es el parráfo 2.
        Esto es el parráfo 2.Esto es el parráfo 2.Esto es el parráfo 2.
        </p>
        <p>Esto es el parráfo 3.Esto es el parráfo 3.Esto es el parráfo 3.Esto es el parráfo 3.
        Esto es el parráfo 3.Esto es el parráfo 3.Esto es el parráfo 3.
        </p>
     </div>
    </div>`;

   divContent.innerHTML = newDiv;

  





}