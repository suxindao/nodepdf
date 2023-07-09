# Node PDFKit: stream generated documents with express

This tutorial demonstrates how to use [PDFKit](https://pdfkit.org/) to generate a PDF and stream it to the client without wasting precious memory on buffering the complete document.

<h3 align="center">Please help this repo with a ⭐️ if you find it useful! 😁</h3>

This repository is contains the code for the [Node PDFKit video tutorial](https://www.youtube.com/watch?v=fKewAlUwRPk)

[![Node PDFKit tutorial.png](images/node-pdf-tutorial-pdfkit.png)](https://www.youtube.com/watch?v=fKewAlUwRPk)

Please also check out my website at [jangoebel.com](https://jangoebel.com)

For updates, please follow [@_jgoebel](https://twitter.com/_jgoebel) on Twitter.

## Running this project

1. `npm i`
2. `npm run dev` starts up a hot-reload express webserver on port 8080

### 转换逻辑

1）对应 html 目录的html页面
2）该 html页面 是用迅捷pdf转换而来的
3）对应的比例为 1em = 13 px (默认为16px)，em为css中的可调整参数
4) 因为 .stl_02 {font-size: 1.22em;} 所以 1em = 16/1.22 = 13 px;
