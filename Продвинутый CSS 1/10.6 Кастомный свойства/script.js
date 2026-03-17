const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);
const mainColor = rootStyles.getPropertyValue('--yellow-color');
console.log(mainColor)

// ТЕСТ