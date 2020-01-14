export const mocks = process.env.NODE_ENV === 'development' && [
  {
    url: /\/api\/todos/,
    mock: require('__mocks__/API/TODOS/todos.json'),
  },
  {
    url: /\/api\/todo/,
    mock: require('__mocks__/API/TODO/todo.json'),
    method: 'POST',
  },

  {
    url: /\/api\/news/,
    mock: require('__mocks__/API/NEWS/news.json'),
  },

  {
    url: /\/api\/new-detail/,
    mock: require('__mocks__/API/NEWS/new.json'),
  },

  {
    url: /\/api\/partenaires/,
    mock: require('__mocks__/API/PARTENAIRES/partenaires.json'),
  },

  {
    url: /\/api\/trombinoscope/,
    mock: require('__mocks__/API/TROMBINOSCOPE/personnes.json'),
  },

  {
    url: /\/api\/mecenes/,
    mock: require('__mocks__/API/MECENES/mecenes.json'),
  },

  {
    url: /\/api\/article/,
    mock: require('__mocks__/API/ARTICLE/article.json'),
  },

  {
    url: /\/api\/friends/,
    mock: require('__mocks__/API/FRIENDS/friends.json'),
  },
]
