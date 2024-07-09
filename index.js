// Here, we want to get all links and put an event listener on them
// After we have all the event listeners on, we could make the function that adds a class to the items that have been clicked
const items = document.querySelectorAll('.item');
console.log(items)

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classlist.add("clicked")
    })
})