// Here, we want to get all links and put an event listener on them
// After we have all the event listeners on, we could make the function that adds a class to the items that have been clicked
const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener("click", () => {

        // ********************************************************************* //
        // ************************ Question Card State ************************ //
        // ********************************************************************* //

        // get the id of the element you want to add to the list
        const new_element = item.id
        // get the currently stored list, and if there is none yet, make an empty one
        if (localStorage) {
            if (localStorage.getItem('clicked_questions') == null ) {
                localStorage.setItem('clicked_questions', '[]')
            } 
        } else {
            console.log("You probably won't see this, but your browser does not support localStorage")
        }
        // parse this list into JSON and store this parsed version in a var
        var old_list = JSON.parse(localStorage.getItem('clicked_questions'))
        // to the parsed version, push the id of the new element
        if (!old_list.includes(new_element)) {
            old_list.push(new_element)
        }
        // make this new updated parsed version the localStorage version
        localStorage.setItem('clicked_questions', JSON.stringify(old_list))
        
        // ********************************************************************* //
        // ************************ Category Card State ************************ //
        // ********************************************************************* //

        // get the category the question was from
        const questions_category  = item.classList[1]
        // get the currently stored list, and if there is none yet, make an empty one.
        // You have to do this because every time the page is opened, the javascript
        // run to see if there are any categories that should be updated
        if (localStorage) {
            if (localStorage.getItem('finsihed_categories') == null ) {
                localStorage.setItem('finsihed_categories', '[]')
            } 
        } else {
            console.log("You probably won't see this, but your browser does not support localStorage")
        }
        // find out whether all other questions have been done yet or not 
        if (JSON.parse(localStorage.getItem('clicked_questions')).filter((item) => item.includes(questions_category)).length >= 3) {
        //    console.log(JSON.parse(localStorage.getItem('clicked_questions')).filter((item) => item.includes(questions_category)))
            // If they all have been done, then we just have to add our item by
            // getting the OG list, JSON parsing it, adding it to the parsed
            // JSON, and reconverting it to a string before updating the state
            // in localStorage
            var og_list = JSON.parse(localStorage.getItem('finsihed_categories'))
            // console.log(localStorage.getItem('finsihed_categories'))
            // to the parsed version, push the id of the new element
           // console.log(og_list)
            if (!og_list.includes(questions_category)) {
                og_list.push(questions_category)
            }
            // make this new updated parsed version the localStorage version
            localStorage.setItem('finsihed_categories', JSON.stringify(og_list))
        } else {
            console.log("You probably won't see this, but your browser does not support localStorage")
        }
    })
})

const clicked_questions = JSON.parse(localStorage.getItem('clicked_questions'));
clicked_questions.forEach(id => {
    const elem = document.getElementById(id);
    elem.classList.add("clicked")
})

const finsihed_categories = JSON.parse(localStorage.getItem('finsihed_categories'));
finsihed_categories.forEach(id => {
    const elem = document.getElementById(id);
    elem.classList.add("clicked")
})

function reset() {
    localStorage.clear();
    window.location.reload();
}