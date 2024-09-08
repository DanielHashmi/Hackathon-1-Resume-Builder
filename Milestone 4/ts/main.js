var storedData = JSON.parse(localStorage.getItem('userdata'));
var userdata = storedData || {
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
var email = document.querySelector('.email');
var resumePage = document.querySelector('.resume-page');
var formSection = document.querySelector('.form-section');
var name1 = document.querySelector('.name');
var work_experience = document.querySelector('.work-experience');
var image = document.querySelector('.image');
var skills = document.querySelector('.skills');
var profession = document.querySelector('.profession');
var sub = document.querySelector('.sub');
var number = document.querySelector('.number');
var education = document.querySelector('.education');
var address = document.querySelector('.address');
var nameElement = document.querySelector('.Name');
var professionElement = document.querySelector('.Profession');
var emailElement = document.querySelector('.Email');
var numberElement = document.querySelector('.Number');
var addressElement = document.querySelector('.Address');
var EducaionElement = document.querySelector('.Educaion');
var WorkEXElement = document.querySelector('.WorkEX');
var toolBar = document.querySelector('.tool-bar');
var skillBtnBox = document.querySelector('.skill-btn-box');
var skillBtn = document.querySelector('.skill-btn-box button');
var skillList = document.querySelector('.list');
var edit = document.querySelector('.edit');
var download = document.querySelector('.download');
var main = document.querySelector('main');
var share = document.querySelector('.share');
// edit functionality
edit.addEventListener(('click'), function () {
    formSection.classList.remove('hidden');
    resumePage.classList.add('hidden');
    toolBar.classList.add('hidden');
});
// download functionality
download.addEventListener(('click'), function () {
    var allHtml = document.body.innerHTML;
    document.body.innerHTML = main.outerHTML;
    window.print();
    document.body.innerHTML = allHtml;
});
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
// Submit button function
sub.addEventListener('click', function (e) {
    e.preventDefault();
    if (validateForm()) {
        userdata.email = email.value;
        userdata.education = education.value;
        userdata.name = name1.value;
        userdata.number = number.value;
        userdata.skills = skills.value;
        userdata.profession = profession.value;
        userdata.workEX = work_experience.value;
        userdata.image = image.value;
        userdata.address = address.value;
        localStorage.setItem('userdata', JSON.stringify(userdata));
        formSection.classList.add('hidden');
        resumePage.classList.remove('hidden');
        toolBar.classList.remove('hidden');
        var skillsArray_1 = userdata.skills.split(',');
        nameElement.innerText = userdata.name;
        professionElement.innerText = userdata.profession;
        addressElement.innerText = userdata.address;
        numberElement.innerText = userdata.number;
        emailElement.innerText = userdata.email;
        EducaionElement.innerText = userdata.education;
        WorkEXElement.innerText = userdata.workEX;
        skillsArray_1.forEach(function (item) {
            skillList.innerHTML += "<div>".concat(item, "</div>");
        });
        // Skill button function
        skillBtnBox.addEventListener('click', function () {
            if (skillList.innerHTML !== "") {
                skillList.innerHTML = '';
                skillBtn.innerText = 'Show';
            }
            else {
                skillsArray_1.forEach(function (item) {
                    skillList.innerHTML += "<div>".concat(item, "</div>");
                });
                skillBtn.innerText = 'Hide';
            }
        });
    }
});
