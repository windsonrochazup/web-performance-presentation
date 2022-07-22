---
theme: default
background: >-
  https://i.ibb.co/JpBmhgM/capa-background.png
highlighter: shiki
lineNumbers: false
info: |
  ## Web performance
drawings:
  persist: false
fonts:
  sans: 'Roboto'
  serif: 'Robot Slab'
  mono: 'Fira Code'
---

<div
  v-if="$slidev.nav.currentPage === 1"
  v-motion
  :initial="{ opacity: 0, x: -1000 }"
  :enter="{ opacity: 1, x: 0 }"
  class="title">
  <p>Desempenho</p>
  <p>na Web</p>
</div>

<style>
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    flex-direction: column;
    font-weight: bold;
    margin-left: 15rem;

    p {
      padding: 0.5rem;
      letter-spacing:0.3rem;
    }
  }
</style>

<!--
Boa tarde pessoal, hoje vamos falar sobre performance sob o contexto de aplicações Web.
-->

---
theme: default
layout: cover
background: >-
  https://i.ibb.co/HTNKNrR/red-background.png
---

<div
  v-if="$slidev.nav.currentPage === 2"
  v-motion
  :initial="{ opacity: 0, x: -1000 }"
  :enter="{ opacity: 1, x: 0 }">
  <h1>Kalléo Pinheiro</h1>
  <h3>Frontend Software Engineer</h3>
</div>

<br/>
<br/>

<div class="leading-8 opacity-80">
  🏠 Brasiliense, Brasília/DF<br>
  ⚽  Flamenguista<br>
  🐕 Casado e pai da Nina<br>
  🎓 Bacharel em Sistemas de Informação, 2017<br>
  🧑‍💻 Experiência de +/- 8 anos em TI<br>
  😍💻 Linux, open source e JS/TS<br>
  👨‍💼 Na <a href="https://zup.com.br/" target="_blank">@ZUP</a> há > 3 anos<br>
</div>

<div class="my-5 grid grid-cols-[40px,1fr] w-min gap-y-4">
  <ri-github-line class="opacity-50"/>
  <div><a href="https://github.com/kalleopinheiro" target="_blank">kalleopinheiro</a></div>
  <carbon-email  class="opacity-50"/>
  <div>windson.rocha@zup.com.br</div>
</div>

<img src="https://github.com/windsonrochazup.png" class="rounded-full w-100 abs-tr mt-16 mr-12"/>

<!--
Para quem não me conhece, meu nome é Kalléo Pinheiro, sou natural de Brasília, sou flamenguista, casado e tenho uma filha de 4 patas, formado em Sistemas de Informação, mais ou menos 8 anos atuando com Tecnologia da Informação, sou amante de linux, open source e qualquer coisa que seja baseada em Javascript e typescript,atuo na Zup a mais de 3 anos. Segue meus contatos no slide
-->

---
theme: default
layout: cover
background: >-
  https://i.ibb.co/vQC1hc7/background.png
class: text-center
---

<div class="grid grid-cols-[1fr,1fr] gap-4">
  <div class="my-auto">
    <div
      v-if="$slidev.nav.currentPage === 3"
      v-motion
      :initial="{ opacity: 0, x: -1000 }"
      :enter="{ opacity: 1, x: 0 }">
      <h1 class="leading-loose">A importância</h1>
    </div>
    <div class="!all:leading-normal mt-3">
      <p class="text-justify">A performance de uma aplicação tem grande impacto na experiência do usuário. Entretanto, pensar em performance web nunca é ou foi uma tarefa muito fácil.</p>
      <p class="text-justify">A boa notícia é que existem técnicas e modelos criados para nos ajudar nessa jornada de mantermos uma aplicação performática e agradável para os nossos usuários.</p>
    </div>
  </div>
  <div class="text-center pb-4 my-auto">
    <img class="rounded-full w-100 h-100 abs-tr mt-16 mr-12" src="https://coletsistemas.com.br/wp-content/uploads/2019/08/81-e1565038056173.jpg">
  </div>
</div>

<!--
Antes de mais nada temos que entender a importância da performance em aplicações web
-->

