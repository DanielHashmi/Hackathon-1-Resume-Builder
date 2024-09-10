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

const userdata: USERDATA = {
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


const nameElement = document.querySelector('.Name') as HTMLHeadingElement
const professionElement = document.querySelector('.Profession') as HTMLHeadingElement
const emailElement = document.querySelector('.Email') as HTMLHeadingElement
const numberElement = document.querySelector('.Number') as HTMLHeadingElement
const addressElement = document.querySelector('.Address') as HTMLHeadingElement
const EducaionElement = document.querySelector('.Educaion') as HTMLParagraphElement
const WorkEXElement = document.querySelector('.WorkEX') as HTMLParagraphElement
const skillList = document.querySelector('.list') as HTMLDivElement;

const email = document.querySelector('.email') as HTMLInputElement
const name1 = document.querySelector('.name') as HTMLInputElement
const work_experience = document.querySelector('.work-experience') as HTMLInputElement
const image = document.querySelector('.image') as HTMLInputElement
const skills = document.querySelector('.skills') as HTMLInputElement
const profession = document.querySelector('.profession') as HTMLInputElement
const number = document.querySelector('.number') as HTMLInputElement
const education = document.querySelector('.education') as HTMLInputElement
const address = document.querySelector('.address') as HTMLInputElement

const sub = document.querySelector('.sub') as HTMLButtonElement
const form = document.querySelector('form') as HTMLElement
const url = document.querySelector('.url') as HTMLAnchorElement

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



// // Submit button function
sub.addEventListener('click', (e) => {
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
        (document.querySelector('.sub-form-h1') as HTMLHeadingElement).innerText = 'Resume Link is here!';
        url.classList.remove('hidden');
        url.href = `https://hackathon-1-resume-builder-ha9k.vercel.app/resume.html?name=${name1.value}&email=${email.value}&education=${education.value}&number=${number.value}&skills=${skills.value}&address=${address.value}&profession=${profession.value}&workEX=${work_experience.value}&image=${image.value}`;
    } else {
        localStorage.setItem('userdata', JSON.stringify(userdata));
        const storedData = JSON.parse(localStorage.getItem('userdata') as string)

        const searchParams = new URLSearchParams(window.location.search);
        for (const [key, value] of Object.entries(storedData)) {
            if (value) {
                searchParams.set(key, value as string);
            }
        }
        (document.querySelector('.resume-image') as HTMLImageElement).src = image.value


        window.history.pushState(null, '', '?' + searchParams.toString());


        nameElement.innerText = storedData.name
        professionElement.innerText = storedData.profession
        addressElement.innerText = storedData.address
        numberElement.innerText = storedData.number
        emailElement.innerText = storedData.email
        EducaionElement.innerText = storedData.education
        WorkEXElement.innerText = storedData.workEX
        const skillsArray = storedData.skills.split(',');

        skillList.innerHTML = '';
        skillsArray.forEach((item: string) => {
            skillList.innerHTML += `<div>${item}</div>`;
        });

    }
});
