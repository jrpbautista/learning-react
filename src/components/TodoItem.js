const TodoItem = (props) => {
    const onClickHandler = () => {
        props.onItemClick(props.text);
    };

    return <li onClick={onClickHandler}>{props.text}</li>;
};

export default TodoItem;