---
theme: default
layout: cover
background: >-
  https://i.ibb.co/vQC1hc7/background.png
class: text-center
---

<div class="grid grid-cols-[1fr,1fr] gap-4">
  <div class="my-auto">
    <div
      v-if="$slidev.nav.currentPage === 4"
      v-motion
      :initial="{ opacity: 0, x: -1000 }"
      :enter="{ opacity: 1, x: 0 }">
      <h1 class="leading-loose">Porquê?</h1>
    </div>
    <div class="!all:leading-normal mt-3">
      <v-clicks>
        <li>Experiência do usuário</li>
        <li>Ranqueamento orgânico</li>
        <li>Aumentar o tráfego e gera leads qualificados</li>
        <li>Relevância e credibilidade</li>
    </v-clicks>
    </div>
  </div>
  <div class="text-center pb-4 my-auto">
    <img class="rounded-full w-100 h-100 abs-tr mt-16 mr-12" src="https://socientifica.com.br/wp-content/uploads/2020/05/por-que-por-que-porque-ou-porque-quando-usar-860x484.png">
  </div>
</div>

<!--
Agora que sabemos da importância, temos que responder algumas perguntas... Porquê precisamos de performance em nossas aplicações.

- Melhorar a experiência do usuário, sites com desempenho lento frustram os usuários, e com tantas opções e fontes de informações disponíveis, a impaciência acaba sendo uma característica da era digital, assim os usuários acabam buscando outras alterativas mais rápidas.
- Agregar na otimização dos motores de busca(SEO). De forma simplificada, os algorítimos utilizados pelos mecanismos de busca consideram a experiência que uma pessoa tem ao acessar uma página e o nível de relevância do assunto em relação ao que foi pesquisado.
- Aumentar o tráfico e geração de leads. Uma boa performance permite que os usuários naveguem mais tempo pelo site, conhecendo mais sobre a sua proposta, seu conteúdo e potencializa assim as chances de torná-lo cliente/usuário da sua aplicação.
- Ser uma aplicação relevante e confiável. Um site que utiliza as melhores estratégias em performance, se torna referência. Resultando em mais credibilidade para a sua marca e gerando lucros consistentes para o seu negócio.
-->

---
theme: default
layout: cover
background: >-
  https://i.ibb.co/vQC1hc7/background.png
class: text-center
---

<div class="grid grid-cols-[1fr,1fr] gap-4">
  <div class="my-auto">
    <div
      v-if="$slidev.nav.currentPage === 5"
      v-motion
      :initial="{ opacity: 0, x: -1000 }"
      :enter="{ opacity: 1, x: 0 }">
      <h1 class="leading-loose">Quando?</h1>
    </div>
    <div class="!all:leading-normal mt-3">
      <p class="text-right">"Otimização prematura é a raiz de todos os males"</p>
      <p class="text-right">Donald Knuth</p>
    </div>
  </div>
  <div class="text-center pb-4 my-auto">
    <img class="rounded-full w-100 h-100 abs-tr mt-16 mr-12" src="https://d2r55xnwy6nx47.cloudfront.net/uploads/2020/04/Donald-Knuth_2880_Lede.jpg">
  </div>
</div>

<!--
Já sabemos os porquês de darmos atenção para a performance , vamos discutir agora o quando... 

- Gosto muito dessa frase do Donald Knuth, o autor do livro The Art of Computer Programming: "Otimização prematura é a raiz de todos os males" . 

O que nos leva a próxima pergunta... o Como...
-->

---
theme: default
layout: cover
background: >-
  https://i.ibb.co/vQC1hc7/background.png
class: text-center
---

<div class="grid grid-cols-[1fr,1fr] gap-4">
  <div class="my-auto">
    <div
      v-if="$slidev.nav.currentPage === 6"
      v-motion
      :initial="{ opacity: 0, x: -1000 }"
      :enter="{ opacity: 1, x: 0 }">
      <h1 class="leading-loose">Aonde?</h1>
    </div>
    <div class="!all:leading-normal mt-3">
      <v-clicks>
        <li>Se você nunca mediu, como é que você sabe que é lento?</li>
        <li>As vezes o lento pode ser rápido o suficiente</li>
      </v-clicks>
    </div>
  </div>
  <div class="text-center pb-4 my-auto">
    <img class="rounded-full w-100 h-100 abs-tr mt-16 mr-12" src="https://blog.imalearningplace.com/wp-content/uploads/2021/12/shutterstock_376352074-1-1.jpg">
  </div>
