var aboutPT = "Há 10 anos no mercado, a agência Lemoon iniciou como uma empresa de design gráfico e web, dessa forma, nosso trabalho era criar peças de design para empresas dos mais diversos segmentos. Porém, em poucos anos após fundarmos a empresa, percebemos que queríamos e poderíamos ir além, e passamos a usar nossa experiência para também gerar resultado ativamente. Para isso foi necessário não ser somente uma agência de design ou branding, mas aliar isso a marketing de performance, desenvolvimento de e-commerce e também a fotografia, para que a partir disso, tivéssemos como planejar e executar todas as partes de um negócio de sucesso. Com experiência em centenas de projetos, atuamos de forma plena ou modular, podendo cobrir todas as demandas com nossa equipe e parceiros, ou somente parte delas se for necessário. Dessa forma também sempre conseguimos trabalhar facilmente em conjunto com outras agências. Não importa o tipo de projeto, sempre haverá um modelo de parceria que podemos executar. Seja com Design, branding, social media, marketing de performance, implementação de e-commerce, fotografia ou consultoria. Conte conosco para auxiliarmos sua empresa a ter os resultados que você sempre buscou.";
var contactTextPT = "CONTATO";
var creativeAgencyPT = "AGÊNCIA CRIATIVA <br>E-COMMERCE E<br> MARKETING.";
var fazemosPT ="FAZEMOS PRODUTOS<br>VENDEREM MELHOR.";
var welcomeMenuPT ="BEM VINDO";
var aboutMenuPT ="SOBRE";
var whatwedoMenuPT ="O QUE FAZEMOS";
var partnersMenuPT ="PARCEIROS";
var whatwemadeMenuPT ="PORTFOLIO";
var lojaOnlinePT ="LOJAS ONLINE";
var lojaOnlineTextPT ="Tenha a melhor loja, personalizada e com todos os recursos necessários para vender muito.";
var brandingTextPT = "Branding é posicionar a marca da forma correta no mercado, para ser visto da melhor forma desde o primeiro olhar.";
var fotografiatitlePT = "FOTOGRAFIA";
var FotografiaTextPT = "O primeiro contato com o produto na internet é através da fotografia, sem dúvida uma das peças mais importantes.";
var amazingPT = "NÓS JÁ FIZEMOS <br>COISAS INCRÍVEIS";
var waitingPT = "FICAREMOS FELIZES <br>EM RECEBER SUA <br>MENSAGEM";
var metaTextPT ="<h1>TEM<br>UMA META?</h1><h3>NÓS SABEMOS<br>COMO ALCANÇAR.</h3>";
var parceirosPT ="Para realizar grandes resultados, sempre precisamos estar acompanhados dos melhores profissionais e ferramentas, além da equipe interna, a Lemoon conta  com centenas de colaboradores externos através do Shopify.";
var rolePT ="ROLE PARA VER";

var aboutEN = "Over 10 years ago, Lemoon agency started as a Web and Graphic Design company. Our job was to create designs for various market sectors. Few years after the company was founded, we realised that we had the potential to go beyond so we used our experience to expand our results actively. We then started to diversify our services. Where we only offered Web and Graphic Design, we added performance marketing, developing e-commerce and photography. With all these services combined we were able to plan and execute all digital aspects of a successful business. With over 100 delivered projects, we can either take on entire projects or work along with other teams. It doesn’t matter what’s your project, there will always be a way we’ll get it done for you. Be it with Design, Branding, Social Media, Performance Marketing, E-commerce Development, Photography or Consultancy. Count on us to help your business have the results you’ve always looked for.";
var contactTextEN = "CONTACT";
var creativeAgencyEN = "CREATIVE AGENCY <br>E-COMMERCE AND<br> PHOTOGRAPHY.";
var fazemosEN ="INCREASING <br>YOUR SALES.";
var welcomeMenuEN ="WELCOME";
var aboutMenuEN ="ABOUT US";
var whatwedoMenuEN ="WHAT WE DO";
var partnersMenuEN ="PARTNERS";
var whatwemadeMenuEN ="PORTFOLIO";
var lojaOnlineEN ="ECOMMERCE";
var lojaOnlineTextEN ="We create your E-commerce from scratch, laying the whole path from the backend to the design unlocking your website sales to go through the roof!";
var brandingTextEN = "Branding is to fit your business' image on the market to look in the best possible way starting from your customer's first sight.";
var fotografiatitleEN = "PHOTOGRAPHY";
var FotografiaTextEN = "The first contact your clients will have with your product digitally is through photography. A good presentation is undoubtedly a key factor in your E-commerce´s success.";
var amazingEN = "WE ALREADY DID <br>AMAZING THINGS";
var waitingEN = "WE'RE WAITING <br>FOR YOU.";
var metaTextEN ="<h1>HAVE YOU GOT<br>A GOAL?</h1><h3>WE KNOW<br>HOW TO REACH IT!</h3>";
var parceirosEN ="To reach big dreams you need to be surrounded by competent people and have all the proper tools. Besides our internal team, Lemoon counts on an army of highly skilled professionals through Shopify.";
var roleEN ="SCROLL DOWN";

$(document).ready(function() {
    if (window.location.href.indexOf("?en") > -1) {
      $(".ouputQuemsomos").text(aboutEN);
      $(".contactText").text(contactTextEN);
      $(".creativeAgency").html(creativeAgencyEN);
      $(".fazemos").html(fazemosEN);
      $(".welcomeMenu").html(welcomeMenuEN);
      $(".aboutMenu").html(aboutMenuEN);
      $(".whatwedoMenu").html(whatwedoMenuEN);
      $(".partnersMenu").html(partnersMenuEN);
      $(".whatwemadeMenu").html(whatwemadeMenuEN);
      $(".lojaOnline").html(lojaOnlineEN);
      $(".lojaOnlineText").html(lojaOnlineTextEN);
      $(".brandingText").html(brandingTextEN);
      $(".fotografiatitle").html(fotografiatitleEN);
      $(".FotografiaText").html(FotografiaTextEN);
      $(".amazing").html(amazingEN);
      $(".waiting").html(waitingEN);
      $(".metaText").html(metaTextEN);
      $(".parceirosText").html(parceirosEN);
      $(".en").addClass("underline");
      $(".role").html(roleEN);
      
      
      
    }
    else
    {
     $(".ouputQuemsomos").text(aboutPT);
     $(".contactText").text(contactTextPT);
     $(".creativeAgency").html(creativeAgencyPT);
     $(".fazemos").html(fazemosPT);
     $(".welcomeMenu").html(welcomeMenuPT);
      $(".aboutMenu").html(aboutMenuPT);
      $(".whatwedoMenu").html(whatwedoMenuPT);
      $(".partnersMenu").html(partnersMenuPT);
      $(".whatwemadeMenu").html(whatwemadeMenuPT);
      $(".lojaOnline").html(lojaOnlinePT);
      $(".lojaOnlineText").html(lojaOnlineTextPT);
      $(".brandingText").html(brandingTextPT);
      $(".fotografiatitle").html(fotografiatitlePT);
      $(".FotografiaText").html(FotografiaTextPT);
      $(".amazing").html(amazingPT);
      $(".waiting").html(waitingPT);
      $(".metaText").html(metaTextPT);
      $(".parceirosText").html(parceirosPT);
      $(".pt").addClass("underline");
        $(".role").html(rolePT);
      
     }  
  });
