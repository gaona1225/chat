import {useState} from 'react'
import './Chat.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import type {dataType} from './data';
import {getAI, AIModel} from '../../api/gemini';

export default function Chat() {
    const [chatList, setChatList] = useState<dataType[]>([]);
    
    const updateList = async (inputVal:string) => {
        // console.log('updateList...', inputVal);
        const newChat: dataType = {
            id: Date.now().toString() + Math.random(),
            role: 'user',
            text: inputVal
        };
        setChatList([...chatList, newChat]);

        const respId = Date.now().toString() + Math.random();
        const assistantResp: dataType = {
            id: respId,
            role: 'assistant',
            text: ''
        }
        setChatList(prevList => [...prevList, assistantResp]);
        try {
            const chat = getAI().chats.create({
                model: AIModel,
                history: chatList.map(item => ({
                    role: item.role === 'assistant' ? 'model' : 'user',
                    parts: [{text: item.text}]
                }))
            })
            // console.log('chat:', chat);
            // const response = await chat.sendMessage({message: inputVal});
            const response = await chat.sendMessageStream({message: inputVal});
            let fullText = '';
            for await(const chunk of response) {
                fullText += chunk.text ?? '';
                const snapText = fullText;
                setChatList(prevList => prevList.map(item => item.id === respId ? {...item, text: snapText} : item));
            }
            setChatList(prevList => prevList.map(item => item.id === respId && item.text === '' ? {...item, text: '换个问法试试？'} : item))
            // console.log('response:', response);
        } catch(e) {
            setChatList(prevList => prevList.map(item => item.id === respId && item.text === '' ? {...item, text: '系统繁忙，请稍后再试!'} : item))
        }
    }
    return (
        <div className='chat-contain'>
            <Header />
            <Main chatHistory={chatList} />
            <Footer onSubmitVal={updateList} />
        </div>
    )
}