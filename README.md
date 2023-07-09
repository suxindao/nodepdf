## Running this project

1. `npm i`
2. `npm run dev` starts up a hot-reload express webserver on port 8080

### 转换逻辑

    1）对应 html 目录的html页面
    2）该 html页面 是用迅捷pdf转换而来的
    3）对应的比例为 1em = 13 px (默认为16px)，em为css中的可调整参数
    4) 因为 .stl_02 {font-size: 1.22em;} 所以 1em = 16/1.22 = 13 px;
