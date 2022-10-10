var list = [];
let valuarry = [];
function myfunction() {
    document.getElementById("form").reset();
}

document.querySelector("button")
    .addEventListener("click", (event) => {
        event.preventDefault();
        validateInput();
    })

function validateInput() {

    var form = document.getElementById("form");
    var names = document.getElementById("names").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var Status = document.getElementById("status").value;
    var radio = document.querySelector('input[type="radio"]:checked')
    var Address = document.getElementById("textarea").value;
    var selected = new Array();
    var tbllang = document.getElementById("tbl");
    var lang = tbllang.getElementsByTagName("INPUT");
    var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;


    function isValidEmail(email) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    if (names == "") {
        document.getElementById("namee").innerHTML = "*You must Enter your name";
    }
    else {
        document.getElementById("namee").innerHTML = "";
    }



    if (number.match(phoneNum)) {
        document.getElementById("numberr").innerHTML = "";
    } else {
        document.getElementById("numberr").innerHTML = "*You must Enter valid number";
    }
    if (email === "") {
        document.getElementById("emaill").innerHTML = "*You must Enter your email";
    }
    else if (isValidEmail(email)) {
        document.getElementById("emaill").innerHTML = "";
    }
    else {
        document.getElementById("emaill").innerHTML = "*You must Enter valid email";
    }

    if (Address == "") {
        document.getElementById("textar").innerHTML = "*You must Enter your Address";
    }
    else {
        document.getElementById("textar").innerHTML = "";
    }

    if (radio) {
        document.getElementById("radio").innerHTML = "";
    }
    else {
        document.getElementById("radio").innerHTML = "*You must select your gender";
    }

    for (var i = 0; i < lang.length; i++) {
        if (lang[i].checked) {
            selected.push(lang[i].value);
        }
    }

    if (selected.length > 0) {
        document.getElementById("Language").innerHTML = "";

    }
    else {
        document.getElementById("Language").innerHTML = "*You must select your Language";
    }



    var getSelectedValue1 = document.getElementById("status").value;

    if (getSelectedValue1 !== '') {
        document.getElementById("statusId").innerHTML = "";
    } else {
        document.getElementById("statusId").innerHTML = "*You have not selected any Status";
    }
    let result = { "Names": names, "Number": number, "Email": email, "status": Status, "gender": radio.value, "Address": Address, "Language": selected }
    if (names && number && email && Status && radio.value && selected && Address) {
        list.push(result);
        console.log(valuarry);
        localStorage.setItem("resultvalue", JSON.stringify(list))
        buildTable()
    } else {
        console.log("");
    }

    }
    
    function  buildTable(){
        let row = "";
        var list= JSON.parse(localStorage.getItem("resultvalue"));
       
        for (var i = 0; i < list.length; i++){
          
           row += `<tr>
                          <td>${list[i].Names}</td>
                          <td>${list[i].Number}</td>
                          <td>${list[i].Email}</td>
                          <td>${list[i].status}</td>
                          <td>${list[i].gender}</td>
                          <td>${list[i].Address}</td>
                          <td>${list[i].Language}</td>
                    </tr>`
           
                   
                    document.getElementById("myTable").innerHTML = row
        }
        
     
        
    }




