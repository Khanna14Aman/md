var btn1 = document.querySelector('#btn')
btn1.onclick = function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        document.querySelector('.Img').src = "https://img1.pnghut.com/t/11/25/10/gPdDT9NYLR/black-and-white-monochrome-photography-brand.jpg";
    }else{
        document.querySelector('.Img').src = "https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/moon_dark_mode_night-2-512.png";
    }
}