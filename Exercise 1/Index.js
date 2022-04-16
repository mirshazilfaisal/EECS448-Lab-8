function validate()
{
    var pass1 = document.getElementById("password1");
    var pass2 = document.getElementById("password2");

    if(pass1.value.length < 8 )
    {
        alert("Password must have atleast 8 charachters");
    }

    if(pass1.value != pass2.value)
    {
        alert("Passwords dont match");
    }


}