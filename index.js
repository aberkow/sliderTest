var sliderContainer = $('.slider__container');
var slide = $('.slide');
var activeSlide = $('.active');
var button = $('button');


$(document).ready(function() {
  // console.log(sliderContainer, slide, activeSlide, button);
  var slides = button.siblings('.slide');

  slides.each(function(index, value) {
    $(value).attr({
      id: 'slide__' + index,

    });
    // console.log($(value));
  });

  button.on('click', function() {
    var counter;
    var newSlide;

    // count the index of the divs in each array. the array's are
    // separated by $(this).

    //control for going over/under the index count.

    var slideArray = $(this).siblings('div');
    console.log(slideArray, 'slideArray from buuton click');

    var currentSlide = slideArray[0];
    // var parent = $(this).parent();
    // var currentSlide = $(this).siblings('.slide');
    // console.log(currentSlide);
    if ($(this).hasClass('prev') && $(this).siblings('.active')) {
      currentSlide = $(this).siblings('.active');
      newSlide = currentSlide.prev();
      // console.log(newSlide, 'prevSlide');
    } else {
      currentSlide = $(this).siblings('.active');
      newSlide = currentSlide.next();
      // console.log(newSlide, 'nextSlide');
    }

  });


  var activeSlides = slides.filter('.active');
  // console.log(activeSlides, 'activeSlides');
});























// var sliderContainer = $('.slider__container');
// var slide = $('.slide');
// var button = $('button');
// var sliderContainerArray = [];
// var slideArray = [];
// var buttonArray = [];
//
// var maxCount = slide.length;
// console.log(maxCount, 'maxCount');
// var counter = 0;
//
// $(document).ready(function() {
//   // create an array of every slide in the document.
//   sliderContainer.each(function(index, value) {
//     sliderContainerArray.push(value);
//   });
//   console.log(sliderContainerArray, 'sliderContainerArray');
//
//   // assign each index/slide of the array an id.
//   for (var i = 0; i < sliderContainerArray.length; i++) {
//     var containers = sliderContainerArray[i];
//     console.log(containers, 'containers');
//     slideArray = containers.getElementsByTagName('div');
//     buttonArray = containers.getElementsByTagName('button');
//
//     //can't use jquery .attr method here bc now the slides aren't jquery, just reg html elements
//     containers.setAttribute('id', 'container__' + i);
//     // sliderContainers.setAttribute('id', 'sliderContainer__' + i);
//     // buttons.setAttribute('id', 'button__' + i);
//
//   };
//
//   for (var i = 0; i < slideArray.length; i++) {
//     var slides = slideArray[i];
//     //var slides = slideArray
//     slides.setAttribute('id', 'slide__' + i);
//   };
//
//   for (var i = 0; i < buttonArray.length; i++) {
//     var buttons = buttonArray[i];
//     buttons.setAttribute('id', 'button__' + i);
//   }
//
//   console.log(slideArray, buttonArray);
//
//   button.on('click', function() {
//     var buttonClass = $(this).attr('class');
//     var container = $(this).parent().attr('class');
//     // console.log(text, container);
//     if (buttonClass === 'next') {
//       counter += 1;
//     } else {
//       counter -= 1;
//     }
//     console.log(counter);
//   });
//
//   // doesn't pick up the right slide...
//   // slide.on('click', function() {
//   //   console.log(slide.attr('id'));
//   //   if (slide.hasClass('active')) {
//   //     console.log('active');
//   //   }
//   // });
// });
