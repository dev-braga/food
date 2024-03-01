// Defina suas rotas como funções
var routes = {
    '/': function() {
      document.getElementById('app').innerHTML = '<h1>Home</h1>';
    },
    '/sobre': function() {
      document.getElementById('app').innerHTML = '<h1>Sobre</h1>';
    },
    '/contato': function() {
      document.getElementById('app').innerHTML = '<h1>Contato</h1>';
    }
  };
  
  function navegar(path) {
    // Atualize a URL no navegador
    window.history.pushState({}, path, window.location.origin + path);
  
    // Execute a função para essa rota
    routespath;
  }
  
  // Adicione um ouvinte de evento para mudanças de rota
  window.onpopstate = function() {
    routeswindow.location.pathname;
  };
  
  // Execute a função para a rota inicial
  routeswindow.location.pathname;
  