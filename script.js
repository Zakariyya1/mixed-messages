const adjectiveList1 = [
  'arrogant',
  'annoying',
  'combative',
  'disturbed',
  'drab'
];

const adjectiveList2 = ['lazy', 'mushy', 'obnoxious', 'prickly', 'repulsive'];

const adjectiveList3 = [
  'thoughtless',
  'unsightly',
  'wrong',
  'troubled',
  'uptight'
];

const insultGenerator = (adjArr1, adjArr2, adjArr3) => {
  const adjList1 = adjArr1.slice();
  const adjList2 = adjArr2.slice();
  const adjList3 = adjArr3.slice();

  const randomNumber = () => Math.floor(Math.random() * 5);

  return `The best 3 words to describe you are: ${adjList1[randomNumber()]}, ${
    adjList2[randomNumber()]
  } and ${adjList3[randomNumber()]}.`;
};

console.log(insultGenerator(adjectiveList1, adjectiveList2, adjectiveList3));
