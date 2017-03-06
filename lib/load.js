// function loading (c) {
//     var index = 0,
//         imgList = [],
//         conf = {
//             play: $.noop,
//             path: ''
//         };
//
//     c = $.extend({}, conf, c);
//     var wrap = $('.loadingBar');
//     if ($.isArray(c.list)) {
//         for (var i in c.list) {
//             imgList.push(c.path + c.list[i]);
//         }
//     } else if (c.list) {
//         imgList.push(c.path + c.list);
//     }
//     load();
//
//     function load () {
//         if (!$.isArray(imgList)) {
//             return;
//         }
//         var per = (100 - Math.ceil(index / imgList.length * 100));
//
//         //读取百分比
//         //wrap.find('.percent').html(per);
//
//         $("#per").text(per);
//         //图形加载
//         var ah = 280;
//         var ah100 = 280 * 0.01;
//         wrap.find('.loader-inner').height(Math.ceil(ah100 * per));
//         wrap.find('.loader-inner').css('margin-top', Math.ceil(ah - ah100 * per) + 'px');
//
//         if (imgList.length <= index) {
//             imgList = null;
//             c.play.call(wrap, c);
//             return;
//         }
//
//
//         var i = new Image();
//         i.src = imgList[index];
//         // 如果图片被缓存，则直接返回缓存数据
//         if (i.complete) {
//             index++;
//             load();
//             return;
//         }
//
//         i.onload = i.onerror = function () {
//             index++;
//             load();
//         };
//     }
// }
