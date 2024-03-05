$(function (){

    // $('.todos-opc').click(function(){
    //     $('.ataque, .meio, .zaga').css('display', 'flex');
    //     $('.posicoes').css('width', '89%');
    //     $('.todos-opc').css('border', '2px solid #fff');
    //     $('.ata-opc, .meio-opc, .zag-opc').css('border', 'none');
    // })
    $('.ata-opc').click(function(){
        $('.meio, .zaga').css('display', 'none');
        $('.ataque').css('display', 'flex');
        $('.posicoes').css('width', '89%')
        $('.ata-opc').css('border', '2px solid #fff')
        $('.meio-opc, .zag-opc, .todos-opc').css('border', 'none');
    })
    $('.meio-opc').click(function(){
        $('.zaga, .ataque').css('display', 'none');
        $('.meio').css('display', 'flex');
        $('.posicoes').css('width', '89%')
        $('.meio-opc').css('border', '2px solid #fff')
        $('.ata-opc, .zag-opc, .todos-opc').css('border', 'none');
    })
    $('.zag-opc').click(function(){
        $('.ataque, .meio').css('display', 'none');
        $('.zaga').css('display', 'flex');
        $('.posicoes').css('width', '89%');
        $('.zag-opc').css('border', '2px solid #fff')
        $('.ata-opc, .meio-opc, .todos-opc').css('border', 'none');
    })
})