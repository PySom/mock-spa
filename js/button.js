const Button = () => {
    const button = document.createElement('button');
    button.type = "button";
    button.textContent = "Make a Post";
    return button;
}

window.myButton = Button;