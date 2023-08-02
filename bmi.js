// let a=document.querySelectorAll("input")
let b=document.querySelector("#parent")


b.addEventListener("submit",(e)=>{
    e.preventDefault();
    let w =document.querySelector("#weight").value;
    let h =document.querySelector("#height").value;
    let result=document.querySelector("#Result");
    if(w===" " || isNaN(w) || w<=0){
        alert ("enter the valid weight")
    
    }else if(h===" " || isNaN(h) || h<=0){
        alert ("enter the valid height")
    }else{
        let bmi=Math.round(w/((h*h)/10000));
        if(bmi<=18.6){
            result.innerHTML=`underweight & BMI is ${bmi}`;
        }else if((bmi<=24.9) && (bmi=>18.6)){
            result.innerHTML=`Normal weight & BMI is ${bmi}`;
        }else{
            result.innerHTML=`Overweight & BMI is ${bmi}`;


        }
    }
    
})