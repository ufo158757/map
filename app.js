const REGIONS = {
  qinglan: {
    name: "青岚", en: "QINGLAN WILDS", color: "#718862", hero: "#4f6d58", index: "01",
    subtitle: "山林、研究与静养之地", bounds: { x: 70, y: 60, width: 760, height: 600 }, hub: { x: 430, y: 360 },
    intro: "青岚山地藏着星源学院、古老祭坛与最早的山海祭祀遗迹。",
    copy: "诡异复苏后，星源学院依托观测站、实验基地、图书馆与生物园转向星象溯源、异常解析和精神意识研究；黑潮则只敢零星渗透偏僻水渠。",
    stats: ["680 m|平均海拔", "72 %|林地覆盖", "13|处地标"]
  },
  lanzhou: {
    name: "澜城", en: "LANZHOU CORE", color: "#bc6a50", hero: "#a95745", index: "02",
    subtitle: "澜海湾的城邦心脏", bounds: { x: 760, y: 140, width: 700, height: 540 }, hub: { x: 1090, y: 410 },
    intro: "澜城表面维持市政秩序，内里是苏家权势、黑潮暗线与其他贵族的博弈。",
    copy: "现任市长苏恒出自苏家。执法局、法庭与市政机构勉强处理常规案件，面对诡异灾害时往往只能维持表面秩序，城市暗面则由黑潮不断扩张。",
    stats: ["42 万|常住人口", "08|城市街区", "18|处地标"]
  },
  jinsha: {
    name: "金沙", en: "JINSHA COAST", color: "#d0a04f", hero: "#a97732", index: "03",
    subtitle: "港口、贸易与黄金海岸", bounds: { x: 790, y: 600, width: 640, height: 460 }, hub: { x: 1120, y: 850 },
    intro: "金沙是苏家海运根基，也是黑潮掌控码头、库房与洗白商行的暗流中心。",
    copy: "苏家仍垄断远洋运输与造船，但黑潮已把避风港、集市和部分商行变成合法外壳。白天的商贸繁荣之下，走私、样本交易与情报交换从未停止。",
    stats: ["24|深水泊位", "11|远洋航路", "12|处地标"]
  },
  mingxi: {
    name: "鸣汐", en: "MINGXI FRONTIER", color: "#4f898f", hero: "#386d72", index: "04",
    subtitle: "潮汐边界与沉默工业区", bounds: { x: 1290, y: 150, width: 410, height: 340 }, hub: { x: 1510, y: 330 },
    intro: "鸣汐藏着工厂、暗礁与诡异温床，废弃工业区是黑潮和邪教共同活动的地带。",
    copy: "鸣汐的排水渠、废弃作坊与渔人小屋受黑潮渗透，暗礁和洞穴附近又有蚀涡之契信徒活动。工厂与净水设施仍在运转，却常被诡异现象与失踪传闻笼罩。",
    stats: ["4.8 m|最大潮差", "03|警戒禁区", "12|处地标"]
  }
};

