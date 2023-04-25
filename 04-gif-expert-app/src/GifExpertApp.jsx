import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [ categories, setCategories ] = useState([ 'One Punch' ]);
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes( newCategory ) ) return;
        // console.log( newCategory );
        setCategories([ newCategory, ...categories ]);
        // setCategories([ 'Saint Seiya', ... categories ]);
        // setCategories( cat => [ ...cat, 'Saint Seiya' ] );
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                // setCategories={ setCategories }
                onNewCategory={ ( event ) => onAddCategory( event ) }
            />
            { categories.map( category => 
                    (
                        <GifGrid
                            key={ category }    // Esto es el key que necesita React.
                            category={ category }    // Esto es un props.
                            />
                        // <div key={ category }>
                        //     <li>{ category }</li>
                        // </div>
                    )
                )
            }
        </>
    )
}
