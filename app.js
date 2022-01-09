const paragraphNumber = document.querySelector("#paragraphNumber");
const radio1 = document.querySelector("#radio1");
const radio2 = document.querySelector("#radio2");
const radio3 = document.querySelector("#radio3");
const btn = document.querySelector("#btn");
const copyBtn = document.querySelector("#copyBtn");
const textBox = document.querySelector("#textBox");
const myContent = document.querySelector("#textContent");
const shortParagraph = document.querySelector("#shortParagraph");
const mediumParagraph = document.querySelector("#mediumParagraph");
const longParagraph = document.querySelector("#longParagraph");

let str1 =
    "dolor sit amet. Aut recusandae itaque qui eaque esse eum debitis aliquid eum voluptatem nobis. Aut corrupti eius aut voluptatem labore vel atque Quis et laboriosam Quis At sapiente quisquam id voluptatibus molestias. Ea nostrum omnis sit pariatur quasi sed voluptas eius ut voluptatem laborum. Et illo quibusdam eos consequatur impedit et aliquam consequatur in exercitationem excepturi.";
let str2 =
    "qui quia dignissimos et ipsa enim eos quos cumque. Et adipisci architecto hic dolor internos aut quaerat sint voluptate possimus sit dicta nemo non corporis magni et autem rerum? Sed vitae quia At consectetur dolor qui Quis deleniti.";
let str3 =
    "ab deserunt ipsam ut accusamus magni et quidem deserunt aut illum accusantium? Aut optio cupiditate sit temporibus iste eos quidem reiciendis. Sed delectus beatae non facilis veniam ut ipsum exercitationem in asperiores velit.";
let str4 =
    "est facere quia At deserunt libero et fuga reprehenderit ut dolorum expedita qui consequuntur Quis ab quas reprehenderit. Est velit error hic rerum voluptate repudiandae alias ut cumque voluptas expedita possimus a animi enim. Non rerum ipsum aut illum dolores vel minima accusamus in magnam tempora qui optio officiis? Est quaerat officia aut vitae distinctio eum neque animi est animi dolorem sed accusamus adipisci.";
let str5 =
    "est fugiat ducimus et maxime quas est nihil officiis est saepe illum et laborum galisum sit exercitationem odit in optio exercitationem. Et asperiores illum ut voluptas error ut obcaecati nobis et sequi deleniti sit debitis placeat et quia sint. Vel quod rerum hic praesentium quidem vel atque sapiente quo laboriosam consequatur sed sequi dignissimos sit labore dolorum vel modi illo? Ut ipsum aperiam et placeat eligendi aut consequuntur consequatur eos vitae quia aut facilis incidunt.";
let str6 =
    "sed similique quae qui minima officiis hic libero eaque in facilis sequi a architecto totam. Ut dignissimos delectus eos nemo distinctio ut nesciunt reprehenderit nam architecto omnis 33 dolor voluptatum? In sunt consequuntur quo dolor odio sed voluptas quae nam perspiciatis facere id illo nulla!";
let str7 =
    "in sint ducimus non aspernatur itaque ut consequatur corrupti ut dolorum internos. Cum provident animi quo architecto exercitationem et veniam magni a eaque laboriosam ea beatae modi. A laboriosam amet ut asperiores sequi nam autem explicabo.";
let str8 =
    "ut minima enim ut labore officia ab asperiores harum! Est quia consequatur qui assumenda dolorem est nostrum excepturi eum quas quos sit adipisci error sit inventore exercitationem sit nihil rerum. Sit rerum nulla vel quasi molestias eum commodi obcaecati non quod voluptatem ratione? Qui accusamus laborum sed nemo consequuntur qui dicta exercitationem aut quae omnis.";
let str9 =
    "aut laborum nostrum qui animi aspernatur ex tempora dolores 33 magni sapiente aut voluptatibus quod aut iste nihil. Ex earum laboriosam qui fuga ipsam vel nemo voluptas.";
let str10 =
    "qui quidem voluptatem rerum necessitatibus in voluptatem error. Corrupti earum a vero corrupti et voluptas sunt sit commodi in eaque quod in ratione animi et quibusdam consequatur. Et fuga atque id esse porro in odio pariatur. Sed eveniet velit 33 dignissimos minima et cumque alias.";

const arrShort = [str1, str2, str3, str4, str5, str6, str7, str8, str9, str10];
const arrMedium = [
    arrShort[0] + arrShort[1],
    arrShort[1] + arrShort[2],
    arrShort[2] + arrShort[3],
    arrShort[3] + arrShort[4],
    arrShort[4] + arrShort[5],
    arrShort[5] + arrShort[6],
    arrShort[6] + arrShort[7],
    arrShort[7] + arrShort[8],
    arrShort[8] + arrShort[9],
    arrShort[9] + arrShort[10],
];

