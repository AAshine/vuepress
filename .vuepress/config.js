module.exports = {
    title : 'leeshine',
    description : 'aashine',
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    head : [
        ['link',{rel:'icon',href:'/leeshine.ico'}]
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '学习文档', link: '/notes/' },
            { text: '关于我', link: '/about' },
            { 
               text: '分享', 
               items:[
                 { text: '技术' , link:'/jishu/'},
                 { text: '每日分享' , link:'/fx/'}
               ]
            },
            { text: 'GitHub', link: 'https://github.com/AAshine'},
            // 下拉列表显示分组
            {
                text: '学习',
                items: [
                { 
                    text: '前端', 
                    items: [
                    { text: 'css', link: '/css/' },
                    { text: 'js', link: '/js/' },
                    ] 
                },
                { 
                    text: '其他', 
                    items: [
                    { text: '学习英文', link: '/language/' },
                    { text: '娱乐', link: '/pastime/'},
                    ] 
                },
                ]
            }
        ],
        sidebar: {
            '/notes/': [
                '/notes/', 
                {
                  title: '笔记列表',
                  children: [
                    '/notes/installssl', // 以docs为根目录来查找文件 
                  ]
                }
            ],
            '/jishu/': [   
                '',     
            ],
            '/fx/': [   
                '',     
            ],
            '/js/': [   
                '',     
            ],
            '/css/': [
                '',     
            ],
            '/pastime/': [
                '',     
            ],
            '/language/': [
                '/language/', 
                {
                  title: 'language title',
                  children: [
                    '/language/language1', // 以docs为根目录来查找文件 
                    '/language/language2'  // 以docs为根目录来查找文件 
                  ]
                }
            ]
            // 下面的是首页显示侧边栏的，不需要首页显示的话可以删掉代码
            // '/': [
            //     '',        /* / */
            //     'contact', /* /contact.html */
            //     'about'    /* /about.html */
            // ]
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated'
      }
}