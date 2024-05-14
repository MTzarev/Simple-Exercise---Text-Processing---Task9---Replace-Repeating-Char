function test9(input) {
    let text = input.split(``);
    let newArr = [];
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== text[i - 1]) {
            newArr.push(text[i]);
        }
    }
    console.log(newArr.join(``));
}
test9('qqqwerqwecccwd')