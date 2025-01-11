'use strict';

let correctNumber =  Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',function()
{
    if (document.querySelector('.message').textContent !== '🥳 Correct Number!')
    {
        const guess = Number(document.querySelector('.guess').value);
        document.querySelector('.guess').value = "";
        if(!guess)
        {
            document.querySelector('.message').textContent = 'No number!';
        }
        else
        {
            if(guess != correctNumber)
            {
                if(score > 1)
                {
                    document.querySelector('.message').textContent = guess > correctNumber ? 'Too High!' :'Too Low!';
                    score--;
                    document.querySelector('.score').textContent = score;  
                }
                else
                {
                    document.querySelector('.score').textContent = score = 0;
                    document.querySelector('.message').textContent = 'You lost the game.'; 
                    document.querySelector('body').style.backgroundColor = "#ff0000"; 
                }
            }
            else
            {
                document.querySelector('.message').textContent = '🥳 Correct Number!';
                document.querySelector('.highscore').textContent = highscore = Math.max(highscore,score);
                document.querySelector('.number').textContent = correctNumber;
                document.querySelector('body').style.backgroundColor = "#60b347";
            }
        }    
    }

})

document.querySelector('.again').addEventListener('click',function()
{
    document.querySelector('.guess').value = "";
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = "#222";
    correctNumber = Math.trunc(Math.random() * 20) + 1;
})

document.addEventListener('keydown',function(e)
{
    if(e.key === 'Enter')
    {
        document.querySelector('.check').click();
    }
})

document.addEventListener('keydown',function(e)
{
    if(e.key === 'r')
    {
        document.querySelector('.again').click();
    }
})