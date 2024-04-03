const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight/ (height*height)).toFixed(2) //2 casa dps da virgula

    const value = document.getElementById('value');
    let descricao = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');


    if (bmi < 18.5){
        descricao = 'Cuidado! Você está abaixo do peso'
    } else if (bmi >= 18.5 && bmi <= 25){
        descricao = 'Você está no peso ideal';
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi > 25 && bmi <= 35){
        descricao = 'Cuidado! Você está com sobrepeso'
    } else if (bmi> 30 && bmi<= 35){
        descricao = 'Cuidado! Você está com obesidade moderada'
    }else if (bmi> 35 && bmi<= 40){
        descricao = 'Cuidado! Você está com obesidade severa'
    } else{
        descricao = 'Cuidado! Você está com obesidade morbida'
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('descricao').textContent = descricao


})