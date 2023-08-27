let storedUserName = localStorage.getItem('userName');
let storedPasswordOne = localStorage.getItem('passwordOne');

document.getElementById("yourname").textContent = storedUserName;
document.getElementById("yourpassword").textContent = storedPasswordOne;


const allStars = document.querySelectorAll('.star');
let current_rating = document.querySelector('.current_rating')

allStars.forEach( (star, i)=>{
    star.onclick = function (){
       let current_star_level = i + 1;
       current_rating.innerText = `Rate: ${current_star_level} of 5`

       allStars.forEach((star, j) => {
            if(current_star_level >= j+1){
                star.innerHTML = '&#9733';
            }else {
                star.innerHTML = '&#9734';
            }
       })
       localStorage.setItem('rating', JSON.stringify(current_star_level));
    }
})

function sendstars(){
    document.getElementById('starrating').style.display = 'none';
    document.getElementById('commentbox').style.display = 'block';
}

let showRating = JSON.parse(localStorage.getItem('rating'));

// this function does it possible to send a comment
function sendcomment() {
    let comment = document.getElementById("comment").value;
    localStorage.setItem('comment', comment);
    document.getElementById('yourcomment').textContent = comment;

    document.getElementById('commentbox').style.display = 'none';
    document.getElementById('donewithreview').style.display = 'block';
}