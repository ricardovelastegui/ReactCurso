
import Card, {CardBody} from './components/Card'; 
import List from './components/List';
 //debo importar con llaves cuando no es el componente original
function App(){
  //jsx  ->  react.createlement
  const list: string[] = [];
  const handleSelect = (elemento:string) => {
    console.log("imprimiendo",elemento);
  };
  const contenido = list.length !=0 && <List items={list} onSelect={handleSelect} /> ;

  return <Card>
    <CardBody  title='hola gente' text='este es el texto'/>
    {contenido}    
    </Card>;
}

export default App;