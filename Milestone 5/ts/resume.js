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
download.addEventListener('click', function () {
    if (typeof window.print === 'function') {
        var allHtml = document.body.innerHTML;
        document.body.innerHTML = main.outerHTML;
        window.print();
        document.body.innerHTML = allHtml;
    }
    else {
        var jsPDF_1 = window.jspdf.jsPDF;
        html2canvas(document.body, { scale: 3 }).then(function (canvas) {
            var imgData = canvas.toDataURL('image/png');
            var pdf = new jsPDF_1('p', 'mm', 'a4');
            var pdfWidth = 210;
            var imgWidth = pdfWidth;
            var imgHeight = (canvas.height * pdfWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
            pdf.save('page.pdf');
        });
    }
});
// share functionality
share.addEventListener('click', function () {
    var searchBarUrl = window.location.href;
    if (navigator.share) {
        navigator.share({
            title: '',
            text: '',
            url: searchBarUrl
        })
            .then(function () { return console.log('Successfully shared'); })
            .catch(function (error) { return console.error('Error sharing:', error); });
    }
    else {
        copyToClipboardFunc(searchBarUrl);
    }
});
function copyToClipboardFunc(text) {
    var tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Copied to clipboard!');
}
nameElement.innerText = storedData.name;
professionElement.innerText = storedData.profession;
addressElement.innerText = storedData.address;
numberElement.innerText = storedData.number;
emailElement.innerText = storedData.email;
EducaionElement.innerText = storedData.education;
WorkEXElement.innerText = storedData.workEX;
