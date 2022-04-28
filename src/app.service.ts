import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getObject():any{
    let objeto = {
      id:1,
      nome: "martelo"
    }
    return objeto
  }

  getIndustrial():any{
    let industrial = [{
      categoria: "Industrial",
      produtos:[
        {
      id:1,
      img:"img/produto_001.jpeg",
      nome:"Torquimetro",
      descricao:"Ferramentas para medir o torque dado em parafusos e porcas para que a devida pressão seja dada sobre a peça.",
      preco:"150,00",
      url_compra:"http://www.uol.com.br"
        },
        {
      id:2,
      img:"img/produto_002.Jpeg",
      nome:"Compressor",
      descricao:"Ferramentas para medir o torque dado em parafusos e porcas para que a devida pressão seja dada sobre a peça.",
      preco:"150,00",
      url_compra:"http://www.uol.com.br"
        },
      {
      id:3,
      img:"img/produto_003.jpeg",
      nome: "Furadeira de Bancada",
      descricao:"Equipamento para fazer furos com precisão. Essa ferramenta possibilita furos em ângulos perfeitos de 90º, além de permitir limitar a profundidade do furo.",
      preco: "600,00",
      url_compra: "http://www.globo.com.br"
      }
    ]
    },
    {
      categoria: "Agricula",
      produtos:[
        {
          id:4, 
          img:"img/produto_004.jpeg",
          nome:"Roçadeira",
          descricao:"Equipamento para limpeza e manutenção de áreas cobertas por relva, grama, ervas daninhas e pequenos arbustos.",
          preco:"150,99",
          url_compra:"http://www.uol.com.br"
        },
        {
          id:5, 
          img:"img/produto_005.jpeg",
          nome:"Trator",
          descricao:"Equipamento para arado em plantações.",
          preco:"10,00",
          url_compra:"http://www.amazon.com"
        },
        {
          id:6, 
          img:"img/produto_006.jpeg",
          nome:"Rastelo",
          descricao:"Some quick example text to build on the card title and make up the bulk.",
          preco:"11,00",
          url_compra:"http://www.globo.com.br"
        }

      ]
    },
    {
      categoria: "Comum",
      produtos:[
        {
          id:7, 
          img:"img/produto_007.jpeg",
          nome:"Alicate",
          descricao:"Some quick example text to build on the card title and make up the bulk of the card's content.",
          preco:"12,00",
          url_compra:"http://www.uol.com.br"
        },
        {
          id:8, 
          img:"img/produto_008.jpeg",
          nome:"Martelo",
          descricao:"Some quick example text to build on the card title and make up the bulk.",
          preco:"11,00",
          url_compra:"http://www.amazon.com"
        },
        {
          categoria: "Outros",
          produtos:[
          ]
        }
      ]
    }
  ]
    return industrial
  }
  
}