const PLACES = [
  { id:"q-water-tower", region:"qinglan", name:"山顶水塔", type:"水利设施", x:460, y:205, status:"稳定运转", tone:"open", major:true,
    lead:"青岚所有水渠的起点，也是旧城供水系统最关键的节点之一。", copy:"塔身以整块灰岩砌成，蓄水池深入山腹。守塔人每天记录水位，也替学院保管一层不向公众开放的地下管道图。", facts:[["维护方","青岚水务署"],["水位","丰水期"]] },
  { id:"q-nature-park", region:"qinglan", name:"自然公园", type:"公共园区", x:270, y:260, status:"向公众开放", tone:"open",
    lead:"沿山腹展开的原始林地。", copy:"公园刻意保留了大片未经修剪的针叶林，步道只以碎石和木桩标出。天气晴好时，可从西侧高台望见整片澜海湾。", facts:[["开放时间","06:00—20:00"],["巡护站","西坡"]] },
  { id:"q-observatory", region:"qinglan", name:"科研观测站", type:"科研设施", x:585, y:220, status:"受控区域", tone:"limited", major:true,
    lead:"观测山风、潮汐与星轨的高地站。", copy:"白色天线阵隐藏在树线以上，数据经专用线路送往星源学院。站内人员很少谈及那些没有归档的夜间观测记录。", facts:[["负责人","岑屿教授"],["开放日","每月朔日"]] },
  { id:"q-experiment-base", region:"qinglan", name:"实验基地", type:"研究设施", x:680, y:300, status:"暂停开放", tone:"hazard",
    lead:"被围栏与松林共同遮蔽的实验场。", copy:"基地隶属澜海总医院，曾进行长期生态适应研究。北侧三栋建筑至今亮着灯，但访客只能抵达最外层的接待室。", facts:[["隶属","澜海总医院"],["现状","封闭维护"]] },
  { id:"q-library", region:"qinglan", name:"山麓图书馆", type:"文化场所", x:430, y:380, status:"对外开放", tone:"open", major:true,
    lead:"依山而建的旧档案馆。", copy:"阅览室顺着坡地层层下落，最深处收藏着澜海湾最早的航海志。雨天时，整座建筑都能听见屋檐汇入水渠的声音。", facts:[["藏书","约 18 万册"],["闭馆日","每旬末"]] },
  { id:"q-mine", region:"qinglan", name:"青岚矿场", type:"采掘场", x:220, y:430, status:"限制通行", tone:"limited",
    lead:"山脉西侧仍在作业的岩矿。", copy:"矿场出产一种含盐量极高的青灰石，是澜城堤岸与金沙码头的常用材料。废弃矿道被封在第三层，入口只留下一道旧铁门。", facts:[["主要矿材","青灰岩"],["作业层","地表至二层"]] },
  { id:"q-canal", region:"qinglan", name:"水渠", type:"基础设施", x:300, y:500, status:"正常通水", tone:"open",
    lead:"青岚偏僻处的水道，被黑潮用作少量物资和情报的隐秘通道。", copy:"水渠由山顶蓄水池引出，沿自然坡度汇入镜湖，再进入澜城。渠壁嵌有旧式水位刻记，最早的一组可追溯到城邦建立之前。", facts:[["流向","镜湖—澜城"],["巡检","每日两次"]] },
  { id:"q-warehouse", region:"qinglan", name:"仓库", type:"储运设施", x:380, y:530, status:"半封闭", tone:"limited",
    lead:"山道旁的低矮石仓。", copy:"仓库收存学院、观测站与疗养院共用的物资。北侧月台每天早上开放一次，其余时间只允许持灰蓝色通行证的人员进入。", facts:[["开放时段","07:00—09:00"],["管理者","青岚物资处"]] },
  { id:"q-biopark", region:"qinglan", name:"生物园", type:"生态园区", x:600, y:390, status:"预约开放", tone:"open",
    lead:"培育山地药草的封闭园区。", copy:"园内温室模拟不同海拔的小气候，种植制药厂所需的稀有草本。讲解员会提醒访客不要靠近第七温室，那里的玻璃常年覆着水汽。", facts:[["温室","11 座"],["参观","需预约"]] },
  { id:"q-sanatorium", region:"qinglan", name:"安宁疗养院", type:"医疗疗养", x:640, y:490, status:"静养区", tone:"limited",
    lead:"面朝镜湖后山的静养院落。", copy:"疗养院接收需要长期照护的病人，庭园与散步道都避开了主要山道。院内旧礼拜堂如今被改为面向湖面的阅读室。", facts:[["病床","126"],["探视","需登记"]] },
  { id:"q-altar", region:"qinglan", name:"青岚祭坛", type:"遗迹", x:410, y:560, status:"遗址保护", tone:"limited", major:true,
    lead:"被苔藓覆盖的环形石台。", copy:"祭坛不朝向任何一座城市，而是正对春分日落的位置。地方志称这里曾有持续百年的潮声仪式，如今只余风穿过石缝的回响。", facts:[["建成","无法确认"],["保护级别","一级"]] },
  { id:"q-academy", region:"qinglan", name:"星源学院", type:"教育机构", x:510, y:340, status:"开放", tone:"open", major:true,
    lead:"星源学院，全称星辰溯源学院，前身为星辰金融学院，现为澜海湾顶级诡秘研究学府。", copy:"学院没有显眼的校门，教室沿山道散布。最著名的圆顶观星室不对游客开放，但夏季会举办面向居民的天文夜谈。", facts:[["学系","7 个"],["观星夜","每季一次"]] },

  { id:"l-city-hall", region:"lanzhou", name:"市政厅", type:"政务机构", x:900, y:385, status:"办公中", tone:"limited", major:true,
    lead:"澜海湾的最高行政中枢。", copy:"市政厅坐落在澜城正中心，三翼形立面分别朝向港口、学城与西侧山道。底层大厅陈列着四境统一时的海域勘界图。", facts:[["开放大厅","工作日"],["行政层级","市级"]] },
  { id:"l-su-estate", region:"lanzhou", name:"苏氏航海家族庄园", type:"家族宅邸", x:1120, y:360, status:"私人宅邸", tone:"limited", major:true,
    lead:"苏氏五代的临湾庄园，现任族长苏思泽在此掌控家族产业。", copy:"庄园外墙由从金沙运来的浅色石材砌成，内部保留着完整的老式航海塔。苏氏后裔仍参与港务决策，但宅邸只在家族节庆时向外开放。", facts:[["建成","潮历 184 年"],["现任家主","苏闻澜"]] },
  { id:"l-commercial", region:"lanzhou", name:"沧澜商业区", type:"商业街区", x:1130, y:445, status:"全天开放", tone:"open", major:true,
    lead:"澜城最密集的商业与餐饮街。", copy:"从钱庄到海贸货栈，城市日常在这里换手。午后人流最盛，入夜后霓虹沿骑楼铺开，一直映到湖滨社区的方向。", facts:[["主要街道","5 条"],["夜市","至次日 01:00"]] },
  { id:"l-lake-community", region:"lanzhou", name:"湖滨社区", type:"贵族居住区", x:1210, y:540, status:"居民区", tone:"open",
    lead:"紧邻澜海酒楼与澜月湖的贵族居住区，与旧城区和底层住宅保持明显边界。", copy:"住宅楼与低层院落混在一起，步行道直接通向湖畔。社区内保留着城市最早的一条公交支线和一间小小的水渠修配所。", facts:[["居民","约 1.8 万"],["社区中心","湖畔南楼"]] },
  { id:"l-hospital", region:"lanzhou", name:"澜海总医院", type:"医疗机构", x:830, y:370, status:"24 小时", tone:"open", major:true,
    lead:"覆盖四境的综合医疗中心。", copy:"总医院承担澜城大部分急诊，也与青岚的实验基地保持长期研究合作。主楼顶层设有一间不列入公开导览的潮汐病研究室。", facts:[["急诊","24 小时"],["床位","740"]] },
  { id:"l-psychiatric", region:"lanzhou", name:"康顺精神病院", type:"专科医院", x:880, y:490, status:"限制探访", tone:"limited",
    lead:"澜城西侧的专科疗养院。", copy:"院区以低层建筑为主，花园与高墙交替围合。这里承担长期住院照护，也收治少数与潮声幻觉有关的特殊病例。", facts:[["探访","需提前申请"],["建立","潮历 211 年"]] },
  { id:"l-opera", region:"lanzhou", name:"歌剧院", type:"文化场所", x:930, y:495, status:"演出日开放", tone:"open",
    lead:"以贝壳形穹顶闻名的城市剧院。", copy:"剧院正门朝向澜城大道，晚场散场时人会一路走到酒楼与商业区。每年秋潮首日，这里会上演讲述四境起源的旧剧《归汐》。", facts:[["座位","1,260"],["驻团","澜海歌剧团"]] },
  { id:"l-restaurant", region:"lanzhou", name:"澜海酒楼", type:"餐饮住宿", x:1180, y:500, status:"营业中", tone:"open",
    lead:"黑潮用以打探情报、接待各方人物的老字号酒楼。", copy:"酒楼面向商务区与剧院，顶层包厢能望见金沙港口的灯标。主厨以青岚山泉和当日近海渔获为招牌，旺季需提前数日订位。", facts:[["客房","48 间"],["招牌","山泉蒸海鲈"]] },
  { id:"l-welfare", region:"lanzhou", name:"福利院", type:"社会福利", x:945, y:555, status:"开放", tone:"open",
    lead:"接纳孤儿的城市福利机构。", copy:"福利院由旧纺织学校改建，院内有面向湖面的操场。每逢港口节庆，孩子们会受邀到金沙码头参观白帆船队。", facts:[["收容","约 90 人"],["协作","苏氏基金会"]] },
  { id:"l-eldercare", region:"lanzhou", name:"养老院", type:"养老机构", x:900, y:540, status:"开放", tone:"open",
    lead:"镜湖南岸的安静院区。", copy:"养老院与湖滨社区共享部分步道，庭院里种着从自然公园移栽的老松。天气好时，护理员会推着轮椅带老人去看港口方向来的晚霞。", facts:[["床位","180"],["医疗服务","驻院"]] },
  { id:"l-warehouse", region:"lanzhou", name:"港湾库房", type:"仓储设施", x:1180, y:560, status:"货务通道", tone:"limited",
    lead:"黑潮控制的港湾周转仓，也是地下物资合法化的关键节点。", copy:"库房停满驶向金沙的货车，地下有直通总医院后勤站的小型轨道。这里的地面总有盐霜，形成一片终年不干的白色脚印。", facts:[["储区","A—F"],["承运","澜港联运"]] },
  { id:"l-bank", region:"lanzhou", name:"澜城钱庄", type:"金融机构", x:1060, y:410, status:"营业中", tone:"open",
    lead:"跨港贸易与旧式票据仍在此流转，背后与苏家金融网络关系密切。", copy:"钱庄仍在沿用刻印票据与电汇并行的旧制度。二层档案厅收藏着苏氏家族参与早期远洋贸易时留下的账簿。", facts:[["成立","潮历 189 年"],["营业","09:00—17:00"]] },
  { id:"l-enforcement", region:"lanzhou", name:"执法局", type:"治安机构", x:870, y:390, status:"在岗", tone:"limited",
    lead:"负责常规治安与近岸救援，对诡异灾害往往力不从心。", copy:"执法局负责城邦巡查、港口纠纷与近岸救援联络。正门旁的公告栏每日更新潮汛警示与失踪通报。", facts:[["辖区","澜城及近岸"],["值守","全天"]] },
  { id:"l-reef-residences", region:"lanzhou", name:"暗礁住宅", type:"底层住宅", x:1010, y:535, status:"初始复活点", spawn:true, tone:"open",
    lead:"填海区边缘拥挤破旧的底层住宅，也是玩家初始复活的地方。", copy:"住宅楼所在的位置原本是一片暗礁浅滩，填海后才建起第一批楼房。居民常抱怨夜里能听见海水在旧排水层里翻涌。", facts:[["楼栋","9 座"],["建成","潮历 223 年"]] },
  { id:"l-bus", region:"lanzhou", name:"火车站", type:"交通枢纽", x:1010, y:430, status:"运行中", tone:"open",
    lead:"四境铁路客运与换乘的汇合点。", copy:"总站有直达金沙港、鸣汐检查站与青岚学院的长线车。清晨首班车之前，站内会先亮起那条穿过整座城市的暖黄色顶灯。", facts:[["线路","18 条"],["首班","05:20"]] },
  { id:"l-telegraph", region:"lanzhou", name:"电报局", type:"通信机构", x:950, y:430, status:"24 小时", tone:"limited",
    lead:"维系远海航线的旧通信塔。", copy:"电报局仍负责向离港船只发送加密潮位。顶层操作室对公众关闭，屋顶那根细长的天线是澜城夜里最晚熄灭的灯之一。", facts:[["业务","远海电报"],["电码","澜海旧码"]] },
  { id:"l-court", region:"lanzhou", name:"法庭", type:"司法机构", x:940, y:350, status:"工作日出庭", tone:"limited",
    lead:"处理常规司法案件；涉及畸变与诡异的事故通常无法进入公开审理。", copy:"法庭紧邻市政厅与执法局，青铜门廊上刻着澜海湾统一后的第一部海商法条文。三号庭很少开放，传闻专审涉及外海航路的案件。", facts:[["审判庭","5 间"],["旁听","需登记"]] },

  { id:"j-deep-port", region:"jinsha", name:"深海港口", type:"港口设施", x:1280, y:840, status:"装卸作业", tone:"limited", major:true,
    lead:"澜海湾面向远洋的深水泊位。", copy:"港池能容纳吃水最深的商船，岸桥昼夜不停。夜间靠泊需在钟楼鸣三次钟，港内所有灯光会短暂熄灭，只留航道浮标。", facts:[["泊位","24"],["最大吃水","16.4 m"]] },
  { id:"j-clocktower", region:"jinsha", name:"钟楼", type:"地标建筑", x:1130, y:770, status:"开放", tone:"open", major:true,
    lead:"金沙港岸的时间中心。", copy:"钟面同时标刻澜城时间与远海潮时。每逢大潮，钟楼下会围满等待靠港消息的水手和商贩，钟声能越过整个港湾。", facts:[["报时","整点"],["高度","53 m"]] },
  { id:"j-trade-center", region:"jinsha", name:"商贸中心", type:"商业设施", x:1160, y:800, status:"营业中", tone:"open",
    lead:"海贸合同与仓储单据的集中地。", copy:"这里连接港口、集市与澜城钱庄，整栋楼几乎都在谈论货期、潮水和保险。中心中庭立着一座按真实比例缩小的澜海湾沙盘。", facts:[["贸易行","86 家"],["开放","08:00—22:00"]] },
  { id:"j-arena", region:"jinsha", name:"运动竞技场", type:"体育设施", x:1210, y:800, status:"赛事开放", tone:"open",
    lead:"面海的开放式竞技场。", copy:"竞技场以船帆遮阳，主要举办短跑、角力和传统划艇赛。涨潮时观众能同时听见场内的欢呼与看台下的浪声。", facts:[["容量","8,400"],["主赛事","金沙潮杯"]] },
  { id:"j-safe-harbor", region:"jinsha", name:"避风港", type:"港区", x:1340, y:870, status:"正常锚泊", tone:"open",
    lead:"黑潮掌控的内湾避风港，也是走私船和货运洗白的落脚点。", copy:"避风港由天然礁脊与人工防浪墙共同围成。港边常停着待修的渔船，小酒馆会把当天获救船只的数量写在木牌上。", facts:[["锚位","62"],["救援站","北岸"]] },
  { id:"j-shipyard", region:"jinsha", name:"航海企业造船厂", type:"工业设施", x:1060, y:930, status:"生产区域", tone:"limited",
    lead:"苏氏航海企业旗下的大型船厂。", copy:"船厂能建造远洋商船与近岸巡逻艇，船台一直伸入深水区。厂区最深处停着一艘没有名字的黑色试验船。", facts:[["船台","4 座"],["所属","苏氏航海企业"]] },
  { id:"j-resort", region:"jinsha", name:"度假村", type:"休闲设施", x:1240, y:930, status:"营业中", tone:"open",
    lead:"沿海松林间的旅居区。", copy:"客房朝向一片较平静的海湾，远处能看到深水港的岸桥。度假村刻意保留了旧渔村的一口淡水井，井边常有人讲起潮汐涨落的旧传说。", facts:[["客房","116"],["旺季","夏末至秋初"]] },
  { id:"j-market", region:"jinsha", name:"海贸集市", type:"市集", x:1080, y:800, status:"每日开放", tone:"open", major:true,
    lead:"黑潮根基之一，合法摊位与地下黑市在同一片街区交织。", copy:"集市里可以买到远海运来的香料、旧船钟与没有署名的手绘海图。傍晚收摊后，地面会留下细碎的盐和鱼鳞，一直延续到避风港。", facts:[["摊位","220+"],["高峰","17:00—21:00"]] },
  { id:"j-resort-district", region:"jinsha", name:"娱乐中心", type:"娱乐设施", x:1320, y:950, status:"开放", tone:"open",
    lead:"由旧度假区改造的娱乐中心，也是黑潮洗白资金与交换情报的场所。", copy:"这里比度假村更接近本地居民，木栈道连接几处小海滩。黄昏后，摊位会在岸边点起灯，向鸣汐方向望去只剩一条黑色海线。", facts:[["海岸线","3.2 km"],["救生点","6 处"]] },
  { id:"j-dam", region:"jinsha", name:"堤坝", type:"海岸工程", x:1000, y:900, status:"严禁翻越", tone:"hazard",
    lead:"抵挡外海风暴的长堤。", copy:"堤坝外侧布满消波块，内侧是通往船厂与内港的狭长水道。暴潮警报时，整段堤顶会关闭，只剩塔灯按固定频率闪烁。", facts:[["长度","5.4 km"],["值守","风暴期全天"]] },
  { id:"j-pier", region:"jinsha", name:"码头", type:"客运码头", x:1350, y:930, status:"通航", tone:"open",
    lead:"连通近岸岛屿的小型客运码头。", copy:"长班船每日清晨和傍晚各一班，也会在天气允许时驶往鸣汐外礁。候船厅墙上挂着一块被海风磨白的老航线图。", facts:[["航班","每日 4 班"],["航向","近岸与东礁"]] },

  { id:"m-tide-museum", region:"mingxi", name:"潮汐博物馆", type:"文化场馆", x:1490, y:350, status:"开放", tone:"open", major:true,
    lead:"记录澜海湾潮汐与海难史的博物馆。", copy:"展厅悬在旧防波堤上，最醒目的馆藏是一枚从水下洞穴打捞出的刻纹铜钟。闭馆后，地下展厅仍能听见海水拍击基础结构。", facts:[["馆藏","4,800 件"],["闭馆日","每周二"]] },
  { id:"m-workshop", region:"mingxi", name:"工厂作坊", type:"工业设施", x:1450, y:320, status:"作业中", tone:"limited",
    lead:"黑潮用作物资中转的废弃工厂作坊，夜间仍会秘密开工。", copy:"作坊为船只、医院和城市管网加工金属零件，烟囱在退潮时排得更急。这里也收学徒，许多人从金沙港工一路做到独立工坊主。", facts:[["工坊","14 间"],["主要业务","船件维修"]] },
  { id:"m-pharma", region:"mingxi", name:"制药厂", type:"工业设施", x:1480, y:340, status:"受控生产", tone:"hazard",
    lead:"生产澜海常用药物的临海工厂。", copy:"制药厂从青岚生物园取得原料，厂房与储罐之间隔着一条持续喷淋的降温渠。夜间偶尔会闻到类似海藻与金属混合的气味。", facts:[["产线","6 条"],["安全等级","乙级"]] },
  { id:"m-water", region:"mingxi", name:"净水厂", type:"公用设施", x:1560, y:340, status:"正常运行", tone:"limited",
    lead:"全境最重要的海水淡化与净水设施。", copy:"净水厂利用落差与多级过滤为澜城和金沙供水。厂区西侧的旧蓄水池已被封存，围栏内侧仍能看到潮线年复一年留下的白痕。", facts:[["供水","约 58%"],["日均处理","31 万吨"]] },
  { id:"m-prison", region:"mingxi", name:"监狱", type:"司法设施", x:1510, y:280, status:"严禁靠近", tone:"hazard", major:true,
    lead:"澜海湾戒备等级最高的羁押地。", copy:"监狱建在陡崖之后，只有一条受控山道与外界相连。高墙临海的一侧没有窗，巡逻灯每夜会越过潮间带打出三道白色光束。", facts:[["辖区","全海湾"],["警戒","最高级"]] },
  { id:"m-drain", region:"mingxi", name:"排水渠", type:"排水设施", x:1530, y:380, status:"低潮开放", tone:"hazard",
    lead:"贯穿鸣汐工业区的旧排水道，也是黑潮运送违禁物资的秘密线路。", copy:"渠道在低潮时露出湿滑的石底，并连接着几处早已停用的检修井。附近工人说，最深处的水声与正常回声并不一致。", facts:[["出口","东岸外海"],["建议","勿单独进入"]] },
  { id:"m-fisher", region:"mingxi", name:"渔人小屋", type:"居所", x:1600, y:400, status:"有人居住", tone:"open",
    lead:"黑潮眼线聚集的渔人小屋，也是异象样本交易的接头点。", copy:"住在这里的渔人熟悉暗礁之间的每一条水道，也替博物馆打捞零散的旧物。屋顶晾着渔网，门前总有几条被藤壶覆盖的船板。", facts:[["住户","7 户"],["主要渔获","岩鲷"]] },
  { id:"m-training", region:"mingxi", name:"军事训练营", type:"军事设施", x:1400, y:270, status:"军事禁区", tone:"hazard", major:true,
    lead:"扼守东岸山口的训练营。", copy:"训练场借山势而建，平时只能看到白色界桩和偶尔驶过的越野车。营区负责东岸警戒，海雾浓时会在礁线外侧布设临时浮标。", facts:[["警戒范围","东岸全线"],["进入","禁止"]] },
  { id:"m-reef", region:"mingxi", name:"暗礁石", type:"自然地貌", x:1640, y:430, status:"高风险", tone:"hazard",
    lead:"外海航线上最难辨认的礁群。", copy:"暗礁在涨潮时几乎全部没入水下，只有少数几个航标浮在浪中。旧海图上这块区域被反复涂改，附近发生过不止一次夜间触礁。", facts:[["露出高度","0—2.1 m"],["航行","不推荐"]] },
  { id:"m-cave", region:"mingxi", name:"水下洞穴", type:"自然地貌", x:1580, y:420, status:"低潮可入", tone:"hazard",
    lead:"只有在退潮时显露入口的海蚀洞。", copy:"洞穴内部大部分被海水淹没，岩壁留有人工凿出的台阶。博物馆的部分藏品据说来自这里，但公开档案从未记录完整的探索路线。", facts:[["入口期","大潮低潮"],["水深","约 7 m"]] },
  { id:"m-cemetery", region:"mingxi", name:"墓园", type:"纪念场所", x:1370, y:250, status:"开放", tone:"open",
    lead:"面向外海的山坡墓园。", copy:"墓碑没有整齐排列，而是顺着山脊一格格向上。这里安葬着海难失踪者、早期水厂工人与几位无名航海家，清明时会有渡船专程来此。", facts:[["墓位","2,600"],["纪念日","春季潮日"]] },
  { id:"q-apartment", region:"qinglan", name:"萃英公寓", type:"公寓住宅", x:570, y:460, status:"住户区", tone:"open", major:true, apartment:true,
    lead:"学院与山麓之间，供给长期住户的安静公寓。", copy:"", facts:[["所属","青岚"],["类型","公寓"]] },
  { id:"l-apartment", region:"lanzhou", name:"水晶宫", type:"高端公寓", x:1115, y:520, status:"住户区", tone:"limited", major:true, apartment:true,
    lead:"临湾而建的玻璃建筑，是澜城东岸的集中住宅。", copy:"", facts:[["所属","澜城"],["类型","公寓"]] },
  { id:"j-apartment", region:"jinsha", name:"皇冠公寓", type:"度假公寓", x:1240, y:830, status:"住户区", tone:"open", major:true, apartment:true,
    lead:"靠海贸集市与钟楼，面向南岸的度假式公寓。", copy:"", facts:[["所属","金沙"],["类型","公寓"]] },
  { id:"m-apartment", region:"mingxi", name:"塞壬公寓", type:"海景公寓", x:1630, y:390, status:"住户区", tone:"limited", major:true, apartment:true,
    lead:"守在鸣汐外缘的封闭式海景公寓。", copy:"", facts:[["所属","鸣汐"],["类型","公寓"]] }];

