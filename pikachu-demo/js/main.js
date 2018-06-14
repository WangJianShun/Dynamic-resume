
let code = `
/*首先,画出皮卡丘的皮肤;*/
.preview{
  border: 1px solid green;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  background: #ffdc2b;
}
.wrapper{
  height:165px;
  width:100%;
  position:relative;
}
/*画出皮卡丘的鼻子*/
.nose{
  width:0px;
  height:0px;
  left:50%;
  top:28px;
  border-width:10px 10px;
  border-style:solid;
  border-color:red transparent transparent transparent;
  transform:translateX(-50%);
  border-radius:50%;
  position:absolute;
}
/*嗯 还有他的眼睛*/
.eye{
  width:49px;
  height:49px;
  border-radius:50%;
  background: #000;
  position: absolute;
  border:2px silid #000
}
.eye::before{
  content:'';
  width:24px;
  height:24px;
  position:absolute;
  background: white;
  border-radius:50%;
  top:2px;
  left:5px;
  border:1px solid;
}
.eye.left{
  right:50%;
  margin-right:66px;
}
.eye.right{
  left:50%;
  margin-left:66px;
}
/*两个圆圆的小酒窝*/
.face{
  width: 68px;
  height: 68px;
  position:absolute;
  background: red;
  border:2px solid black;
  border-radius:50%;
  top:86px;
}
.face.left{
  right:50%;
  margin-right:92px;
}
  .face.right{
  left:50%;
  margin-left:92px;
}

/*接着还有它的小嘴唇*/
.upperLip{
  width:80px;
  height:20px;
  top:47px;
  border:3px solid;
  border-top:none;
  position:absolute;
  background: #ffdc2b;
}
 .upperLip.right{
  border-bottom-right-radius:40px 20px;
  border-top:none;
  border-left:none;
  transform:rotate(20deg);
  left:50%;
}
 .upperLip.left{
  border-bottom-left-radius:40px 20px;
  border-top:none;
  border-right:none;
  transform:rotate(-20deg);
  right:50%;
}
/*最后就是它的大嘴巴*/
.lowerLip-wrapper{
  width:300px;
  height:112px;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  position:absolute;
  overflow:hidden;
}
.lowerLip{
  width:300px;
  height:3500px;
  background: #a61412;
  border-radius:200px/2000px;
  border:2px solid;
  bottom:0;
  position:absolute;
  overflow:hidden;
}
.lowerLip::after{
  content:'';
  bottom:-10px;
  height:100px;
  width:100px;
  background: #ff5d62;
  left:50%;
  position:absolute;
  transform:translateX(-50%);
  border-radius:50%;
}
/*谢谢观赏*/
`
!function () {
  var duration=50
  function writeCode(prefix, code, fn) {
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id = setTimeout(function run(){//这里将setInterval改为setTimeot,因为后者可以用变量实时的修改速度值
      n += 1
      container.innerHTML = code.substring(0, n)
      styleTag.innerHTML = code.substring(0, n)
      container.scrollTop = container.scrollHeight
      if (n < code.length) {
        id=setTimeout(run,duration)
      }else{
        fn && fn.call()

      }
    }, duration)
  }
  writeCode('', code)
  $('.actions').on('click', 'button', function (e) {
    let $button = $(e.currentTarget) //用户点击的那个button
    let speed=$button.attr('data-speed')
    console.log(speed)
    $button.addClass('active')
    .siblings('.active').removeClass('active')//找到button的兄弟标签并删除它们的active
    switch(speed){
      case 'slow':duration=100
      break
      case 'normal':duration=50
      break
      case 'fast':duration=20
      break
    }
  })
}.call()
