function descobrirCDZ(){
    const texto = document.querySelector('#paocomovo');
    const imagem = document.querySelector("img");
    const mes = document.querySelector('#mes').value;
    const dia = document.querySelector('#dia').value;
    const data = "2023"+"/"+mes+"/"+dia;
    
    
  if (data >="2023/05/21" && data <= "2023/06/20 ") {
        texto.innerHTML = "Saga de Gêmeos";
        imagem.setAttribute("src","img/gemeos.jpg");
        imagem.setAttribute("width","500px");
        texto.innerHTML = "Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena. O cavaleiro de gêmeos possuía um irmão gêmeo chamado Kanon, que propôs que eles matassem Athena e comandassem o mundo"
    }

   else if (data >="2023/05/21" && data <= "2023/06/20 ") {
        texto.innerHTML = "Miro de Escorpião";
        imagem.setAttribute("src","img/escorpiao.jpg");
        imagem.setAttribute("width","500px");
        texto.innerHTML = "Milo de escorpião é o Cavaleiro de Ouro de Escorpião que protege a casa de escorpião no santuário. Prezava muito a amizade, por isso passou a zelar por Hyoga depois da morte de seu amigo Camus de aquário.";

    }
    
     else if (data >="2023/05/21" && data <= "2023/06/20 ") {
        texto.innerHTML = "Afrodite de Peixes";
        imagem.setAttribute("src","img/peixes.jpg");
        imagem.setAttribute("width","500px");
        texto.innerHTML = "Afrodite de Peixes (魚座ピスケスのアフロディーテ Pisukesu no Afurodite?) é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX. Usa variações de golpes com rosas, como o Rosas Diabólicas Reais. Sua ideia é de que só um poder supremo pode manter a paz e ordem no mundo, mesmo que esse poder provenha do mal.";
    }
    else if (data >="2023/03/21" && data <= "2023/04/20 ") {
        texto.innerHTML = "Mu";
        imagem.setAttribute("src","img/aries.jpg");
        imagem.setAttribute("width","500px");
        texto.innerHTML = "Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco. Como desde cedo desconfiava do Grande Mestre, deu as costas ao Santuário.";
       
    }
    else if (data >="2023/08/23" && data <= "2023/09/22 ") {
        texto.innerHTML = "Shaka de Virgem";
        imagem.setAttribute("src","img/virgem.jpg");
        imagem.setAttribute("width","500px");
        texto.innerHTML = "Shaka de Virgem está entre os Cavaleiros de Ouro mais populares de Os Cavaleiros do Zodíaco. Conhecido como o Homem Mais Próximo de Deus, ele possui o maior cosmo dentre os 88 Cavaleiros de Atena e se mostrou fundamental para o triunfo dos heróis na Saga de Hades.";
    }
    else if (data >="2023/11/22" && data <= "2023/12/21 ") {
        texto.innerHTML = "Shura de Capricórnio";
        imagem.setAttribute("src","img/capricornio.jpg");
        imagem.setAttribute("width","500px");
        texto.innerHTML = "Shura de Capricórnio é o Cavaleiro de Ouro que protege a décima casa do Santuário, a Casa de Capricórnio; é o cavaleiro que carrega o poder da espada Excalibur em seu braço direito. Ele é um dos principais personagens de Saint Seiya, sendo um Cavaleiro de Ouro e se considerando o cavaleiro mais fiel à deusa Atena.";
    }
    else if (data >="2023/04/21" && data <= "2023/05/20 ") {
        texto.innerHTML = "Aldebaram";
        imagem.setAttribute("src","img/touro.jpg");
        imagem.setAttribute("width","500px");
        texto.innerHTML = "Aldebaran (アルデバラン, Aldebaran) é o Cavaleiro de Ouro da Constelação de Touro ( 牡牛座 タウラス , Taurus) durante os eventos do Século XX, servindo como o guardião da Casa de Touro no Santuário. Dotado de uma resistência fora do comum, também tem uma grande força física e uma agilidade impressionante para alguém de seu porte.";
    }
    else if (data >="2023/06/21" && data <= "2023/07/22 ") {
        texto.innerHTML = "Máscara da Morte";
        imagem.setAttribute("src","img/cancer.jpg");
        imagem.setAttribute("width","500px");
        texto.innerHTML = "Ele é capaz de mandar seus inimigos para a porta do Submundo com um simples golpe: a Onda do Inferno. Apesar da primeira impressão, ele é um dos cavaleiros derrotados com mais facilidade, sendo inclusive rejeitado pela própria armadura antes de morrer.";
    }
    else if (data >="2023/07/23" && data <= "2023/08/22 ") {
        texto.innerHTML = "Aioria de Leão";
        imagem.setAttribute("src","img/leao.jpg");
        imagem.setAttribute("width","500px");
        texto.innerHTML = "Aiolia. o mais famoso Cavaliero de Leão é Aiolia, que sofreu no santuário após seu irmão, Aiolos, ser acusado de traição.";
    }
    else if (data >="2023/09/23" && data <= "2023/19/22 ") {
        texto.innerHTML = "Dohko";
        imagem.setAttribute("src","img/libra.jpg");
        imagem.setAttribute("width","500px");
        texto.innerHTML = "Dohko de Libra foi um lendário e renomado Cavaleiro de Ouro do Santuário de Athena, por ter lutado e sobrevivido a Guerra Santa contra Hades no Século XVIII ao lado de seu parceiro de batalhas, Shion de Áries.";
    }
    else if (data >= "2023/11/22" && data <= "2023/12/21 " ) {
        texto.innerHTML = "Aiolos de Sagitário";
        imagem.setAttribute("src","img/sagitario.jpg");
        imagem.setAttribute("width","500px");
        texto.innerHTML = "Aiolos de Sagitário é a encarnação de dois conceitos fundamentais para a história de Cavaleiros do Zodíaco: lealdade e determinação. Mesmo gravemente ferido, o Cavaleiro de Sagitário se esforça ao máximo para salvar a bebê Atena do Mestre do Santuário, sendo atacado por muitos de seus colegas no processo";
    }
    else if (data >="2023/01/21" && data <= "2023/02/18 ") {
        texto.innerHTML = "Camus de Aquário";
        imagem.setAttribute("src","img/aquario.jpg");
        imagem.setAttribute("width","500px");
        texto.innerHTML = "O mestre do mestre de Hyoga é tranquilamente um dos mais poderosos Cavaleiros de Ouro, o que fica claro tanto durante a saga do Santuário quanto durante os primeiros episódios da saga de Hades.";
    }
    else{
        texto.innerHTML = " ''Isso não existe!''(Palavras do Ney)";
        imagem.setAttribute("src","img/ney.png");
        imagem.setAttribute("width","500px");
    }
}