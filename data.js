// ====== CHECKOUT SALES DATA (Eduzz) ======
const checkoutSales = [
  {id:97825686,date:"07/03/2026",value:27,method:"Pix",client:"Sonia Regina de Faria",utm_source:"jLj69acbb2689b1a6db418ea57c",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97824848,date:"07/03/2026",value:27,method:"Pix",client:"Letícia Alves Trevisan",utm_source:"FBjLj69ab78e37011dc2c82d8f7a8",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:"SP"},
  {id:97823824,date:"07/03/2026",value:27,method:"Pix",client:"Diego Fernandes",utm_source:"FBjLj69ac99869073cb8f0550e92b",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:"PR"},
  {id:97822565,date:"07/03/2026",value:27,method:"Pix",client:"Jéssica Motta do Nascimento",utm_source:"FBjLj69ac836866d53830cf00ddea",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:"SP"},
  {id:97819556,date:"07/03/2026",value:27,method:"Credito",client:"Gleison Alexandre de Brito",utm_source:"FBjLj69ac50874c6bd179dfabfcb0",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:"CE"},
  {id:97817389,date:"07/03/2026",value:27,method:"Pix",client:"Karen Fernanda Alves Pereira de Oliveira",utm_source:"Lucas",utm_campaign:"",utm_medium:"",utm_content:"",state:"PE"},
  {id:97816065,date:"07/03/2026",value:27,method:"Credito",client:"Helder Rocha de Souza",utm_source:"FBjLj69ac3574e2ad650802459e96",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:"MA"},
  {id:97813884,date:"07/03/2026",value:27,method:"Pix",client:"SANDRO EDMAR BESSA DE ARAUJO",utm_source:"Lucas",utm_campaign:"",utm_medium:"",utm_content:"",state:"RJ"},
  {id:97812147,date:"07/03/2026",value:27,method:"Credito",client:"Gleuton Junior Santiago Matias",utm_source:"FBjLj69aad0d2bdd317e1b8f263bc",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"14 - Estática 06 - Laranja|120243151713150683",state:""},
  {id:97809384,date:"07/03/2026",value:27,method:"Pix",client:"Roberto silva",utm_source:"FBjLj69ac01debb4f8a32d778b699",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:"PE"},
  {id:97809380,date:"07/03/2026",value:27,method:"Pix",client:"Angélica Silva",utm_source:"FBjLj69ac01aac5783151c5511a54",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:"MG"},
  {id:97805649,date:"06/03/2026",value:27,method:"Pix",client:"Herotilde Dias Cantero Marques",utm_source:"FBjLj69a831c273abe321f93ead3f",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:""},
  {id:97801873,date:"06/03/2026",value:27,method:"Pix",client:"Renan Teixeira de Silva",utm_source:"FBjLj69ab51e7dce68de57070f9ef",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:""},
  {id:97800944,date:"06/03/2026",value:27,method:"Pix",client:"Vanessa Alexandrino",utm_source:"FBjLj69ab4370ffab0ebe2ce1e86e",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:""},
  {id:97797907,date:"06/03/2026",value:27,method:"Pix",client:"Patrícia Juliana de Goveia",utm_source:"FBjLj69a7de8473abe321f92293a9",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:""},
  {id:97795939,date:"06/03/2026",value:27,method:"Pix",client:"Waynne da Silva Bispo",utm_source:"link_biojLj69ab04aa751bdfc269c65bd8",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97794962,date:"06/03/2026",value:27,method:"Pix",client:"Pedro Henrique",utm_source:"FBjLj69aaba6a347e5c762fdf7178",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:""},
  {id:97786460,date:"06/03/2026",value:27,method:"Pix",client:"Ana Carolina Verones de Oliveira",utm_source:"FBjLj69aabbe61c8f8be1544c5e32",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"14 - Estática 06 - Laranja|120243151713150683",state:""},
  {id:97784365,date:"06/03/2026",value:27,method:"Pix",client:"Claudiane Duarte",utm_source:"FBjLj69aaa40edce68de57036f85d",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:""},
  {id:97777885,date:"05/03/2026",value:27,method:"Pix",client:"Jorge Sidney Loureiro de Souza Junior",utm_source:"Gabriel",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97776708,date:"05/03/2026",value:27,method:"Pix",client:"Marcos Vinicius",utm_source:"FBjLj69a8a00405e57c44cef8de8b",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:"SP"},
  {id:97775585,date:"05/03/2026",value:27,method:"Credito",client:"ruan pablo",utm_source:"link_biojLj69a8ab04ece48a3440c01180",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97772190,date:"05/03/2026",value:27,method:"Pix",client:"Poline Pimentel Assunção",utm_source:"Zuca",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97770913,date:"05/03/2026",value:27,method:"Pix",client:"Dagmar de Oliveira Lima",utm_source:"link_biojLj69a9c1752e891736dc4ce43f",utm_campaign:"",utm_medium:"",utm_content:"",state:"DF"},
  {id:97769924,date:"05/03/2026",value:27,method:"Credito",client:"Victor Mota Araujo",utm_source:"FBjLj69a9b4d5ddb4b3f74a725c77",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:""},
  {id:97757010,date:"05/03/2026",value:27,method:"Pix",client:"Renata danusa Dantas costa",utm_source:"FBjLj69a69e388a967a014d912887",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:""},
  {id:97705064,date:"04/03/2026",value:27,method:"Pix",client:"Estanislau Cunha Santos",utm_source:"link_biojLj69a87e889a9299fbbb0c8b65",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:"PE"},
  {id:97705049,date:"04/03/2026",value:27,method:"Pix",client:"Melissa Freitas de Lima",utm_source:"FBjLj69a83699ddf740779a46e05b",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:""},
  {id:97702215,date:"04/03/2026",value:27,method:"Pix",client:"Francisco carlos santos oliveira",utm_source:"FBjLj69a8718f04800179d5396702",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:"BA"},
  {id:97690743,date:"04/03/2026",value:27,method:"Pix",client:"Camila Aparecida Fernandes",utm_source:"FBjLj69a8199973abe321f936acb5",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:""},
  {id:97686340,date:"03/03/2026",value:27,method:"Pix",client:"Vinícius de jesus",utm_source:"Jez",utm_campaign:"",utm_medium:"",utm_content:"",state:"SP"},
  {id:97685923,date:"03/03/2026",value:27,method:"Pix",client:"Kesia Araújo",utm_source:"FBjLj69a790a5fa89acd49dfa8461",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:""},
  {id:97685812,date:"03/03/2026",value:27,method:"Pix",client:"Jackson Pedrosa Araújo",utm_source:"Jez",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97685333,date:"03/03/2026",value:27,method:"Pix",client:"Gabriel Medrado",utm_source:"FBjLj69a78815590626eb629eac3e",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:""},
  {id:97684812,date:"03/03/2026",value:27,method:"Pix",client:"Ellen Moralles",utm_source:"FBjLj69a62c64b1fb10a18fd97f7b",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:""},
  {id:97681415,date:"03/03/2026",value:27,method:"Credito",client:"Fabian Ribeiro Freitas",utm_source:"FBjLj69a768486347623c2aaf6dac",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:"SP"},
  {id:97676760,date:"03/03/2026",value:27,method:"Pix",client:"Carolina Vidal Freire",utm_source:"Kelvin",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97668757,date:"03/03/2026",value:27,method:"Pix",client:"Rodrigo Lucas Furtado tinoco",utm_source:"FBjLj69a6eeff81b6e6f8dc28a0d8",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:""},
  {id:97659242,date:"03/03/2026",value:27,method:"Pix",client:"Marcos Vinícius Gomes Silva",utm_source:"FBjLj69a5986e8454fa7bf4585c4f",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:""},
  {id:97651173,date:"02/03/2026",value:27,method:"Pix",client:"Patrícia Martins Alves Teixeira",utm_source:"Lucas",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97646486,date:"02/03/2026",value:27,method:"Pix",client:"VALDILENE ANDRADE",utm_source:"FBjLj69a5d4b6b22b396f0946c0ab",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:""},
  {id:97644957,date:"02/03/2026",value:27,method:"Pix",client:"Renata Souza",utm_source:"FBjLj69a5c733d31f747c54efd084",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:"RJ"},
  {id:97643514,date:"02/03/2026",value:27,method:"Pix",client:"Lucas de Sousa Fonseca",utm_source:"Instagram_StoriesjLj69a5bbe7f48663c6f6ca2a79",utm_campaign:"[CTC] [ToFu] [CV] - Evento Pago — PAGINA JEZZ",utm_medium:"00 - aberto 25-54",utm_content:"06 - Estático 02",state:"MA"},
  {id:97640549,date:"02/03/2026",value:27,method:"Pix",client:"Rosaline Lacerda",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:"MG"},
  {id:97638737,date:"02/03/2026",value:27,method:"Pix",client:"Mayara Paiva Freires",utm_source:"FBjLj69a597c349c0edbf69ae665f",utm_campaign:"[Átila] 02/03/2026 -  Evento Pago — PAGINA JEZZ|120243011690660683",utm_medium:"00 - aberto 25-54|120243011690710683",utm_content:"08 - Estático 04 - Verde|120243011690700683",state:""},
  {id:97623993,date:"01/03/2026",value:27,method:"Pix",client:"Carolina de Oliveira",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97623237,date:"01/03/2026",value:27,method:"Credito",client:"Raquel Teixeira",utm_source:"Instagram_Stories",utm_campaign:"[CTC] [ToFu] [CV] - Evento Pago — PAGINA JEZZ",utm_medium:"00 - aberto 25-54",utm_content:"06 - Estático 02",state:"RS"},
  {id:97611708,date:"01/03/2026",value:27,method:"Pix",client:"David zanchin caperuto martins",utm_source:"Instagram_Feed",utm_campaign:"[CTC] [ToFu] [CV] - Evento Pago — PAGINA JEZZ",utm_medium:"00 - aberto 25-54",utm_content:"06 - Estático 02",state:""},
  {id:97603464,date:"01/03/2026",value:27,method:"Credito",client:"Nathan Neubaner",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97591887,date:"28/02/2026",value:27,method:"Pix",client:"Charles de Oliveira Lima",utm_source:"Instagram_Stories",utm_campaign:"[CTC] [ToFu] [CV] - Evento Pago — PAGINA JEZZ",utm_medium:"00 - aberto 25-54",utm_content:"08 - Estático 04 - Verde",state:"MG"},
  {id:97581703,date:"28/02/2026",value:27,method:"Pix",client:"Patrícia santos",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97564784,date:"27/02/2026",value:27,method:"Pix",client:"Yzabele aparecida do Nascimento",utm_source:"Zuca",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97549828,date:"26/02/2026",value:27,method:"Pix",client:"Sthefanny dos Santos Felix",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:"RJ"},
  {id:97549424,date:"26/02/2026",value:27,method:"Pix",client:"Ivan Lopes Silva",utm_source:"Kelvin",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97549139,date:"26/02/2026",value:27,method:"Pix",client:"Francilma Ronetia Barbosa Marinho Everton",utm_source:"Instagram_Feed",utm_campaign:"[CTC] [ToFu] [CV] - Evento Pago — PAGINA JEZZ",utm_medium:"00 - aberto 25-54",utm_content:"08 - Estático 04 - Verde",state:""},
  {id:97547485,date:"26/02/2026",value:27,method:"Pix",client:"Bruna Haddad",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97538345,date:"26/02/2026",value:27,method:"Pix",client:"EDINELSA SOARES Bezerra",utm_source:"Facebook_Mobile_Feed",utm_campaign:"[CTC] [ToFu] [CV] - Evento Pago — PAGINA JEZZ",utm_medium:"00 - aberto 25-54",utm_content:"06 - Estático 02",state:""},
  {id:97536043,date:"26/02/2026",value:27,method:"Pix",client:"Matheus Xavier Silva",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97532446,date:"26/02/2026",value:27,method:"Pix",client:"Roberta Deprá Lourencini",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:"PA"},
  {id:97529310,date:"26/02/2026",value:27,method:"Credito",client:"Rosane Freitas Amaral",utm_source:"Zuca",utm_campaign:"",utm_medium:"",utm_content:"",state:"MG"},
  {id:97525309,date:"25/02/2026",value:27,method:"Pix",client:"Felipe leal da Silva",utm_source:"Kelvin",utm_campaign:"",utm_medium:"",utm_content:"",state:"SP"},
  {id:97516654,date:"25/02/2026",value:27,method:"Pix",client:"João Vitor",utm_source:"Zuca",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97513865,date:"25/02/2026",value:27,method:"Pix",client:"Wilson machado dos Santos",utm_source:"link_bio",utm_campaign:"",utm_medium:"",utm_content:"",state:"SP"},
  {id:97507584,date:"25/02/2026",value:27,method:"Pix",client:"Neucler Simões",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:"SP"},
  {id:97504036,date:"25/02/2026",value:27,method:"Pix",client:"Tiago Ferreira de Freitas",utm_source:"Kelvin",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97499224,date:"25/02/2026",value:27,method:"Pix",client:"Stherluany Facundes",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:"MG"},
  {id:97481058,date:"24/02/2026",value:27,method:"Pix",client:"Luís Cláudio Pessoa Lopes",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97478547,date:"24/02/2026",value:27,method:"Pix",client:"Remiton Gomes Costa",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:"MA"},
  {id:97474393,date:"24/02/2026",value:27,method:"Pix",client:"Fernando Daniel Lopes de Souza",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97469388,date:"24/02/2026",value:27,method:"Pix",client:"Isabel cristina",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97468013,date:"24/02/2026",value:27,method:"Pix",client:"Adna Lopes",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97461662,date:"23/02/2026",value:27,method:"Pix",client:"Adenilson Rocha",utm_source:"Lucas",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97461660,date:"23/02/2026",value:27,method:"Pix",client:"Tainara Pessoa Burg Miles",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97456334,date:"23/02/2026",value:27,method:"Credito",client:"Carina Soares Menezes",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97439346,date:"22/02/2026",value:27,method:"Pix",client:"Lícia Borges",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97429587,date:"22/02/2026",value:47,method:"Credito",client:"Iavla Oliveira",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97415243,date:"22/02/2026",value:27,method:"Pix",client:"Cibele Aparecida de Miranda",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97399363,date:"21/02/2026",value:27,method:"Pix",client:"Vinicius Miguel Oliveira Posso",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:"SP"},
  {id:97386491,date:"20/02/2026",value:27,method:"Pix",client:"Joacir Franco Moreira Boriolo",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97386464,date:"20/02/2026",value:27,method:"Pix",client:"CARLOS EDUARDO DE ALMEIDA HEGGENDORN",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97381320,date:"20/02/2026",value:27,method:"Pix",client:"Clara Freitas Dourado",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97378575,date:"20/02/2026",value:27,method:"Pix",client:"Renato Araújo de Souza",utm_source:"Lucas",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97373207,date:"20/02/2026",value:27,method:"Pix",client:"Danton Guimarães",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97355187,date:"20/02/2026",value:27,method:"Pix",client:"Paulo barros",utm_source:"eduzz_rvp_email",utm_campaign:"eduzz_rvp",utm_medium:"eduzz_rvp_sale",utm_content:"",state:"RJ"},
  {id:97351568,date:"19/02/2026",value:27,method:"Pix",client:"Eurenice Gomes Santiago Macedo",utm_source:"Kelvin",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97349076,date:"19/02/2026",value:27,method:"Pix",client:"Elizabeth Manoela Paes",utm_source:"Gabriel",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97321293,date:"18/02/2026",value:27,method:"Pix",client:"Kettylin Stephani Silva Crasto",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:"PE"},
  {id:97305485,date:"18/02/2026",value:47,method:"Pix",client:"Lilian Berenice Pedezert Peres",utm_source:"gabriel",utm_campaign:"",utm_medium:"",utm_content:"",state:"DF"},
  {id:97302943,date:"18/02/2026",value:47,method:"Credito",client:"Rodrigo Barbieri",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97299274,date:"18/02/2026",value:27,method:"Pix",client:"Lucas Rocha Souza",utm_source:"Zuca",utm_campaign:"",utm_medium:"",utm_content:"",state:"DF"},
  {id:97287474,date:"17/02/2026",value:47,method:"Pix",client:"Lucas Magioli dos Santos",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:"SP"},
  {id:97257370,date:"16/02/2026",value:47,method:"Pix",client:"TIAGO DE MELO DA SILVA",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97246166,date:"16/02/2026",value:47,method:"Credito",client:"José Inácio Schwartz",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97194460,date:"13/02/2026",value:47,method:"Pix",client:"Gabriel Resende Matoso Chagas",utm_source:"kelvin",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97173209,date:"13/02/2026",value:47,method:"Credito",client:"Renata Rodrigues Vieira",utm_source:"kelvin",utm_campaign:"",utm_medium:"",utm_content:"",state:"MG"},
  {id:97167965,date:"12/02/2026",value:47,method:"Credito",client:"Christiano de Carvalho Dantas",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97167925,date:"12/02/2026",value:47,method:"Pix",client:"Michelle Marques Costa",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97164901,date:"12/02/2026",value:47,method:"Pix",client:"Herick Freitag",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97149321,date:"12/02/2026",value:47,method:"Pix",client:"Mardoqueu Porciúncula dos Santos Gomes",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:"BA"},
  {id:97126603,date:"11/02/2026",value:47,method:"Pix",client:"Anne Victória do Carmo Moura Narciso",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97089813,date:"10/02/2026",value:47,method:"Credito",client:"Yara Suriano Rodrigues",utm_source:"zuca",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97076032,date:"09/02/2026",value:47,method:"Pix",client:"Arthur Vitório Scarton Schwerz",utm_source:"kelvin",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97060464,date:"09/02/2026",value:47,method:"Pix",client:"Cilas Rezende Musto",utm_source:"kelvin",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97024126,date:"08/02/2026",value:47,method:"Pix",client:"Jainny Meire Da Silva Moraes",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:97015972,date:"07/02/2026",value:47,method:"Credito",client:"Mateus Sanino",utm_source:"",utm_campaign:"",utm_medium:"",utm_content:"",state:"SP"},
  {id:96954161,date:"05/02/2026",value:47,method:"Credito",client:"Tairly Maria Sales Mapurunga Mazulo",utm_source:"jez",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:96884767,date:"04/02/2026",value:47,method:"Pix",client:"Alessandra Cunha",utm_source:"jez",utm_campaign:"",utm_medium:"",utm_content:"",state:"RJ"},
  {id:96878036,date:"04/02/2026",value:47,method:"Pix",client:"Natalice Alves da Silva",utm_source:"kelvin",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:96852397,date:"03/02/2026",value:47,method:"Pix",client:"Roberta Maciejezack",utm_source:"organico",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
  {id:96846265,date:"03/02/2026",value:47,method:"Pix",client:"Larissa Ramos Mendes",utm_source:"jez",utm_campaign:"",utm_medium:"",utm_content:"",state:""},
];

// ====== FACEBOOK ADS DATA ======
const facebookAds = [
  {ad:"08 - Estático 04 - Verde",adset:"00 - aberto 25-54",spent:1785.83,results:56,cpr:31.89,impressions:46743,reach:13316,roas:0.847},
  {ad:"06 - Estático 02",adset:"00 - aberto 25-54",spent:1202.92,results:11,cpr:109.36,impressions:26503,reach:11168,roas:0.264},
  {ad:"004 - Estático",adset:"00 - aberto 25-54",spent:665.53,results:3,cpr:221.84,impressions:24129,reach:8972,roas:0.212},
  {ad:"06 - Estático 02",adset:"00 - aberto 25-54",spent:483.03,results:8,cpr:60.38,impressions:14566,reach:6270,roas:0.447},
  {ad:"07 - Estático 03 - Vagas abertas",adset:"00 - aberto 25-54",spent:290.75,results:4,cpr:72.69,impressions:5823,reach:3465,roas:0.371},
  {ad:"06 - Estático 02",adset:"00 - aberto 25-54",spent:201.99,results:1,cpr:201.99,impressions:6656,reach:2700,roas:0.233},
  {ad:"06 - Estático 02",adset:"00 - aberto 25-54",spent:140.77,results:0,cpr:0,impressions:3720,reach:1900,roas:0},
  {ad:"007 - Estático",adset:"00 - aberto 25-54",spent:140.60,results:0,cpr:0,impressions:4558,reach:2107,roas:0},
  {ad:"08 - Estático 04 - Verde",adset:"00 - aberto 25-54",spent:110.45,results:4,cpr:27.61,impressions:2918,reach:1366,roas:0.978},
  {ad:"07 - Estático 03 - Vagas abertas",adset:"00 - aberto 25-54",spent:100.03,results:0,cpr:0,impressions:2873,reach:1458,roas:0},
  {ad:"007 - Estático",adset:"00 - aberto 25-54",spent:93.01,results:1,cpr:93.01,impressions:2993,reach:1626,roas:0.505},
  {ad:"05 - Estático 01 - Banner vermelho",adset:"00 - aberto 25-54",spent:87.61,results:1,cpr:87.61,impressions:2103,reach:1078,roas:0.308},
  {ad:"001 - Estático",adset:"00 - aberto 25-54",spent:77.81,results:0,cpr:0,impressions:2150,reach:1372,roas:0},
  {ad:"08 - Estático 04 - Verde",adset:"00 - aberto 25-54",spent:73.64,results:0,cpr:0,impressions:1160,reach:1095,roas:0},
  {ad:"08 - Estático 04 - Verde",adset:"00 - aberto 25-54",spent:68.64,results:2,cpr:34.32,impressions:1784,reach:1124,roas:0.787},
  {ad:"001 - Video",adset:"00 - aberto 25-54 — Vídeo",spent:48.78,results:0,cpr:0,impressions:716,reach:579,roas:0},
  {ad:"002 - Estático",adset:"00 - aberto 25-54",spent:44.20,results:0,cpr:0,impressions:1233,reach:840,roas:0},
  {ad:"007 - Estático",adset:"00 - aberto 25-54",spent:43.94,results:0,cpr:0,impressions:1167,reach:535,roas:0},
  {ad:"05 - Estático 01 - Banner vermelho",adset:"00 - aberto 25-54",spent:42.11,results:0,cpr:0,impressions:805,reach:529,roas:0},
  {ad:"001 - Estático",adset:"00 - aberto 25-54",spent:42.04,results:0,cpr:0,impressions:1024,reach:679,roas:0},
  {ad:"08 - Estático 05",adset:"00 - aberto 25-54",spent:40.95,results:0,cpr:0,impressions:1219,reach:807,roas:0},
  {ad:"14 - Estática 06 - Laranja",adset:"00 - aberto 25-54",spent:35.86,results:4,cpr:8.97,impressions:747,reach:468,roas:3.012},
  {ad:"006 - Estático",adset:"00 - aberto 25-54",spent:31.29,results:0,cpr:0,impressions:654,reach:490,roas:0},
  {ad:"005 - Estático",adset:"00 - aberto 25-54",spent:29.31,results:0,cpr:0,impressions:862,reach:593,roas:0},
  {ad:"007 - Estático",adset:"00 - aberto 25-54",spent:28.77,results:0,cpr:0,impressions:926,reach:727,roas:0},
  {ad:"003 - Estático",adset:"00 - aberto 25-54",spent:24.95,results:0,cpr:0,impressions:614,reach:449,roas:0},
  {ad:"005 - Estático",adset:"00 - aberto 25-54",spent:24.87,results:0,cpr:0,impressions:847,reach:711,roas:0},
  {ad:"07 - Estático 03 - Vagas abertas",adset:"00 - aberto 25-54",spent:24.51,results:0,cpr:0,impressions:790,reach:478,roas:0},
  {ad:"006 - Estático",adset:"00 - aberto 25-54",spent:21.00,results:0,cpr:0,impressions:419,reach:329,roas:0},
  {ad:"004 - Vídeo",adset:"00 - aberto 25-54 — Vídeo",spent:20.04,results:0,cpr:0,impressions:353,reach:293,roas:0},
  {ad:"003 - Vídeo",adset:"00 - aberto 25-54 — Vídeo",spent:18.90,results:0,cpr:0,impressions:329,reach:295,roas:0},
  {ad:"004 - Estático",adset:"00 - aberto 25-54",spent:17.82,results:0,cpr:0,impressions:609,reach:542,roas:0},
  {ad:"004 - Vídeo",adset:"00 - aberto 25-54 — Vídeo",spent:17.55,results:0,cpr:0,impressions:204,reach:143,roas:0},
  {ad:"005 - Estático",adset:"00 - aberto 25-54",spent:17.38,results:0,cpr:0,impressions:578,reach:492,roas:0},
  {ad:"13 - Estática 05 - Vermelho",adset:"00 - aberto 25-54",spent:16.59,results:0,cpr:0,impressions:402,reach:270,roas:0},
  {ad:"004 - Estático",adset:"00 - aberto 25-54",spent:16.47,results:1,cpr:16.47,impressions:465,reach:395,roas:2.854},
  {ad:"06 - Estático 02",adset:"00 - aberto 25-54",spent:16.10,results:0,cpr:0,impressions:505,reach:408,roas:0},
];

// ====== GENDER CLASSIFICATION (by first name) ======
const femaleNames = new Set([
  'sonia','letícia','leticia','jéssica','jessica','karen','angélica','angelica',
  'herotilde','vanessa','patrícia','patricia','ana','claudiane','poline',
  'dagmar','renata','melissa','camila','carolina','ellen','kesia',
  'valdilene','mayara','raquel','rosaline','stherluany','sthefanny',
  'francilma','bruna','edinelsa','roberta','rosane','adna','tainara',
  'carina','lícia','licia','iavla','cibele','clara','eurenice','elizabeth',
  'kettylin','lilian','michelle','anne','yara','jainny','tairly','alessandra',
  'natalice','larissa','yzabele','isabel'
]);
const maleNames = new Set([
  'diego','gleison','helder','sandro','gleuton','roberto','renan','pedro',
  'waynne','jorge','marcos','ruan','victor','estanislau','francisco','vinícius',
  'vinicius','jackson','gabriel','fabian','rodrigo','lucas','adenilson',
  'fernando','remiton','felipe','joão','joao','wilson','neucler','tiago',
  'luís','luis','renato','danton','paulo','ivan','matheus','david','nathan',
  'charles','carlos','joacir','herick','mardoqueu','arthur','cilas','mateus',
  'christiano','josé','jose','gleison'
]);

function classifyGender(clientName) {
  const firstName = clientName.trim().split(/\s+/)[0].toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const firstNameOriginal = clientName.trim().split(/\s+/)[0].toLowerCase();

  if (femaleNames.has(firstNameOriginal) || femaleNames.has(firstName)) return 'F';
  if (maleNames.has(firstNameOriginal) || maleNames.has(firstName)) return 'M';

  // Heurística: nomes terminados em 'a' tendem a ser femininos em português
  if (firstName.endsWith('a')) return 'F';
  if (firstName.endsWith('o') || firstName.endsWith('os') || firstName.endsWith('on')) return 'M';

  return 'N/D';
}

// ====== CLASSIFICATION LOGIC ======
function classifySource(sale) {
  const src = (sale.utm_source || '').toLowerCase().trim();
  const campaign = (sale.utm_campaign || '').toLowerCase().trim();

  // 1. Campanhas pagas do Facebook sempre = Pago (mesmo com link_bio/vendedor no source)
  if (campaign.includes('evento pago') || campaign.includes('[átila]') || campaign.includes('[ctc]')) return 'Pago';

  // 2. UTM sources do Facebook/Instagram = Pago
  if (src.startsWith('fb') || src.startsWith('instagram_') || src.startsWith('facebook_')) return 'Pago';

  // 3. Eduzz recuperação = Pago
  if (src.startsWith('eduzz_rvp')) return 'Pago';

  // 4. Nomes de vendedores e orgânico = Orgânico / Equipe Comercial
  const organicKeywords = ['organico','orgânico','jez','jazz','kelvin','lucas','gabriel','zuca'];
  for (const kw of organicKeywords) {
    if (src === kw || src.startsWith(kw)) return 'Orgânico / Equipe Comercial';
  }

  // 5. Link bio SEM campanha paga = Orgânico
  if (src.startsWith('link_bio') && !campaign) return 'Orgânico / Equipe Comercial';

  // 6. Sem UTM ou qualquer outro = Pago
  return 'Pago';
}

// Process all sales
checkoutSales.forEach(sale => {
  sale.channel = classifySource(sale);
  sale.gender = classifyGender(sale.client);
  // Parse date
  const parts = sale.date.split('/');
  sale.dateObj = new Date(parseInt(parts[2]), parseInt(parts[1])-1, parseInt(parts[0]));
  sale.dateISO = sale.dateObj.toISOString().split('T')[0];
});

// Sort by date
checkoutSales.sort((a, b) => a.dateObj - b.dateObj);

// Calculate totals
const totalFBSpent = facebookAds.reduce((s, a) => s + a.spent, 0);
const totalImpressions = facebookAds.reduce((s, a) => s + a.impressions, 0);
const totalReach = facebookAds.reduce((s, a) => s + a.reach, 0);
