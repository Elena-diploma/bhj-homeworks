const poll = document.querySelector("div.poll");
const pollTitle = poll.querySelector("div#poll__title");
const answersBlock = poll.querySelector("div#poll__answers");
const content = document.querySelector("div.card");
const pollUrl = "https://netology-slow-rest.herokuapp.com/poll.php";
let currentVoteId = 0;

const request = new XMLHttpRequest();
request.open("GET", pollUrl, true);

request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        currentVoteId = response.id;
        pollTitle.textContent = response.data.title;
        console.log(response);
        const answers = response.data.answers;
        for (let i = 0; i < answers.length; i++) {
            const answerButton = document.createElement('button');
            answerButton.classList.add("poll__answer");
            answerButton.textContent = answers[i];
            answerButton.addEventListener("click", function (event) {
                alert("Спасибо ваш голос учтён!");
                const postRequest = new XMLHttpRequest();
                postRequest.open("POST", pollUrl, true);
                postRequest.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                postRequest.onreadystatechange = function() {
                    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                        const statistics = JSON.parse(postRequest.responseText);
                        const stat = statistics.stat;
                        answersBlock.textContent = "";
                        for (let j = 0; j < stat.length; j++) {
                            const pollAnswer = document.createElement('div');
                            pollAnswer.textContent = stat[j].answer + "  " + stat[j].votes;
                            console.log(pollAnswer.textContent);
                            answersBlock.append(pollAnswer);
                        }
                    }
                }
                postRequest.send( 'vote='+currentVoteId+'&answer='+i);
                event.preventDefault();
            });
            answersBlock.append(answerButton);
        }
    }
};

request.send();

