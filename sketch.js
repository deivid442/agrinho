let infoAgricultura, infoConsumo;
let inputSugestao, botaoEnviar;
let sugestoes = [];

function setup() {
  noCanvas(); // Não vamos usar canvas, só elementos HTML

  // Título principal
  createElement('h1', 'A Importância da Agricultura e do Consumo Urbano');

  // Seção Agricultura
  infoAgricultura = createElement('h2', '🌾 Agricultura e Desenvolvimento Urbano');
  infoAgricultura.style('color', 'blue');
  createP('A agricultura é essencial para a sustentabilidade das cidades. Práticas como rotação de culturas, uso reduzido de agrotóxicos e preservação dos recursos naturais garantem alimentos de qualidade. Além disso, fortalece a economia, gera empregos e colabora para um desenvolvimento mais equilibrado entre campo e cidade.');

  // Seção Consumo
  infoConsumo = createElement('h2', '🏙️ Consumo Urbano Consciente');
  infoConsumo.style('color', 'blue');
  createP('O consumo urbano impacta diretamente o campo. Optar por alimentos locais, reduzir o desperdício e apoiar produtores regionais ajuda tanto o meio ambiente quanto a economia. Além disso, o consumo nas cidades envolve transporte, habitação, saúde, educação e lazer, destacando a importância de hábitos mais sustentáveis.');

  // Seção Entrevistas
  let entrevista = createElement('h2', '🎥 Entrevistas');
  entrevista.style('color', 'blue');

  createP('Entrevista com Agricultor:');
  createDiv('<iframe width="400" height="240" src="https://www.youtube.com/embed/oVkCJboxdME" frameborder="0" allowfullscreen></iframe>');

  createP('Entrevista com Morador Urbano:');
  createDiv('<iframe width="400" height="240" src="https://www.youtube.com/embed/zaWa41a-SQg" frameborder="0" allowfullscreen></iframe>');

  // Seção Sugestões
  let sugestaoTitulo = createElement('h2', '💡 Deixe Sua Sugestão de Hábito Sustentável');
  sugestaoTitulo.style('color', 'blue');

  inputSugestao = createInput();
  inputSugestao.attribute('placeholder', 'Escreva sua sugestão...');
  botaoEnviar = createButton('Enviar');
  botaoEnviar.mousePressed(enviarSugestao);

  let listaTitulo = createElement('h3', '📝 Sugestões da Comunidade:');
  listaTitulo.style('color', 'blue');
}

function enviarSugestao() {
  const texto = inputSugestao.value();
  if (texto.trim() !== '') {
    sugestoes.push(texto);
    createP(`• ${texto}`);
    inputSugestao.value('');
  }
}
