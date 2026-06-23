// CHAMPION TICKET - GAS裏方APIへのJSONP通信（CORS不要・自動リトライ付き）
var API = 'https://script.google.com/macros/s/AKfycbx7a3j2hUxDu3rhHFScXlrYG9_z1jZGsK5xJr55dE8ekdKdHuOjZenDImBFqerUCdLVdw/exec';

function jsonp(params){
  return new Promise(function(resolve, reject){
    var cb = 'cb_' + Date.now() + '_' + Math.floor(Math.random()*100000);
    var s = document.createElement('script');
    var timer = setTimeout(function(){ cleanup(); reject(new Error('timeout')); }, 15000);
    function cleanup(){ try{ delete window[cb]; }catch(e){ window[cb]=undefined; } if(s.parentNode) s.parentNode.removeChild(s); clearTimeout(timer); }
    window[cb] = function(data){ cleanup(); resolve(data); };
    var qs = Object.keys(params).map(function(k){ return encodeURIComponent(k)+'='+encodeURIComponent(params[k]); }).join('&');
    s.src = API + '?' + qs + '&callback=' + cb;
    s.onerror = function(){ cleanup(); reject(new Error('network')); };
    document.body.appendChild(s);
  });
}

// 断続的な失敗に備え、最大 tries 回まで自動リトライ
function jsonpRetry(params, tries){
  tries = tries || 3;
  return new Promise(function(resolve, reject){
    var attempt = 0, lastErr;
    function go(){
      attempt++;
      jsonp(params).then(resolve).catch(function(e){
        lastErr = e;
        if(attempt < tries){ setTimeout(go, 800); } else { reject(lastErr); }
      });
    }
    go();
  });
}