const arrLong = [
    arrMedium[0] + arrMedium[1],
    arrMedium[1] + arrMedium[2],
    arrMedium[2] + arrMedium[3],
    arrMedium[3] + arrMedium[4],
    arrMedium[4] + arrMedium[5],
    arrMedium[5] + arrMedium[6],
    arrMedium[6] + arrMedium[7],
    arrMedium[7] + arrMedium[8],
    arrMedium[8] + arrMedium[9],
    arrMedium[9] + arrMedium[10],
];

function generateChallengeParagraph(str, pValue, arr) {
    for (let i = 0; i < pValue - 1; i++) {
        str += arr[i] + "<br />" + "<br />" + "Challenge your limits ";
    }
    str += arrMedium[pValue - 1];
    myContent.innerHTML = str;
    return str;
}

function generateLoremParagraph(str, pValue, arr) {
    for (let i = 0; i < pValue - 1; i++) {
        str += arr[i] + "<br />" + "<br />" + "Lorem ipsum ";
    }
    str += arrMedium[pValue - 1];
    myContent.innerHTML = str;
    return str;
}

function generateParagraph(str, pValue, arr) {
    for (let i = 0; i < pValue; i++) {
        str += arr[i] + "<br />" + "<br />";
    }
    myContent.innerHTML = str;
    return str;
}

function copyText(text) {
    navigator.clipboard.writeText(text);
}

console.log(`Developed by: HossAin Shuvo`);
console.log(`Facebook: https://www.messenger.com/t/hossainshuvo7860`);
btn.addEventListener("click", function() {
    let pValue = Number(paragraphNumber.value);
    if (radio1.checked == true) {
        if (shortParagraph.checked == true) {
            let str = "";
            let result = generateParagraph(str, pValue, arrShort);
            textBox.className = "container d-block";
            let tempSTR = "";
            tempSTR += myContent.innerText;
            copyBtn.addEventListener("click", function() {
                copyText(tempSTR);
            });
        } else if (mediumParagraph.checked == true) {
            let str = "";
            let result = generateParagraph(str, pValue, arrMedium);
            textBox.className = "container d-block";
            let tempSTR = "";
            tempSTR += myContent.innerText;
            copyBtn.addEventListener("click", function() {
                copyText(tempSTR);
            });
        } else {
            let str = "";
            let result = generateParagraph(str, pValue, arrLong);
            textBox.className = "container d-block";
            let tempSTR = "";
            tempSTR += myContent.innerText;
            copyBtn.addEventListener("click", function() {
                copyText(tempSTR);
            });
        }
    } else if (radio2.checked == true) {
        if (shortParagraph.checked == true) {
            let str = "Lorem Ipsum ";
            let result = generateLoremParagraph(str, pValue, arrShort);
            textBox.className = "container d-block";
            let tempSTR = "";
            tempSTR += myContent.innerText;
            copyBtn.addEventListener("click", function() {
                copyText(tempSTR);
            });
        } else if (mediumParagraph.checked == true) {
            let str = "Lorem Ipsum ";
            let result = generateLoremParagraph(str, pValue, arrMedium);
            textBox.className = "container d-block";
            let tempSTR = "";
            tempSTR += myContent.innerText;
            copyBtn.addEventListener("click", function() {
                copyText(tempSTR);
            });
        } else {
            let str = "Lorem Ipsum ";
            let result = generateLoremParagraph(str, pValue, arrLong);
            textBox.className = "container d-block";
            let tempSTR = "";
            tempSTR += myContent.innerText;
            copyBtn.addEventListener("click", function() {
                copyText(tempSTR);
            });
        }

    } else {
        if (shortParagraph.checked == true) {
            let str = "Challenge your limits ";
            let result = generateChallengeParagraph(str, pValue, arrShort);
            textBox.className = "container d-block";
            let tempSTR = "";
            tempSTR += myContent.innerText;
            copyBtn.addEventListener("click", function() {
                copyText(tempSTR);
            });
        } else if (mediumParagraph.checked == true) {
            let str = "Challenge your limits ";
            let result = generateChallengeParagraph(str, pValue, arrMedium);
            textBox.className = "container d-block";
            let tempSTR = "";
            tempSTR += myContent.innerText;
            copyBtn.addEventListener("click", function() {
                copyText(tempSTR);
            });
        } else {
            let str = "Challenge your limits ";
            let result = generateChallengeParagraph(str, pValue, arrLong);
            textBox.className = "container d-block";
            let tempSTR = "";
            tempSTR += myContent.innerText;
            copyBtn.addEventListener("click", function() {
                copyText(tempSTR);
            });
        }
    }
});