import { useState } from "react";
import { Container } from "./styles"; 
import { Plus, Minus } from "@phosphor-icons/react";

export function Count(){
    const [count, setCount] = useState(1);

    const increment = () => setCount(count+1);
    const decrement = () => setCount(Math.max(1, count-1));


    return(
        <Container>
            <button className="plus" onClick={decrement}><Minus size={18}/></button>
            <span className="count">{count}</span>
            <button className="minus" onClick={increment}><Plus size={18}/></button>            
        </Container>
    )
}