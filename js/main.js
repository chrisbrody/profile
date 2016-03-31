
// get users data
function getUserData(form) {
	// store all form data in an object
	var userProfile = {
		firstname : form.userfname.value,
		lastname  :  form.userlname.value,
		gender    : form.usergender.value,
		email     : form.userEmail.value,
		phone     : form.userPhone.value,
		color     : form.favColor.value,
		birthplace: form.userBirth.value
	}
	// call displayProfile function and pass through userProfile object 
	displayProfile(userProfile)
}

// 
function displayProfile(userProfile) {
	// make sure the user data is being passed through
	console.log(userProfile)

	// store all the html elements to add text into
	var userName       = document.getElementById('userName'),
	    userGender     = document.getElementById('userGender'),
		userEmail      = document.getElementById('userEmail'),
		userPhone      = document.getElementById('userPhone'),
		userColor      = document.getElementById('userColor'),
		userBirthplace = document.getElementById('userBirthplace')

	// change the text of the variables from the object
	userName.innerText = "Welcome " + userProfile.firstname + " " + userProfile.lastname 
	userGender.innerText = "Gender: " + userProfile.gender
	userEmail.innerText = "Email: " + userProfile.email
	userPhone.innerText = "Phone: " + userProfile.phone
	userColor.innerText = "Favorite Color: " + userProfile.color
	userBirthplace.innerText = "Birth Continent: " + userProfile.birthplace

	document.getElementById('newProfile').style.display = "none"
	document.getElementById('updatedProfile').style.display = "block"
}

// store the submit button in sendDataButton
var sendDataButton  = document.getElementById('sendDataButton')
// add click function to button
sendDataButton.addEventListener('click', function() {
	// pass newprofile form through getUserData function
	getUserData(document.newprofile1)
}, false)


