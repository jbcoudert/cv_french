$(document).ready(function() {
    if (window.innerWidth < 767) {
        $('#body').removeClass('container my-3')
        $('#body').addClass('container-fluid p-0 m-0')
        $('span').addClass('d-block text-center mb-3')
        $('span').removeClass('borderIcone')
        $('span i').css('font-size', '2rem')
        $('.left').css('margin-right', '0')
        $('h5').css('line-height', '35px')
        


      } else {
        $('#body').addClass('container my-3')
        $('#body').removeClass('container-fluid p-0 m-0')
        $('span').removeClass('d-block text-center mb-3')
        $('span').addClass('borderIcone')
      }
    console.log(window.innerWidth);
    
})