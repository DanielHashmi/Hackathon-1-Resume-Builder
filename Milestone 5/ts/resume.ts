const params = new URLSearchParams(window.location.search)

const resumePage = document.querySelector('.resume-page') as HTMLElement
const editSection = document.querySelector('.edit-section') as HTMLElement
const edit = document.querySelector('.edit') as HTMLImageElement;
const skills = document.querySelector('.skills') as HTMLInputElement
const skillList = document.querySelector('.list') as HTMLDivElement;

const nameElement = document.querySelector('.Name') as HTMLHeadingElement
const professionElement = document.querySelector('.Profession') as HTMLHeadingElement
const emailElement = document.querySelector('.Email') as HTMLHeadingElement
const numberElement = document.querySelector('.Number') as HTMLHeadingElement
const addressElement = document.querySelector('.Address') as HTMLHeadingElement
const EducaionElement = document.querySelector('.Educaion') as HTMLParagraphElement
const WorkEXElement = document.querySelector('.WorkEX') as HTMLParagraphElement
const skillBtnBox = document.querySelector('.skill-btn-box') as HTMLButtonElement;
const skillBtn = document.querySelector('.skill-btn-box button') as HTMLButtonElement;
const download = document.querySelector('.download') as HTMLImageElement;
const main = document.querySelector('main') as HTMLElement;
const share = document.querySelector('.share') as HTMLImageElement;



(document.querySelector('.resume-image') as HTMLImageElement).src = params.get('image') as string


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
    name: params.get('name') as string,
    email: params.get('email') as string,
    workEX: params.get('workEX') as string,
    image: params.get('image') as string,
    number: params.get('number') as string,
    education: params.get('education') as string,
    skills: params.get('skills') as string,
    profession: params.get('profession') as string,
    address: params.get('address') as string,
}

localStorage.setItem('userdata', JSON.stringify(userdata));

let storedData = JSON.parse(localStorage.getItem('userdata') as string)


const email = document.querySelector('.email') as HTMLInputElement
email.value = storedData.email

const name1 = document.querySelector('.name') as HTMLInputElement
name1.value = storedData.name

const work_experience = document.querySelector('.work-experience') as HTMLInputElement
work_experience.value = storedData.workEX

const profession = document.querySelector('.profession') as HTMLInputElement
profession.value = storedData.profession

const number = document.querySelector('.number') as HTMLInputElement
number.value = storedData.number

const education = document.querySelector('.education') as HTMLInputElement
education.value = storedData.education

const address = document.querySelector('.address') as HTMLInputElement
address.value = storedData.address

const image = document.querySelector('.image') as HTMLInputElement
image.value = storedData.image

let skillsArray = storedData.skills.split(',');
skills.value = storedData.skills

skillsArray.forEach((item: string) => {
    skillList.innerHTML += `<div>${item}</div>`;
});


// edit functionality
edit.addEventListener(('click'), () => {
    storedData = JSON.parse(localStorage.getItem('userdata') as string)
    if (editSection.classList.contains('hidden')) {
        editSection.classList.remove('hidden');
        resumePage.classList.add('hidden');
    } else {
        editSection.classList.add('hidden');
        resumePage.classList.remove('hidden');
    }
})

// Skill button function
skillBtnBox.addEventListener('click', () => {
    storedData = JSON.parse(localStorage.getItem('userdata') as string)
    skillsArray = storedData.skills.split(',');
    if (skillList.innerHTML !== "") {
        skillList.innerHTML = '';
        skillBtn.innerText = 'Show';
    } else {
        skillsArray.forEach((item: string) => {
            skillList.innerHTML += `<div>${item}</div>`;
        });
        skillBtn.innerText = 'Hide';
    }
});


// download functionality
download.addEventListener(('click'), () => {
    const allHtml = document.body.innerHTML;
    document.body.innerHTML = main.outerHTML;
    window.print();
    document.body.innerHTML = allHtml;
})
// share functionality
share.addEventListener(('click'), () => {
    navigator.share({
        title: 'Share Your Resume!', text: 'Take a look at my Resume!', url: window.location.href
    })
})

nameElement.innerText = storedData.name
professionElement.innerText = storedData.profession
addressElement.innerText = storedData.address
numberElement.innerText = storedData.number
emailElement.innerText = storedData.email
EducaionElement.innerText = storedData.education
WorkEXElement.innerText = storedData.workEX



