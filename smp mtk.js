//inisiasi soal dalam quiz
const questions = [
    {
        question: "Sebuah tempat air berbentuk tabung dengan panjang jari-jari alas 140 cm dan tinggi 1 meter. Jika ditentukan π = 22/7 , maka volume tempat air itu adalah ?",
        optionA: "1.600 liter",
        optionB: "6.160 liter",
        optionC: "616 liter",
        optionD: "61,6 liter",
        correctOption: "optionB"
    },

    {
        question: "Selembar seng akan dibuat tabung tanpa tutup. Jika volume yang diharapkan sebesar 2.310 cm3 dengan jari-jari 7 cm π = 22/7, maka luas seng yang diperlukan adalah ?",
        optionA: "484 cm2",
        optionB: "660 cm2",
        optionC: "814 cm2",
        optionD: "964 cm2",
        correctOption: "optionC"
    },

    {
        question: "Luas permukaan sebuah kerucut diketahui 200 π cm2. Jika panjang jari-jari alasnya 8 cm, maka volume kerucut tersebut adalah ?",
        optionA: "200 cm3",
        optionB: "320 cm3",
        optionC: "640 cm3",
        optionD: "960 cm3",
        correctOption: "optionB"
    },

    {
        question: "Suatu kerucut dibentuk dengan jari-jari 8 cm, tinggi 15 cm, dan π= 3,14. Luas seluruh permukaan kerucut tersebut adalah ?",
        optionA: "285 cm2",
        optionB: "582 cm2",
        optionC: "628 cm2",
        optionD: "826 cm2",
        correctOption: "optionC"
    },

    {
        question: "Hasil perkalian (2/3)3 x (3/4)2 sama dengan ?",
        optionA: "1/3",
        optionB: "1/6",
        optionC: "3",
        optionD: "6",
        correctOption: "optionB"
    },

    {
        question: "Bentuk baku dari bilangan 0,0000351 adalah ?",
        optionA: "3,51 x 10-6",
        optionB: "3,51 x 105",
        optionC: "3,51 x 106",
        optionD: "3,51 x 10-5",
        correctOption: "optionD"
    },

    {
        question: "Jika x1 dan x2 merupakan akar akar persamaan x2+2x–15=0 maka nilai dari x1+x2 = ?",
        optionA: "2",
        optionB: "8",
        optionC: "-8",
        optionD: "-2",
        correctOption: "optionA"
    },

    {
        question: "Diketahui fungsi y=x2+3x+5 memiliki nilai diskriminan D=-11 Pernyataan yang benar untuk grafik fungsi y adalah?",
        optionA: "Memotong sumbu x di dua titik yang berbeda",
        optionB: "Memotong sumbu x di satu titik",
        optionC: "Grafik parabola membuka ke bawah",
        optionD: "Tidak memotong sumbu x",
        correctOption: "optionD"
    },

    {
        question: "fungsi kuadrat y = 2x2 – 12x + 16 akan dibuat sudut suatu segitiga. Titik – titik sudut segitiga tersebut merupakan titik potong sumbu x dan titik puncak. Luas segitiga tersebut adalah?",
        optionA: "2 satuan luas",
        optionB: "8 satuan luas",
        optionC: "4 satuan luas",
        optionD: "1 satuan luas",
        correctOption: "optionA"
    },

    {
        question: "Grafik fungsi y = x2–6x–16 pernyataan yang benar adalah?",
        optionA: "Memiliki sumbu simetri x = 6",
        optionB: "Koordinat titik potong terhadap sumbu y adalah (0 , 16)",
        optionC: "Memiliki nilai minimum y = -25",
        optionD: "Memotong sumbu x di satu titik",
        correctOption: "optionC"
    },

    {
        question: "Manakah dari persamaan persamaan kuadrat berikut yang memiliki dua akar yang berbeda ….. 1.x2+5x+4=0 2.x2+6x+9=0 3.x2–9=0 4.x2+2x+5=0 ?",
        optionA: "1 dan 4",
        optionB: "2 dan 3",
        optionC: "1 dan 3",
        optionD: "2 dan 4",
        correctOption: "optionA"
    },

  
    {
        question: "Hasil dari 10-3 adalah?",
        optionA: "0,001",
        optionB: "1000",
        optionC: "0001",
        optionD: "000,1",
        correctOption: "optionA"
    },


    {
        question: "Nilai 27.126.600 bentuk bakunya adalah ….. ?",
        optionA: "2,71266 x 10^9",
        optionB: "27,1266 x 10^4",
        optionC: "271266 x 10^2",
        optionD: "2,71266 x 10^7",
        correctOption: "optionD"
    },

    {
        question: "Ada sebuah benda yang jatuh dari ketinggian 50 meter dengan fungfi h = 15t2 + 60 dimana h adalah tinggi benda setelah tinggi balon, maka nilai t disaat balon menyentuh tanah adalah? ?",
        optionA: "4 detik",
        optionB: "2 detik",
        optionC: "5 menit",
        optionD: "10 detik",
        correctOption: "optionB"
    },

    {
        question: "Koordinat titik – titik sudut sebuah bidang belah ketupat adalah A(-4,4), B(1,-2), C(6,4) D(1,10). Kemudian dengan factor skala -2 belah ketupat tersebut didilatasi. Berapakan luas satuan belah ketupat ABCD? ?",
        optionA: "240 satuan",
        optionB: "640 satuan",
        optionC: "120 satuan",
        optionD: "354 satuan",
        correctOption: "optionA"
    },

    {
        question: "Hasil dari bilangan nol yang dipangkatkan dengan bilangan bulat positif adalah ?",
        optionA: "Bilangan nol",
        optionB: "Bilangan positif",
        optionC: "Bilangan prima",
        optionD: "Bilangan negatif",
        correctOption: "optionA"
    },

    {
        question: "Bentuk sederhana dari d8 : d5 adalah ….. ?",
        optionA: "d13",
        optionB: "d8",
        optionC: "d5",
        optionD: "d3",
        correctOption: "optionD"
    },

    {
        question: "Nilai minimum dari fungsi y = x2 + 8x + 15 adalah ….. ?",
        optionA: " Y = 2",
        optionB: "Y = 1",
        optionC: "Y = -2",
        optionD: "Y = -1",
        correctOption: "optionD"
    },

    {
        question: "Koordinat bayangan titik P(3 , 4) hasil refleksi terhadap garis x = -1 adalah ….. ?",
        optionA: "P’(-5 , -4)",
        optionB: "P’(5 , 4)",
        optionC: "P’(-5 , 4)",
        optionD: "P’(5 , -4)",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Nilai Buruk, Teruslah Berlatih."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Nilai Rata-Rata, Anda bisa berbuat lebih baik."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Luar biasa, Pertahankan kerja bagus ini."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}