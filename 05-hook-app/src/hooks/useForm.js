import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value,
        });
    }

    const onResetForm = () => {
        // console.log( 'Button clicked!' );
        // setFormState({
        //     username: '',
        //     email: '',
        //     password: '',
        // });
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };
}