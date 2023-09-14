const countriesList = [
    "Andorra", //0
    "United Arab Emirates", //1
    "Afghanistan", //2
    "Antigua and Barbuda", //3
    "Anguilla", //4
    "Albania", //5
    "Armenia", //6
    "Angola", //7
    "Zambia", //240 8
    "Argentina", //9
    "American Samoa",//10
    "Austria", //11
    "Australia", //12
    "Aruba", //13
    "South Africa", //239 14
    "Azerbaijan", //15
    "Bosnia-Herzegovina", //16
    "Barbados", //17
    "Bangladesh", //18
    "Belgium", //19
    "Burkina Faso", //20
    "Bulgaria", //21
    "Bahrain", //22
    "Burundi", //23
    "Benin", //24
    "Saint-Bartholomew", //25
    "Bermuda", //26
    "Brunei", //27
    "Bolivia", //28
    "Bonaire", //29
    "Brazil", //30
    "Yemen", //237 31
    "Bhutan", //32
    "Samoa", //236 33
    "Botswana", //34
    "Belarus", //35
    "Belize", //36
    "Canada", //37
    "Cocos", //38
    "Democratic Republic of the Congo", //39
    "Central African Republic", //40
    "Congo", //41
    "Switzerland", //42
    "Ivory Coast", //43
    "Vanuatu", //234 44
    "Chile", //45
    "Cameroon", //46
    "China", //47
    "Colombia", //48
    "Costa Rica", //49
    "Cuba", //50
    "Cabo Verde", //51
    "Curacao", //52
    "Christmas Island", //53
    "Cyprus", //54
    "Czech Republic", //55
    "Germany", //56
    "Djibouti", //57
    "Denmark", //58
    "Dominica", //59
    "Dominican Republic", //60
    "Algeria", //61
    "Ecuador", //62
    "Estonia", //63
    "Egypt", //64
    "Occidental Sahara", //65
    "Eritrea", //66
    "Spain", //67
    "Ethiopia", //68
    "Finland", //69
    "Fiji", //70
    "Malvinas", //71
    "Faroe", //72
    "France", //73
    "Gabon", //74
    "United Kingdom", //75
    "Grenada", //76
    "Georgia", //77
    "French Guiana", //78
    "Guernsey", //79
    "Ghana", //80
    "Gibraltar", //81
    "Greenland", //82
    "Gambia", //83
    "Guinea", //84
    "Guadeloupe", //85
    "Equatorial Guinea", //86
    "Greece", //87
    "South Georgia and the South Sandwich", //88
    "Guatemala", //89
    "Guam", //90
    "Guinea Bissau", //91
    "Guyana", //92
    "Hong Kong", //93
    "Heard and McDonald", //94
    "Honduras", //95
    "Croatia", //96
    "Haiti", //97
    "Hungary", //98
    "Indonesia", //99
    "Ireland", //100
    "Israel", //101
    "Isle Of Man", //102
    "India", //103
    "British Indian", //104
    "Iraq", //105
    "Iran", //106
    "Iceland", //107
    "Italy", //108
    "Jamaica", //109
    "Jordan", //110
    "Japan", //111
    "Kenya", //112
    "Kyrgyzstan", //113
    "Cambodia", //114
    "Vietnam", //233 115
    "Comoros", //116
    "Saint Kitts and Nevis", //117
    "North Korea", //118
    "South Korea", //119
    "Kuwait", //120
    "Cayman Islands", //121
    "Kazakhstan", //122
    "Laos", //123
    "Lebanon", //124
    "Saint Lucia", //125
    "Liechtenstein", //126
    "Sri Lanka", //127
    "Liberia", //128
    "Lesotho", //129
    "Lithuania", //130
    "Luxembourg", //131
    "Latvia", //132
    "Libya", //133
    "Morocco", //134
    "Monaco", //135
    "Moldova", //136
    "Montenegro", //137
    "Saint Martin", //138
    "Madagascar", //139
    "Macedonia", //140
    "Mali", //141
    "Myanmar", //142
    "Mongolia", //143
    "Macao", //144
    "Martinique", //145
    "Mauritania", //146
    "Montserrat", //147
    "Malta", //148
    "Mauritius", //149
    "British Virgin Islands", //231 150
    "Malawi", //151
    "Mexico", //152
    "Peninsular Malaysia", //153
    "Mozambique", //154
    "Namibia", //155
    "New Caledonia", //156
    "Niger", //157
    "Norfolk Island", //158
    "Nigeria", //159
    "Nicaragua", //160
    "Netherlands", //161
    "Norway", //162
    "Nepal", //163
    "Nauru", //164
    "Niue", //165
    "New Zealand", //166
    "Oman", //167
    "Panama", //168
    "Peru", //169
    "French Polynesia", //170
    "Papua New Guinea", //171
    "Philippines", //172
    "Pakistan", //173
    "Poland", //174
    "Saint Pierre and Miquelon", //175
    "Venezuela", //230 176
    "Puerto Rico", //177
    "Portugal", //178
    "Saint Vincent and the Grenadines", //229 179
    "Paraguay", //180
    "Qatar", //181
    "Reunion", //182
    "Romania", //183
    "Serbia", //184
    "Russia", //185
    "Saudi Arabia", //186
    "Vatican City", //228 187
    "Solomon Islands", //188
    "Seychelles", //189
    "Sudan", //190
    "Sweden", //191
    "Singapore", //192
    "Saint Helena", //193
    "Slovenia", //194
    "Svalbard", //195
    "Slovakia", //196
    "Sierra Leone", //197
    "San Marino", //198
    "Senegal", //199
    "Somalia", //200
    "Suriname", //201
    "South Sudan", //202
    "Sao Tome and Principe", //203
    "El Salvador", //204
    "Sint Maarten", //205
    "Syria", //206
    "Swaziland", //207
    "Uzbekistan", //227 208
    "Chad", //209
    "French Southern and Antarctic Lands", //210
    "Togo", //211
    "Thailand", //212
    "Tajikistan", //213
    "Uruguay", //226 2014
    "East Timor", //215
    "Turkmenistan", //216
    "Tunisia", //217
    "Tonga", //218
    "Turkey", //219
    "Trinidad and Tobago", //220
    "Taiwan", //221
    "Tanzania", //222
    "Ukraine", //223
    "USA" //224
];

