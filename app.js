"use strict";
/* MediScope original non-validated questionnaires. This is not a medical screening product. */
const defs=[
{id:"attention",title:"注意・段取りの困りごとチェック",key:"ADHDを考えるきっかけ",cat:"development",emoji:"🧩",desc:"集中・忘れ物・段取りなど、日常で困りやすい場面を整理します。ADHDの診断や可能性の判定ではありません。",note:"ここ2〜3か月の日常を振り返ってください。ADHDの有無・重症度は測定しません。",questions:[
"やるべきことが多いと、どこから始めればよいか迷う。",
"必要な物を探すことに時間を使ってしまう。",
"話を聞いていても、途中で別のことが気になる。",
"長い作業では、休憩を挟まないと取りかかりにくい。",
"予定を忘れないように複数の工夫が必要になる。",
"単調な作業を後回しにしてしまう。",
"途中で別の作業に移り、元の作業を忘れることがある。",
"思いついたことをすぐに口に出したくなる。",
"時間を見積もったつもりでも、遅れが生じることがある。"
],tip:"気になった項目があれば、実際に困った場面・頻度・工夫したことを記録すると相談時に役立ちます。"},
{id:"social",title:"対人・感覚の特徴チェック",key:"ASDに関する自己理解",cat:"development",emoji:"🔷",desc:"会話の理解、予定変更、興味の偏りや感覚への反応を振り返る独自チェック。ASDの判定ではありません。",note:"自分の得意・苦手を知るための質問です。ASDの診断・可能性の推定には使えません。",questions:[
"言葉にされていない相手の意図をつかみにくい場面がある。",
"予定が急に変わると、切り替えに時間がかかる。",
"会話で話題を変えるタイミングに迷うことがある。",
"興味があることに夢中になり、周囲の状況を忘れる。",
"複数人の会話では発言のタイミングが難しいと感じる。",
"周囲の音や光が強く気になることがある。",
"慣れた手順のほうが安心して取り組める。",
"言葉を文字どおりに受け取り、意図とずれることがある。",
"予想外の出来事が続くと、疲れやすい。"
],tip:"困る場面と過ごしやすい環境を書き出すと、対話や環境調整のヒントになります。"},
{id:"stress",title:"こころの負担セルフチェック",key:"ストレス・疲れ",cat:"mental",emoji:"☁️",desc:"最近の気分、疲れ、集中しにくさを整理します。点数で病名や重症度を判定しません。",note:"この2週間について回答してください。医療用のうつ病検査などではありません。",questions:[
"休んでも疲れが取れた感じがしない。",
"日常の小さなことが負担に感じられる。",
"不安や心配が頭から離れにくい。",
"集中したいときに気が散ってしまう。",
"眠ってもすっきりしない日がある。",
"気持ちに余裕がなく、イライラしやすい。",
"人と話したり外に出たりすることが億劫に感じる。",
"好きなことを楽しむ余裕が少なくなったと感じる。"
],tip:"睡眠、休息、仕事・学校の負担、人との相談状況を振り返ってください。つらさが強い・長引く場合は専門家に相談しましょう。"},
{id:"psychopathy",title:"対人・共感・衝動性チェック",key:"サイコパシーという言葉が気になる方へ",cat:"personality",emoji:"🎭",desc:"共感しにくさ・刺激の求め方・衝動的な判断を振り返ります。サイコパスかどうかは判定できません。",note:"サイコパシーは、この短い独自質問で測定できません。結果を自分や他人へのレッテル付けに使わないでください。",questions:[
"相手の表情が変わっても、理由を考えずに話し続けることがある。",
"退屈を避けるために、勢いで行動してしまう。",
"自分の意見を通すことを優先し、相手の事情を後回しにすることがある。",
"気分が高まると、先の影響を考える前に決断する。",
"人が困っている話を聞いても、反応に迷うことがある。",
"自分の失敗を認めるまでに時間がかかる。",
"競争に夢中になり、相手への配慮が抜けることがある。",
"目先の利益のために、決めたルールを軽視したくなることがある。"
],tip:"状況によって誰にでも起こりうる反応です。具体的な場面を振り返り、伝え方・意思決定を改善するヒントにしましょう。"},
{id:"sensitive",title:"感覚・刺激への敏感さチェック",key:"HSPなどの話題",cat:"sensitivity",emoji:"🍃",desc:"音・光・人混み・感情的な刺激への反応を振り返ります。HSPは医学的な病名ではありません。",note:"敏感さには個人差があり、優劣を示すものではありません。HSPの診断は行いません。",questions:[
"にぎやかな場所に長くいると疲れやすい。",
"急に大きな音がすると、気持ちの切り替えに時間がかかる。",
"周りの人の気分が自分に伝わってくるように感じる。",
"予定が立て込むと、静かな時間を取りたくなる。",
"明るい照明や強いにおいが気になることがある。",
"映画や物語に強く感情移入する。",
"細かな環境の変化に気づくことが多い。",
"刺激の多い一日の後は、ひとりで休みたくなる。"
],tip:"心地よい光・音・休憩の頻度など、過ごしやすい環境を見つける材料にしてください。"},
{id:"bigfive",title:"ビッグファイブ風・5特性チェック",key:"性格・五因子",cat:"personality",emoji:"🌈",desc:"交流・協調・段取り・感情反応・好奇心を、独自の15問で見える化します。標準化検査ではありません。",note:"各特性は優劣ではありません。点数は集団平均との差ではなく、今回の回答内での参考値です。",groups:[
{key:"E",name:"交流への積極性"},{key:"A",name:"協調・思いやり"},{key:"C",name:"計画・着実さ"},{key:"N",name:"感情の反応しやすさ"},{key:"O",name:"好奇心・新しさ"}
],items:[
["初対面の人にも話しかけやすい。","E",false],["大勢の場では静かにしていることが多い。","E",true],["人と活動すると元気が湧いてくる。","E",false],
["相手の立場を想像することが多い。","A",false],["人の欠点が先に気になることが多い。","A",true],["考えの違う相手とも折り合いをつけられる。","A",false],
["計画を立ててから行動するのが好きだ。","C",false],["約束したことを後回しにすることが多い。","C",true],["決めたことをコツコツ続けられる。","C",false],
["小さな出来事でも気になってしまう。","N",false],["難しい状況でも落ち着いていられる。","N",true],["心配ごとが頭に残りやすい。","N",false],
["新しい考え方を知るのが好きだ。","O",false],["慣れた方法だけを選ぶことが多い。","O",true],["想像を広げる話や創作に惹かれる。","O",false]
],tip:"いずれも状況によって変わるものです。得意な場面と負担の大きい場面を両方考えてみましょう。"},
{id:"styles",title:"16通りの対話スタイル",key:"16タイプ・性格",cat:"personality",emoji:"✨",desc:"交流・情報の見方・判断・進め方という4軸を独自の12問で分析します。MBTIなどの公式検査ではありません。",note:"4つの軸を2方向に分け、16通りの組み合わせで表します。単純化した目安であり、人格を固定するものではありません。",groups:[
{key:"E",name:"交流 ↔ 内省",low:"内省を重視",high:"交流を重視"},
{key:"N",name:"具体 ↔ 発想",low:"具体を重視",high:"発想を重視"},
{key:"T",name:"共感 ↔ 論理",low:"共感を重視",high:"論理を重視"},
{key:"J",name:"柔軟 ↔ 計画",low:"柔軟を重視",high:"計画を重視"}
],items:[
["話し合いながらアイデアを整理することが多い。","E",false],
["意見を言う前に、ひとりで考えたい。","E",true],
["人と会話すると新しいエネルギーが湧く。","E",false],
["まだない可能性を想像するのが好きだ。","N",false],
["具体的な事例から考えるほうが得意だ。","N",true],
["細部より全体像を最初に考えたい。","N",false],
["判断するときは根拠や一貫性を大切にする。","T",false],
["相手の気持ちや納得感を最優先することが多い。","T",true],
["異なる意見を比べて筋道を立てたくなる。","T",false],
["予定を前もって決めると安心する。","J",false],
["選択肢を最後まで残しておくほうが好きだ。","J",true],
["先に段取りを整えると集中しやすい。","J",false]
],tip:"どの組み合わせがよい・悪いということはありません。場面によって違う方向を選ぶことも自然です。"}
];
const cats={development:"発達特性",mental:"こころ",personality:"性格・行動",sensitivity:"感受性"};
const freq=["まったくない","ほとんどない","ときどきある","よくある","とてもよくある"];
const agree=["全く違う","やや違う","どちらでもない","やや当てはまる","よく当てはまる"];
let chosen="all",active=null;
const $=id=>document.getElementById(id);
function render(){
const q=$("search").value.trim().toLocaleLowerCase();
const list=defs.filter(t=>(chosen==="all"||chosen===t.cat)&&[t.title,t.key,t.desc,cats[t.cat]].join(" ").toLocaleLowerCase().includes(q));
$("count").textContent=list.length+"種類";$("cards").replaceChildren();
if(!list.length){const n=document.createElement("p");n.textContent="見つかりませんでした。キーワードを変えてみてください。";$("cards").append(n);return}
for(const t of list){
const card=document.createElement("article");card.className="card";
const top=document.createElement("div");top.className="toprow";
const em=document.createElement("span");em.className="emoji";em.textContent=t.emoji;
const tag=document.createElement("span");tag.className="badge "+(t.cat==="development"||t.cat==="mental"?"med":"");tag.textContent=cats[t.cat];top.append(em,tag);
const h=document.createElement("h3");h.textContent=t.title;const p=document.createElement("p");p.textContent=t.desc;
const meta=document.createElement("span");meta.className="meta";meta.textContent="独自作成・未検証 ／ "+(t.items||t.questions).length+"問";
const btn=document.createElement("button");btn.className="start";btn.type="button";btn.textContent="チェックを始める →";btn.addEventListener("click",()=>openTest(t.id));
card.append(top,h,p,meta,btn);$("cards").append(card)
}}
function openTest(id){
const t=defs.find(x=>x.id===id);if(!t)return;active=t;
$("quiz-title").textContent=t.title;$("quiz-desc").textContent=t.desc;$("quiz-note").textContent=t.note;
$("quiz").hidden=false;$("questions").replaceChildren();$("result").hidden=true;$("result").replaceChildren();$("error").textContent="";
(t.items||t.questions).forEach((item,i)=>{
const question=Array.isArray(item)?item[0]:item;
const field=document.createElement("fieldset");field.className="question";field.id="question-"+i;
const legend=document.createElement("legend");legend.textContent=(i+1)+". "+question;field.append(legend);
const choices=document.createElement("div");choices.className="choices";
(t.items?agree:freq).forEach((label,n)=>{
const option=document.createElement("label");option.className="choice";
const input=document.createElement("input");input.type="radio";input.name="q"+i;input.value=String(n+1);input.addEventListener("change",progress);
option.append(input,document.createTextNode(label));choices.append(option)
});field.append(choices);$("questions").append(field)
});
progress();if(location.hash!=="#test-"+id)history.replaceState(null,"","#test-"+id);
$("quiz").scrollIntoView({behavior:"smooth",block:"start"})
}
function progress(){
if(!active)return;const size=(active.items||active.questions).length;
let done=0;for(let i=0;i<size;i++){if($("form").querySelector('input[name="q'+i+'"]:checked'))done++}
$("progress-text").textContent=done+" / "+size;$("progress-bar").style.width=(done/size*100)+"%"
}
function addText(parent,tag,value,cls){
const el=document.createElement(tag);el.textContent=value;if(cls)el.className=cls;parent.append(el);return el;
}
function result(){
if(!active)return;const items=active.items||active.questions;
const values=[];
for(let i=0;i<items.length;i++){
const checked=$("form").querySelector('input[name="q'+i+'"]:checked');
if(!checked){$("error").textContent=(i+1)+"問目が未回答です。全ての質問に答えてください。";$("question-"+i).scrollIntoView({behavior:"smooth",block:"center"});return}
values.push(Number(checked.value))
}
$("error").textContent="";const node=$("result");node.replaceChildren();node.hidden=false;
addText(node,"h3","今回の回答を振り返る");
if(active.groups){
const dims=active.groups.map(g=>({key:g.key,name:g.name,low:g.low,high:g.high,values:[]}));
active.items.forEach((item,i)=>{const d=dims.find(x=>x.key===item[1]);d.values.push(item[2]?6-values[i]:values[i])});
const averages=dims.map(d=>({ ...d,avg:d.values.reduce((a,b)=>a+b,0)/d.values.length}));
if(active.id==="styles"){
const description=averages.map(d=>d.avg>=3?d.high:d.low).join(" × ");
addText(node,"p","あなたの回答の組み合わせ："+description+"。これは独自の16通りの分類のうちの1つです。診断名ではありません。");
}else{
addText(node,"p","各項目の平均的な当てはまり度を0〜100%の表示に換算しています。一般集団との比較や能力の評価ではありません。");
}
averages.forEach(d=>{
const row=document.createElement("div");row.className="axis";
addText(row,"span",d.name);const bar=document.createElement("div");bar.className="bar";const fill=document.createElement("b");fill.style.width=((d.avg-1)/4*100).toFixed(0)+"%";bar.append(fill);row.append(bar);
addText(row,"span",Math.round((d.avg-1)/4*100)+"%");node.append(row)
});
}else{
const notable=values.map((v,i)=>({v,i})).filter(x=>x.v>=4).sort((a,b)=>b.v-a.v);
addText(node,"p","今回「よくある」「とてもよくある」に近い回答を選んだ項目は、"+notable.length+" / "+values.length+"件でした。この数は病気の確率・診断・重症度を表すものではありません。");
if(notable.length){
addText(node,"p","特に振り返りたい項目：");const ul=document.createElement("ul");ul.className="answers-list";
notable.slice(0,4).forEach(x=>addText(ul,"li",active.questions[x.i]));node.append(ul)
}else addText(node,"p","今回の回答では、強く当てはまると選んだ項目はありませんでした。気になることがあれば、回答だけで判断せず実際の状況を振り返ってください。");
}
addText(node,"p","参考のヒント："+active.tip);
addText(node,"p","※ 独自の質問による自己理解用の表示です。医学的・心理学的な診断の根拠にはなりません。");
node.scrollIntoView({behavior:"smooth",block:"start"})
}
$("form").addEventListener("submit",e=>{e.preventDefault();result()});
$("form").addEventListener("reset",()=>{setTimeout(()=>{progress();$("result").hidden=true;$("error").textContent=""},0)});
$("back").addEventListener("click",()=>{$("quiz").hidden=true;active=null;history.replaceState(null,"","#library");$("library").scrollIntoView({behavior:"smooth",block:"start"})});
$("search").addEventListener("input",render);
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{chosen=b.dataset.kind;document.querySelectorAll(".filter").forEach(c=>c.setAttribute("aria-pressed",String(c===b)));render()}));
render();
const route=location.hash.match(/^#test-([a-z]+)$/);if(route&&defs.some(t=>t.id===route[1]))openTest(route[1]);