$(document).ready(function(){
   var count_click_time = 0;

      $('li').each(function(){
         var count_click_time = 0;
         $(this).click(function(){
            var click_id = $(this).attr('id');
            console.log(click_id);
            var itemName = $(this).find('div .name').html();
            var itemPrice = $(this).find('div .price').html();
            var price_num = $(this).find('.price').attr('data-price');
            console.log(price_num)
            count_click_time++;
            var food = ["Hamburger","Fries","Salad","Sushi","Cake","Cupcake","BBQ","Hotdog","Pie","Pizza","Sandwich","Pancake"];
            if(count_click_time == 1){
               $(".cart_info").append(
                  "<div class='row'>"+
                     "<div id='" + click_id + "'class='col-sm-3 item_info' name='" + itemName + "' price='" + itemPrice + "'>" +
                        "<span class='col-sm-3 item_name'>"+itemName + "</span>"+
                        "<span class='col-sm-3 info_price' price='"+price_num+"'>" + itemPrice + "</span>"+
                        "<span class='col-sm-3 quantity'>" + count_click_time + "</span>"+
                        "<button class='remove'><span class='glyphicon glyphicon-trash'></span></button>"+
                     "</div>"+
                  "</div>");
            }
             else{
                console.log(food[click_id-1]);
                   $('[name="'+food[click_id-1]+'"]').find('.quantity').empty();
                   $('[name="'+food[click_id-1]+'"]').find('.quantity').append(count_click_time);
                   $('[name="'+food[click_id-1]+'"]').find('.info_price').empty();
                   $('[name="'+food[click_id-1]+'"]').find('.info_price').append('$'+count_click_time*price_num);
                $('[name="'+food[click_id-1]+'"]').find('.info_price').attr("price",count_click_time*price_num);
                }
      });
   });

   $('.submit').click(function(){
      var price_array = [];
      $('.info_price').each(function(){
         var item_price = $(this).attr('price');
         // console.log($(this).children().find('.info_price').attr('price'));
         price_array.push(item_price);
      });
      var total_price = 0;
      for (var i = 0; i < price_array.length; i++) {
          total_price += price_array[i] << 0;
      }
      console.log(total_price);
      $(this).siblings('.cart_total').find('.total_price').empty();
      $(this).siblings('.cart_total').find('.total_price').append(total_price);
      $(this).text('小心老闆娘找你算帳');
      $(this).addClass("submitted",3000);
   });
//    $('ul li').on('click', function() {
//       var click_id = $(this).attr('id');
//       var itemName = $(this).find('div .name').html();
//       var itemPrice = $(this).find('div .price').html();
//       console.log(itemName, itemPrice);
// });
   // console.log($('ul li').children().length);
   $('body').on('click', '.glyphicon-trash', function(){
      $(this).parents().closest('.item_info').remove();
   });
});
