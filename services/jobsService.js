var getJobs = function() {
  var job = [
    {
      id: 1,
      name: 'Tradutor de Mangá',
      description: 'Traduzir mangás em tempo hábil para exibição de no máximo 24 horas após lançamento da editora.',
      timeXP: 'Não requerido.',
      salary: 'À combinar.',
    },
    {
      id: 2,
      name: 'Finalista de Arte',
      description: 'Ajustar possíveis erros na arte que possam ter ocorrido com a sobreposição da tradução.',
      timeXP: '1 Ano',
      salary: 'R$ 1500,00',
    },
    {
      id: 3,
      name: 'Marketing',
      description: 'Divulgar a página e discutir possíveis parcerias com páginas de mangás e animes.',
      timeXP: 'Não requerido',
      salary: 'À Combinar',
    },
    {
      id: 4,
      name: 'Programador',
      description: 'Desenvolver, gerenciar e prestar manutenção do site.',
      timeXP: '2 Anos.',
      salary: 'R$ 2000,00',
    },
    {
      id: 5,
      name: 'Tradutor de legendas - Japones',
      description: 'Realizar tradução de legendas dos animes da temporada.',
      timeXP: '1 Ano',
      salary: 'R$ 2000,00',
    },
    {
      id: 6,
      name: 'Tradutor de legendas - Inglês',
      description: 'Realizar tradução de legendas dos animes da temporada.',
      timeXP: '1 Ano',
      salary: 'R$ 2000,00',
    },
  ];

  return job;
}

module.exports = {
  getJobs: getJobs
}