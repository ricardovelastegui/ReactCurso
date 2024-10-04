
import Card, {CardBody} from './components/Card'; 
import List from './components/List';
import Button from './components/Button';
import { useState } from 'react';
 //debo importar con llaves cuando no es el componente original
function App(){

const [isLoading, setIsLoading]= useState(false);
const handleClick = () => setIsLoading(!isLoading);

  //jsx  ->  react.createlement
  const list: string[] = ['ejemplo1','ejemplo2','ejemplo3'];
  
  const handleSelect = (elemento:string) => {
    console.log("imprimiendo",elemento);
  };
  const contenido = list.length !=0 && <List items={list} onSelect={handleSelect} /> ;

  return <Card>
    <CardBody  title='hola gente' text='este es el texto'/>
    {contenido}    
    <Button isLoading={isLoading} onClick={handleClick} children={undefined} ></Button>
    </Card>;
}

export default App;