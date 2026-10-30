import {useEffect, useRef} from 'react';
import type {dataType} from './data';

export default function Main({chatHistory}: {chatHistory:dataType[]}) {
    const ulRef = useRef<HTMLUListElement>(null);
    useEffect(() => {
        if (ulRef.current) {
            ulRef.current.scrollTop = ulRef.current.scrollHeight;
        }
    }, [chatHistory])
    return (
        <div className="chat-main">
            <ul ref={ulRef}>
                {chatHistory.map((item:dataType) => (
                    <li key={item.id} className={`chat-list chat-${item.role}`}><span>{item.text}</span></li>
                ))}
            </ul>
        </div>
    )
}