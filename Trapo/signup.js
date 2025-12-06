function validateForm() {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let pass = document.getElementById("password").value;

        if (name === "" || email === "" || pass === "") {
            alert("All fields are required!");
            return false;
        } else {
            alert("Signup Successful!");
            return true;
        }
    }