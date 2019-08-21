var getProjects = function() {
  var projetos = [
    {
      id: 1,
      name: 'Pong Game',
      image: 'spacepong.png',
      subject: 'Ferramentas Web',
      description: 'Pong game developed with Javascript',
    },
    {
      id: 2,
      name: 'Hash Game',
      image: 'hash_game.svg',
      subject: 'Ferramentas Web',
      description: 'Hash game developed with Javascript',
    },
    {
      id: 3,
      name: 'Cross Walk',
      image: 'gugasemester.png',
      subject: 'Study',
      description: 'Web game developed with javascript for study ',
    },
  ];

  return projetos;
}

module.exports = {
  getProjects: getProjects
}