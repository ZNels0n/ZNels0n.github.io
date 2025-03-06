let names = ['Albert Einstein', 'Bill Gates', 'Michael Jackson','Oprah Winfrey','Leonardo DiCaprio','Elon Musk','Serena Williams','Winston Churchill','Abraham Lincoln','Marilyn Monroe','David Beckham','Barack Obama','Emma Watson','Taylor Swift','Steve Jobs','Dwayne Johnson','Princess Diana' ,'Kobe Bryant' ,'Nikola Tesla' ,'Bruce Lee' ,'Michael Jordan','Meryl Streep','James Cameron'  ,'Usain Bolt','Muhammad Ali','Freddie Mercury','John F. Kennedy','Lady Gaga'];
let familiarNames = [];
let currentIndex = 0;


function markFamiliar(isFamiliar) {
    if (isFamiliar) {
        familiarNames.push(names[currentIndex]);
    }
    currentIndex++;
    if (familiarNames.length < 10) {
        displayNextName();
    } else {
        endSurvey();
    }
}

function Save_data(names_list){
    const link = document.createElement("a");
    var nameBlob = new Blob([names_list],{type:'text/plain'});
    link.setAttribute('href', URL.createObjectURL(nameBlob));
    link.setAttribute('download', 'FamiliarNames.csv');
    link.click();
    URL.revokeObjectURL(link.href);
}


function endSurvey() {
    document.getElementById("survey-container").style.display = "none";
    document.getElementById("result").innerText = "Survey complete! Familiar names: " + familiarNames.join(", ");
    Save_data(familiarNames.join(",\n"))
}


function displayNextName() {
    if (currentIndex < names.length) {
        document.getElementById("name-display").innerText = names[currentIndex];
    } else {
        endSurvey();
    }
}


// Start the survey
const userNameInput = document.getElementById('user-name');
userNameInput.addEventListener('input', function() {const userName = userNameInput.value;});
displayNextName();
