function slowScroll(id) { 
   var offset = 0;
   $('html, body').animate({ 
        scrollTop: $(id).offset().top - offset 
   }, 500);
   return false; 
} 




const DATA = [
   {
      question: 'Марка вашего авто',
      answers: [
         {
            id: '0',
            value: 'RENO',
         },
         {
            id: '1',
            value: 'AUDI',
         },
         {
            id: '2',
            value: 'MERSEDES',
         },
         {
            id: '3',
            value: 'BMW',
         },
         {
            id: '4',
            value: 'CADILAC',
         },
      ]
   },
   {
      question: 'Год выпуска автомобиля',
      answers: [
         {
            id: '5',
            value: '2011',
         },
         {
            id: '6',
            value: '2012',
         },
         {
            id: '7',
            value: '2013',
         },
         {
            id: '8',
            value: '2014',
         },
         {
            id: '9',
            value: '2015',
         },
         {
            id: '10',
            value: '2016',
         },
         {
            id: '11',
            value: '2017',
         },
         {
            id: '12',
            value: '2018',
         },
         {
            id: '13',
            value: '2019',
         },
         {
            id: '14',
            value: '2020',
         },
         {
            id: '15',
            value: '2021',
         },

      ]
   }
];

const quiz = document.getElementById('quiz');
const quizTwo = document.getElementById('quiz2');
const Questions = document.getElementById('quiz__questions');
// const btn = document.getElementById('btn');
const btnNext = document.getElementById('btnNext');
const number = document.getElementById('number');
const result = document.getElementById('result');


const renderQuestins = (index) => {
   const renderAnswers = () => {

   }
   Questions.innerHTML = `
   <div class="quiz__questions-item">

   <!-- Вопросы -->
   <div class="quiz__questions" id="quiz__questions">${DATA[index].question}</div>
      <div class="quiz__select">
         <select class="quiz__questions-answers" size="1">
            <option value="RENO">Renault</option>
            <option value="AUDI">Audi</option>
            <option value="MERSEDES">Mercedes</option>
            <option value="BMW">BMW</option>
            <option value="CADILAC">Cadillac</option>
         </select>
      </div>
   </div>
   `;
};









const renderResults = () => { };


// quiz.addEventListener('change', (event) => {
//    // результат
// });

quiz.addEventListener('click', (event) => {
   if (event.target.classList.contains('btn')) {
      console.log('Далее');
   }
});

quizTwo.addEventListener('click', (event) => {
   if (event.target.classList.contains('btn2')) {
      console.log('Далее2');
   }
});


