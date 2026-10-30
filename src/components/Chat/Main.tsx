import type {dataType} from './data';

export default function Main({chatHistory}: {chatHistory:dataType[]}) {
    return (
        <div className="chat-main">
            <ul>
                {chatHistory.map((item:dataType) => (
                    <li key={item.id} className={`chat-list chat-${item.role}`}><span>{item.text}</span></li>
                ))}
            </ul>
        </div>
    )
}