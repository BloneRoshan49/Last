const video = document.querySelector('video');
const play = document.getElementById('play');

function videoAnimation(){
    video.addEventListener('mousemove',(dets)=>{
        let x = dets.clientX + 'px';
        let y = dets.clientY + 'px';
    
        play.style.left = x;
        play.style.top = y;
        console.log(x, y);
    
    })
    
    video.addEventListener('mouseover', ()=>{
        play.style.opacity = '1';
    })
    video.addEventListener('mouseout', ()=>{
        play.style.opacity = '0';
    })
    
}

videoAnimation();

function itemAnimation(){
    const items = document.querySelectorAll('.items');
    let cursor = document.querySelector('.cursor');

    items.forEach((item, i)=>{
        item.addEventListener('mousemove', (details)=>{
            let x = details.clientX + 'px';
            let y = details.clientY + 'px';

            cursor.style.top = y;
            cursor.style.left = x;
        });
        item.addEventListener('mouseover', ()=>{
            cursor.style.width = '250px';
            cursor.style.height = '250px'
            cursor.style.opacity = '1';
            if(i == 0){
                cursor.style.background = '#D4D0D3'
            }
            else if(i == 1){
                cursor.style.background = '#E6DFD7'
            }
            else if(i == 2){
                cursor.style.background = '#E6DFD7'
            }
            else if(i == 3){
                cursor.style.background = '#B4D5B6'
            }
    });
    item.addEventListener('mouseleave', ()=>{
        cursor.style.width = '0';
        cursor.style.height = '0'
        cursor.style.opacity = '0';
});
    });
   
   

}

itemAnimation();


function userSelect(){
    let check = document.querySelectorAll('.check');
    let user = document.querySelectorAll('.user');

user.forEach((elem, i)=>{
    elem.addEventListener('click',()=>{
        check[i].style.backgroundColor = 'white'
        check.forEach((exp)=>{
            exp.style.background = '#fff'
        })
            check[i].style.backgroundColor = 'black';
    })
})
}
userSelect()