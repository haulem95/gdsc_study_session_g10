function Bmicalculator(height , weight){
    const Bmi = weight/(height**2);
    return Bmi
}
const height =prompt('what is your height');
const weight =prompt('what is your weight' );

BMI = Bmicalculator(height, weight)
console.log(BMI);
