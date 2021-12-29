$(document).ready(function(){

// let $ = function(x){

//     let obj = {
//         elementAdi: document.querySelector(x),

//         html:function(text){
//             this.elementAdi.innerHTML = text
//         },
     
//     };

//     return obj

// }

// $('#title').html('Xos geldiz Jquery e')


// let yenielemt = $('<h2>')

// yenielemt.html('Yeni yarandim')
// yenielemt.attr('id','geldiz')
// yenielemt.css({
//     width:200,
//     color:"red",
//     backgroundColor:"yellow",
// })


// $('p').before(yenielemt)

// let pDeyeri = $('p').html()

// console.log(pDeyeri);




// $(document).on('click','button',function(){
//     console.log('test');
//     // $('p').animate({
//     //     left: '250px',
//     //     top:'400px'
//     // },2000,function(){
//     //     console.log('Bitdi');
//     // })

//     $('p').slideDown(5000)

// })
// })


// $("#flip").click(function(){
//     $("#panel").slideDown("slow");
//   });


//   $.each(drinkList, function(index, el){
//     drinkDiv.append("<div>" + el + "</div>")

  // $('p').css({
  //   height: 100,
  //   backgroundColor:'red'

  // })

  $(document).on('click','.fade',function(){

    let qutu = $('.hereket')

    // $(this).css({backgroundColor:'red'})  
      if($(this).hasClass('top')){
        console.log('Top eledin');
        qutu.animate({
          top:-10
        },2000,function(){console.log('Animasiya bitdi')})
      }

      if($(this).hasClass('bottom')){
        console.log('Bottom eledin');
           qutu.animate({
          top:'+=250px'
        },2000,function(){console.log('Animasiya bitdi')})
      }

      if($(this).hasClass('right')){
        qutu.animate({
          left:'+=250px'
        },2000,function(){console.log('Animasiya bitdi')})
      }

      if($(this).hasClass('left')){
        console.log('Left eledin');
        qutu.animate({
          left:'-=10px'
        },2000,function(){console.log('Animasiya bitdi')})
      }

      console.log(this);

  })





  });
