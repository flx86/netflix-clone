// Elements
const faqListContainer = document.querySelector("[data-faq-list-container]");

// Event Listeners

// State
const state = {
  faqs:
  [
    {
      id:0,
      question:"What is Netflix?",
      answers:["Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.", "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"]
    },
    {
      id:1,
      question:"How much does Netflix cost?",
      answers:["Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one low fixed monthly fee. Plans start from USD7.99 a month. No extra costs or contracts"
      ]
    },
    {
      id:2,
      question:"Where can I watch it?",
      answers:["Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
      "You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."]
    },
    {
      id:3,
      question:"How do I cancel?",
      answers:["Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."]
    },
    {
      id:4,
      question:"What can I watch on Netflix?",
      answers:["Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."]
    }
  ]
  
}


// On load 
renderFaqs();
addFaqsEventListeners();


function addFaqsEventListeners(){
  const questionButtons = document.querySelectorAll(".faq-question");
  const faqAnswers = document.querySelectorAll(".faq-answer");
  const closeIcons = document.querySelectorAll(".x-close-icon-container");
  
  questionButtons.forEach(button => {
    button.addEventListener("click", e => {
      closeIcons.forEach(icon  => {
        if(icon.parentElement.dataset.faqId === e.currentTarget.dataset.faqId ){          
          icon.classList.toggle("icon-close");
        }else{
          icon.classList.add("icon-close");
        }
      })

      faqAnswers.forEach(answer => {
        if (answer.dataset.faqId === e.currentTarget.dataset.faqId && 
            answer.classList.contains("closed"))
        {          
          answer.classList.remove("closed");
          answer.classList.add("open");
        }else{
          answer.classList.add("closed");
          answer.classList.remove("open");
        }
      })
    });
  })
}

function renderFaqs(){
  const { faqs } = state;
  faqs.forEach(faq => {
    const listWrapper = document.createElement("li");
    listWrapper.classList.add("faq-list-wrapper");    
    listWrapper.appendChild( getFaqQuestionTemplate(faq) );
    listWrapper.appendChild( getFaqAnswersTemplate(faq) );
    faqListContainer.appendChild(listWrapper);
  })
}

function getFaqQuestionTemplate(faq){
  const questionButton = document.createElement("button");
  questionButton.classList.add("faq-question");
  questionButton.innerText = faq.question;
  questionButton.dataset.faqId = faq.id;

  const closeIconContainer = document.createElement("div");
  closeIconContainer.classList.add("x-close-icon-container");
  closeIconContainer.classList.add("icon-close");
  closeIconContainer.innerHTML = `<img src="./assets/x-close-icon-white.png" alt="">`;
  questionButton.appendChild(closeIconContainer);
  return questionButton;
}

function getFaqAnswersTemplate(faq){
  const answersContainer = document.createElement("div");
  answersContainer.classList.add("faq-answer");
  answersContainer.classList.add("closed");

  answersContainer.dataset.faqId = faq.id;

  faq.answers.forEach( (answer, index) => {
    if (index <= 0){     
      const paragraph = document.createElement("p");
      paragraph.innerText = answer;
      answersContainer.appendChild(paragraph);
      
    }else{
      const breakElement1 = document.createElement("br");
      const breakElement2 = document.createElement("br");
      const paragraph = document.createElement("p");
      answersContainer.appendChild(breakElement1);
      answersContainer.appendChild(breakElement2);
      paragraph.innerText = answer;
      answersContainer.appendChild(paragraph);
    }
  });

  return answersContainer;
}



