function addComment(){
    $('formComment').on('submit', function(e){
        let name = $('.userName').val();
        let comment = $('#userComment').val();

        if(name !== "" && comment !== ""){
            
        }
    });

}

function init(){
    addComment();
}

init();