const TONE_LABELS = { open: "开放区域", limited: "限制区域", hazard: "危险区域" };
const FACTIONS = {
  none: { label: "无势力", color: "#78877c" },
  academy: { label: "星源学院", color: "#6f8d78" },
  city: { label: "市政", color: "#9b745f" },
  su: { label: "苏家", color: "#b58b45" },
  tide: { label: "黑潮黑帮", color: "#5f7f84" },
  cult: { label: "密教", color: "#7d687e" }
};
const FACTION_GROUPS = {
  academy: new Set(["q-observatory","q-experiment-base","q-biopark","q-academy"]),
  city: new Set(["q-water-tower","q-nature-park","q-library","q-canal","q-sanatorium","l-city-hall","l-hospital","l-psychiatric","l-opera","l-welfare","l-eldercare","l-enforcement","l-bus","l-telegraph","l-court","j-clocktower","j-arena","j-dam","m-tide-museum","m-water","m-prison","m-training"]),
  su: new Set(["l-su-estate","l-commercial","l-bank","l-apartment","l-lake-community","j-deep-port","j-shipyard","j-pier","j-apartment","m-pharma"]),
  tide: new Set(["q-canal","l-restaurant","l-warehouse","j-safe-harbor","j-trade-center","j-resort","j-market","j-resort-district","m-workshop","m-drain","m-fisher"]),
  cult: new Set(["q-altar","m-reef","m-cave","m-cemetery","m-apartment"])
};
function factionFor(place) {
  let actual = "none";
  for (const [key, ids] of Object.entries(FACTION_GROUPS)) {
    if (ids.has(place.id)) { actual = key; break; }
  }
  if (actual === "cult") return { ...FACTIONS.none, hidden: true };
  return FACTIONS[actual];
}
const NOTE_STORAGE_KEY = "lanhai-bay-notes-v1";
function loadNotes() {
  try { return JSON.parse(localStorage.getItem(NOTE_STORAGE_KEY) || "{}"); }
  catch (error) { return {}; }
}
let placeNotes = loadNotes();
function saveNotes() {
  try { localStorage.setItem(NOTE_STORAGE_KEY, JSON.stringify(placeNotes)); }
  catch (error) {}
}


