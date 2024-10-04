function Titulo(){
    //jsx  ->  react.createlement
    const nombre= "ricardo";
    if(nombre){
      return <h1>hello {nombre}</h1>
    }
    return <h1>hello mundo</h1>;
  }
  
  export default Titulo;