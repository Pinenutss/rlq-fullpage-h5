// $(function() {
//
//     var html_1 = "";
//     var fullpage_1_data = ['f_1_section_img_1.jpg', 'f_1_section_img_2.jpg', 'f_1_section_img_3.jpg', 'f_1_section_img_4.jpg', 'f_1_section_img_5.jpg'];
//
//     $(fullpage_1_data).each(function(i, item) {
//         //console.log(item[3]);
//         html_1 += '<div class="section" style="background-image:url(img/' + item + ')">'
//         html_1 += '<p>第' + i + '屏</p>'
//         html_1 += '<i class=" fa fa-angle-down faa-bounce animated"></i>'
//         html_1 += '</div>'
//     });
//     $('#fullpage1').html(html_1);
//     fullpage_1();
// })
var html_1 = "";
var html_2 = "";
function Finit() {}
Finit.prototype = {
    start: function(data) {
        $(data).each(function(i, item) {
            html_1 += '<div class="section" style="background-image:url(img/' + item + ')">'
            //html_1 += '<p>第' + i + '屏</p>'
            html_1 += '<i class=" fa fa-angle-down"></i>'
            html_1 += '</div>'
        });
        $('#fullpage1').append(html_1);
        html_1 = "";
    },
    close: function() {
        $('#fullpage1').remove(html_1);
    },
    slide: function(data) {
        $(data).each(function(i, item) {
            html_2 += '<div class="slide" style="background-image:url(img/' + item + ')">'
            //html_2 += '<p>第' + i + '横屏</p>'
            html_2 += '<i class=" fa fa-angle-left faa-passing-reverse animated"></i>'
            html_2 += '</div>'
        });
    }
}

var fullpage_type_1 = new Finit();

$(function() {
    var fullpage_1_data = ['f_1_section_img_1.jpg', 'f_1_section_img_2.jpg', 'f_1_section_img_3.jpg', 'f_1_section_img_4.jpg', 'f_1_section_img_5.jpg'];

    var fullpage_2_data = ['f_2_section_img_1.jpg', 'f_2_section_img_2.jpg', 'f_2_section_img_3.jpg', 'f_2_section_img_4.jpg', 'f_2_section_img_5.jpg'];
    var fullpage_2_data_2 = ['f_2_silde_img_2.jpg', 'f_2_silde_img_1.jpg', 'f_2_section_img_5.jpg']

    var fullpage_3_data = [
        'f_3_section_img_1.jpg',
        'f_3_section_img_2.jpg',
        'f_3_section_img_3.jpg',
        'f_3_section_img_4.jpg',
        'f_3_section_img_5.jpg',
        'f_3_section_img_6.jpg'
    ];
    var fullpage_3_data_1 = ['f_3_silde_img_3_2.jpg', 'f_3_silde_img_3_1.jpg', 'f_3_section_img_3.jpg'];
    var fullpage_3_data_2 = ['f_3_silde_img_4_2.jpg', 'f_3_silde_img_4_1.jpg', 'f_3_section_img_4.jpg'];
    var fullpage_3_data_3 = ['f_3_silde_img_5_2.jpg', 'f_3_silde_img_5_1.jpg', 'f_3_section_img_5.jpg'];

    var fullpage_4_data = ['f_4_section_img_1.jpg', 'f_4_section_img_2.jpg', 'f_4_section_img_3.jpg'];

    var fullpage_5_data = ['f_5_section_img_1.jpg', 'f_5_section_img_2.jpg', 'f_5_section_img_3.jpg', 'f_5_section_img_4.jpg'];
    var fullpage_5_data_1 = ['f_5_silde_img_3.jpg', 'f_5_silde_img_2.jpg', 'f_5_silde_img_1.jpg', 'f_5_section_img_3.jpg']

    var fullpage_6_data = ['f_6_section_img_1.jpg', 'f_6_section_img_2.jpg', 'f_6_section_img_3.jpg', 'f_6_section_img_4.jpg', 'f_6_section_img_5.jpg'];
    var fullpage_7_data = ['f_7_section_img_1.jpg', 'f_7_section_img_2.jpg', 'f_7_section_img_3.jpg', 'f_7_section_img_4.jpg', 'f_7_section_img_5.jpg'];
    //方法1
    var myFullpage1 = function() {
        fullpage_type_1.start(fullpage_1_data);
        fullpage_1(c);
    }
    //方法2
    var myFullpage2 = function(c) {
        fullpage_type_1.start(fullpage_2_data);
        fullpage_type_1.slide(fullpage_2_data_2);
        $('.section').eq(4).append(html_2);
        html_2 = "";
        fullpage_1(c);
        //alert(fullpage_type_1.start==fullpage_type_2.start)
    }
    //方法3
    var myFullpage3 = function(c) {
        fullpage_type_1.start(fullpage_3_data);
        fullpage_type_1.slide(fullpage_3_data_1);
        $('.section').eq(2).append(html_2);
        html_2 = "";
        fullpage_type_1.slide(fullpage_3_data_2);
        $('.section').eq(3).append(html_2);
        html_2 = "";
        fullpage_type_1.slide(fullpage_3_data_3);
        $('.section').eq(4).append(html_2);
        html_2 = "";
        fullpage_1(c);
    }
    //方法4
    var myFullpage4 = function() {
        fullpage_type_1.start(fullpage_4_data);
        fullpage_1(c);
    }
    // 方法5
    var myFullpage5 = function() {
        fullpage_type_1.start(fullpage_5_data);
        fullpage_type_1.slide(fullpage_5_data_1);
        $('.section').eq(2).append(html_2);
        html_2 = "";
        fullpage_1(c);
    }
    //方法6
    var myFullpage6 = function() {
        fullpage_type_1.start(fullpage_6_data);
        fullpage_1(c);
    }

    //方法7
    var myFullpage7 = function() {
        fullpage_type_1.start(fullpage_6_data);
        fullpage_1(c);
    }
    //执行方法
    var c = 3;
    myFullpage3(c);
})

