import { useCounter } from "../hooks/useCounter"

const initalValue = 0;

export const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter( initalValue );

    return (
        <>
            <h1>Counter With Hook: { counter }</h1>
            <hr />
            <button className="btn btn-primary" onClick={ () => increment( 2 ) }>+1</button>
            <button className="btn btn-primary" onClick={ reset }>Reset</button>
            <button className="btn btn-primary" onClick={ () => decrement( 2 ) }>-1</button>
        </>
    )
}

/* El onClick al ser un evento, al momento de llamar a la funcion para pasar un valor o argumento
se debe llamar o invocar como si fuese un método map, ya que de no hacerse así se envía como argumento 
el event del método onClick */