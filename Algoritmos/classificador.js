const array =  [
    {souEu: true, responsavel: false, nome: 'Antonio Medeiros'},
    {souEu: false, responsavel: true, nome: 'Thais Santos'},
    {souEu: false, responsavel: true, nome: 'Mary Medeiros'},
    {souEu: false, responsavel: false, nome: 'Carlos Pedro'},
    {souEu: false, responsavel: true, nome: 'Joao Francisco'}
  ]
  
  function classificador(a, b) {
    if (a.souEu > b.souEu) {
      return -1;
    } 
    if (a.souEu < b.souEu) {
      return 1;
    }
    if (a.responsavel > b.responsavel ) {
      return -1;
    }
  }
  
  console.log(array.sort(classificador));