</div>

<!--
Antes de mais nada, se não temos métricas, como podemos tomar decisões assertivas sem informações suficientes? Como podemos saber aonde atacar?
-->

---
theme: default
layout: cover
background: >-
  https://i.ibb.co/vQC1hc7/background.png
class: text-center
---

<div class="grid grid-cols-[1fr,1fr] gap-4">
  <div class="my-auto">
    <div
      v-if="$slidev.nav.currentPage === 7"
      v-motion
      :initial="{ opacity: 0, x: -1000 }"
      :enter="{ opacity: 1, x: 0 }">
      <h1 class="leading-loose">Análise</h1>
    </div>
    <div class="!all:leading-normal mt-3">
      <div class="!all:leading-normal mt-3">
        <p class="text-justify">A otimização da qualidade da experiência do usuário, quantificar a experiência do seu site e identificar oportunidades de melhoria são a chave para o sucesso no longo prazo de qualquer aplicação na web</p>
    </div>
    </div>
  </div>
  <div class="text-center pb-4 my-auto">
    <img class="rounded-full w-100 h-100 abs-tr mt-16 mr-12" src="https://addee.com.br/wp-content/uploads/2019/07/original-179115a5266cd423edba1560e36b52a1.jpg">
  </div>
</div>

<!--
Sabendo disso, agora sabemos que para resolver um problema, temos que entender ele e também temos que metrificá-lo.
-->

---
theme: default
layout: cover
background: >-
  https://i.ibb.co/vQC1hc7/background.png
class: text-center
---

<div class="grid grid-[1fr] gap-4 blur-sm">
  <div class="my-auto">
    <div class="!all:leading-relaxed mt-3">
      <div
        v-if="$slidev.nav.currentPage === 8"
        v-motion
        :initial="{ opacity: 0, x: -1000 }"
        :enter="{ opacity: 1, x: 0 }">
        <h1 class="leading-loose">Ferramentas</h1>
      </div>
      <v-clicks>
        <li><a class="text-2xl font-bold text-stroke-sm text-stroke-black" href="https://developers.google.com/speed/pagespeed/insights/">PageSpeed Insights</a></li>
        <li><a class="text-2xl font-bold text-stroke-sm text-stroke-black" href="https://www.webpagetest.org/">Webpage test</a></li>
        <li><a class="text-2xl font-bold text-stroke-sm text-stroke-black" href="https://web.dev/">Web.dev</a></li>
        <li><a class="text-2xl font-bold text-stroke-sm text-stroke-black" href="https://gtmetrix.com/">GT Metrix</a></li>
      </v-clicks>
    </div>
  </div>
</div>

<!--
Para isso existe algumas ferramentas de mercado...
- Page Speed Insights - PSI - Principal ferramenta de aferição, trabalha com o motor Lighthouse;
- Webpage test - Ferramenta completa de aferição e performance, onde é possível identificar gargalos de servidor, código e quanto cada tipo de arquivo está pesando no carregamento;
- Web.dev - Ferramenta criada com o Core Web Vitals para medir os 4 fatores da atualização;
- GT Metrix - Também baseado no Lighthouse, muito utilizado para análise de requisições e tempo de carregamento;
-->

---
theme: default
layout: cover
background: >-
  https://i.ibb.co/vQC1hc7/background.png
class: text-center
---

