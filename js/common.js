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
    }
}

var fullpage_type_1 = new Finit();

$(function() {
    var myFullpage1 = function() {
        var fullpage_1_data = ['f_1_section_img_1.png', 'f_1_section_img_2.png', 'f_1_section_img_3.png', 'f_1_section_img_4.png', 'f_1_section_img_5.png'];
        fullpage_type_1.start(fullpage_1_data);
        fullpage_1();
    }


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

var fullpage_1 = function() {
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
                animatePageTwo();
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
        }
    });

    function animatePageOne() {
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
