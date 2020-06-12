window.onload = function(){
    var url = new URL(this.location.href);
    var msg = url.searchParams.get('failed');
    if(msg != null){
        switch(msg){
            case "0":
                $('#failedAlert').html('<strong>Hibás</strong> felhasználónév vagy jelszó!');
                break;
            case "1":
                $('#failedAlert').html('<strong>Érvénytelen munkamenet.</strong> Lépj be újból!');
                break;
            case "2":
                $('#failedAlert').html('<strong>Sikeresen</strong> kiléptél.');
                break;
        }
        $('#failedAlert').addClass('show');
        this.setTimeout(function(){
            $('#failedAlert').removeClass('show');
        }, 5000);
    }
}