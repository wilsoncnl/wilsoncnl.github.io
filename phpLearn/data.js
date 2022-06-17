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
            },
			{	author: "Aaron",
				date: Date.now(),
				content:"之前係交友app識左個女仔，第一次約出去飲下嘢傾下偈，第二次出街傾到身體健康狀況，我同佢講我有頸椎問題所以成日失眠，之後佢同我講自己睇開中藥，仲要介紹我去睇下。咁啱嗰日佢要複診，所以就帶左我去，之後叫我買成年嘅中藥療程，因為我冇帶信用卡，所以最後pay左兩個星期嘅療程（1000港幣+），簽埋一份兩年嘅合約（合約寫住需要累積繳交20000+），簽完之後覺得有古怪，出到去之後就報左警。"
			},
			{	author: "Aaron",
				date: Date.now(),
				content:"話說上星期貪得意同朋友一齊down app玩，跟住見到個鬼仔，見佢填埋ig就search望吓，好似幾靚仔就like咗(app)，但冇follow佢跟住隔咗日唔知點解佢request我ig，我問佢係咪識我，佢又話唔sure但好樂意做friend。屌但佢頭幾句開場白同app度match我嗰幾句一撚樣"
			},
			{
				author: "Kay",
				date: Date.now(),
				content:"話說我最近係bumble識左個男仔咁就轉左去signal傾左幾日本身都覺得正正常常但佢開始不停提起同一間聲稱係旺角太子個頭既cafe令我覺得好奇怪諗起當年蘋果追擊Karen呃人上cafe個單野"
			},
			
			{	author: "Gloria",
				date: Date.now(),
				content:"之前係交友app識左個女仔 好似又多左另一種手法 一開始會同你講佢做紅酒/護膚品生意 又會係咁約你出去 partyroom玩玩到咁上下就開始傾佢地既生意經 但我接觸左咁多次呢類騙局 今次有少少新野 佢地有埋投資gymroom呢個元素 話同supplier 合左 之類 其實又係咩傳銷手法黎"
			},
			{	author: "Kenneth",
				date: Date.now(),
				content:"原來因為疫情而無得開既美容院轉行sell中醫各美容sale入侵交友apps, 連比較清泉既CMB都有,佢地未必一同你傾計就sell,上次係Tinder識左個男仔 傾左兩三日先約我出街食飯，借機講下佢以前身體/皮膚有幾唔好，仲話介紹個中醫師比我調理身體,一上到去就feel到出哂事,我認我蠢比人呃，好彩我都係最後比左1300就離場,但聽到隔離小毒毒簽左15000,又有人簽左6000,希望大家新一年唔好再比人呃"
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
