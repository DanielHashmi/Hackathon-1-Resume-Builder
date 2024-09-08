const skillBtnBox = document.querySelector('.skill-btn-box') as HTMLButtonElement;
const skillBtn = document.querySelector('.skill-btn-box button') as HTMLButtonElement;
const skillList = document.querySelector('.list') as HTMLDivElement;

skillBtnBox.addEventListener('click', () => {
    if (skillList.innerHTML !== "") {
        skillList.innerHTML = '';
        skillBtn.innerText = 'Show'
    } else {
        skillList.innerHTML = `
                <div>MongoDB</div>
                <div>HTML</div>
                <div>CSS</div>
                <div>React</div>
                <div>JavaScnpt</div>
                <div>Tailwindcss</div>
                <div>Figma</div>
                <div>HTMLS</div>
                <div>Bootstrap</div>
                <div>css</div>
                <div>Git</div>
                <div>Node.Js</div>
                <div>NextJS</div>
                <div>NextAuth</div>
                <div>TypeScript</div>
                `
        skillBtn.innerText = 'Hide'

    }
})