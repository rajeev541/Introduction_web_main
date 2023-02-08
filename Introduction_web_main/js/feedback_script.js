
let cardCounter = 0;
let submit = document.getElementById("submit-btn");

// onlick handler on submit button
const check() {
    let form_elements = document.getElementById("feedback").elements;

    let salutation;
    let fname = form_elements.namedItem("firstname").value;
    // let mname = form_elements.namedItem("mname").value;
    let lname = form_elements.namedItem("lastname").value;
    let comments = form_elements.namedItem("comment").value;
    let gender= form_elements.namedItem("gender").value;
    // removing whitespace from both ends of the string
    if(gender=="Male"){
        salutation="Mr."
    }else if(gender=="Female"){
        salutation="Miss."
    }
    fname = fname.trim();
    // mname = mname.trim();
    lname = lname.trim();
    comments = comments.trim();


    // checking validity
    let namePattern = /[a-zA-Z]+$/;

    if (!namePattern.test(fname))
        alert("Enter a valid first name.");
    else if (!namePattern.test(lname))
        alert("Enter a valid last name.");
    else if (comments.length === 0)
        alert("Comment cannot be empty.");
    else {
        showCard(salutation, fname, lname, comments);
    }
}

function showCard(salutation, fname, lname, comments) {

    let data = {
        salutation: salutation,
        firstName: fname,
        lastName: lname,
        fullName: function () { return this.salutation + " " + this.firstName + " " + this.lastName },
        comments: comments
    };



    // creating card
    let card = document.createElement("div");
    // card.classList.add("card");

    let nameElement = document.createElement("h1");
    // nameElement.classList.add("full-name");

    let commentElement = document.createElement("p");
    // commentElement.classList.add("comment");

    card.appendChild(nameElement);
    card.appendChild(commentElement);

    // inserting data
    nameElement.innerText = data.fullName();
    commentElement.innerText = data.comments;

    // inserting card into the comments-section as the first element
    let cSection = document.getElementById("showdata");
    cardCounter++;
    if (cardCounter > 5) {
        console.log(cardCounter + " i was called");
        cSection.removeChild(cSection.lastElementChild);
        cSection.insertBefore(card, cSection.firstElementChild);
    }
    else
        cSection.insertBefore(card, cSection.firstElementChild);

}




