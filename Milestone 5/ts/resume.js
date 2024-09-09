var params = new URLSearchParams(window.location.search);
var resumePage = document.querySelector('.resume-page');
var editSection = document.querySelector('.edit-section');
var edit = document.querySelector('.edit');
var skills = document.querySelector('.skills');
var skillList = document.querySelector('.list');
var nameElement = document.querySelector('.Name');
var professionElement = document.querySelector('.Profession');
var emailElement = document.querySelector('.Email');
var numberElement = document.querySelector('.Number');
var addressElement = document.querySelector('.Address');
var EducaionElement = document.querySelector('.Educaion');
var WorkEXElement = document.querySelector('.WorkEX');
var skillBtnBox = document.querySelector('.skill-btn-box');
var skillBtn = document.querySelector('.skill-btn-box button');
var download = document.querySelector('.download');
var main = document.querySelector('main');
var share = document.querySelector('.share');
document.querySelector('.resume-image').src = params.get('image');
var userdata = {
    name: params.get('name'),
    email: params.get('email'),
    workEX: params.get('workEX'),
    image: params.get('image'),
    number: params.get('number'),
    education: params.get('education'),
    skills: params.get('skills'),
    profession: params.get('profession'),
    address: params.get('address'),
};
localStorage.setItem('userdata', JSON.stringify(userdata));
var storedData = JSON.parse(localStorage.getItem('userdata'));
var email = document.querySelector('.email');
email.value = storedData.email;
var name1 = document.querySelector('.name');
name1.value = storedData.name;
var work_experience = document.querySelector('.work-experience');
work_experience.value = storedData.workEX;
var profession = document.querySelector('.profession');
profession.value = storedData.profession;
var number = document.querySelector('.number');
number.value = storedData.number;
var education = document.querySelector('.education');
education.value = storedData.education;
var address = document.querySelector('.address');
address.value = storedData.address;
var image = document.querySelector('.image');
image.value = storedData.image;
var skillsArray = storedData.skills.split(',');
skills.value = storedData.skills;
skillsArray.forEach(function (item) {
    skillList.innerHTML += "<div>".concat(item, "</div>");
});
// edit functionality
edit.addEventListener(('click'), function () {
    storedData = JSON.parse(localStorage.getItem('userdata'));
    if (editSection.classList.contains('hidden')) {
        editSection.classList.remove('hidden');
        resumePage.classList.add('hidden');
    }
    else {
        editSection.classList.add('hidden');
        resumePage.classList.remove('hidden');
    }
});
// Skill button function
skillBtnBox.addEventListener('click', function () {
    storedData = JSON.parse(localStorage.getItem('userdata'));
    skillsArray = storedData.skills.split(',');
    if (skillList.innerHTML !== "") {
        skillList.innerHTML = '';
        skillBtn.innerText = 'Show';
    }
    else {
        skillsArray.forEach(function (item) {
            skillList.innerHTML += "<div>".concat(item, "</div>");
        });
        skillBtn.innerText = 'Hide';
    }
});
// download functionality
download.addEventListener(('click'), function () {
    var allHtml = document.body.innerHTML;
    document.body.innerHTML = main.outerHTML;
    window.print();
    document.body.innerHTML = allHtml;
});
// share functionality
share.addEventListener(('click'), function () {
    navigator.share({
        title: 'Share Your Resume!', text: 'Take a look at my Resume!', url: window.location.href
    });
});
nameElement.innerText = storedData.name;
professionElement.innerText = storedData.profession;
addressElement.innerText = storedData.address;
numberElement.innerText = storedData.number;
emailElement.innerText = storedData.email;
EducaionElement.innerText = storedData.education;
WorkEXElement.innerText = storedData.workEX;
