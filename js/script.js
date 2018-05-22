function setTime() {
    var clock = document.getElementById('clock')
    var now = new Date()
    var year = now.getFullYear()
    var month = now.getMonth() + 1
    var date = now.getDate()
    var hours = now.getHours()
    var minute = now.getMinutes()
    var second = now.getSeconds()
    if (month < 10) month = '0' + month
    if (second < 10) second = '0' + second
    if (minute < 10) minute = '0' + minute
    clock.innerHTML = `${year}-${month}-${date} ${hours}:${minute}:${second}`
}

setInterval("setTime()", 1000)

/*****************************************/

var sales = '453256823'

function retuenNum(ele,num){
    var baseNum = 0
    var int = setInterval(function () {
        baseNum++
        if(baseNum > num) {
            clearInterval(int)
            return
        }
        ele.innerHTML = baseNum
    },100)
}

function play(num){
    var getNum = num.toString()
    for(var i=0;i<getNum.length;i++){
        var html = '<span class="num" data-num="'+sales[i]+'">'+ 0 +'</span>'
        var exist = $('.unit')
        $('.prefix').html('')
        $(html).insertBefore(exist)
    }
    var numList = document.querySelectorAll(".num");

    for (var j=0;j<numList.length;j++){
        var maxNum = numList[j].getAttribute("data-num")
        retuenNum(numList[j],maxNum)
    }
}

play(sales)

var incrementNum = Number(sales)

setInterval(function(){

    incrementNum += 53

    var getIncrementNum = incrementNum.toString()

    var numList = document.querySelectorAll(".num");

    for (var i=numList.length-1;i>0;i--){
        if(getIncrementNum[i] !=numList[i].innerHTML){
            retuenNum(numList[i],getIncrementNum[i])
        }
    }

},4000)

/*****************************************/

function countUp(elem, endVal, startVal, duration, decimal) {
    var startTime = 0;
    var dec = Math.pow(10, decimal);
    var progress,value;
    function startCount(timestamp) {
        if(!startTime) startTime = timestamp;
        progress = timestamp - startTime;
        value = startVal + (endVal - startVal) * (progress / duration);
        value = (value > endVal) ? endVal : value;
        value = Math.floor(value*dec) / dec;
        elem.innerHTML = value.toFixed(decimal);
        progress < duration && requestAnimationFrame(startCount)
    }
    requestAnimationFrame(startCount)
}

var AnimTarget = document.getElementById('numAnimTarget')

var AnimTarget2 = document.getElementById('numAnimTarget2')

countUp(AnimTarget,5638587,0,1000,0)

countUp(AnimTarget2,67,0,1000,0)

setInterval(function(){

    var Mom = (Math.random()*100).toFixed(0)

    countUp(AnimTarget2,Mom,0,500,0)

},60000)

/*****************************************/

var options = {
    useEasing: false,
    useGrouping: false,
    separator: '',
    decimal: '',
};

var num1 = 591664, num2 = 2309225, num3 = 3611947,  num4 = 1465,  num5 = 25000

var AnimTarget3 = new CountUp('numAnimTarget3', 0, num1, 0, 0, options);

var AnimTarget4 = new CountUp('numAnimTarget4', 0, num2, 0, 0, options);

var AnimTarget5 = new CountUp('numAnimTarget5', 0, num3, 0, 0, options);

var AnimTarget6 = new CountUp('numAnimTarget6', 0, num4, 0, 0, options);

var AnimTarget7 = new CountUp('numAnimTarget7', 0, num5, 0, 0, options);

AnimTarget3.start()

AnimTarget4.start()

AnimTarget5.start()

AnimTarget6.start()

AnimTarget7.start()

setInterval(function(){

    num1 += 13

    AnimTarget3.update(num1)

},3000)

setInterval(function(){

    num2 += 15

    AnimTarget4.update(num2)

},3000)

setInterval(function(){

    num3 += 17

    AnimTarget5.update(num3)

},3000)


/*****************************************/

$(function(){

    $('.scrollDiv1').Scroll({line:1,speed:500,timer:2000,autoPlay:'up'});

    $('.scrollDiv2').Scroll({line:1,speed:500,timer:3000,autoPlay:'up'});

    $('.scrollDiv3').Scroll({line:2,speed:500,timer:4000,autoPlay:'down'});

    var scaleNum = 1-((1920-window.innerWidth)*521/1000000)

    document.querySelector('#mainWrap').style.transform = `scale(${scaleNum})`

    setTimeout(function(){
        document.querySelector('.shape-loading').style.display = 'none'
    },2000)

    $(window).resize(function() {
        var scaleNum = 1-((1920-window.innerWidth)*521/1000000)
        document.querySelector('#mainWrap').style.transform = `scale(${scaleNum})`
    });

})

