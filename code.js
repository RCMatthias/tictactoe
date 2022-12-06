const playerFactory = (name, score) => {
    const sayHello = () => console.log("hello" + name);
    return {name, score, sayHello};
}
test 

const playerOne = playerFactory("");
console.log (playerOne.name)
