var defaultThreads = [
    {
        id: 1,
		
        title1: "Undergo",
		title:"Undergo",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "宜家男朋友都係喺tinder識的@@咁啱大家口味好似記得第一次見面係睇譚詠麟演唱會 大概傾咗兩個星期就一齊 好快手 怕走寶"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "以前玩過whatsapp group 識到啲朋友keep到宜家成4 5年 諗起都覺得好神奇"
            }
        ]
    },
    {
        id: 2,
		
       
		title1: "Feeling",
		title: "Feeling",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    }
]

var threads = defaultThreads

if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}