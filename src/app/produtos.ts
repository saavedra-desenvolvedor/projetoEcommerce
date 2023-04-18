export interface IProduto {
  id: number;
  descricao: string;
  preco: number;
  descricaoPreco: string;
  quantidadeEstoque: number;
  imagem: string;
}
export interface IProdutoCarrinho extends IProduto {
  quantidade: number;
}

export const produtos = [
  {
    id: 1,
    descricao: 'Mouse gamer',
    preco: 439.0,
    descricaoPreco: 'À vista no PIX',
    imagem:
      'https://images.pexels.com/photos/7006947/pexels-photo-7006947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quantidadeEstoque: 10,
  },
  {
    id: 2,
    descricao: 'Monitor muito bom',
    preco: 1200.5,
    descricaoPreco: 'À vista no PIX',
    imagem:
      'https://cdn.pixabay.com/photo/2013/07/12/15/04/monitor-149362_1280.png',
    quantidadeEstoque: 10,
  },
  {
    id: 3,
    descricao: 'Teclado excelente',
    preco: 749.99,
    descricaoPreco: 'À vista no PIX',
    imagem:
      'https://cdn.pixabay.com/photo/2013/07/13/14/06/keyboard-162134_1280.png',
    quantidadeEstoque: 10,
  },
  {
    id: 4,
    descricao: 'Fone para quem joga FPS',
    preco: 599.99,
    descricaoPreco: 'À vista no PIX',
    imagem:
      'https://cdn.pixabay.com/photo/2018/01/16/10/18/headphones-3085681_1280.jpg',
    quantidadeEstoque: 10,
  },
  {
    id: 5,
    descricao: 'Fone de ouvido',
    preco: 299.99,
    descricaoPreco: 'À vista no PIX',
    imagem:
      'https://cdn.pixabay.com/photo/2014/10/07/09/17/earphones-477446_1280.jpg',
    quantidadeEstoque: 10,
  },
  {
    id: 6,
    descricao: 'Fone de ouvido bom',
    preco: 399.99,
    descricaoPreco: 'À vista no PIX',
    imagem:
      'https://cdn.pixabay.com/photo/2018/04/23/14/14/bluetooth-headset-3344348_1280.png',
    quantidadeEstoque: 10,
  },
  {
    id: 7,
    descricao: 'HD 1TB',
    preco: 499.99,
    descricaoPreco: 'À vista no PIX',
    imagem:
      'https://cdn.pixabay.com/photo/2016/02/14/19/27/external-hard-drive-1200006_1280.jpg',
    quantidadeEstoque: 10,
  },
  {
    id: 8,
    descricao: 'Combo de placa de vídeos',
    preco: 18449.99,
    descricaoPreco: 'À vista no PIX',
    imagem:
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSueTFAzqtulLtFadyDf8aulrDOe_o1PKLHryRbASdvZ5GIPNRy4Zyvza7eaWOiajOpS5OTCy-IcphxfZ4Ctb73c-NsKAh0abYkAa3Va7RC43rXaGsGb5bRoQ&usqp=CAc',
    quantidadeEstoque: 10,
  },
  {
    id: 9,
    descricao: 'Processador Ryzen',
    preco: 1000,
    descricaoPreco: 'À vista no PIX',
    imagem:
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRruCYVuz1zz3nqxMuK9JNpeQNtT95ylGcOJxA3zAmeVAHy9olvhUfDMdrXTHvgbo0Iw00s1FoTeuc&usqp=CAc',
    quantidadeEstoque: 10,
  },
  {
    id: 10,
    descricao: 'Notebook bom',
    preco: 2500,
    descricaoPreco: 'À vista no PIX',
    imagem:
      'https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg',
    quantidadeEstoque: 10,
  },
  {
    id: 11,
    descricao: 'Notebook excelente',
    preco: 4500,
    descricaoPreco: 'À vista no PIX',
    imagem:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQMs1AycFgAP0cOigogH6gxPbRqlxnWpNyrM4N4zW7wRgaH-AfkMzdQyOh6GtAHO7UfQ78ZZuyxgw&usqp=CAc',
    quantidadeEstoque: 10,
  },
  {
    id: 12,
    descricao: 'Mouse barato',
    preco: 20,
    descricaoPreco: 'À vista no PIX',
    imagem:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRaUVLIl9VVBmyQImLFs9lUghVKRTYhUrp_4UUgfWu42-_7bHX1JN2CE83eBULaVef9ce25YF3O5p4&usqp=CAc',
    quantidadeEstoque: 10,
  },
  {
    id: 13,
    descricao: 'Mouse ótimo',
    preco: 200,
    descricaoPreco: 'À vista no PIX',
    imagem:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSWP8kgj2FRF_fhcQ9o9i5PzM8o-j3qSEyD8VCLobI0VbjoulazhFpF3Kdwy85-SmqTjxaFYALtLy4&usqp=CAc',
    quantidadeEstoque: 10,
  },
  {
    id: 14,
    descricao: 'Mouse pequeno',
    preco: 50,
    descricaoPreco: 'À vista no PIX',
    imagem:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQK8J-NNKOiMJE0NJS8biCRalREv9jd7AroWqvmjxojMS43bwhF28eDhcNUQ9-Aaqy39GtdqaMdgww&usqp=CAc',
    quantidadeEstoque: 10,
  },
  {
    id: 15,
    descricao: 'Teclado bom',
    preco: 159.99,
    descricaoPreco: 'À vista no PIX',
    imagem:
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFgPEFijAsJ7DHpqOo2QPrwq8pwU622oJjzDc4uU2qlitZEMmGYBimmz3p3eIHwnxncB397O48Ses&usqp=CAc',
    quantidadeEstoque: 10,
  },
];
