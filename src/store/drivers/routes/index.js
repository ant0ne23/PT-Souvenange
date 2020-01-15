export const routes = {
  '/': {
    code: 'HOME',
    '/todo/:id': 
    {
      code: 'TODO',
    },
    
    
    '/connexion' : 
    {
      code : 'CONNEXION'
    },

    '/association' : 
    {
      code : 'ASSOCIATION'
    },

    '/apropos' : 
    {
      code : 'APROPOS'
    },
    
    '/articles' : 
    {
      code : 'ARTICLES'
    },

    '/trombinoscope' : 
    {
      code : 'TROMBINOSCOPE'
    },

    '/trombinoscope' : 
    {
      code : 'TROMBINOSCOPE',
      '/:id':
      {
        code : 'TROMBINOSCOPE_DETAIL',
      },
    },

    '/CGU' : 
    {
      code : 'CGU'
    },
    
    '/carteBenevole' :
      {
        code : 'CARTEBENEVOLE'
      },

      '/carteConvention' :
      {
        code : 'CARTECONVENTION'
      },

    '/article' : 
    {
      code : 'ARTICLE'
    },

    '/friends' : 
    {
      code : 'FRIENDS'
    },

    '/mecenes' : 
    {
      code : 'MECENES'
    },

    '/donations' : 
    {
      code : 'DONATIONS'
    },

    '/news' :
    {
      code : 'NEWS',
    },

    '/temoignages' : 
    {
      code : 'TEMOIGNAGES'
    },

    '/parrain' : 
    {
      code : 'PARRAIN'
    },

    '/partenaires' : 
    {
      code : 'PARTENAIRES'
    },

    '/contact' : 
    {
      code : 'CONTACT',

      '/partenaire':
      {
        code : 'PARTENAIRE',
      },

      '/particulier':
      {
        code : 'PARTICULIER',
      },

      '/benevole':
      {
        code : 'BENEVOLE',
      },

      '/presse':
      {
        code : 'PRESSE',
      },

      '/autres':
      {
        code : 'AUTRES',
      },

    },

  },
}
