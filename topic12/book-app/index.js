$(document).ready(function () {

    $('.btn-add').on('click', function () {
        let inputBookName = $('#bookName').val()


        $('#buttonList')
            .append(`<button class="btn-book-search" data-kitab="${inputBookName}">${inputBookName}</button>`)

    })

})



$(document).on('click', '.btn-book-search', function () {
    let duymeninDeyeri = $(this).data('kitab');
    getKitabiGetir(duymeninDeyeri)
})





function getKitabiGetir(kitabAdi) {

    const settings = {
        url: `https://goodreads-books.p.rapidapi.com/search`,
        method: "GET",
        data:{
            q:kitabAdi,
            page:1
        },
        headers: {
            "x-rapidapi-key": "9d9588302emsh58804fa5a30d4d9p1b947ajsn659ea6ae2269"
        }
    };

    $.ajax(settings).then(function (response) {
        console.log(response);

        $('.book-list').html(

            response.map(book => {
                return (
                    `
                    <div>
                        <img width="100"
                            src="${book.smallImageURL}"
                            alt="">
                        <h4>${book.title}</h4>
                        <h5>${book.author}</h5>
                        <h6>${book.publicationYear}</h6>
                    </div>
                    
                    `
                )
            }).join('')


        )
    });
}