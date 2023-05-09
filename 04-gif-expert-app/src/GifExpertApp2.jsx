import { useState } from 'react';

export const GifExpertApp2 = () => {
    const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);
    const onAddCategory = () => {
        setCategories([ ...categories, 'Valorant' ]);
    }
    return (
        <>
            <h1>GifExpertApp2</h1>
            <button onClick={ onAddCategory }>Add</button>
            <ol>
                { categories.map( category => <li key={ category }>{ category }</li> ) }
            </ol>
        </>
    )
}
