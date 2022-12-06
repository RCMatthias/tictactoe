const playerFactory = (name, score) => {
    const sayHello = () => console.log("hello" + name);
    return {name, score, sayHello};
}


const playerOne = playerFactory("");
console.log (playerOne.name)
