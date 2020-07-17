import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import Messages from './Messages';
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move'

function App() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])
    const [username, setUsername] = useState('')

    useEffect(() => {
        db.collection('messages')
            .orderBy('timeStamp', 'desc')
            .onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
                console.log(snapshot)
            })
    }, [])

    useEffect(() => {
        //if it blank inside [], this code run once when component loaded
        setUsername(prompt('Please enter your name '))
    }, [])


    const sendMessage = (event) => {

        db.collection('messages').add({
            message: input,
            username: username,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        //all the logic will send message goes
        setInput('')
    }


    return (
        <div className="App">
            <h1>Hello {username}</h1>
            <form className='app__form' >
                <FormControl className='app__formControl' >
                    <InputLabel >message</InputLabel>
                    <Input placeholder='Enter a message ...' value={input} onChange={event => setInput(event.target.value)} />
                </FormControl>
                <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage} >Send message</Button>
            </form>
            <FlipMove>
                {
                    messages.map(({message, id}) => (
                        <Messages key={id} username={username} message={message} />
                    )
                    )
                }
            </FlipMove>

        </div>
    );
}

export default App;
