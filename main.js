function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/flags/icon-${player1}.svg" alt="Bandeira da ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/flags/icon-${player2}.svg" alt="Bandeira de ${player2}">
    </li>
  `
}

function createGroup(letter) {
  return `
    <div id="group-${letter}" class ="group from-left" type="button">Grupo ${letter}</div>
  `
}

let delay = -0.3;
function createCard(date, day, games) {
  delay += 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#groups").innerHTML =
  createGroup("a") +
  createGroup("b") +
  createGroup("c") +
  createGroup("d") +
  createGroup("e") +
  createGroup("f") +
  createGroup("g") +
  createGroup("h")

fillGroup("a")
fillGroup("b")
fillGroup("c")
fillGroup("d")
fillGroup("e")
fillGroup("f")
fillGroup("g")
fillGroup("h")


function fillGroup(group) {
  const tipoGrupo = document.querySelector(`#group-${group}`)
  tipoGrupo.addEventListener("click", () => {
    switch (group) {
      case "a":
        document.querySelector("#cards").innerHTML =
          createCard("20/11", "domingo",
            createGame("qatar", "13:00", "ecuador")) +

          createCard("21/11", "segunda",
            createGame("senegal", "13:00", "netherlands")) +

          createCard("25/11", "sexta",
            createGame("qatar", "10:00", "senegal")) +

          createCard("25/11", "sexta",
            createGame("netherlands", "13:00", "ecuador")) +

          createCard("29/11", "terça",
            createGame("ecuador", "12:00", "senegal")) +

          createCard("29/11", "terça",
            createGame("netherlands", "12:00", "qatar"))


        break;
      case "b":
        document.querySelector("#cards").innerHTML =
          createCard("21/11", "segunda",
            createGame("england", "10:00", "iran")) +

          createCard("21/11", "segunda",
            createGame("usa", "16:00", "wales")) +

          createCard("25/11", "sexta",
            createGame("wales", "07:00", "iran")) +

          createCard("25/11", "sexta",
            createGame("england", "16:00", "usa")) +

          createCard("29/11", "terça",
            createGame("iran", "16:00", "usa")) +

          createCard("29/11", "terça",
            createGame("wales", "16:00", "england"))

        break;
      case "c":
        document.querySelector("#cards").innerHTML =
          createCard("22/11", "terça",
            createGame("argentina", "07:00", "saudi-arabia")) +

          createCard("22/11", "terça",
            createGame("mexico", "13:00", "poland")) +

          createCard("26/11", "sabado",
            createGame("poland", "10:00", "saudi-arabia")) +

          createCard("26/11", "sabado",
            createGame("argentina", "16:00", "mexico")) +

          createCard("30/11", "quarta",
            createGame("poland", "16:00", "argentina")) +

          createCard("30/11", "quarta",
            createGame("saudi-arabia", "16:00", "mexico"))

        break;
      case "d":
        document.querySelector("#cards").innerHTML =
          createCard("22/11", "terça",
            createGame("denmark", "10:00", "tunisia")) +

          createCard("22/11", "terça",
            createGame("france", "16:00", "australia")) +

          createCard("26/11", "sabado",
            createGame("tunisia", "07:00", "australia")) +

          createCard("26/11", "sabado",
            createGame("france", "13:00", "denmark")) +

          createCard("30/11", "quarta",
            createGame("tunisia", "12:00", "france")) +

          createCard("30/11", "quarta",
            createGame("australia", "12:00", "denmark"))

        break;
      case "e":
        document.querySelector("#cards").innerHTML =
          createCard("23/11", "quarta",
            createGame("germany", "10:00", "japan")) +

          createCard("23/11", "quarta",
            createGame("spain", "13:00", "costa-rica")) +

          createCard("27/11", "domingo",
            createGame("japan", "07:00", "costa-rica")) +

          createCard("27/11", "domingo",
            createGame("spain", "16:00", "germany")) +

          createCard("01/12", "quinta",
            createGame("japan", "16:00", "spain")) +

          createCard("01/12", "quinta",
            createGame("costa-rica", "16:00", "germany"))

        break;
      case "f":
        document.querySelector("#cards").innerHTML =
          createCard("23/11", "quarta",
            createGame("morocco", "07:00", "croatia")) +

          createCard("23/11", "quarta",
            createGame("belgium", "16:00", "canada")) +

          createCard("27/11", "domingo",
            createGame("belgium", "10:00", "morocco")) +

          createCard("27/11", "domingo",
            createGame("croatia", "13:00", "canada")) +

          createCard("01/12", "quinta",
            createGame("croatia", "12:00", "belgium")) +

          createCard("01/12", "quinta",
            createGame("canada", "12:00", "morocco"))

        break;
      case "g":
        document.querySelector("#cards").innerHTML =
          createCard("24/11", "quinta",
            createGame("switzerland", "07:00", "cameroon")) +

          createCard("24/11", "segunda",
            createGame("brazil", "16:00", "serbia")) +

          createCard("28/11", "segunda",
            createGame("cameroon", "07:00", "serbia")) +

          createCard("28/11", "segunda",
            createGame("brazil", "13:00", "switzerland")) +

          createCard("02/12", "sexta",
            createGame("serbia", "16:00", "switzerland")) +

          createCard("02/12", "sexta",
            createGame("cameroon", "16:00", "brazil"))

        break;
      case "h":
        document.querySelector("#cards").innerHTML =
          createCard("24/11", "quinta",
            createGame("uruguay", "10:00", "korea")) +

          createCard("24/11", "quinta",
           createGame("portgual", "13:00", "ghana")) +

          createCard("28/11", "segunda",
            createGame("korea", "10:00", "ghana")) +

          createCard("28/11", "segunda",
            createGame("portugal", "16:00", "uruguay")) +

          createCard("02/12", "sexta",
            createGame("korea", "12:00", "portgual")) +

          createCard("02/12", "sexta",
            createGame("ghana", "12:00", "uruguay"))

        break;

      default:
        break;
    }
  })
}



