import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';

export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter( 1 );
    // eslint-disable-next-line no-unused-vars
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);
    const { author, quote } = !!data && data[0];
    
    
    // console.log({ data, isLoading, hasError });

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {
                ( isLoading )
                    ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    : (
                        <blockquote className="blockquote text-end">
                            <p className="mb-3">{ quote }</p>
                            <footer className="blockquote-footer">{ author }</footer>
                        </blockquote>
                    )
            }
            <button className="btn btn-primary mt-5" onClick={ () => increment() } disabled={ isLoading }>Next quote</button>
        </>
    )
}

