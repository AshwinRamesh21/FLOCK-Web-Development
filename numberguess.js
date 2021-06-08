function guess()
{
	let count = 3;
    const random = Math.floor(Math.random()*10) + 1;

    while(count != 0)
        {
       	let num = parseInt(prompt("Guess the number from 1 - 10"));
        if(num == random)
            {
            alert("Congratulations! You guessed the right number!")
            break;
            }

            else if(num < random)
            	alert("You guessed it lower than the number!");

            else if(num > random)
                alert("You guessed it higher than the number!");
            count--;
        }

	if(count == 0)
	alert("Game Over!")
}