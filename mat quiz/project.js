//STEP1
//doğru cevapları arrayde tut
//STEP2
//formu bir şekilde çekin içindeki kullanıcıların girdiği değerleri alın 
//STEP3
//ister form summit olduğunda event ekle veya buttona click ecventi ekle
//STEp4
//Doğru cevaplarla kullanıcının girdği cevapları foreach ile kontrol edip toplam puanları 25 25 artır
//STEP5
//diplay none ı ortadan kaldır.
const trueAnswers =['8','10','3','25'];
const form = document.querySelector('.question-form');
const result = document.querySelector('.result');
const btn = document.querySelector('.btn');
form.addEventListener('submit',(e) =>{
    e.preventDefault();
    const userAnswers = [form.q1.value, 
        form.q2.value, 
        form.q3.value, 
        form.q4.value];
        let score = 0;
        userAnswers.forEach((answer,index)=>{
        if(answer == trueAnswers[index]){
            score +=25;
        }
    });
    result.classList.remove('d-none');
    result.querySelector('#percentage').textContent = `${score}%`;
    if(score == 100){
        const successMAssage = document.querySelector('#successMessage');
        successMAssage.classList.remove('d-none');
        btn.setAttribute('disabled','');        
    }
    });


