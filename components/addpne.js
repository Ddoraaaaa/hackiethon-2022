const years = [
    { 
        id: 2021, 
        bg: ".\/assets\/spring.jpg",
    }, 
    { 
        id: 2022, 
        bg: ".\/assets\/fall.jpg",
    }, 
    { 
        id: 2023, 
        bg: ".\/assets\/winter.jpg",
    }
]; 
const PROJECTS = [
    {
        img: "https://placekitten.com/200/200",
        name: "Cool project 1",
        brief: "Project to use in other cool stuffs very cool cool COOL!!!",
        time: "May 2020 - Dec 2020",
        year: [2021, 2022, 2023],
    },
    {
        img: "https://placekitten.com/200/241",
        name: "Cool project 2",
        brief: "I like the bee movie pls love",
        time: "May 2020 - Dec 20222",
        year: [2022, 2023],
    },
    {
        img: "https://placekitten.com/181/201",
        name: "Cool project 3",
        brief: "Peepeepoopoo bgfeuyuibadefbh dwiuef iufe iue fhiuefw u hefw huifew",
        time: "May 2020 - Dec 20222",
        year: [2021, 2022],
    },
];

const EXPS = [
    {
        img: "https://placekitten.com/128/128",
        name: "Optiver",
        brief: "I developed some things for them and they used those shit yeah haha!",
        time: " May 2021 - May 2022",
        year: [2021],
    },
    {
        img: "https://placekitten.com/130/120",
        name: "Cat place",
        brief: "I love cats. I probably don't eat them. Probably.",
        time: "Jan 2020 - Feb 2021",
        year: [2021],
    },
    {
        img: "https://placekitten.com/148/127",
        name: "IntegraDev",
        brief: "They pay a lot. Well the CEO is a sweet person",
        time: "Jan 2019 - Feb 2999",
        year: [2022, 2023],
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

function addPne(yearId) {
    let matchCount = 0;
    appendStr += 
`
    <div class="projects enp">`;

    for(const project of PROJECTS) {
        // console.log(project);
        if(project.year.includes(yearId)) {
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
        if(exp.year.includes(yearId)) {
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
}

for(year of years) {
    const contentSlide = document.createElement("div");
    const controlSlide = document.createElement("div"); 
    const backgroundSlide = document.createElement("div");

    contentSlide.classList.add("swiper-slide", "content-slide");
    // controlSlide.classList.add("swiper-slide", "control-slide");
    backgroundSlide.classList.add("swiper-slide", "background-slide");
    
    appendStr=''; addPne(year.id);
    contentSlide.innerHTML=appendStr;

    // controlSlide.innerHTML=year.id; 

    backgroundSlide.innerHTML=`<img src=${year.bg}>`; 

    document.getElementById("content-wrapper").appendChild(contentSlide);
    // document.getElementById("control-wrapper").appendChild(controlSlide); 
    document.getElementById("background-wrapper").appendChild(backgroundSlide);
}