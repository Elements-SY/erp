<template>
  <main>
    <section>
      <h3>Vue3与Vue2的区别</h3>
      <p>
        OK我们首先通过vue create xxx
        在创建基本项目框架之后我们首先在main.js入口文件 引入 import Vue from
        'vue' console.log(Vue)打印vue对象，我们发现是个undefined。 我们去官方
        <a href="javascript:;" @click="link(vueCreateappLink)">Vue3查看createApp</a>
        方法，发现Vue3创建一个应用实例与Vue2创建应用实例并不是通过 
        <!-- 代码描述 -->
        <div class="code_block">
          <pre><code class="hljs js"><span class="hljs-keyword">var</span> app = <span class="hljs-keyword">new</span> Vue({
  <span class="hljs-attr">el</span>: <span class="hljs-string">'#app'</span>,
  <span class="hljs-attr">data</span>: {
    <span class="hljs-attr">message</span>: <span class="hljs-string">'Hello Vue!'</span>
  }
})</code></pre>
        </div>
        而是通过 
        <div class="language-js line-numbers-mode"><pre class="language-js"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 做一些必要的准备</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#my-app'</span><span class="token punctuation">)</span>
</code></pre></div>      
         创建的。
        也就是说我们需要通过Vue3对象提供的createApp方法传入vue组件。
        OK我们试试通过 
        <div class="language-js line-numbers-mode"><pre class="language-js"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App  <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token comment">// 做一些必要的准备</span>
createApp(App)<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre></div>
        引入createApp方法console.log('Vue',createApp)尝试一下， 看看打印出什么。
        结果在浏览器控制台输出一个Vue方法 我们鼠标点击进入runtime-dom.esm-bundler.js文件
        末尾以变量的形式导出createApp方法，OK也就是说是createApp这个方法创建了vue实例应用。
        避免跑题至于runtime-dom.esm-bundler.js文件源码我们本章暂且不考虑。
        OK我们再回到<a href="javascript:;" @click="link(vue3Link)">Vue3官方文档</a>
        应用配置API文档我们先不考虑，先看一下应用API学会使用以后再看。
      </p>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      vueCreateappLink:
        "https://www.vue3js.cn/docs/zh/api/global-api.html#createapp", // vue3 creat
      vue3Link: "https://www.vue3js.cn/docs/zh/api/", // Vue3官方文档
    };
  },
  methods: {
    link(path) {
      window.open(path);
    },
  },
};
</script>
