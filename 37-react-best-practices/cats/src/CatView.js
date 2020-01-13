import React from 'react';
import meow from './meow.mp3'
import mad from './mad.mp3'


class CatView extends React.Component {

    state = {
        message: '',
        messages: this.props.messages,
        happiness: 0
    }

    meow = new Audio(meow)
    mad = new Audio(mad)
    
    // componentDidMount(){
    //     this.meow.play()
    // }
    
    // componentWillUnmount(){
    //     this.mad.play()
    // }

    
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

    increaseHappiness = (num) => {
        // this.setState({happiness: this.state.happiness + num })
        // if(this.props.name.toLowerCase() === 'mojo') {
        //     console.log('before second setState ', this.state.happiness)
        //     this.setState({ happiness: this.state.happiness + 10 })
        // }

        // func setState
        // this.setState( (state, props) => {
        //     console.log('first set state', state)
        //     return { happiness: state.happiness + num }
        // })

        this.setState({ happiness: this.props.name.toLowerCase() === 'mojo' ? num + 10 : num }, () => {alert('like completed')})

        // REACT UNDER THE HOOD
        // setState( {object: immediately })
        // setState( () => {CALL THIS TO GET YOUR OBJECT})

        // if(this.props.name.toLowerCase() === 'mojo') {
        //     this.setState((state, props) => {
        //         console.log('second set state', state)
        //         return { happiness: state.happiness + 10 }
        //     })
        // }

        // TODO ===> MOVE TO MOVIE APP 
        // increaseLikes = (state, props) => {
        //     return {likes: state.likes + 1}
        // }

        // this.setState(increaseLikes)
        

        // async await  ===> vanilla JS 




        // if(this.props.name.toLowerCase() === 'mojo') {
        //     this.setState({ happiness: this.state.happiness + 10})
        // }
    }
    
    render(){
        let { id, name, image, description } = this.props; 
        let { messages } = this.state; 

        console.log(this.state)
        return (
            <div className="cat-view">
                <h3>{name}</h3>
                <img alt={name} src={image} />
                <div>Happiness: {this.state.happiness}</div>
                <div className="cat-actions">
                    <div onClick={() => this.increaseHappiness(1)}><span role="img" aria-label="cat">❤️</span></div>
                    <div onClick={() => this.increaseHappiness(2)}><span role="img" aria-label="cat">💌</span></div>
                    <div onClick={() => this.increaseHappiness(3)}><span role="img" aria-label="cat">🧶</span></div>
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