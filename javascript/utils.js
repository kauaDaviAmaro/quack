export function setPage(page){
    const about = document.querySelector('.about');
    const home = document.querySelector('.home');
    const detail = document.querySelector('.detail');
    const quackPage = document.querySelector('.quack');

    if (page == 'detail') {
        about.style.display = 'none';
        home.style.display = 'none';
        detail.style.display = 'block';
        quackPage.style.display = 'none';
    }else if (page == 'about') {
        home.style.display = 'none';
        detail.style.display = 'none';
        about.style.display = 'block';
        quackPage.style.display = 'none';
    }else if (page == 'quack') {
        detail.style.display = 'none';
        home.style.display = 'none';
        about.style.display = 'none';
        quackPage.style.display = 'block';
    }else{
        detail.style.display = 'none';
        home.style.display = 'block';
        quackPage.style.display = 'none';
        about.style.display = 'none';
    } 
}

export function closeForm(){
    const open = document.getElementById("open");
    const close = document.getElementById("close");
    const form = document.getElementById("addNewHost");

    if (form.style.display == 'none') {
        form.style.display = 'block';
        open.style.display = 'none';
        close.style.display = 'block';
    }else {
        form.style.display = 'none';
        open.style.display = 'block';
        close.style.display = 'none';   
    } 
        
    
}