<div class="grid grid-cols-[1fr,1fr] gap-4">
  <div class="my-auto">
    <div
      v-if="$slidev.nav.currentPage === 9"
      v-motion
      :initial="{ opacity: 0, x: -1000 }"
      :enter="{ opacity: 1, x: 0 }">
      <h1 class="leading-loose">Web Vitals</h1>
    </div>
    <div class="!all:leading-normal mt-3">
      <p class="text-justify">É uma iniciativa do Google para fornecer orientação unificada em relação a sinais de qualidade essenciais que visam proporcionar uma ótima experiência ao usuário na web.</p>
      <p class="text-justify">Dentro dessa iniciativa existe um conjunto de regras e padrões Web Core Vitals, que se aplicam a todas as páginas web. Cada uma dessas regras é uma distinta experiência do usuário, são mensuráveis e refletem a experiência do mundo real.</p>
      <p class="text-justify">Essas regras estão em constante evolução e atualmente se concentram em três aspectos importantes de experiência do usuário: carregamento, interatividade e estabilidade visual.</p>
    </div>
  </div>
  <div class="text-center pb-4 my-auto">
    <img class="h-60 inline-block" src="/webgraph.svg">
  </div>
</div>

<!--
A principal e mais utilizada ferramenta nos dias de hoje é uma iniciativa do Google chamada Web Vitals.
-->

---
theme: default
layout: cover
background: >-
  https://i.ibb.co/vQC1hc7/background.png
class: text-center
---

<div class="grid grid-[1fr] gap-4">
  <div class="my-auto">
    <div class="!all:leading-normal">
      <div
        v-if="$slidev.nav.currentPage === 10"
        v-motion
        :initial="{ opacity: 0, x: -1000 }"
        :enter="{ opacity: 1, x: 0 }">
        <h1 class="leading-loose">Métricas</h1>
      </div>
      <div class="grid grid-rows-4 gap-2">
        <v-clicks>
          <li>Performance</li>
          <li>Acessibilidade</li>
          <li>Boas práticas</li>
          <li>SEO</li>
        </v-clicks>
      </div>
    </div>
  </div>
</div>

<!--
O Core Web Vitals metrifica performance, a experiência do usuário em relação a acessibilidade, boas práticas de código e o SEO da aplicação.
-->

---
theme: default
layout: cover
background: >-
  https://i.ibb.co/vQC1hc7/background.png
class: text-center
---

<div class="grid grid-rows-3">
  <div class="!all:leading-normal">
    <div
      v-if="$slidev.nav.currentPage === 11"
      v-motion
      :initial="{ opacity: 0, x: -1000 }"
      :enter="{ opacity: 1, x: 0 }">
    <h2 class="leading-loose">Performance</h2>
    </div>
    <div class="grid grid-cols-3 gap-1">
      <img class="h-60 inline-block" src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZZU8Z7TMKXmzZT2mCjJU.svg">
      <img class="h-60 inline-block" src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/iHYrrXKe4QRcb2uu8eV8.svg">
      <img class="h-60 inline-block" src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dgpDFckbHwwOKdIGDa3N.svg">
    </div>
    <div class="grid grid-cols-3 gap-2">
      <v-clicks>
        <li><strong>Largest Contentful Paint (LCP)</strong>, mede quanto tempo demora para o maior elemento da página ser carregado e renderizado. Ou seja, ela é a métrica que mede a performance de carregamento.</li>
        <li><strong>First Input Delay (FID)</strong>, mede quanto tempo demora para a primeira ação que o usuário executar no site ter uma resposta. Essa é a métrica relacionada à interatividade.</li>
        <li><strong>Cumulative Layout Shift (CLS)</strong>, mede essas mudanças de layout inesperadas que ocorrem durante a vida útil da página.</li>
      </v-clicks>
    </div>
  </div>
</div>

<!--
Em performance os principais métricas de análise adotadas são:
-->

---
theme: default
layout: cover
background: >-
  https://i.ibb.co/vQC1hc7/background.png
class: text-center
---


<div class="!all:leading-normal">
  <div
    v-if="$slidev.nav.currentPage === 12"
    v-motion
    :initial="{ opacity: 0, x: -1000 }"
    :enter="{ opacity: 1, x: 0 }">
    <h1 class="leading-loose">Outras importantes métricas</h1>
  </div>
  <div class="grid grid-cols-3 gap-2 mt-5">
    <v-clicks>
      <li><strong>Time to First Byte (TTFB)</strong>, mede o tempo entre a solicitação de um recurso e quando o primeiro byte de uma resposta começa a chegar.</li>
      <li><strong>Total Blocking Time (TBT)</strong>, mede a quantidade total de tempo que o site fica bloqueado devido algum erro de requisição ou execução de scripts.</li>
      <li><strong>Time to Interactive (TTI)</strong>, mede o tempo total de carregamento após todo o conteúdo do DOM ser carregado incluindo scripts externos.</li>
    </v-clicks>
  </div>
