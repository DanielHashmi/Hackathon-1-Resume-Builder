var userdata = {
    name: '',
    email: '',
    workEX: '',
    image: '',
    number: '',
    education: '',
    skills: '',
    profession: '',
    address: '',
};
var nameElement = document.querySelector('.Name');
var professionElement = document.querySelector('.Profession');
var emailElement = document.querySelector('.Email');
var numberElement = document.querySelector('.Number');
var addressElement = document.querySelector('.Address');
var EducaionElement = document.querySelector('.Educaion');
var WorkEXElement = document.querySelector('.WorkEX');
var skillList = document.querySelector('.list');
var email = document.querySelector('.email');
var name1 = document.querySelector('.name');
var work_experience = document.querySelector('.work-experience');
var image = document.querySelector('.image');
var skills = document.querySelector('.skills');
var profession = document.querySelector('.profession');
var number = document.querySelector('.number');
var education = document.querySelector('.education');
var address = document.querySelector('.address');
var sub = document.querySelector('.sub');
var form = document.querySelector('form');
var url = document.querySelector('.url');
// Simple validation function
var validateForm = function () {
    if (name1.value.length < 3 || name1.value.length > 50) {
        alert("Name must be between 6 and 50 characters.");
        return false;
    }
    if (email.value.length < 5 || !email.value.includes('@') || !email.value.includes('.')) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (number.value.length < 10 || number.value.length > 15 || isNaN(Number(number.value))) {
        alert("Please enter a valid phone number between 10 and 15 digits.");
        return false;
    }
    if (work_experience.value.length < 10) {
        alert("Work experience must be at least 10 characters long.");
        return false;
    }
    if (skills.value.split(',').length < 1) {
        alert("Please add at least one skill.");
        return false;
    }
    if (education.value.length < 5) {
        alert("Education must be at least 5 characters long.");
        return false;
    }
    if (address.value.length < 10) {
        alert("Address must be at least 10 characters long.");
        return false;
    }
    return true;
};
// // Submit button function
sub.addEventListener('click', function (e) {
    e.preventDefault();
    userdata.email = email.value;
    userdata.education = education.value;
    userdata.name = name1.value;
    userdata.number = number.value;
    userdata.skills = skills.value;
    userdata.profession = profession.value;
    userdata.workEX = work_experience.value;
    userdata.image = image.value;
    userdata.address = address.value;
    if (validateForm() && sub.classList.contains('submit')) {
        form.style.display = 'none';
        document.querySelector('.sub-form-h1').innerText = 'Resume Link is here!';
        url.classList.remove('hidden');
       url.href = `https://hackathon-1-resume-builder-ha9k.vercel.app/resume.html?name=${name1.value}&email=${email.value}&education=${education.value}&number=${number.value}&skills=${skills.value}&address=${address.value}&profession=${profession.value}&workEX=${work_experience.value}&image=${image.value}`;
    }
    else {
        localStorage.setItem('userdata', JSON.stringify(userdata));
        var storedData = JSON.parse(localStorage.getItem('userdata'));
        var searchParams = new URLSearchParams(window.location.search);
        for (var _i = 0, _a = Object.entries(storedData); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (value) {
                searchParams.set(key, value);
            }
        }
        document.querySelector('.resume-image').src = image.value;
        window.history.pushState(null, '', '?' + searchParams.toString());
        nameElement.innerText = storedData.name;
        professionElement.innerText = storedData.profession;
        addressElement.innerText = storedData.address;
        numberElement.innerText = storedData.number;
        emailElement.innerText = storedData.email;
        EducaionElement.innerText = storedData.education;
        WorkEXElement.innerText = storedData.workEX;
        var skillsArray = storedData.skills.split(',');
        skillList.innerHTML = '';
        skillsArray.forEach(function (item) {
            skillList.innerHTML += "<div>".concat(item, "</div>");
        });
    }
});