//START BUTTON
let startButton = document.querySelector(".startButton");
let startMenu = document.querySelector(".start")
let allTheGame = document.querySelector(".allTheGame");


startButton.addEventListener("click", (startGame));
startButton.addEventListener("click", (again));

function startGame() {
    startMenu.setAttribute("hidden", "y");
    allTheGame.removeAttribute("hidden");
}

//BOTONES CORRECTOS E INCORRECTOS

let correctMessage = document.querySelector(".emergentCorrect");
let incorrectMessage = document.querySelector(".emergentIncorrect");
let timeOutMessage = document.querySelector(".emergentTimeOut");
let pressButton = false;
let isCorrect = false;

//CLOCK & POINTS
let timer = 20;
let clock = document.querySelector("#timer");
let points = 0;
let pointsBox = document.querySelector(".points");
let finishPoints = document.querySelector(".pointsText");

//INDEX 1/20 QUESTIONS
let questionIndex = 1;
let numberOfQuestion = document.querySelector(".NOQ");

//PRINCIPAL FUNCTION
const nextButton = document.querySelector(".nextButton");
nextButton.addEventListener("click", (again));


function again() {

    // let correctButton = document.querySelector(".Correct");
    // correctButton.classList.remove("Correct")
    let Button1 = document.querySelector("#Option1");
    Button1.classList.add("Option1");
    let Button2 = document.querySelector("#Option2");
    Button2.classList.add("Option2");
    let Button3 = document.querySelector("#Option3");
    Button3.classList.add("Option3");
    let Button4 = document.querySelector("#Option4");
    Button4.classList.add("Option4");

    timer = 20;
    let timerInterval = setInterval(updateTimer, 1000);
    clock.textContent = "20";

    incorrectMessage.setAttribute("hidden", "y");
    correctMessage.setAttribute("hidden", "y");
    timeOutMessage.setAttribute("hidden", "y");
    nextButton.setAttribute("hidden", "y");
    pressButton == false;

    // Button1.style.backgroundColor = "";
    // Button1.style.color = "";
    // Button2.style.backgroundColor = "";
    // Button2.style.color = "";
    // Button3.style.backgroundColor = "";
    // Button3.style.color = "";
    // Button4.style.backgroundColor = "";
    // Button4.style.color = "";
    // correctButton.style.backgroundColor = "";
    // correctButton.style.color = "";

    let ncc = Math.random() * 224; //Number Correct Country
    ncc = Math.round(ncc); //from 0 to 224

    let nco = Math.random() * 3 + 1; //Number Correct Option
    nco = Math.round(nco); //from 1 to 4

    let countryImage = document.querySelector("#CountrySvg");
    countryImage.setAttribute("src", `images/countries/${ncc}.svg`)


    for (i = 1; i < 5; i++) {
        let numberOption = `Option${i}`;
        let falseOption = document.querySelector("#" + numberOption);
        let nfc = Math.random() * 224; //Number False Country
        nfc = Math.round(nfc); //from 0 to 224
        falseOption.textContent = (`${countriesList[nfc]}`);
    }

    //Agregar clase a la opción correcta

    let optionNumber = "Option" + nco;
    console.log(optionNumber);
    let correctOption = document.querySelector(`.Option${nco}`);
    correctOption.classList.replace(`${optionNumber}`, "Correct");
    //Deja el nombre del país correcto
    let ncl = ncc;
    correctOption.textContent = (`${countriesList[ncl]}`);

    Button1.addEventListener("click", showTheCorrect1);
    Button2.addEventListener("click", showTheCorrect2);
    Button3.addEventListener("click", showTheCorrect3);
    Button4.addEventListener("click", showTheCorrect4);

    function showTheCorrect1() {
        if (Button1.classList.contains("Option1")) {
            // Button1.style.backgroundColor = "var(--red)";
            // Button1.style.color = "var(--white)";
            // correctButton.style.backgroundColor = "var(--primaryGreen)";
            // correctButton.style.color = "var(--white)";
            incorrectMessage.removeAttribute("hidden");
            nextButton.removeAttribute("hidden");
            pressButton = true;
        }
        else {
            // correctButton.style.backgroundColor = "var(--primaryGreen)";
            // correctButton.style.color = "var(--white)";
            correctMessage.removeAttribute("hidden");
            nextButton.removeAttribute("hidden");
            pressButton = true;
            isCorrect = true;
        }
    }

    function showTheCorrect2() {
        if (Button2.classList.contains("Option2")) {
            // Button2.style.backgroundColor = "var(--red)";
            // Button2.style.color = "var(--white)";
            // correctButton.style.backgroundColor = "var(--primaryGreen)";
            // correctButton.style.color = "var(--white)";
            incorrectMessage.removeAttribute("hidden");
            nextButton.removeAttribute("hidden");
            pressButton = true;
        }
        else {
            // correctButton.style.backgroundColor = "var(--primaryGreen)";
            // correctButton.style.color = "var(--white)";
            correctMessage.removeAttribute("hidden");
            nextButton.removeAttribute("hidden");
            pressButton = true;
            isCorrect = true;
        }
    }

    function showTheCorrect3() {

        if (Button3.classList.contains("Option3")) {
            // Button3.style.backgroundColor = "var(--red)";
            // Button3.style.color = "var(--white)";
            // correctButton.style.backgroundColor = "var(--primaryGreen)";
            // correctButton.style.color = "var(--white)";
            incorrectMessage.removeAttribute("hidden");
            nextButton.removeAttribute("hidden");
            pressButton = true;
        }
        else {
            // correctButton.style.backgroundColor = "var(--primaryGreen)";
            // correctButton.style.color = "var(--white)";
            correctMessage.removeAttribute("hidden");
            nextButton.removeAttribute("hidden");
            pressButton = true;
            isCorrect = true;
        }
    }

    function showTheCorrect4() {

        if (Button4.classList.contains("Option4")) {
            // Button4.style.backgroundColor = "var(--red)";
            // Button4.style.color = "var(--white)";
            // correctButton.style.backgroundColor = "var(--primaryGreen)";
            // correctButton.style.color = "var(--white)";
            incorrectMessage.removeAttribute("hidden");
            nextButton.removeAttribute("hidden");
            pressButton = true;
        }
        else {
            // correctButton.style.backgroundColor = "var(--primaryGreen)";
            // correctButton.style.color = "var(--white)";
            correctMessage.removeAttribute("hidden");
            nextButton.removeAttribute("hidden");
            pressButton = true;
            isCorrect = true;
        }
    }

    function updateTimer() {

        if (timer === 0) {
            clearInterval(timerInterval);
            timeOutMessage.removeAttribute("hidden");
            nextButton.removeAttribute("hidden");

        } else {
            timer--;
            clock.textContent = (`${timer}`);
        }

        if (pressButton == true) {
            clearInterval(timerInterval);

            if (isCorrect == true) {
                points = points + timer + 10;
                console.log(points);
                pointsBox.innerHTML = `${points}pts`;
            }
            isCorrect = false;
            pressButton = false;
            console.log(points);
            finishPoints.innerHTML = `You made ${points} points!`;
        }
    }



}

//NEXT QUESTION COUNT
let finishScreen = document.querySelector(".finishScreen");
nextButton.addEventListener("click", (pressingNext));


function pressingNext() {
    questionIndex = questionIndex + 1;
    numberOfQuestion.innerHTML = `${questionIndex}/20`;
    console.log(questionIndex);

    if (questionIndex == 21) {
        nextButton.addEventListener("click", finishFunction())
    }

    function finishFunction() {
        allTheGame.setAttribute("hidden", "y");
        finishScreen.removeAttribute("hidden");
    }
}