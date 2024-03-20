document.querySelector(`#text`).addEventListener(`focusout`, myText);
document.querySelector(`#password`).addEventListener(`focusout`, mypass);
document.querySelector(`#btn`).addEventListener(`click`, function() {
    myText();
    mypass();
});
function myText(){
    let massage, text;
    let errElement = document.getElementById(`text`);
    massage = document.getElementById(`err`);
    text = document.getElementById(`text`).ariaValueMax;
     
    try{
        if(text == ""){
            errElement.classList.remove('valid')
            errElement.classList.add(`err`);
            throw `bo'sh`
        }
        if(text.length > 0){
            errElement.classList.remove('err')
            errElement.classList.add('valid')
            massage.innerHTML = '';  
        }
    }catch(e){
        massage.innerHTML = `Qiymat ` + e;
    }
}


function mypass(){
    let massage, pass;
    let errElement = document.getElementById(`password`);
    massage = document.getElementById(`err2`);
    pass = document.getElementById(`password`).ariaValueMax;
     
    try{
        if(pass == ""){
            errElement.classList.remove('valid')
            errElement.classList.add(`err`);
            throw `bo'sh`
        }
        if(pass.length < 3){
            errElement.classList.remove('valid')
            errElement.classList.add(`err`);
            throw `3 tadan ko'proq parol kirgizing`
        }
    }catch(e){
        massage.innerHTML = `Qiymat ` + e;
    }
}