const state = {
  scale: 1, x: 0, y: 0, selectedRegion: null, compareRegion: null, selectedPlace: null, comparePlace: null, labels: false,
  dragging: false, moved: false, startX: 0, startY: 0, originX: 0, originY: 0,
  maxScale: 3.2, minScale: .28
};
const WORLD_WIDTH = 1700;
const WORLD_HEIGHT = 1100;
const viewport = document.querySelector("#mapViewport");
const world = document.querySelector("#mapWorld");
const markerLayer = document.querySelector("#markerLayer");
const detailPanel = document.querySelector("#detailPanel");
const detailContent = document.querySelector("#detailContent");
const detailClose = document.querySelector("#detailClose");
const searchInput = document.querySelector("#placeSearch");
const searchResults = document.querySelector("#searchResults");
const regionList = document.querySelector("#regionList");
const mapBreadcrumb = document.querySelector("#mapBreadcrumb");
const mapScale = document.querySelector("#mapScale");
const mapCoordinate = document.querySelector("#mapCoordinate");
const labelsToggle = document.querySelector("#labelsToggle");
const toast = document.querySelector("#toast");
let toastTimer;

const regionOf = id => REGIONS[id];
const placesOf = id => id ? PLACES.filter(place => place.region === id) : PLACES;
const regionColor = id => REGIONS[id].color;
const icon = name => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"></use></svg>`;
const normalizeText = value => value.trim().toLocaleLowerCase("zh-CN");

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

function markerHtml(place) {
  const region = regionOf(place.region);
  return `
    <button class="poi${place.major ? " is-major" : ""}" type="button" data-place-id="${place.id}"
      style="left:${place.x}px;top:${place.y}px;--poi-color:${region.color}"
      aria-label="${region.name} · ${place.name}，${place.type}" title="${region.name} · ${place.name}">
      <span class="poi__pin" aria-hidden="true"></span><span class="poi__label">${place.name}</span>
    </button>
  `;
}

function renderMarkers() {
  const list = placesOf(state.selectedRegion);
  markerLayer.innerHTML = list.map(place => {
    const region = regionOf(place.region);
    const hasNote = Boolean(placeNotes[place.id]?.text);
    const isMajor = Boolean(place.major && !place.apartment);
    const cls = ['poi', isMajor ? 'is-major' : '', isMajor && !place.spawn ? 'is-landmark' : '', place.apartment ? 'is-apartment' : '', place.spawn ? 'is-spawn' : '', hasNote ? 'has-note' : ''].filter(Boolean).join(' ');
    return '<button class="' + cls + '" type="button" data-place-id="' + place.id + '" style="left:' + place.x + 'px;top:' + place.y + 'px;--poi-color:' + region.color + '" aria-label="' + region.name + ' · ' + place.name + '，' + place.type + '" title="' + region.name + ' · ' + place.name + '">' +
      '<span class="poi__pin" aria-hidden="true"></span><span class="poi__label">' + place.name + '</span>' + (hasNote ? '<span class="poi__note-dot" title="已有笔记"></span>' : '') + '</button>';
  }).join("");
  markerLayer.querySelectorAll(".poi").forEach(button => {
    button.addEventListener("pointerdown", event => event.stopPropagation());
    button.addEventListener("click", event => {
      event.stopPropagation();
      const place = PLACES.find(item => item.id === button.dataset.placeId);
      if (place) selectPlace(place, true);
    });
  });
  if (state.selectedPlace) markerLayer.querySelector('[data-place-id="' + state.selectedPlace.id + '"]')?.classList.add("is-active");
  if (state.comparePlace) markerLayer.querySelector('[data-place-id="' + state.comparePlace.id + '"]')?.classList.add("is-compare");
}

function renderRegions() {
  const pointRegions = new Set([state.selectedPlace?.region, state.comparePlace?.region].filter(Boolean));
  document.querySelectorAll(".region-row").forEach(row => row.classList.toggle("is-active", row.dataset.region === state.selectedRegion));
  document.querySelectorAll(".region-shape").forEach(shape => {
    const id = shape.dataset.region;
    shape.classList.toggle("is-active", id === state.selectedRegion);
    shape.classList.toggle("is-context", pointRegions.has(id));
  });
  world.classList.toggle("has-region-focus", Boolean(state.selectedRegion && !state.selectedPlace));
}

