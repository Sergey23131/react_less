function Character({character}) {
    const {id, name, status, image} = character


    return (
        <div className='Character'>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>status:{status}</div>
            <img src={image} alt={name}/>
        </div>
    );
}

export {Character};
