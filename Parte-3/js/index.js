function addComment(){
    $('formComment').on('submit', function(e){
        let name = $('.userName').val();
        let comment = $('#userComment').val();

        if(name !== "" && comment !== ""){
            $('.seccionComments').append(`<div></div>`)
        }
    });

}

function init(){
    addComment();
}

init();
