const juyaInfo = {
    name: "Juya",
    age: 33,
    gender: "Female",
    isHandsome: false,
    favMovies: ["Oldboy", "if only", "LOTR"],
    favFood: [
        {
            name: "Kimchi",
            fatty: false
        },
        {
            name: "Cheese burger",
            fatty: true
        }
    ]
};

juyaInfo.gender = "male";
juyaInfo.favFood[1].name = "pizza";

console.log(juyaInfo);
console.log(juyaInfo.gender); //male
console.log(juyaInfo.favFood[0]); //{name: "Kimchi", fatty: false}
console.log(juyaInfo.favFood[0].fatty); //false
console.log(juyaInfo.favFood[1].name); //pizza