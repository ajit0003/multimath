function getInputValue(elementID: string): string {
    let inputElement: HTMLInputElement = document.getElementById(elementID) as HTMLInputElement;
    return inputElement.value;
}

function logger(message: string): void {
    console.log(message);
}

export { getInputValue as getValue, logger };