$(document).ready(function () {
   
    $.get("reservation_form.php", function (data) {
        $("#reservation-data").html(data);
    });
});


$(document).ready(function() {
    $('#showUsersBtn').click(function() {
        $.ajax({
            url: 'show_users.php',
            type: 'GET',
            success: function(response) {
                $('#userTable').html(response);
            },
            error: function(xhr, status, error) {
                console.error('Error fetching users:', error);
            }
        });
    });
});



$(document).ready(function() {
    $('#showItemsBtn').click(function() {
        $.ajax({
            url: 'show_items.php',
            type: 'GET',
            success: function(response) {
                $('#menuItemTable').html(response);
            },
            error: function(xhr, status, error) {
                console.error('Error fetching menu items:', error);
            }
        });
    });
});