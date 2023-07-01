export const TodoList = ({ todos }) => {
    const { id, description } = todos;

    return (
        <>
            <ul className="list-group">
                {
                    todos.map( () => (
                        // TodoItem
                        <li key={ id } className="list-group-item d-flex justify-content-between">
                            <span className="align-self-center">{ description }</span>
                            <button className="btn btn-danger">Borrar</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
