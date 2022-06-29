/*
得到一个 html 字符串中出现的章节数量
(h2{第$章}+p*5>lorem100)*10
内容过多，这里用 emmet 语法来表示。
*/
var html = `<h2>第1章</h2>
<p>Lorem ipsum dolor sit amet.</p>
<p>Veritatis aspernatur quaerat libero iure!</p>
<h2>第2章</h2>
<p>Lorem ipsum dolor sit amet.</p>
<p>Perspiciatis placeat ut est atque?</p>
<h2>第3章</h2>
<p>Lorem ipsum dolor sit amet.</p>
<p>Magni ad iure ratione quo.</p>
<h2>第4章</h2>
<p>Lorem ipsum dolor sit amet.</p>
<p>Ad officiis ipsa commodi deleniti.</p>
<h2>第5章</h2>
<p>Lorem ipsum dolor sit amet.</p>
<p>Cupiditate quaerat consectetur pariatur iusto.</p>
<h2>第6章</h2>
<p>Lorem ipsum dolor sit amet.</p>
<p>Ducimus alias nam excepturi saepe!</p>
<h2>第7章</h2>
<p>Lorem ipsum dolor sit amet.</p>
<p>Optio quibusdam fugiat ratione nam?</p>
<h2>第8章</h2>
<p>Lorem ipsum dolor sit amet.</p>
<p>Sit totam asperiores id sunt.</p>
<h2>第9章</h2>
<p>Lorem ipsum dolor sit amet.</p>
<p>Consectetur, perferendis aliquid. Odit, sit?</p>
<h2>第10章</h2>
<p>Lorem ipsum dolor sit amet.</p>
<p>Voluptatum perspiciatis aliquid perferendis fugiat.</p>`;
var reg = /<h2>第\d+章<\/h2>/g;
var result = html.match(reg);
if (result) {
  console.log(result.length); // => 10
} else {
  console.log(0);
}
result; // => ["<h2>第1章</h2>", "<h2>第2章</h2>", "<h2>第3章</h2>", "<h2>第4章</h2>", "<h2>第5章</h2>", "<h2>第6章</h2>", "<h2>第7章</h2>", "<h2>第8章</h2>", "<h2>第9章</h2>", "<h2>第10章</h2>"]