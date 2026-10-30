export default function Main({chatHistory}) {
    return (
        <div className="chat-main">
            <ul>
                {chatHistory.map(item => (
                    <li key={item.id} className={`chat-list chat-${item.role}`}><span>{item.text}</span></li>
                ))}
            </ul>
        </div>
    )
}