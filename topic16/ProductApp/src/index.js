$(document).ready(function () {

    const firebaseConfig = {
        apiKey: "AIzaSyChddmtATmn2eQw8KLajv8fAGIhTLrfSHI",
        authDomain: "productapp-2f16d.firebaseapp.com",
        databaseURL: "https://productapp-2f16d-default-rtdb.firebaseio.com",
        projectId: "productapp-2f16d",
        storageBucket: "productapp-2f16d.appspot.com",
        messagingSenderId: "870298862869",
        appId: "1:870298862869:web:16e5426da347b2e252d51c"
    };

    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)

    let hamMenuToggle = false
    let db = firebase.database();
    let collectionProducts = db.ref('/products')

    //APP RUN
    getProducts()


    //ACTIONS
    $('#productSubmit').on('click', function (e) {
        e.preventDefault()

        let productTitle = $('#productTitle').val()
        let productDesc = $('#productDesc').val()
        let productImage = $('#productImage').val()
        let productIsNew = $('#productIsNew').is(':checked')
        let productYear = $('#productYear').val()
        let productPrice = $('#productPrice').val()

        // let ferliIl = moment().diff(productYear,"years")

        let formData = {
            productTitle,
            productDesc,
            productImage,
            productIsNew,
            productYear,
            productPrice,

        }

        console.log(formData);

        collectionProducts.push().set(formData)

    })
    $(document).on('click', ".buyProduct", function () {
        let productID = $(this).data('product-id')
        getProductInfo(productID)
    })

    $("#modalProductDelete").on("click", function () {
        let productID = $(this).data('product-id')
        removeProduct(productID)
    })

    //API
    function getProducts() {
        collectionProducts.on("value", function (snap) {

            let productsData = Object.entries(snap.val()).map(product => {
                return {
                    id: product[0],
                    ...product[1]
                }
            })

            console.log(productsData);
            renderProducts(productsData)
        })
    }

    function getProductInfo(productID) {
        collectionProducts.on("value", function (snap) {
            let productObj = snap.child(productID).val()
            console.log(productObj);

            productObj.id = productID

            renderProductModal(productObj)
        })
    }

    function removeProduct(productID) {
        collectionProducts.child(productID).remove()

    }



    //App Render
    function renderProductModal(obj) {
        $('#exampleModalLabel').html(obj.productTitle)
        $('#modalImage').attr('src', obj.productImage)
        $('#modalProductDelete').attr('data-product-id', obj.id)
        $('#modalYear').html(obj.productTitle)
        $('#modalDesc').html(obj.productDesc)
        $('#modalPrice').html("$" + obj.productPrice)

    }

    function renderProducts(arr) {

        $('#productList').html(

            arr.reverse().map(product => {
                return (
                    `
                        <div class="col-md-3 mt-4">
                            <div class="card" class="shadow rounded  position-relative" >
                                ${product.productIsNew ? "<span class='badge bg-danger text-light position-absolute'/>New</span>" : ''}
                                <img  src="${product.productImage}" class=" p-4 img-fluid custom-image" alt="...">
                                <div class="card-body text-center text-dark ">
                                    <h5 class="card-title">${product.productTitle.slice(0,15)}...</h5>
                                    <p class="card-text">${product.productPrice}</p>
                                    <button class="btn btn-danger w-100 buyProduct" data-product-id=${product.id} data-toggle="modal"
                                        data-target="#exampleModal">Buy</button>
                                </div>
                            </div>
                        </div>
                        
                        
                        `
                )
            })
        )
    }

    //Ham Toggle Menu
    $('#hamMenu').on('click', function () {
        if (!hamMenuToggle) {
            hamMenuToggle = true
            $("#formContent").animate({
                width: '0%',
            })
            $("#formContent form").css({
                display: "none"
            })
            $("#productContent").animate({
                width: '100%'
            })
        } else {
            hamMenuToggle = false
            $("#productContent").animate({
                width: '70%'
            })
            $("#formContent").animate({
                width: '30%',
            })
            $("#formContent form").css({
                display: "block"
            })

        }
    })


})