
function groupContent(value) {
  const groupType = document.querySelector(`#group-${value}`)
  groupType.addEventListener("click", () => {
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

  })

}
