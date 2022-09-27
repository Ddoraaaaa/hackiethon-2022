const PROJECTS = [
    {
        img: "https://placekitten.com/200/200",
        name: "Cool project 1",
        brief: "Project to use in other cool stuffs very cool cool COOL!!!",
        time: "May 2020 - Dec 2020",
        year: [1, 2, 3],
    },
    {
        img: "https://placekitten.com/200/241",
        name: "Cool project 2",
        brief: "I like the bee movie pls love",
        time: "May 2020 - Dec 20222",
        year: [2, 3],
    },
    {
        img: "https://placekitten.com/181/201",
        name: "Cool project 3",
        brief: "Peepeepoopoo bgfeuyuibadefbh dwiuef iufe iue fhiuefw u hefw huifew",
        time: "May 2020 - Dec 20222",
        year: [1, 2],
    },
];

const EXPS = [
    {
        img: "https://placekitten.com/128/128",
        name: "Optiver",
        brief: "I developed some things for them and they used those shit yeah haha!",
        time: " May 2021 - May 2022",
        year: [1, 2],
    },
    {
        img: "https://placekitten.com/130/120",
        name: "Cat place",
        brief: "I love cats. I probably don't eat them. Probably.",
        time: "Jan 2020 - Feb 2021",
        year: [1],
    },
    {
        img: "https://placekitten.com/148/127",
        name: "IntegraDev",
        brief: "They pay a lot. Well the CEO is a sweet person",
        time: "Jan 2019 - Feb 2999",
        year: [2, 3],
    }
];

console.log(1234);
var appendStr;

function insertImg(pne) {
    appendStr +=
            `
            <img width="100" height="100" src="${pne.img}">`
}

function insertTxt(pne) {
    appendStr +=
            `
            <div class="p-card-txt">
                <h4><b>${pne.name}</b></h4>
                <p>${pne.brief}</p>
            </div>
            <div class="p-card-txt">
                <p><i>${pne.time}</i></p>
            </div>`
}

function addPne(year) {
    let matchCount = 0;
    appendStr += 
`
    <div class="projects">`;
    // console.log(appendStr);

    for(const project of PROJECTS) {
        // console.log(project);
        if(project.year.includes(year)) {
            matchCount++;    
            appendStr += 
        `
        <div class="enp-card">`;
        
            if(matchCount%2==0) {
                insertImg(project);
                insertTxt(project);
            }
            else {
                insertTxt(project);
                insertImg(project);
            }
            appendStr +=
        `
        </div>`;
        }
    }

    appendStr += 
    `
    </div>
    <div class="experiences">`;

    for(const exp of EXPS) {
        if(exp.year.includes(year)) {
            matchCount++;
            appendStr +=
        `
        <div class="enp-card">`;

            if(matchCount%2==0) {
                insertImg(exp);
                insertTxt(exp);
            }
            else {
                insertTxt(exp);
                insertImg(exp);
            }
            appendStr +=
        `
        </div>`;
        }
    }

    appendStr += 
    `
    </div>`;
}


for(let i=1; i<=3; i++) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("swiper-slide", "enp");
    appendStr='';
    addPne(i);
    console.log(appendStr);
    cardDiv.innerHTML=appendStr;
    document.getElementById("add-card").appendChild(cardDiv);
}