var fullpage_1 = function(c) {
    $('#fullpage1').fullpage({
        css3: true,
        verticalCentered: false,
        easing: 'easeIn',
        scrollingSpeed: 350,
        controlArrows: false,
        afterRender: function() {
            animatePageOne();
        },
        afterLoad: function(anchorlink, index) {
            if (index == 2) {
                animatePageTwo(c);
            }
            if (index == 3) {
                if (c == 3) {
                    $.fn.fullpage.moveTo(3, 2)
                }
                if (c == 4) {
                    $('.section').eq(2).find('.fa-angle-down').hide();
                }
                if (c == 5) {
                    $.fn.fullpage.moveTo(3, 3)
                    $('.section').eq(3).find('.fa-angle-down').hide();
                }
                animatePageThree();
            }
            if (index == 4) {
                if (c == 3) {
                    $.fn.fullpage.moveTo(4, 2)
                }
                animatePageFour();
            }
            if (index == 5) {
                if (c == 1) {
                    $('.section').eq(4).find('.fa-angle-down').hide();
                }
                if (c == 2) {
                    $.fn.fullpage.moveTo(5, 2)
                    $('.section').eq(4).find('.fa-angle-down').hide();
                }
                if (c == 3) {
                    $.fn.fullpage.moveTo(5, 2)
                }
                if (c == 6) {
                    $('.section').eq(4).find('.fa-angle-down').hide();
                }
                if (c == 7) {
                    $('.section').eq(4).find('.fa-angle-down').hide();
                }
                animatePageFive();
            }
            if (index == 6) {
                if (c == 3) {
                    $('.section').eq(5).find('.fa-angle-down').hide();
                }
                animatePageSix();
            }
        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
            // if(index == 5){
            //   alert(5);
            //   $.fn.fullpage.moveSlideLeft();
            // }
        }
    });

    function animatePageOne(c) {
        console.log(1);
    }

    function animatePageTwo() {
        console.log(2);
    }

    function animatePageThree() {
        console.log(3);
    }

    function animatePageFour() {
        console.log(4);
    }

    function animatePageFive() {
        console.log(5);
    }
    function animatePageSix() {
        console.log(6);
    }
}

array3 = [
    'img/slice/3/1.jpg',
    'img/slice/3/2.jpg',
    [
        'img/slice/3/3-1.jpg', 'img/slice/3/3-2.jpg', 'img/slice/3/3-3.jpg'
    ],
    [
        'img/slice/3/4-1.jpg', 'img/slice/3/4-2.jpg', 'img/slice/3/4-3.jpg'
    ],
    [
        'img/slice/3/5-1.jpg', 'img/slice/3/5-2.jpg', 'img/slice/3/5-3.jpg'
    ],
    'img/slice/3/6.jpg'
];
array4 = ['img/slice/4/4-1.jpg', 'img/slice/4/4-2.jpg', 'img/slice/4/4-3.jpg']
array5 = ['img/slice/5/5-1.jpg', 'img/slice/5/5-2.jpg', 'img/slice/5/5-3.jpg', 'img/slice/5/5-4.jpg']
array6 = ['img/slice/6/6-1.jpg', 'img/slice/6/6-2.jpg', 'img/slice/6/6-3.jpg', 'img/slice/6/6-4.jpg', 'img/slice/6/6-5.jpg']
array7 = ['img/slice/7/7-1.jpg', 'img/slice/7/7-2.jpg', 'img/slice/7/7-3.jpg', 'img/slice/7/7-4.jpg', 'img/slice/7/7-5.jpg']

// var fullpage_1_data = [
//     {
//         "f_1_section_img": "f_1_section_img_1.jpg",
//         "f_1_id": "f_1_id_1"
//     }, {
//         "f_1_section_img": "f_1_section_img_2.jpg",
//         "f_1_id": "f_1_id_2"
//     }, {
//         "f_1_section_img": "f_1_section_img_3.jpg",
//         "f_1_id": "f_1_id_3"
//     }, {
//         "f_1_section_img": "f_1_section_img_4.jpg",
//         "f_1_id": "f_1_id_4"
//     }, {
//         "f_1_section_img": "f_1_section_img_5.jpg",
//         "f_1_id": "f_1_id_5"
//     }
// ]
// var fullpage_2_data = [
//     {
//         "f_2_section_img": "f_2_section_img_1.jpg",
//         "f_1_id": "f_2_id_1"
//     }, {
//         "f_2_section_img": "f_2_section_img_2.jpg",
//         "f_1_id": "f_2_id_2"
//     }, {
//         "f_2_section_img": "f_1_section_img_3.jpg",
//         "f_2_id": "f_2_id_3"
//     }, {
//         "f_2_section_img": "f_1_section_img_4.jpg",
//         "f_2_id": "f_2_id_4"
//     }, {
//         "f_2_section_img": "f_1_section_img_5.jpg",
//         "f_2_id": "f_2_id_5"
//     }
// ]
