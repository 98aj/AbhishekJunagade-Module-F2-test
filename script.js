let start = document.querySelector('.startBtn');
let pics = document.querySelector('.picGallery');
let gameDice = document.querySelector('.dice'); 
let diceIm = document.querySelector('.diceIm');
let cong = document.querySelector('.congrats');
let displayData = document.querySelectorAll('.displayInfo');

let imagesClick1 = document.querySelectorAll('.picsHost')[0];
let imagesClick2 = document.querySelectorAll('.picsHost')[1];
let imagesClick3 = document.querySelectorAll('.picsHost')[2];
let imagesClick4 = document.querySelectorAll('.picsHost')[3];

let order = 1;

let popForm = document.querySelector('.formDs')
let forms1 = document.forms[0];




//start game
start.addEventListener('click', (e)=>{
    
    start.classList.add('hide');
    pics.classList.remove('hide');
})

// image 1 click event to display form

imagesClick1.addEventListener('click', (e)=>{
    
    popForm.classList.remove('hide');
    
    
})


//display form and store data for 1 image
forms1.addEventListener('submit', (e)=>{
    e.preventDefault();
    getData();
    popForm.classList.add('hide');
    document.querySelector('h1').innerHTML = 'Please Click on 2nd Image';
    order++;
})

let formData = [];

function getData(){
    const names = document.forms[0].name.value.trim();
    const mails = document.forms[0].email.value.trim();
    const username = document.forms[0].username.value.trim();
    
    let details = {
        name : names,
        emails : mails,
        userLog : username
    }
    formData.push(details);
    forms1.reset();
}



//Click event for 2nd image to display name and username

imagesClick2.addEventListener('click', (e)=>{
    if(order==2){
        displayData[0].innerHTML = 'Name: '+formData[0].name;
        displayData[1].innerHTML = 'UserName: '+ formData[0].userLog;
        document.querySelector('h1').innerHTML = 'Please Click on 3rd Image';
        order++;
    }
    
                             
})




//Roll dice game for 3 image
let ct = 0, ans=0, globCt = 0;


    imagesClick3.addEventListener('click', (e)=>{
        if(order===3)
        gameDice.classList.remove('hide')
        
    })

    

diceIm.addEventListener('click', (e)=>{
   
    let randomNum = Math.floor(Math.random()*6)+1;
    diceIm.setAttribute('src', './images/dice'+randomNum+'.png');
    ans += randomNum;
    
    console.log(randomNum, ans, ct);
    ct++;
    if(ans>=10){
        document.querySelector('.score').innerHTML = `Great!! Your score is ${ans}... Go Ahead and Grab coupon for yourself`;
        order++;
        document.querySelector('h1').innerHTML = 'Please Click on 4th Image to Grab Your Cupon';
    }
    
    if (globCt<2) {
        if(ct>2){
            
            if(ans<10){
                document.querySelector('.score').innerHTML = `Your score is ${ans}... This is your last round to roll dice...Best of luck!`;
                ans = 0;
                ct = 0;
                globCt++
                
            }
        }
    }
    if(ans<10 && globCt==2){
        document.querySelector('.score').innerHTML = `Bad luck you have exausted all chances... Try again later`;
    }
    

    

})








// display coupon for 4 image

    imagesClick4.addEventListener('click', (e)=>{
        if(order===4){
            pics.classList.add('hide');
            gameDice.classList.add('hide');
            cong.classList.remove('hide');
            document.querySelector('p').innerHTML = 'Your cupon code is '+randomText(12);
        }
        
    })


function randomText(length){
    let text = '';
    let sample = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    for(let i=0; i<length; i++){
        text += sample.charAt(Math.floor(Math.random()*sample.length));
        
    }
    return text;
}    