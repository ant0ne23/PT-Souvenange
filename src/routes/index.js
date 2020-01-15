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

    '/carteBenevole' :
      {
        code : 'CARTEBENEVOLE'
      },

      '/carteConvention' :
      {
        code : 'CARTECONVENTION'
      },

    '/CGU' : 
    {
      code : 'CGU'
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

    '/trombinoscope' : 
    {
      code : 'TROMBINOSCOPE',
      '/:id':
      {
        code : 'TROMBINOSCOPE_DETAIL',
      },
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
