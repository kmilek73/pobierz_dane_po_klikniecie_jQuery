$(document).ready(function () {
    //pobieramy nasz data (przycisk) i tworzymy funkcję obsługującą kliknięcie
    $('#get-data').click(function () {
        //metoda get - pobiera dane w JSON i innych
        /* $.get('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {
                let pId = $('<p></p>').text(`Post Id : ${data.id}`);
                let pUserId = $('<p></p>').text(`User ID : ${data.userId}`);
                let pTitle = $('<p></p>').text(`Tytuł : ${data.title}`);
                let pBody = $('<p></p>').text(`Body : ${data.body}`);
                let hr = $('<hr>');

                $('body').append(pId);
                $('body').append(pUserId);
                $('body').append(pTitle);
                $('body').append(pBody);
                $('body').append(hr);
                // console.log(pBody)
            }
            ) */
// metoda JSON - pobiera tylko dane w formacie JSON
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {
                let pId = $('<p></p>').text(`Post Id : ${data.id}`);
                let pUserId = $('<p></p>').text(`User ID : ${data.userId}`);
                let pTitle = $('<p></p>').text(`Tytuł : ${data.title}`);
                let pBody = $('<p></p>').text(`Body : ${data.body}`);
                let hr = $('<hr>');

                $('body').append(pId);
                $('body').append(pUserId);
                $('body').append(pTitle);
                $('body').append(pBody);
                $('body').append(hr);
                // console.log(pBody)
            }
            )

    })

})