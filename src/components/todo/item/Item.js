const Item = (props) => {
    const onDeleteHandler = () => {
        props.onDeleteClick(props.id);
    };

    return (
        <>
            <li>{props.text}</li>
            <button onClick={onDeleteHandler}>Delete</button>
        </>
    );
};

export default Item;
