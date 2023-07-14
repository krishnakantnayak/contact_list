function Contact(props){
    return(
        <div className="contact">
            <img src="" alt="profile pic"></img>
            <div className="name">{props.name}</div>
            <div className="number">{props.number}</div>
        </div>
    );
}

export default Contact