</div>


<!--
Mas além dessas dessas métricas também podemos citar... 
-->

---
theme: default
layout: cover
background: >-
  https://i.ibb.co/vQC1hc7/background.png
class: text-center
---

<div class="!all:leading-normal">
  <div
    v-if="$slidev.nav.currentPage === 13"
    v-motion
    :initial="{ opacity: 0, x: -1000 }"
    :enter="{ opacity: 1, x: 0 }">
    <h1 class="leading-loose">Acessibilidade</h1>
  </div>
  <div class="grid grid-cols-4 gap-2 mt-5">
    <v-clicks>
      <li class="text-center"><strong>Contraste de elementos</strong><p>cores de texto muito próximas da cor de fundo causam um grande desconforto na leitura dos usuários.</p></li>
      <li class="text-center"><strong>Ordem dos elementos</strong><p>respeitar e garantir que o conteúdo possua ordem cronológica na estrutura da página, garante uma melhor leitura para os usuários.</p></li>
      <li class="text-center"><strong>Imagens precisam de uma descrição</strong><p>auxilia usuários com algum tipo de deficiência visual.</p></li>
      <li class="text-center"><strong>Uso de título nos links</strong><p>melhora a experiência de navegação para usuários de leitores de tela</p></li>
    </v-clicks>
  </div>
</div>


<!--
E como já tinha dito... Web Vitals não é só performance...mesmo sites rápidos não atingem todas as as métricas do Core Web Vitals 

quando finalizar a leitura dos itens em tela
...Existem também várias outras boas práticas por exemplo os links devem possuir um título, etc.
-->

---
theme: default
layout: cover
background: >-
  https://i.ibb.co/vQC1hc7/background.png
class: text-center
---

<div class="grid grid-cols-[1fr,1fr] gap-4">
  <div class="my-auto">
    <div
      v-if="$slidev.nav.currentPage === 14"
      v-motion
      :initial="{ opacity: 0, x: -1000 }"
      :enter="{ opacity: 1, x: 0 }">
      <h1 class="leading-loose">SEO</h1>
    </div>
    <div class="!all:leading-normal mt-3">
      <div class="!all:leading-normal mt-3">
        <p class="text-justify">SEO (Search engine optimization) ou Otimização de Mecanismos de Pesquisa é o conjunto de estratégias com o objetivo de potencializar e melhorar o posicionamento de um site nas páginas de resultados orgânicos.</p>
    </div>
    </div>
  </div>
  <div class="text-center pb-4 my-auto">
    <img class="rounded-full w-100 h-100 abs-tr mt-16 mr-12" src="https://sitechecker.pro/wp-content/uploads/2018/02/Knowledge-base-part-3_what-is-seo.jpg">
  </div>
</div>

<!--
Em geral, se dá com a realização de pequenas modificações em partes do seu site. Essas mudanças podem parecer pequenas melhorias quando vistas individualmente, mas, combinadas com outras otimizações, o impacto em termos de experiência do usuário e de resultados da pesquisa orgânica é notável.
-->


---
theme: default
layout: cover
background: >-
  https://i.ibb.co/vQC1hc7/background.png
class: text-center
---

<div class="grid grid-cols-[1fr,1fr] gap-4">
  <div class="my-auto">
    <div
      v-if="$slidev.nav.currentPage === 15"
      v-motion
      :initial="{ opacity: 0, x: -1000 }"
      :enter="{ opacity: 1, x: 0 }">
      <h1 class="leading-loose">Boas Práticas</h1>
    </div>
    <div class="!all:leading-normal mt-3">
      <div class="!all:leading-normal mt-3">
        <p class="text-justify">Analisa e verifica a segurança e confiança da aplicação, busca vulnerabilidades conhecidas, problemas na experiência de usuário conhecidos e muito mais</p>
      </div>
    </div>
  </div>
  <div class="text-center pb-4 my-auto">
    <img class="rounded-full w-100 h-100 abs-tr mt-16 mr-12" src="https://r4you.co/wp-content/uploads/2020/03/original-84e553a58171cdc7d9192de0269cf6a8.jpeg">
  </div>
