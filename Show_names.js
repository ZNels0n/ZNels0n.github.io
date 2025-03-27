//Zach Nelson
//Javascript script which comes preloaded with the initial unfamiliar names, 
// and uses the participant's survey responses to add the participant's name, and 10 familiar names to the List. 
// This creates the completed Selected names List
let names = ['Albert Einstein', 'Bill Gates', 'Michael Jackson','Oprah Winfrey','Leonardo DiCaprio','Elon Musk','Serena Williams','Winston Churchill','Abraham Lincoln','Marilyn Monroe','David Beckham','Barack Obama','Emma Watson','Taylor Swift','Steve Jobs','Dwayne Johnson','Princess Diana' ,'Kobe Bryant' ,'Nikola Tesla' ,'Bruce Lee' ,'Michael Jordan','Meryl Streep','James Cameron'  ,'Usain Bolt','Muhammad Ali','Freddie Mercury','John F. Kennedy','Lady Gaga'];
let familiarNames = ["names","Brian Davis", "Sarah Brown", "David Taylor", "Laura Anderson", "Richard Bailey", "Alice Perez", "George Sanchez", "Emily Jackson", "Frank Collins", "Nancy Scott"]
let currentIndex = 0;

function markFamiliar(isFamiliar) {
    if (isFamiliar) {
        familiarNames.push(names[currentIndex]);
    }
    currentIndex++;
    if (familiarNames.length < 20) {
        displayNextName();
    } else {
        endSurvey();
    }
}

function Save_data(names_list){
    //get the username value from the box
    const userNameInput = document.getElementById('user-name');
    const userName = userNameInput ? userNameInput.value.trim() : 'defaultUserName';
    const fileName = `${userName}_Selected_names.csv`;

    //create and download the file
    const link = document.createElement("a");
    const nameBlob = new Blob([names_list], { type: 'text/plain' });
    link.setAttribute('href', URL.createObjectURL(nameBlob));
    link.setAttribute('download', fileName);
    document.body.appendChild(link); // Append link to the body
    link.click();
    document.body.removeChild(link); // Remove link after download
    URL.revokeObjectURL(link.href);
}

function endSurvey() {
    document.getElementById("survey-container").style.display = "none";
    document.getElementById("result").innerText = "Survey complete! Thank you for agreeing to be a part of our study :)";
    const userNameInput = document.getElementById('user-name');
    const userName = userNameInput ? userNameInput.value.trim() : 'defaultUserName';
    for (let i = 0; i < 10; i++) {
        familiarNames.push(userName)
    }
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
displayNextName();
