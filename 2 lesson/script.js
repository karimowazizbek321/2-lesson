let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    console.log('Начало');
    setTimeout(function(){
        console.log('2 секунды прошло')
    }, 2000);
    setTimeout(()=>{
        console.log('3 секунды прошло')
    }, 3000);
});