</div>

<!--

-->

---
theme: default
layout: cover
background: >-
  https://i.ibb.co/vQC1hc7/background.png
class: text-center
---

<div class="!all:leading-normal">
  <div
    v-if="$slidev.nav.currentPage === 16"
    v-motion
    :initial="{ opacity: 0, x: -1000 }"
    :enter="{ opacity: 1, x: 0 }">
    <h1 class="leading-loose">Outros tipos de análise</h1>
  </div>
  <div class="grid grid-cols-3 gap-2 mt-5">
    <v-clicks>
      <li class="text-center"><strong>Análise de tamanho do pacote final(Bundle size)</strong><p>ajuda a identificar dependências grandes ou desnecessárias para a aplicação</p></li>
      <li class="text-center"><strong>Aba de performance de alguns navegadores</strong><p>ajuda na identificação de possíveis gaps de performance e carregamento de conteúdo da aplicação.</p></li>
      <li class="text-center"><strong>Ferramentas de debug específicas</strong><p>auxilia os desenvolvedores a prevenirem problemas de performance analisando o estado e renderizações em partes específicas da aplicação.</p></li>
    </v-clicks>
  </div>
</div>

<!--
Existem vários outras estratégias para a análise da performance de uma aplicação...
-->

---
theme: default
layout: cover
background: >-
  https://i.ibb.co/vQC1hc7/background.png
class: text-center
---

<div class="flex flex-col">
  <div
    v-if="$slidev.nav.currentPage === 17"
    v-motion
    :initial="{ opacity: 0, x: -1000 }"
    :enter="{ opacity: 1, x: 0 }">
    <h2 class="leading-loose">Análise com Web Core Vitals</h2>
  </div>
  <img class="flex justify-center items-center h-100 mt-5" src="/web-core-vitals.gif">
</div>

<!--

-->

---
theme: default
layout: cover
background: >-
  https://i.ibb.co/vQC1hc7/background.png
class: text-center
---

<div class="flex flex-col">
  <div
    v-if="$slidev.nav.currentPage === 18"
    v-motion
    :initial="{ opacity: 0, x: -1000 }"
    :enter="{ opacity: 1, x: 0 }">
    <h2 class="leading-loose">Análise com PageSpeed Insights</h2>
  </div>
  <img class="flex justify-center items-center h-100 mt-5" src="/page-speed-insights.gif">
</div>

<!--

-->

---
theme: default
layout: cover
background: >-
  https://i.ibb.co/vQC1hc7/background.png
class: text-center
---

<div class="flex flex-col">
  <div
    v-if="$slidev.nav.currentPage === 19"
    v-motion
    :initial="{ opacity: 0, x: -1000 }"
    :enter="{ opacity: 1, x: 0 }">
    <h2 class="leading-loose">Análise do tamanho do pacote - Aplicação</h2>
  </div>
  <img class="flex justify-center items-center h-100 mt-5" src="/bundle-analyzer-app.png">
</div>

<!--

-->

---
theme: default
layout: cover
background: >-
  https://i.ibb.co/vQC1hc7/background.png
class: text-center
---

<div class="flex flex-col">
  <div
    v-if="$slidev.nav.currentPage === 20"
    v-motion
    :initial="{ opacity: 0, x: -1000 }"
    :enter="{ opacity: 1, x: 0 }">
    <h2 class="leading-loose">Análise do tamanho do pacote - Bibliotecas</h2>
  </div>
  <img class="flex justify-center items-center h-100 mt-5" src="/bundle-analyzer-packages.png">
</div>

<!--

-->

---
theme: default
layout: cover
background: >-
  https://i.ibb.co/vQC1hc7/background.png
class: text-center
---

