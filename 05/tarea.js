

window.onload = function () {

    const data = [
        [
            "España", "Madrid"
        ],
        [
            "Portugal", "Lisboa"
        ],
        [
            "Francia", "París"
        ],
        [
            "Alemania", "Berlín"
        ],
        [
            "Italia", "Roma"
        ]
    ]

    const divContent = document.querySelector("#content")
    divContent.innerHTML = ""

    const paises = data.map( pais => {
        return `
            <tr>
                <td>
                    ${pais[0]}
                </td>    
                <td>
                    ${pais[1]}
                </td>
            </tr>`;
    })


    const table = `
    <table style="padding: 20px;">

    <tr>
      <th>País</th>
      <th>Capital</th>
      </tr>

        ${ paises }
  
  </table>
     `;

    divContent.innerHTML = table

}