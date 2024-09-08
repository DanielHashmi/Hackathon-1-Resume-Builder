var skillBtnBox = document.querySelector('.skill-btn-box');
var skillBtn = document.querySelector('.skill-btn-box button');
var skillList = document.querySelector('.list');
skillBtnBox.addEventListener('click', function () {
    if (skillList.innerHTML !== "") {
        skillList.innerHTML = '';
        skillBtn.innerText = 'Show';
    }
    else {
        skillList.innerHTML = "\n                <div>MongoDB</div>\n                <div>HTML</div>\n                <div>CSS</div>\n                <div>React</div>\n                <div>JavaScnpt</div>\n                <div>Tailwindcss</div>\n                <div>Figma</div>\n                <div>HTMLS</div>\n                <div>Bootstrap</div>\n                <div>css</div>\n                <div>Git</div>\n                <div>Node.Js</div>\n                <div>NextJS</div>\n                <div>NextAuth</div>\n                <div>TypeScript</div>\n                ";
        skillBtn.innerText = 'Hide';
    }
});
