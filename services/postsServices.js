var getPosts = function() {
  var posts = [
    {
      id: 1,
      title: 'Post 1',
      image: 'post1.jpg',
      description: 'Meu primeiro post',
      body: 'Meu primeiro  aksjdfklçasfjasçdfjk asjçfklaj sfkaj sfçajskfsakfajskfj asf jasçklfjaskdfj afj askdfjaskfj askdfj ksdafjçskdf j askdlfjas lçfj asfkj asklçdfj asklçfj askçfj dfjsda ç ajsdfçkasjfçkasj asdkfajsç jakf asjfklçasjfkçl blablabla'
    },
    {
      id: 2,
      title: 'Post 2',
      image: 'post2.jpg',
      description: 'Meu segundo post',
      body: 'Meu segundo post blablabla aasjfasdfk asjfasç ka jasçfja kj ak jaf açsklj akjj j açklsjfk asj asjfçaksj'
    },
    {
      id: 3,
      title: 'Post 3',
      image: 'post2.jpg',
      description: 'Meu terceiro post',
      body: 'Meu terceiro post blablabla aasjfasdfk asjfasç ka jasçfja kj ak jaf açsklj akjj j açklsjfk asj asjfçaksj'
    },
  ];

  return posts;
}

module.exports = {
  getPosts: getPosts
}