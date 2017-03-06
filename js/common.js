// $(function() {
//
//     var html_1 = "";
//     var fullpage_1_data = ['f_1_section_img_1.png', 'f_1_section_img_2.png', 'f_1_section_img_3.png', 'f_1_section_img_4.png', 'f_1_section_img_5.png'];
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
            html_1 += '<p>第' + i + '屏</p>'
            html_1 += '<i class=" fa fa-angle-down faa-bounce animated"></i>'
            html_1 += '</div>'
        });
        $('#fullpage1').append(html_1);
    },
    close: function() {
        $('#fullpage1').remove(html_1);
    },
    slide: function(data) {
        $(data).each(function(i, item) {
            html_2 += '<div class="slide" style="background-image:url(img/' + item + ')">'
            html_2 += '<p>第' + i + '横屏</p>'
            html_2 += '<i class=" fa fa-angle-right faa-bounce animated"></i>'
            html_2 += '</div>'
        });
    }
}

var fullpage_type_1 = new Finit();

$(function() {
    var fullpage_1_data = [
        'f_1_section_img_1.png',
        'f_1_section_img_2.png',
        'f_1_section_img_3.png',
        'f_1_section_img_4.png',
        'f_1_section_img_5.png',
        'f_1_section_img_6.png'
    ];
    var fullpage_1_data_2 = ['f_1_section_img_4.png', 'f_1_section_img_3.png', 'f_1_section_img_6.png'];
    var fullpage_2_data = [
        'f_2_section_img_1.png',
        'f_2_section_img_2.png',
        'f_2_section_img_3.png',
        'f_2_section_img_4.png',
        'f_2_section_img_5.png',
        'f_2_section_img_6.png'
    ];
    var fullpage_2_data_2 = ['f_2_section_img_6.png', 'f_2_slide_img_1.png', 'f_2_slide_img_2.png'];
    var fullpage_3_data = [
        'f_3_section_img_1.png',
        'f_3_section_img_2.png',
        'f_3_section_img_3.png',
        'f_3_section_img_4.png',
        'f_3_section_img_5.png',
        'f_3_section_img_5.png'
    ];
    var fullpage_4_data = ['f_4_section_img_1.png', 'f_4_section_img_2.png', 'f_4_section_img_3.png', 'f_4_section_img_4.png'];
    var fullpage_5_data = ['f_5_section_img_1.png', 'f_5_section_img_2.png', 'f_5_section_img_3.png', 'f_5_section_img_4.png', 'f_5_section_img_5.png'];
    var fullpage_6_data = [
        'f_6_section_img_1.png',
        'f_6_section_img_2.png',
        'f_6_section_img_3.png',
        'f_6_section_img_4.png',
        'f_6_section_img_5.png',
        'f_6_section_img_5.png'
    ];
    var fullpage_7_data = [
        'f_7_section_img_1.png',
        'f_7_section_img_2.png',
        'f_7_section_img_3.png',
        'f_7_section_img_4.png',
        'f_7_section_img_5.png',
        'f_7_section_img_6.png',
        'f_7_section_img_7.png'
    ];
    //第一行
    // var myFullpage1 = function() {
    //     fullpage_type_1.start(fullpage_1_data);
    //     fullpage_1();
    // }
    //第二行
    var myFullpage1 = function(c) {
        fullpage_type_1.start(fullpage_1_data);
        fullpage_type_1.slide(fullpage_1_data_2);
        $('.section').eq(5).append(html_2);
        fullpage_1(c);
        //alert(fullpage_type_1.start==fullpage_type_2.start)
    }
    //第四行
    var myFullpage4 = function() {
        fullpage_type_1.start(fullpage_4_data);
        fullpage_1();
    }
    // 第五行

    //执行方法
    var c=1;
    myFullpage1(c);
})

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [
    1,
    2,
    3,
    4,
    [1, 2, 3]
];
// myFullpage(3);

var fullpage_1 = function(c) {
    $('#fullpage1').fullpage({
        css3: true,
        verticalCentered: false,
        easing: 'easeIn',
        scrollingSpeed: 350,
        afterRender: function() {
            animatePageOne();
        },
        afterLoad: function(anchorlink, index) {
            if (index == 2) {
                animatePageTwo(c);
            }
            if (index == 3) {
                animatePageThree();
            }
            if (index == 4) {
                animatePageFour();
            }
            if (index == 5) {
                animatePageFive();
            }
            if (index == 6) {
                animatePageSix();
            }
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
// var fullpage_1_data = [
//     {
//         "f_1_section_img": "f_1_section_img_1.png",
//         "f_1_id": "f_1_id_1"
//     }, {
//         "f_1_section_img": "f_1_section_img_2.png",
//         "f_1_id": "f_1_id_2"
//     }, {
//         "f_1_section_img": "f_1_section_img_3.png",
//         "f_1_id": "f_1_id_3"
//     }, {
//         "f_1_section_img": "f_1_section_img_4.png",
//         "f_1_id": "f_1_id_4"
//     }, {
//         "f_1_section_img": "f_1_section_img_5.png",
//         "f_1_id": "f_1_id_5"
//     }
// ]
// var fullpage_2_data = [
//     {
//         "f_2_section_img": "f_2_section_img_1.png",
//         "f_1_id": "f_2_id_1"
//     }, {
//         "f_2_section_img": "f_2_section_img_2.png",
//         "f_1_id": "f_2_id_2"
//     }, {
//         "f_2_section_img": "f_1_section_img_3.png",
//         "f_2_id": "f_2_id_3"
//     }, {
//         "f_2_section_img": "f_1_section_img_4.png",
//         "f_2_id": "f_2_id_4"
//     }, {
//         "f_2_section_img": "f_1_section_img_5.png",
//         "f_2_id": "f_2_id_5"
//     }
// ]
