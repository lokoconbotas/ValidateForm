//    Variables declarations

// Short the full path
var form = document.forms.mainform;

var firstName = form.first_name;
var lastName = form.last_name;
var address = form.adress;
var city = form.city;
var zipCode = form.zip;
var birthday = form.birth;
var parent = form.parent;
var phone = form.phone;
var mail = form.mail;

var firstSchool = form.first_school;
var secondSchool = form.second_school;

var haveUniform = form.have_uniform;

var jerseySize = document.getElementById("jerseySize");
var jerseyField = document.getElementById("Jersey");
var jerseyCheck = document.getElementById('jerseyCheck');

//Only if the player birth is correct, turns to true
var correctAge = false;

//Phone format validator
var phoneValidator = /^\d{3}-\d{3}-\d{4}$/; 

// Mail format validator
var emailalidator = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|edu)\b/;


//Main function

function validateForm() {
	var result = "";
    
	result += validateName();
//	result += validateLastName();
//	result += validateAdress();
//	result += validateCity();
//	result += validateZip();
//	result += validateAge();
//	result += validateParent();
//	result += validateMail();
//	result += validatePhone();
//	result += validateSchools();
	  
	if (result !== "") {
		alert ("Some errors found:\n"+result);
		return false;
	}
	return true;	
}


// Individiual Functions
function validateName() {
	var error = "";
    
	if (firstName.value === "") {
		error = "Check the First Name field\n";
		return error;
	}else{
	error = "";
	return error;
    }
}
//
function validateLastName() {
	var error = null;
	if(lastName.value === "") {
		error = "Check the Last Name field\n";
		return error;
	}
	error = "";
	return error;
}
//    
function validateAdress() {
	var error = null;
	if(address.value === "") {
		error = "Check the Adress field\n";
		return error;
	}
	error = "";
	return error;
}   
//
function validateCity() {
	var error = null;
	if (city.value === "") {
		error = "Check the City field\n";
		return error;
	}
	error = "";
	return error;
}
//
function validateZip() {
	var error = null;
	if (zipCode.value.length !== 5) {
		error = "Check the field Zip code. Need 5 digits\n";
		return error;
	}
	error = "";
	return error;
}
//
function validateAge() {
	var error = null;
	if (!hasCorrectAge()) {
		error = "Only accepts players between 4 - 12 years old\n";
		return error;
	}
	error = "";
	return error;
}
//
function validateParent() {
	var error = null;
	if (parent.value === "") {
		error = "Check the Parent/Guardian field\n";
		return error;
	}
	error = "";
	return error;
}
//
function validateMail() {
	var error = null;
	if (!mail.value.match(emailalidator)) {
		error = "The mail hasn't a valid format\n";
		return error;
	}
	error = "";
	return error;
}
//
function validatePhone () {
	var error = "";
	//Ternary Conditional
	return error = !phone.value.match(phoneValidator) ?
	"The phone number must be in XXX-XXX-XXXX format\n" : "";
}
//
function validateSchools() {
	var error = null;
	if (firstSchool.value === secondSchool.value) {
		error = "You can't match the same school in the first & second field\n";
		return error;
	}
	error = "";
	return error;
}


//Extra functions

// Calculate the age of players from the birth date field

function calcAge() {
	var birth = new Date(birthday.value);
	var today = new Date();

	var timeDifference = Math.abs(today.getTime() - birth.getTime());
	var playerAge = Math.ceil(timeDifference / (1000 * 3600 * 24)) / 365;
	
	return playerAge;
}

//Compares calculated age with the minAge & maxAge.
//IT EXECUTES on "onblur" action of the BIRTH DATE field of the form
function hasCorrectAge() {

	var minAge = 4;
	var maxAge = 12;

	var age = calcAge();
//    alert("my age is " + age);
	if (age < minAge || age > maxAge) {
		return false;

	} else {
		return true;
	}
}

jerseyCheck.addEventListener('click', disable_sizes);

function disable_sizes() {

	if(haveUniform.checked){
		jerseyField.disabled = true;
		jerseyField.style.color = "#8b8b8b";
	} else {
		jerseyField.disabled = false;
		jerseyField.style.color = "#000";
	}
}