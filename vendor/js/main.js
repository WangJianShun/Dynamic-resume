var result = `/*
*面试官你好,我是XXX
*我将以动画的形式来介绍我自己
*只用文字太单调了
*我就用代码来介绍吧
*首先准备一些样式
*/
*{transition:all .5s;}
html{
background:rgb(222,222,222);
font-size:16px;
}
#code{
padding:16px;
border:1px solid red;
}
/*我需要一点代码高亮*/
.token.selector{color:#690;}
.token.property{color: #905;}
.token.function{color: #dd4a68;}
/*做点3D效果*/
#code{
  transform:rotate(360deg);
}
/*不玩了 介绍一下我自己吧
准备一张白纸
*/
#code{
    position:fixed;
    width:50%;
    left:0;
}
#paper{
    border:1px solid red;
    position:fixed;
    right:0;
    height:100%;
    width:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:16px;
    background:#5f85b0;
}
#paper > .content{
    width:100%;
    height:100%;
    background:white;
}
`
var result2 = `
    
    `
var md = `
自我介绍

我叫 XXX 1990 年 1 月出生 XXX 学校毕业 
自学前端半年 
希望应聘前端开发岗位

技能介绍
熟悉 JavaScript CSS

项目介绍
XXX 轮播
XXX 简历
XXX 画板
联系方式
`
function writeCode(prefix, code, fn) {
    domCode = document.querySelector('#code')
    document.innerHTML = prefix || ''
    var n = 0
    var x = setInterval(() => {
        n += 1

        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css');
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight//y轴高度等于内容的高度
        if (n > code.length) {
            window.clearInterval(x)
            fn.call()
        }
    }, 7)
}
function writeMarkdown(markdown, fn) {
    domPaper = document.querySelector('#paper>.content')
    var n = 0
    var x = setInterval(() => {

        n += 1
        domPaper.innerHTML =markdown.substring(0, n)
        
        domPaper.scrollTop = markdown.scrollHeight//y轴高度等于内容的高度
        if (n > markdown.length) {
            window.clearInterval(x)
            fn.call()
        }
    }, 7)
}

function creatPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    fn.call()
}

writeCode('', result, () => {
    creatPaper(() => {
        writeCode(result, result2, () => {
            writeMarkdown(md)
        })
    })
})




