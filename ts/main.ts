type USERDATA = {
    name: string;
    email: string;
    workEX: string;
    image: string;
    number: string;
    education: string;
    skills: string;
    profession: string;
    address: string;
};

const storedData = JSON.parse(localStorage.getItem('userdata') as string)

const userdata: USERDATA = storedData || {
    name: '',
    email: '',
    workEX: '',
    image: '',
    number: '',
    education: '',
    skills: '',
    profession: '',
    address: '',
}


const email = document.querySelector('.email') as HTMLInputElement
const resumePage = document.querySelector('.resume-page') as HTMLElement
const formSection = document.querySelector('.form-section') as HTMLElement
const name1 = document.querySelector('.name') as HTMLInputElement
const work_experience = document.querySelector('.work-experience') as HTMLInputElement
const image = document.querySelector('.image') as HTMLInputElement
const skills = document.querySelector('.skills') as HTMLInputElement
const profession = document.querySelector('.profession') as HTMLInputElement
const sub = document.querySelector('.sub') as HTMLButtonElement
const number = document.querySelector('.number') as HTMLInputElement
const education = document.querySelector('.education') as HTMLInputElement
const address = document.querySelector('.address') as HTMLInputElement

const nameElement = document.querySelector('.Name') as HTMLHeadingElement
const professionElement = document.querySelector('.Profession') as HTMLHeadingElement
const emailElement = document.querySelector('.Email') as HTMLHeadingElement
const numberElement = document.querySelector('.Number') as HTMLHeadingElement
const addressElement = document.querySelector('.Address') as HTMLHeadingElement
const EducaionElement = document.querySelector('.Educaion') as HTMLParagraphElement
const WorkEXElement = document.querySelector('.WorkEX') as HTMLParagraphElement
const form = document.querySelector('form') as HTMLFormElement

const skillBtnBox = document.querySelector('.skill-btn-box') as HTMLButtonElement;
const skillBtn = document.querySelector('.skill-btn-box button') as HTMLButtonElement;
const skillList = document.querySelector('.list') as HTMLDivElement;

// Simple validation function
const validateForm = (): boolean => {
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
sub.addEventListener('click', (e) => {
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

        const skillsArray = userdata.skills.split(',');

        nameElement.innerText = userdata.name;
        professionElement.innerText = userdata.profession;
        addressElement.innerText = userdata.address;
        numberElement.innerText = userdata.number;
        emailElement.innerText = userdata.email;
        EducaionElement.innerText = userdata.education;
        WorkEXElement.innerText = userdata.workEX;

        skillsArray.forEach((item) => {
            skillList.innerHTML += `<div>${item}</div>`;
        });

        // Skill button function
        skillBtnBox.addEventListener('click', () => {
            if (skillList.innerHTML !== "") {
                skillList.innerHTML = '';
                skillBtn.innerText = 'Show';
            } else {
                skillsArray.forEach((item) => {
                    skillList.innerHTML += `<div>${item}</div>`;
                });
                skillBtn.innerText = 'Hide';
            }
        });
    }
});
