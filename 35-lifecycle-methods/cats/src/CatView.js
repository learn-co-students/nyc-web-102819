import React from 'react';
import meow from './meow.mp3'
import mad from './mad.mp3'


class CatView extends React.Component {

    state = {
        message: '',
        messages: this.props.messages
    }

    meow = new Audio(meow)
    mad = new Audio(mad)
    
    componentDidMount(){
        this.meow.play()
    }
    
    componentWillUnmount(){
        this.mad.play()
    }

    
    handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3001/messages', {
            method: 'POST',
            headers: { 'Content-Type': "application/json", 'Accept': "application/json"},
            body: JSON.stringify({
                body: this.state.message,
                catId: this.props.id
            })
        })
            .then(res => res.json())
            .then(data => {
                this.setState({ message: '', messages: [...this.state.messages, data] })
            })

            // strategies to pessimitically render
            // ==> trigger a refetch of the cat
            // ==> add messages to state and update state when the fetch comes back  *****

    }
    
    handleChange = (e) => {
        this.setState({ message: e.target.value })
    }
    
    render(){
        let { id, name, image, description } = this.props; 
        let { messages } = this.state; 

        console.log(this.state)
        return (
            <div className="cat-view">
                <h3>{name}</h3>
                <img alt={name} src={image} />
                <div className="cat-actions">
                    <div><span role="img" aria-label="cat">❤️</span></div>
                    <div><span role="img" aria-label="cat">💌</span></div>
                    <div><span role="img" aria-label="cat">🧶</span></div>
                </div>
                <div>{description}</div>
                <div className=" messages-holder">
                    <h3>Messages</h3>
                    {!messages.length && "Send them a message!"}
                    {messages.map(message => <div key={message.id}>{message.body}</div>)}

                    <form onSubmit={this.handleSubmit}>
                        <input 
                            name="message" 
                            placeholder="Write message here" 
                            onChange={this.handleChange}
                            value={this.state.message}></input>
                        <button type="submit">Meow!</button>
                    </form>

                </div>
            </div>
        )
    }
}

export default CatView;