
window.onload = function(){
    $('#videoFile').on('change', function() {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });
    $('#laterSwitch').on('change', function() {
        $('#videoFile').prop('disabled', $('#laterSwitch').prop('checked'));
        $('#timeSwitch').prop('disabled', $('#laterSwitch').prop('checked'));
    });

    $('#videoFile').setProgressedUploader({
        onInit: function (items) {
            items.message.removeClass('text-danger').addClass('text-primary text-center');
            items.progress.removeClass('mb-3');
        },

        onFinish: function (items, data) {
            $('#someAlert').removeClass('alert-success').addClass('alert-danger');
            switch(data){
                case '0':
                    $('#someAlert').html('<strong>Nem adtad meg</strong> a feladat számát!');
                    break;
                case '1':
                    $('#someAlert').html('<strong>Nem adtad meg</strong> a feltölteni kívánt fájlt!');
                    break;
                case '2':
                    $('#someAlert').html('<strong>Szerverhiba történt.</strong> Próbálkozz újra később! <span style="font-size:10px;">pedig én tényleg teszteltem... :C</span>');
                    break;
                case '3':
                    $('#someAlert').removeClass('alert-danger').addClass('alert-success');
                    $('#someAlert').html('<strong>Sikeresen</strong> megoldottad a feladatot!');
                    break;
                default:
                    $('#someAlert').html('<strong>Ismeretlen szerverhiba történt.</strong> <span style="font-size:10px;">pedig én tényleg teszteltem... :C</span>');
            }
            $('#someAlert').addClass('show');
            setTimeout(function(){
                $('#someAlert').removeClass('show');
            }, 5000);
        },
        
        onError: function(e){
            if(!e) return;
            $('#someAlert').html('<strong>Feltöltési hiba történt.</strong>' + e.message);
        }
    });

}