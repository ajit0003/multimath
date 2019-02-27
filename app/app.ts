function startGame() {
    //starting a new game

    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);

    postScore(80, playerName);
    postScore(-5, playerName);
}

function logPlayer(name: string = 'Guest Player'): void {
    console.log(`New game starting for player: ${name}`);
}

function postScore(score: number, playerName: string = 'Guest Player'): void {
    let logger: (value: string) => void;

    if(score < 0) {
        logger = logError;
    } else {
        logger = logMessage;
    }

    let scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;

    logger(`Score: ${score}`);
}

function getInputValue(elementID: string): string | undefined {
    let inputElement: HTMLInputElement = document.getElementById(elementID) as HTMLInputElement;

    if(inputElement.value === '') {
        return undefined;
    } else {
        return inputElement.value;
    }
}

document.getElementById('startGame')!.addEventListener('click', startGame);

let logMessage = (message: string) => console.log(message);

function logError(error: string): void {
    console.error(error);
}