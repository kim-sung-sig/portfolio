window.onload = function(){
    alert("본 페이지는 1920px에 최적화 되어있습니다.")


    const modalBox = document.querySelector(".modal-box > span")
    const modalImg = document.querySelector(".modal-img")
    const close = document.querySelector(".close")
    const bodyBack = document.querySelector("body")

    modalBox.addEventListener('click',function(){
        modalImg.style.display = 'block';
    });
    close.addEventListener('click',function(){
        modalImg.style.display = 'none';
    });
}
