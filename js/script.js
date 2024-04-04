$(function(){
    alert("본 페이지는 1920px에 최적화 되어있습니다.")



    $("#modal-box1").click(function(){
        $("#modal-bg").show();
        $("#modal-img1").show();
    })
    $("#modal-box2").click(function(){
        $("#modal-bg").show();
        $(`#modal-img2`).show();
    })
    $(`#modal-box3`).click(function(){
        $("#modal-bg").show();
        $(`#modal-img3`).show();
    })
    
    $(".close").click(function(){
        $("#modal-bg").hide();
        $(".modal-img").hide();
        $(".modal-img").scrollTop(0);
    })
    
    $("#modal-bg").click(function(){
        $("#modal-bg").hide();
        $(".modal-img").hide();
        $(".modal-img").scrollTop(0);
    })

})