function applyTransform() {
  world.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) scale(${state.scale})`;
  world.style.setProperty("--marker-scale", (1 / state.scale).toFixed(4));
  world.classList.toggle("labels-on", state.labels || state.scale > 1.22);
  world.classList.toggle("labels-mid", state.scale > .82);
  labelsToggle.classList.toggle("is-active", state.labels);
  labelsToggle.setAttribute("aria-pressed", String(state.labels));
}

function constrainView() {
  const width = WORLD_WIDTH * state.scale;
  const height = WORLD_HEIGHT * state.scale;
  const vw = viewport.clientWidth;
  const vh = viewport.clientHeight;
  const margin = Math.min(70, vw * .08);
  state.x = width <= vw ? (vw - width) / 2 : Math.min(margin, Math.max(vw - width - margin, state.x));
  state.y = height <= vh ? (vh - height) / 2 : Math.min(margin, Math.max(vh - height - margin, state.y));
}

function setView(scale, x, y, animate = false) {
  state.scale = Math.max(state.minScale, Math.min(state.maxScale, scale));
  state.x = x; state.y = y; constrainView();
  if (animate && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    world.style.transition = "transform .42s cubic-bezier(.22,.8,.24,1)";
    clearTimeout(setView.timer);
    setView.timer = setTimeout(() => world.style.transition = "", 440);
  } else world.style.transition = "";
  applyTransform();
}

function fitMap(animate = false) {
  const vw = viewport.clientWidth, vh = viewport.clientHeight;
  const fit = Math.min(vw / WORLD_WIDTH, vh / WORLD_HEIGHT) * .89;
  setView(fit, (vw - WORLD_WIDTH * fit) / 2, (vh - WORLD_HEIGHT * fit) / 2, animate);
}

function focusWorldPoint(x, y, scale = 1.42, animate = true) {
  const vw = viewport.clientWidth, vh = viewport.clientHeight;
  const panelOffset = innerWidth > 820 && detailPanel.classList.contains("is-open") ? 160 : 0;
  setView(scale, vw / 2 - x * scale - panelOffset, vh / 2 - y * scale, animate);
}

function focusRegion(regionId) {
  const region = regionOf(regionId), vw = viewport.clientWidth, vh = viewport.clientHeight;
  const desktopPanel = innerWidth > 820 && detailPanel.classList.contains("is-open") ? 160 : 0;
  const scale = Math.min(1.72, Math.max(.6, Math.min((vw - desktopPanel) / region.bounds.width, vh / region.bounds.height) * .86));
  const cx = region.bounds.x + region.bounds.width / 2;
  const cy = region.bounds.y + region.bounds.height / 2;
  setView(scale, vw / 2 - cx * scale - desktopPanel, vh / 2 - cy * scale, true);
}

function focusRegionPair(firstId, secondId) {
  const a = regionOf(firstId), b = regionOf(secondId), vw = viewport.clientWidth, vh = viewport.clientHeight;
  const left = Math.min(a.bounds.x, b.bounds.x);
  const top = Math.min(a.bounds.y, b.bounds.y);
  const right = Math.max(a.bounds.x + a.bounds.width, b.bounds.x + b.bounds.width);
  const bottom = Math.max(a.bounds.y + a.bounds.height, b.bounds.y + b.bounds.height);
  const desktopPanel = innerWidth > 820 && detailPanel.classList.contains("is-open") ? 145 : 0;
  const scale = Math.min(1.52, Math.max(.48, Math.min((vw - desktopPanel) / (right - left + 180), vh / (bottom - top + 160)) * .88));
  const cx = (left + right) / 2, cy = (top + bottom) / 2;
  setView(scale, vw / 2 - cx * scale - desktopPanel, vh / 2 - cy * scale, true);
}

function focusPlacePair(firstPlace, secondPlace) {
  const vw = viewport.clientWidth, vh = viewport.clientHeight;
  const left = Math.min(firstPlace.x, secondPlace.x) - 95;
  const top = Math.min(firstPlace.y, secondPlace.y) - 95;
  const right = Math.max(firstPlace.x, secondPlace.x) + 95;
  const bottom = Math.max(firstPlace.y, secondPlace.y) + 95;
  const panelOffset = innerWidth > 820 && detailPanel.classList.contains("is-open") ? 195 : 0;
  const scale = Math.min(1.9, Math.max(.55, Math.min((vw - panelOffset) / (right - left), vh / (bottom - top)) * .9));
  const cx = (left + right) / 2, cy = (top + bottom) / 2;
  setView(scale, vw / 2 - cx * scale - panelOffset, vh / 2 - cy * scale, true);
}

function focusPlacePoint(place) {
  focusWorldPoint(place.x, place.y, Math.min(1.9, Math.max(1.35, state.scale)), true);
}

function zoomAt(clientX, clientY, factor, animate = false) {
  const rect = viewport.getBoundingClientRect();
  const px = clientX - rect.left, py = clientY - rect.top, oldScale = state.scale;
  const newScale = Math.max(state.minScale, Math.min(state.maxScale, oldScale * factor));
  if (newScale === oldScale) return;
  const wx = (px - state.x) / oldScale, wy = (py - state.y) / oldScale;
  setView(newScale, px - wx * newScale, py - wy * newScale, animate);
}

function distanceFrom(a, b) { return Math.round(Math.hypot(a.x - b.x, a.y - b.y)); }
function nearbyPlaces(place) {
  return PLACES.filter(item => item.id !== place.id && item.region === place.region)
    .map(item => ({ ...item, distance: distanceFrom(place, item) })).sort((a,b) => a.distance - b.distance).slice(0,3);
}
function nearestPlaces(regionId) {
  const region = REGIONS[regionId];
  const center = { x: region.bounds.x + region.bounds.width / 2, y: region.bounds.y + region.bounds.height / 2 };
  return placesOf(regionId).map(item => ({ ...item, distance: distanceFrom(center,item) })).sort((a,b) => a.distance - b.distance).slice(0,4);
}

function renderPlaceDetail(place) {
  const region = regionOf(place.region);
  const faction = factionFor(place);
  const savedNote = placeNotes[place.id]?.text || "";
  detailContent.innerHTML = `
    <div class="detail-hero" style="--hero-color:${region.hero}">
      <div class="detail-hero__bar">
        <span class="detail-region"><i></i>${region.name} / ${place.apartment ? "RESIDENCE" : region.en}</span>
        <span class="detail-status">${place.apartment ? "地区公寓" : place.status}</span>
      </div>
      <h2>${place.name}</h2>
      <div class="detail-type"><span>${place.type}</span><span class="detail-type__line"></span><span>${TONE_LABELS[place.tone]}</span></div>
    </div>
    <div class="detail-body">
      <p class="detail-body__lead">${place.lead}</p>
      <p class="detail-body__copy">复苏纪沿海地区记录点，地形、建筑与道路为旧城现存格局。</p>
      <div class="point-summary point-summary--three">
        <div class="point-summary__item"><span>所属地区</span><strong>${region.name}</strong></div>
        <div class="point-summary__item"><span>归属势力</span><strong class="faction-chip" style="--faction-color:${faction.color}"><i></i>${faction.label}</strong></div>
        <div class="point-summary__item"><span>地点类别</span><strong>${place.type}</strong></div>
      </div>
      <div class="note-panel">
        <div class="note-panel__heading"><span>${icon("note")} 地图笔记</span><span class="note-panel__status" data-note-status>${savedNote ? "已保存" : "仅保存在当前浏览器"}</span></div>
        <textarea class="note-panel__input" data-note-input maxlength="800" placeholder="记录线索、传闻或自己的标注"></textarea>
        <div class="note-panel__actions"><button type="button" data-save-note>保存笔记</button><button type="button" data-clear-note>清除</button></div>
      </div>
      <div class="point-distance-state"><span>路线记录</span><strong>起点 · 01</strong><i></i></div>
      <button class="detail-locate" type="button" data-locate-place="${place.id}" style="--hero-color:${region.hero}">${icon("pin")} 在地图中定位</button>
    </div>
  `;
  detailContent.querySelector("[data-locate-place]")?.addEventListener("click", () => {
    focusWorldPoint(place.x, place.y, Math.max(1.5, state.scale), true);
    showToast(`${place.name} · 已定位`);
  });
  const noteInput = detailContent.querySelector("[data-note-input]");
  const noteStatus = detailContent.querySelector("[data-note-status]");
  if (noteInput) noteInput.value = savedNote;
  detailContent.querySelector("[data-save-note]")?.addEventListener("click", () => {
    const text = noteInput.value.trim();
    if (text) placeNotes[place.id] = { text, updatedAt: Date.now() };
    else delete placeNotes[place.id];
    saveNotes(); renderMarkers(); if (noteStatus) noteStatus.textContent = text ? "已保存" : "仅保存在当前浏览器";
    showToast(text ? "笔记已保存" : "笔记为空");
  });
  detailContent.querySelector("[data-clear-note]")?.addEventListener("click", () => {
    noteInput.value = ""; delete placeNotes[place.id]; saveNotes(); renderMarkers();
    if (noteStatus) noteStatus.textContent = "仅保存在当前浏览器";
    showToast("笔记已清除");
  });
}

const MAIN_ROADS = [
  { id:"ql", points:[[430,360],[600,320],[800,338],[980,378],[1090,410]] },
  { id:"lm", points:[[1090,410],[1190,368],[1300,321],[1400,310],[1510,330]] },
  { id:"lj", points:[[1120,850],[1085,790],[1040,680],[1010,653],[984,565],[987,508],[1030,455],[1090,410]] }
];
const WATER_LINES = [
  [[460,205],[420,260],[380,325],[345,390],[315,450],[300,500]],
  [[470,150],[515,250],[558,360],[578,470],[600,615]],
  [[817,530],[890,536],[960,550],[1024,572],[1088,606],[1125,631]],
  [[1082,790],[1058,825],[1029,856],[1002,891],[971,934],[955,966]]
];
const WATER_AREAS = [
  { cx:780, cy:525, rx:62, ry:56 },
  { cx:1283, cy:525, rx:58, ry:44 }
];
function roadNodeKey(x, y) { return Math.round(x) + "," + Math.round(y); }
function buildRoadGraph() {
  const graph = new Map();
  const add = (a, b, weight) => {
    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);
    graph.get(a).push({ to:b, weight });
    graph.get(b).push({ to:a, weight });
  };
  for (const road of MAIN_ROADS) {
    for (let i = 0; i < road.points.length - 1; i++) {
      const a = road.points[i], b = road.points[i+1];
      add(roadNodeKey(...a), roadNodeKey(...b), Math.hypot(b[0]-a[0], b[1]-a[1]));
    }
  }
  return graph;
}
const ROAD_GRAPH = buildRoadGraph();
function lineIntersection(a,b,c,d) {
  const cross = (p,q,r) => (q.x-p.x)*(r.y-p.y) - (q.y-p.y)*(r.x-p.x);
  const on = (p,q,r) => Math.min(p.x,r.x)-.01 <= q.x && q.x <= Math.max(p.x,r.x)+.01 && Math.min(p.y,r.y)-.01 <= q.y && q.y <= Math.max(p.y,r.y)+.01;
  const o1=cross(a,b,c), o2=cross(a,b,d), o3=cross(c,d,a), o4=cross(c,d,b);
  if ((o1 > 0) !== (o2 > 0) && (o3 > 0) !== (o4 > 0)) return true;
  return (Math.abs(o1)<.001 && on(a,c,b)) || (Math.abs(o2)<.001 && on(a,d,b)) || (Math.abs(o3)<.001 && on(c,a,d)) || (Math.abs(o4)<.001 && on(c,b,d));
}
function pointSegmentDistance(p,a,b) {
  const dx=b.x-a.x, dy=b.y-a.y, len=dx*dx+dy*dy;
  const t=len ? Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.y-a.y)*dy)/len)) : 0;
  return Math.hypot(p.x-(a.x+t*dx), p.y-(a.y+t*dy));
}
function segmentCrossesWater(a,b) {
  for (const line of WATER_LINES) {
    for (let i=0;i<line.length-1;i++) {
      if (lineIntersection(a,b,{x:line[i][0],y:line[i][1]},{x:line[i+1][0],y:line[i+1][1]})) return true;
    }
  }
  for (const area of WATER_AREAS) {
    const aa={x:(a.x-area.cx)/area.rx,y:(a.y-area.cy)/area.ry};
    const bb={x:(b.x-area.cx)/area.rx,y:(b.y-area.cy)/area.ry};
    if (pointSegmentDistance({x:0,y:0},aa,bb) <= .98) return true;
  }
  return false;
}
function projectPointToSegment(px,py,a,b) {
  const dx=b[0]-a[0], dy=b[1]-a[1], len2=dx*dx+dy*dy;
  const t=len2 ? Math.max(.01,Math.min(.99,((px-a[0])*dx+(py-a[1])*dy)/len2)) : .5;
  return { x:a[0]+dx*t, y:a[1]+dy*t, t };
}
function snapCandidates(place) {
  const candidates=[];
  MAIN_ROADS.forEach((road,roadIndex)=>{
    for(let i=0;i<road.points.length-1;i++){
      const a=road.points[i], b=road.points[i+1];
      const p=projectPointToSegment(place.x,place.y,a,b);
      const len=Math.hypot(b[0]-a[0],b[1]-a[1]);
      candidates.push({x:p.x,y:p.y,roadIndex,segIndex:i,t:p.t,distance:Math.hypot(place.x-p.x,place.y-p.y),aKey:roadNodeKey(...a),bKey:roadNodeKey(...b),startWeight:p.t*len,endWeight:(1-p.t)*len});
    }
  });
  candidates.sort((a,b)=>a.distance-b.distance);
  const clear=candidates.filter(c=>!segmentCrossesWater(place,c));
  return (clear.length ? clear : candidates).slice(0,12);
}
function shortestRoadPath(startSnap,endSnap) {
  const startKey="__route_start", endKey="__route_end";
  const coords=new Map([[startKey,{x:startSnap.x,y:startSnap.y}],[endKey,{x:endSnap.x,y:endSnap.y}]]);
  const dist=new Map([[startKey,0]]), prev=new Map(), queue=[[0,startKey]];
  const relax=(from,to,weight)=>{const next=dist.get(from)+weight;if(next < (dist.get(to) ?? Infinity)){dist.set(to,next);prev.set(to,from);queue.push([next,to]);}};
  relax(startKey,startSnap.aKey,startSnap.startWeight);
  relax(startKey,startSnap.bKey,startSnap.endWeight);
  if(startSnap.roadIndex===endSnap.roadIndex && startSnap.segIndex===endSnap.segIndex){
    const road=MAIN_ROADS[startSnap.roadIndex], a=road.points[startSnap.segIndex], b=road.points[startSnap.segIndex+1];
    relax(startKey,endKey,Math.abs(startSnap.t-endSnap.t)*Math.hypot(b[0]-a[0],b[1]-a[1]));
  }
  while(queue.length){
    queue.sort((a,b)=>a[0]-b[0]);
    const [cost,key]=queue.shift();
    if(cost>dist.get(key)) continue;
    if(key===endKey) break;
    for(const edge of ROAD_GRAPH.get(key)||[]) relax(key,edge.to,edge.weight);
    if(key===endSnap.aKey) relax(key,endKey,endSnap.startWeight);
    if(key===endSnap.bKey) relax(key,endKey,endSnap.endWeight);
  }
  if(!dist.has(endKey)) return null;
  const keys=[]; let cursor=endKey;
  while(cursor){keys.push(cursor);if(cursor===startKey)break;cursor=prev.get(cursor);}
  keys.reverse();
  const points=keys.map(key=>{
    if(coords.has(key)) return coords.get(key);
    const [x,y]=key.split(",").map(Number); return {x,y};
  });
  return {points,distance:dist.get(endKey)};
}
function appendUnique(points, point) {
  if (!points.length || Math.hypot(points[points.length-1].x-point.x,points[points.length-1].y-point.y)>.5) points.push({x:point.x,y:point.y});
}
function routeViaMainRoads(firstPlace, secondPlace) {
  const starts=snapCandidates(firstPlace), ends=snapCandidates(secondPlace);
  let best=null;
  for(const startSnap of starts){
    if(segmentCrossesWater(firstPlace,startSnap)) continue;
    for(const endSnap of ends){
      if(segmentCrossesWater(secondPlace,endSnap)) continue;
      const roadRoute=shortestRoadPath(startSnap,endSnap);
      if(!roadRoute) continue;
      const total=startSnap.distance+roadRoute.distance+endSnap.distance;
      if(!best||total<best.total) best={startSnap,endSnap,roadRoute,total};
    }
  }
  if(!best) return null;
  const points=[];
  appendUnique(points,firstPlace); appendUnique(points,best.startSnap);
  for(const point of best.roadRoute.points) appendUnique(points,point);
  appendUnique(points,best.endSnap); appendUnique(points,secondPlace);
  return {points,rawDistance:best.total};
}
function buildPlaceRoute(firstPlace, secondPlace) {
  const sameRegion=firstPlace.region===secondPlace.region;
  let route=null;
  if(sameRegion && !segmentCrossesWater(firstPlace,secondPlace)) {
    route={points:[{x:firstPlace.x,y:firstPlace.y},{x:secondPlace.x,y:secondPlace.y}],rawDistance:Math.hypot(secondPlace.x-firstPlace.x,secondPlace.y-firstPlace.y)};
  } else {
    route=routeViaMainRoads(firstPlace,secondPlace) || {points:[{x:firstPlace.x,y:firstPlace.y},{x:secondPlace.x,y:secondPlace.y}],rawDistance:Math.hypot(secondPlace.x-firstPlace.x,secondPlace.y-firstPlace.y)};
  }
  return { points:route.points, sameRegion, km:Math.max(1,Math.round(route.rawDistance*.03)) };
}
function placeDistance(firstPlace, secondPlace) { return buildPlaceRoute(firstPlace, secondPlace).km; }
function routePointAt(points, fraction = .5) {
  const lengths = [];
  let total = 0;
  for (let i = 1; i < points.length; i++) { const length = Math.hypot(points[i].x-points[i-1].x, points[i].y-points[i-1].y); lengths.push(length); total += length; }
  let target = total * fraction;
  for (let i = 0; i < lengths.length; i++) {
    if (target <= lengths[i]) { const t = lengths[i] ? target / lengths[i] : 0; return { x: points[i].x + (points[i+1].x-points[i].x)*t, y: points[i].y + (points[i+1].y-points[i].y)*t }; }
    target -= lengths[i];
  }
  return points[points.length-1];
}
function drawPlaceRoute(firstPlace, secondPlace) {
  const layer = document.querySelector("#distanceRoute");
  if (!layer) return;
  if (!firstPlace || !secondPlace) { layer.innerHTML = ""; return; }
  const route = buildPlaceRoute(firstPlace, secondPlace);
  const d = route.points.map((point, index) => (index ? "L" : "M") + point.x + " " + point.y).join(" ");
  const labelPoint = routePointAt(route.points, .5);
  const a = regionOf(firstPlace.region), b = regionOf(secondPlace.region);
  layer.innerHTML = `
    <path class="route-halo" d="${d}"></path>
    <path class="route-line" d="${d}"></path>
    <circle class="route-node-halo" cx="${firstPlace.x}" cy="${firstPlace.y}" r="15" style="--route-color:${a.color}"></circle>
    <circle class="route-node" cx="${firstPlace.x}" cy="${firstPlace.y}" r="6" style="--route-color:${a.color}"></circle>
    <circle class="route-node-halo" cx="${secondPlace.x}" cy="${secondPlace.y}" r="15" style="--route-color:${b.color}"></circle>
    <circle class="route-node" cx="${secondPlace.x}" cy="${secondPlace.y}" r="6" style="--route-color:${b.color}"></circle>
    <g transform="translate(${labelPoint.x} ${labelPoint.y})">
      <rect class="route-label-bg" x="-54" y="-23" width="108" height="45" rx="5"></rect>
      <text class="route-label-text" y="-3">${route.km} km</text>
      <text class="route-label-sub" y="12">${route.sameRegion ? "LOCAL ROUTE" : "MAIN ROAD ROUTE"}</text>
    </g>
  `;
}

function renderRegionDetail(regionId) {
  const region = regionOf(regionId);
  const allPlaces = placesOf(regionId);
  const apartment = allPlaces.find(place => place.apartment);
  const highlights = allPlaces.filter(place => place.id !== apartment?.id && place.major).slice(0, 5);
  detailContent.innerHTML = `
    <div class="detail-hero" style="--hero-color:${region.hero}">
      <div class="detail-hero__bar"><span class="detail-region"><i></i>地区总览 / REGION</span><span class="detail-status">${allPlaces.length} 处地点</span></div>
      <h2>${region.name}</h2>
      <div class="detail-type"><span>${region.subtitle}</span><span class="detail-type__line"></span><span>${region.en}</span></div>
    </div>
    <div class="region-overview">
      <span class="region-overview__index">境域档案 ${region.index} / 04</span><h2>${region.name}</h2><span class="region-overview__en">${region.en}</span>
      <p class="region-overview__intro">${region.intro}</p><p class="region-overview__copy">${region.copy}</p>
      <div class="region-stat">${region.stats.map(stat => { const [value,label] = stat.split("|"); return `<div class="region-stat__item"><span class="region-stat__value">${value}</span><span class="region-stat__label">${label}</span></div>`; }).join("")}</div>
      ${apartment ? `<div class="apartment-card" style="--apartment-color:${region.color}"><span class="apartment-card__label">地区公寓</span><div><strong>${apartment.name}</strong><p>${apartment.lead}</p></div><button type="button" data-open-place="${apartment.id}">查看</button></div>` : ""}
      <div class="nearby-heading"><span>代表地点</span><span>PLACES</span></div>
      <div class="nearby-list">${highlights.map(place => `<button class="nearby-item" type="button" data-open-place="${place.id}"><span class="nearby-item__dot" style="--dot-color:${region.color}"></span><span class="nearby-item__name">${place.name}</span><span class="nearby-item__distance">${place.type}</span></button>`).join("")}</div>
      <button class="detail-locate" type="button" data-focus-region="${regionId}" style="--hero-color:${region.hero}">${icon("compass")} 聚焦 ${region.name}</button>
    </div>
  `;
  detailContent.querySelectorAll("[data-open-place]").forEach(button => button.addEventListener("click", () => {
    const place = PLACES.find(item => item.id === button.dataset.openPlace);
    if (place) selectPlace(place, true);
  }));
  detailContent.querySelector("[data-focus-region]")?.addEventListener("click", () => focusRegion(regionId));
}

function renderPlaceDistanceDetail(firstPlace, secondPlace) {
  const a = regionOf(firstPlace.region), b = regionOf(secondPlace.region);
  const km = placeDistance(firstPlace, secondPlace);
  const nearest = PLACES.filter(place => place.id !== firstPlace.id && place.id !== secondPlace.id)
    .map(place => ({ ...place, distance: placeDistance(firstPlace, place) }))
    .sort((x,y) => x.distance - y.distance).slice(0,4);
  detailContent.innerHTML = `
    <div class="detail-hero" style="--hero-color:${a.hero};background:linear-gradient(180deg,rgba(11,39,39,.06),rgba(10,35,36,.92)),linear-gradient(112deg,${a.hero},${b.hero})">
      <div class="detail-hero__bar"><span class="detail-region"><i></i>地点路线 / ROUTE</span><span class="detail-status">路线距离</span></div>
      <div class="distance-number"><strong>${km}</strong><span>公里 / KM</span></div>
      <p class="distance-hero-title">${firstPlace.name} → ${secondPlace.name}</p>
    </div>
    <div class="distance-summary">
      <p class="distance-summary__lead">${firstPlace.name}到${secondPlace.name}的距离为 ${km} 公里。</p>
      <p class="distance-summary__copy">同一地区按两点路径计算；跨地区时沿澜海湾主干道计算，金色线路表示本次路线。</p>
      <div class="distance-regions">
        <div class="distance-region-card"><span class="distance-region-card__tag"><i style="--card-color:${a.color}"></i>${a.name} · 起点</span><h3>${firstPlace.name}</h3><p>${firstPlace.type} · ${factionFor(firstPlace).label}<br>${firstPlace.lead}</p></div>
        <div class="distance-region-card"><span class="distance-region-card__tag"><i style="--card-color:${b.color}"></i>${b.name} · 终点</span><h3>${secondPlace.name}</h3><p>${secondPlace.type} · ${factionFor(secondPlace).label}<br>${secondPlace.lead}</p></div>
      </div>
      <div class="nearby-heading"><span>从${firstPlace.name}出发</span><span>OTHER POINTS</span></div>
      <div class="distance-choices">${nearest.map(place => `<button class="distance-choice" type="button" data-compare-place="${place.id}" style="--choice-color:${regionOf(place.region).color}"><span class="distance-choice__dot"></span><span class="distance-choice__name">${place.name}</span><span class="distance-choice__km">${place.distance} km</span></button>`).join("")}</div>
      <button class="distance-reset" type="button" data-reset-place-distance>返回${firstPlace.name}</button>
    </div>
  `;
  detailContent.querySelectorAll("[data-compare-place]").forEach(button => button.addEventListener("click", () => {
    const place = PLACES.find(item => item.id === button.dataset.comparePlace);
    if (place) selectPlace(place, true);
  }));
  detailContent.querySelector("[data-reset-place-distance]")?.addEventListener("click", () => {
    state.comparePlace = null;
    drawPlaceRoute(null, null);
    renderMarkers(); renderRegions(); renderPlaceDetail(firstPlace); updateBreadcrumb(); focusWorldPoint(firstPlace.x, firstPlace.y, 1.55, true);
  });
}

function openPanel() {
  detailPanel.classList.add("is-open");
  detailPanel.setAttribute("aria-hidden", "false");
  detailContent.scrollTop = 0;
}
function closePanel() {
  detailPanel.classList.remove("is-open");
  detailPanel.setAttribute("aria-hidden", "true");
}
function updateBreadcrumb() {
  if (state.selectedPlace && state.comparePlace) {
    const km = placeDistance(state.selectedPlace, state.comparePlace);
    mapBreadcrumb.textContent = `${state.selectedPlace.name} → ${state.comparePlace.name}`;
    mapScale.textContent = `路线距离 ${km} km`;
    mapCoordinate.textContent = "地点测距 · 02 点";
  } else if (state.selectedPlace) {
    const region = regionOf(state.selectedPlace.region);
    mapBreadcrumb.textContent = `${region.name} · ${state.selectedPlace.name}`;
    mapScale.textContent = state.selectedPlace.type;
    mapCoordinate.textContent = `${String(Math.round(state.selectedPlace.x)).padStart(3,"0")} / ${String(Math.round(state.selectedPlace.y)).padStart(3,"0")}`;
  } else if (state.selectedRegion) {
    const region = regionOf(state.selectedRegion);
    mapBreadcrumb.textContent = `澜海湾 · ${region.name}`;
    mapScale.textContent = region.subtitle;
    mapCoordinate.textContent = "08°41′N · 17°12′E";
  } else {
    mapBreadcrumb.textContent = "澜海湾全域";
    mapScale.textContent = "四境总图";
    mapCoordinate.textContent = "08°41′N · 17°12′E";
  }
}

function selectPlace(place, focus = true) {
  if (!state.selectedPlace) {
    state.selectedPlace = place;
    state.comparePlace = null;
    state.selectedRegion = null;
    drawPlaceRoute(null, null);
    renderMarkers(); renderRegions(); renderPlaceDetail(place); openPanel(); updateBreadcrumb();
    if (focus) focusPlacePoint(place);
    return;
  }

  if (state.comparePlace) {
    if (place.id === state.selectedPlace.id) {
      state.comparePlace = null;
      drawPlaceRoute(null, null);
      renderMarkers(); renderRegions(); renderPlaceDetail(state.selectedPlace); openPanel(); updateBreadcrumb();
      if (focus) focusPlacePoint(state.selectedPlace);
      return;
    }
    if (place.id === state.comparePlace.id) {
      state.selectedPlace = place;
      state.comparePlace = null;
      drawPlaceRoute(null, null);
      renderMarkers(); renderRegions(); renderPlaceDetail(place); openPanel(); updateBreadcrumb();
      if (focus) focusPlacePoint(place);
      return;
    }
    state.comparePlace = place;
    state.selectedRegion = null;
    drawPlaceRoute(state.selectedPlace, place);
    renderMarkers(); renderRegions(); renderPlaceDistanceDetail(state.selectedPlace, place); openPanel(); updateBreadcrumb();
    if (focus) focusPlacePair(state.selectedPlace, place);
    return;
  }

  if (place.id === state.selectedPlace.id) {
    clearRegion(true);
    return;
  }

  state.comparePlace = place;
  state.selectedRegion = null;
  drawPlaceRoute(state.selectedPlace, place);
  renderMarkers(); renderRegions(); renderPlaceDistanceDetail(state.selectedPlace, place); openPanel(); updateBreadcrumb();
  if (focus) focusPlacePair(state.selectedPlace, place);
}

function selectRegion(regionId, focus = true) {
  if (!REGIONS[regionId]) return;
  state.selectedRegion = regionId;
  state.selectedPlace = null;
  state.comparePlace = null;
  state.compareRegion = null;
  drawPlaceRoute(null, null);
  renderMarkers(); renderRegions(); renderRegionDetail(regionId); openPanel(); updateBreadcrumb();
  if (focus) focusRegion(regionId);
}

function clearRegion(animate = false) {
  state.selectedRegion = null;
  state.compareRegion = null;
  state.selectedPlace = null;
  state.comparePlace = null;
  drawPlaceRoute(null, null);
  renderMarkers(); renderRegions(); closePanel(); updateBreadcrumb();
  if (animate) fitMap(true);
}

function renderSearchResults(query = "") {
  const normalized = normalizeText(query);
  const matches = normalized ? PLACES.filter(place => {
    const region = regionOf(place.region);
    return [place.name, place.type, place.lead, region.name, region.en].some(value => normalizeText(value).includes(normalized));
  }).slice(0,8) : [];

  if (!normalized) {
    searchResults.hidden = true;
    searchResults.innerHTML = "";
    searchInput.setAttribute("aria-expanded","false");
    return;
  }

  searchResults.hidden = false;
  searchInput.setAttribute("aria-expanded","true");
  searchResults.innerHTML = matches.length ? matches.map(place => {
    const region = regionOf(place.region);
    return `<button class="search-result" type="button" role="option" data-search-place="${place.id}" style="--region-color:${region.color}"><span class="search-result__dot"></span><span class="search-result__name">${place.name}</span><span class="search-result__region">${region.name}</span></button>`;
  }).join("") : `<div class="search-empty">潮图上暂未找到这处地点</div>`;

  searchResults.querySelectorAll("[data-search-place]").forEach(button => button.addEventListener("click", () => {
    const place = PLACES.find(item => item.id === button.dataset.searchPlace);
    if (!place) return;
    searchResults.hidden = true;
    searchInput.setAttribute("aria-expanded","false");
    searchInput.value = "";
    selectPlace(place, true);
  }));
}

function updateReadout(event) {
  const rect = viewport.getBoundingClientRect();
  const worldX = (event.clientX - rect.left - state.x) / state.scale;
  const worldY = (event.clientY - rect.top - state.y) / state.scale;
  const lat = 8 + worldY / 180, lon = 16 + worldX / 100;
  mapCoordinate.textContent = `${lat.toFixed(2)}°N · ${lon.toFixed(2)}°E`;
}

viewport.addEventListener("pointerdown", event => {
  if (event.button !== undefined && event.button !== 0) return;
  if (event.target.closest(".poi,button,.map-controls,.map-topbar")) return;
  state.dragging = true; state.moved = false; state.startX = event.clientX; state.startY = event.clientY;
  state.originX = state.x; state.originY = state.y;
  viewport.classList.add("is-dragging"); viewport.setPointerCapture?.(event.pointerId);
});
viewport.addEventListener("pointermove", event => {
  updateReadout(event);
  if (!state.dragging) return;
  const dx = event.clientX - state.startX, dy = event.clientY - state.startY;
  if (Math.hypot(dx,dy) > 4) state.moved = true;
  state.x = state.originX + dx; state.y = state.originY + dy; constrainView(); applyTransform();
});
function finishDrag() { state.dragging = false; viewport.classList.remove("is-dragging"); }
viewport.addEventListener("pointerup", finishDrag);
viewport.addEventListener("pointercancel", finishDrag);
viewport.addEventListener("pointerleave", event => { if (state.dragging && event.buttons === 0) finishDrag(); });
viewport.addEventListener("wheel", event => { event.preventDefault(); zoomAt(event.clientX,event.clientY,Math.exp(-event.deltaY * .0012)); }, { passive:false });
viewport.addEventListener("dblclick", event => { if (!event.target.closest("button")) zoomAt(event.clientX,event.clientY,1.35,true); });

document.querySelector("#zoomIn").addEventListener("click", () => { const r = viewport.getBoundingClientRect(); zoomAt(r.left+r.width/2,r.top+r.height/2,1.25,true); });
document.querySelector("#zoomOut").addEventListener("click", () => { const r = viewport.getBoundingClientRect(); zoomAt(r.left+r.width/2,r.top+r.height/2,1/1.25,true); });
document.querySelector("#resetView").addEventListener("click", () => { clearRegion(true); showToast("已返回澜海湾全图"); });
document.querySelector("#compassReset").addEventListener("click", () => { clearRegion(false); focusWorldPoint(940,440,1.32,true); showToast("视野回到澜城"); });
document.querySelector("#mapCompass")?.addEventListener("click", () => showToast("罗盘 · 正北向上"));
labelsToggle.addEventListener("click", () => {
  clearRegion(true);
  showToast("已清除地点选择与测距");
});
detailClose.addEventListener("click", closePanel);
regionList.addEventListener("click", event => { const button = event.target.closest("[data-region]"); if (button) selectRegion(button.dataset.region,true); });
document.querySelectorAll(".region-shape").forEach(shape => {
  shape.addEventListener("click", event => { event.stopPropagation(); if (!state.moved) selectRegion(shape.dataset.region,true); });
  shape.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); selectRegion(shape.dataset.region,true); } });
});
searchInput.addEventListener("input", () => renderSearchResults(searchInput.value));
searchInput.addEventListener("focus", () => { if (searchInput.value) renderSearchResults(searchInput.value); });
searchInput.addEventListener("keydown", event => {
  if (event.key === "Escape") { searchInput.value = ""; renderSearchResults(); searchInput.blur(); }
  if (event.key === "Enter") searchResults.querySelector("[data-search-id]")?.click();
});
document.addEventListener("click", event => {
  if (!event.target.closest(".search-block")) { searchResults.hidden = true; searchInput.setAttribute("aria-expanded","false"); }
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (!searchResults.hidden) { searchResults.hidden = true; searchInput.setAttribute("aria-expanded","false"); }
    else if (detailPanel.classList.contains("is-open")) closePanel();
  }
  if (event.key === "/" && document.activeElement !== searchInput) { event.preventDefault(); searchInput.focus(); }
});
addEventListener("resize", () => requestAnimationFrame(() => state.selectedRegion ? focusRegion(state.selectedRegion) : fitMap(false)));

function initialize() {
  renderMarkers(); renderRegions();
  if (innerWidth <= 820) {
    const scale = .74;
    setView(scale, viewport.clientWidth/2 - 960*scale, viewport.clientHeight/2 - 430*scale, false);
  } else fitMap(false);
}
initialize();
