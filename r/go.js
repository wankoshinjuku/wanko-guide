// 記録投稿のリンク：?k=種類&n=杯数&u=名前&m=月&pv=前の1位の杯数 から投稿文を作ってXかThreadsの投稿画面を開く
var MONTHS=['January','February','March','April','May','June','July','August','September','October','November','December'];
function build(sns,q){
  var t=(window.T[q.get('k')]||{})[sns]; if(!t) return null;
  var m=parseInt(q.get('m')||'0',10);
  var v={n:q.get('n')||'',u:q.get('u')||'',m:String(m),M:MONTHS[m-1]||'',pv:q.get('pv')||''};
  return t.replace(/\{(n|u|m|M|pv)\}/g,function(_,k){return v[k];});
}
function go(sns){
  var q=new URLSearchParams(location.search), text=build(sns,q); if(text===null) return;
  // 記録カードは1〜899杯だけ。それ以外は画像なし（文章だけ）
  var n=parseInt(q.get('n'),10), page=(n>=1&&n<=899)?'https://wankoshinjuku.github.io/wanko-guide/p/'+n+'.html':'', url;
  if(sns==='x') url='https://x.com/intent/post?text='+encodeURIComponent(text)+(page?'&url='+encodeURIComponent(page):'');
  else url='https://www.threads.net/intent/post?text='+encodeURIComponent(page?text+'\n'+page:text);
  document.getElementById('go').href=url; location.replace(url);
}
if(typeof module!=='undefined') module.exports={build:build};