<div class="flex flex-col">
  <div
    v-if="$slidev.nav.currentPage === 21"
    v-motion
    :initial="{ opacity: 0, x: -1000 }"
    :enter="{ opacity: 1, x: 0 }">
    <h2 class="leading-loose">Aba Performance - Navegadores</h2>
  </div>
  <img class="flex justify-center items-center h-100 mt-5" src="/performance-console.gif">
</div>

<!--

-->

---
theme: default
layout: cover
background: >-
  https://i.ibb.co/vQC1hc7/background.png
class: text-center
---

<div class="flex flex-col">
  <div
    v-if="$slidev.nav.currentPage === 22"
    v-motion
    :initial="{ opacity: 0, x: -1000 }"
    :enter="{ opacity: 1, x: 0 }">
    <h2 class="leading-loose">Ferramentas de debug</h2>
  </div>
  <img class="flex justify-center items-center h-100 mt-5" src="/react-dev-tools.gif">
</div>

<!--

-->


---
theme: default
layout: cover
background: >-
  https://i.ibb.co/vQC1hc7/background.png
class: text-center
---

<div class="grid grid-cols-[1fr,1fr] gap-4">
  <div class="my-auto">
    <div
      v-if="$slidev.nav.currentPage === 23"
      v-motion
      :initial="{ opacity: 0, x: -1000 }"
      :enter="{ opacity: 1, x: 0 }">
      <h1 class="leading-loose">Como?</h1>
    </div>
    <div class="!all:leading-normal mt-3">
      <p class="text-justify">Agora sabemos a importância, o porquê, quando, aonde, e quais problemas atacar, podemos definir o como agir, como podemos atuar e sanar os problemas identificados de forma assertiva. Não existe uma bala de prata para os problemas de performance, existem problemas diferentes para contextos distintos. Sendo assim, por isso da importância de analisar cuidadosamente cada cenário de forma individual.</p>
    </div>
  </div>
  <div class="text-center pb-4 my-auto">
    <img class="rounded-full w-100 h-100 abs-tr mt-16 mr-12" src="https://ik1.com.br/wp-content/uploads/2019/07/Tecnologia-on-demand.png">
  </div>
</div>

<!--

-->

---
theme: default
layout: cover
background: >-
  https://i.ibb.co/vQC1hc7/background.png
class: text-center
---

<div class="!all:leading-normal">
  <div
    v-if="$slidev.nav.currentPage === 24"
    v-motion
    :initial="{ opacity: 0, x: -1000 }"
    :enter="{ opacity: 1, x: 0 }">
    <h1 class="leading-loose">Estratégias</h1>
  </div>
  <div class="grid grid-rows-10 gap-2 mt-5">
    <v-clicks>
      <li class="text-center"><strong>Redução do uso e atraso de scripts externos</strong></li>
      <li class="text-center"><strong>Redução do tamanho e otimização de imagens</strong></li>
      <li class="text-center"><strong>Carregamento sob demanda(lazy loading/dynamic import)</strong></li>
      <li class="text-center"><strong>Remoção de bibliotecas não utilizadas</strong></li>
      <li class="text-center"><strong>Remoção de css não utilizado</strong></li>
      <li class="text-center"><strong>Gerenciamento correto de contextos e estados globais</strong></li>
      <li class="text-center"><strong>Uso de cache</strong></li>
      <li class="text-center"><strong>Server Side Rendering</strong></li>
      <li class="text-center"><strong></strong>Uso de CDN para hospedagem do conteúdo</li>
      <li class="text-center"><strong></strong>MInificação e combinação de arquivos</li>
    </v-clicks>
  </div>
</div>

<!--
Existem vários outras estratégias para a análise da performance de uma aplicação...
-->

---
theme: default
layout: cover
background: >-
  https://i.ibb.co/vQC1hc7/background.png
class: text-center
---
<div class="grid grid-cols-[1fr,1fr]">
  <div
    v-if="$slidev.nav.currentPage === 25"
    v-motion
    :initial="{ opacity: 0, x: -1000 }"
    :enter="{ opacity: 1, x: 0 }"
    class="flex justify-center items-center">
    <h1>Obrigado!</h1>
  </div>
  <div>
    <img class="h-60" src="/astronauta.gif">
  </div>
</div>

<!--

-->