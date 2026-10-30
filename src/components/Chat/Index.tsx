import {useState} from 'react'
import './Chat.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import chatHistory from './data';

type dataType = { role: 'user' | 'assistant', text: string }

export default function Chat() {
    const [chatList, setChatList] = useState(chatHistory);
    // todo get chatHistory from servers
    const updateList = inputVal => {
        // console.log('updateList...', inputVal);
        const newChat: dataType = {
            id: Date.now(),
            role: 'user',
            text: inputVal
        };
        setChatList([...chatList, newChat]);
        // todo post data to server
        setTimeout(() => {
            const mockResp: dataType = {
                id: Date.now(),
                role: 'assistant',
                text: '我是mock response...'
            }
            setChatList(prevList => [...prevList, mockResp]);
        }, 100);
    }
    return (
        <div className='chat-contain'>
            <Header />
            <Main chatHistory={chatList} />
            <Footer onSubmitVal={updateList} />
        </div>
    )
}