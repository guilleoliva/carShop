(function() {
  var app = angular.module('carStore', []);

  app.controller('StoreController', function(){
    this.products = cars;
  });

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };  
  });

  var cars = [
  {
    name: 'Volkswagen Carocha',
    description: "Foi o primeiro modelo de automóvel fabricado pela companhia alemã Volkswagen. Foi o carro mais vendido no mundo ultrapassando em 1972 o recorde que pertencia então ao Ford Modelo T. O último modelo do VW Sedan foi produzido no México em 2003.",
    price: 20000.00,
    images: [
    {  
      full:"images/car1-01.jpg",
      thumb:"images/car1-01-thumb.jpg"
    },
    {
      full:"images/car1-02.jpg",
      thumb:"images/car1-02-thumb.jpg"
    },
    {
      full:"images/car1-03.jpg",
      thumb:"images/car1-03-thumb.jpg"       
    },
    ]
  }, 
  {
    name: 'Renault 4L',
    description: "Em 3 de Agosto de 1961 era apresentado o Renault 4L, mas ficaria para sempre apelidado como R4. O seu primeiro motor tinha quatro cilindros, caixa de trás velocidades em linha e 603 cm3.",
    price: 17000.00,
    images: [
    {  
      full:"images/car2-01.jpg",
      thumb:"images/car1-01-thumb.jpg"
    },
    {
      full:"images/car2-02.jpg",
      thumb:"images/car1-02-thumb.jpg"
    },
    {
      full:"images/car2-03.jpg",
      thumb:"images/car1-03-thumb.jpg"       
    },
    ]
  },
  {
    name: 'Citroen 2CV',
    description: "O CitroÃ«n 2CV Ã© um automÃ³vel de baixo custo da CitroÃ«n. Produzido entre 1948 e 1990,alcanÃ§ando a incrÃ­vel marca de 5 114 940 unidades produzidas",
    price: 16750.00,
    images: [
    {  
      full:"images/car3-01.jpg",
      thumb:"images/car1-01-thumb.jpg"
    },
    {
      full:"images/car3-02.jpg",
      thumb:"images/car1-02-thumb.jpg"
    },
    {
      full:"images/car3-03.jpg",
      thumb:"images/car1-03-thumb.jpg"       
    }
    ]
  }    
  ];

})();
