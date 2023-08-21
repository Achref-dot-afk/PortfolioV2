let burger = document.querySelector('.burger');
let child = burger.firstElementChild;
let cross = document.createElement('i');
let header = document.querySelector('.side-bar');
cross.className = 'fas fa-times';
burger.onclick = function() {
    burger.classList.toggle('active');
    if (burger.classList.contains('active')) {
        burger.appendChild(cross);
        burger.removeChild(child);
        header.classList.add('active');

    } else {
        burger.removeChild(cross);
        burger.appendChild(child);
        header.classList.remove('active');
    }
    }

/*Contact Form*/
function send_mail() {
    Email.send({
        SecureToken : "3c1a7fed-956a-417a-9762-c26eaef740f9",
        To : 'achref.habli@etudiant-enit.utm.tn',
        From : 'achrefh1bli22@gmail.com',
        Subject : "This is the subject",
        Body : "Got message from : " + document.querySelector(".name").value
        + "<br>" + "<br>" + "Email : "+ document.querySelector(".email").value
        + "<br>"  + "<br>" +"Subject : "+ document.querySelector(".subject").value
        + "<br>"  + "<br>" +"Number : "+ document.querySelector(".number").value
        + "<br>"  + "<br>" +"Message content : "+ document.querySelector(".message").value 
    }).then(
        document.querySelector(".name").value = "",
        document.querySelector(".email").value = "",
        document.querySelector(".subject").value = "",
        document.querySelector(".number").value = "",
        document.querySelector(".message").value = "",
    );
}
/*CV*/
document.querySelector(".cv").addEventListener("click", () => {
    window.open("https://drive.google.com/uc?export=download&id=1lRCNSHO3M2c3wK4XtjxNj9hKQSkyka-A")
});
/*Scroller*/
window.addEventListener("scroll", () => {
    let value = window.scrollY;
    if (value > 300) {
        document.querySelector(".scroller").classList.add("active");
    } else {
        document.querySelector(".scroller").classList.remove("active");
    }
});
document.querySelector(".scroller").addEventListener("click", () => {
    window.location.href = "#home";
});
/*Initialize AOS*/
AOS.init();