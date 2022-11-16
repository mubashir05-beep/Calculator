const output=document.querySelector('.output');
const clearBtn=document.querySelectorAll('.clearBtn');
const miniOutput=document.querySelector('.subOutput');


function clearScrn(){
    clearBtn.forEach(btn => {
        btn.addEventListener('click',()=>{
            output.value='';
        })
    });
}
function calculate(number){
    miniOutput.value+=number;
}
function result(){
    try{
        output.value=eval(miniOutput.value).toFixed(2);
    }
    catch(err){
       console.log('error');
    }
}
function del(){
    output.value=output.value.slice(0,-1);
}