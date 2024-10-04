import { useState } from "react";

type ListProps = {
    items: string[];
    onSelect?: (elemento:string) => void;

};

function List( {items, onSelect}: ListProps){
    const [index, setIndex] = useState(1);
    const handleClick = (i:number, elemento:string) => {
        setIndex(i);
    //si es q onselect no se encuentra definido no se ejecuta
    onSelect?.(elemento);
    };
    return (
        <ul className="list-group">
            {items.map((elemento, i) => (<li onClick={() => handleClick(i,elemento) } 
            key={elemento} 
            className= {`list-group-item ${index ==i ? 'active': ""}`}>
            {elemento}</li>))}
</ul>
    );
}
 
export default List;

