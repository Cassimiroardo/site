let button = document.getElementById("submit")
button.onclick = (event) => {
    event.preventDefault()
    let artist = document.getElementById("artistName").value
    let timeSlot = document.getElementById("timeSlot").value
    let spanElement = document.getElementById(timeSlot)
    spanElement.textContent = artist.toUpperCase()
    const items = document.getElementsByClassName("item")
    const item = Array.prototype.find.call(items, (item) => item.contains(spanElement))
    item.classList.remove("free")
    item.classList.add("occupied")
    const status = item.getElementsByClassName("status")[0].getElementsByTagName("span")[0]
    status.textContent = "RESERVADO"
}