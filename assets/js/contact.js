
const toggleCheckbox = document.getElementById('toggle-menu');
const dropdownMenu = document.querySelector('.dropdown');

toggleCheckbox.addEventListener('change', function() {

  if (toggleCheckbox.checked) {
    dropdownMenu.style.display = 'block';
  } else {
    dropdownMenu.style.display = 'none';
  }
});

function showModal(message) {
    let modal = document.getElementById("myModal");
    let modalMessage = document.getElementById("modalMessage");
    modalMessage.innerText = message;
    modal.style.display = "block";


    let closeButton = document.getElementsByClassName("close")[0];
    closeButton.onclick = function() {
        modal.style.display = "none";
    }


    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function submitHandler(){
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (name == "") {
        showModal("Please enter your name!!");
        return;
    } else if (email == "") {
        showModal("Please enter your email!!");
        return;
    } else if (phone == "") {
        showModal("Please enter your phone number!!");
        return;
    } else if (subject == "") {
        showModal("Please enter your subject!!");
        return;
    } else if (message == "") {
        showModal("Please enter your message!!");
        return;
    }


    const data = {
        name, email, phone, subject, message
    }
    const yourEmail = "yusron27latip@gmail.com"

    let a = document.createElement("a");
    a.href = `https://mail.google.com/mail?view=cm&fs=1&to=${yourEmail}&su=${subject}&body=${message}`
    a.click();

    console.log(data);

}

