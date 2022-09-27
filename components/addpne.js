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
        year: [1],
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

// console.log(1234);
var appendStr;

function insertImg(pne) {
    appendStr +=
            `
                <td style="height:8vh;width:10vw">
                    <img class="img-thing" width=1000px height=1000px src="${pne.img}">
                </td>`;
}

function insertTxt(pne) {
    appendStr +=
            `
                <td style="height:8vh;width:60vw">
                    <div class="p-card-txt">
                        <p style="font-size:3vmin;margin-bottom:0vmin"><b>${pne.name}</b></p>
                        <p>${pne.brief}</p>
                    </div>
                    <div class="p-card-txt">
                        <p><i>${pne.time}</i></p>
                    </div>
                </td>
            `
}

function addPne(year) {
    let matchCount = 0;
    appendStr += 
`
    <div class="projects enp">`;
    // console.log(appendStr);

    for(const project of PROJECTS) {
        // console.log(project);
        if(project.year.includes(year)) {
            matchCount++;    
            appendStr += 
        `
        <table class="enp-card">
            <tr>`;
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
            </tr>
        </table>`;
        }
    }

    appendStr += 
    `
    </div>
    <div class="experiences enp">`;

    for(const exp of EXPS) {
        if(exp.year.includes(year)) {
            matchCount++;
            appendStr +=
        `
        <table class="enp-card">
            <tr>`;

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
            </tr>
        </table>`;
        }
    }

    appendStr += 
    `
    </div>`;

    // add a wrapper

    appendStr = '<div class="slide-bg"></div> <div class="slide-content">' + appendStr + '</div>'; 
}


for(let i=1; i<=4; i++) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("swiper-slide", "enp");
    appendStr='';
    addPne(i);
    // console.log(appendStr);
    cardDiv.innerHTML=appendStr;
    document.getElementById("add-card").appendChild(cardDiv);
}