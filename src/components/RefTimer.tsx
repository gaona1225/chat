// ref 定时器 - 开始/停止按钮，timerRef.current 存 setInterval 的 id；再试一次把 id 存进 useState，看每次 tick 都重渲染的差别。
import {useState, useRef, useEffect} from 'react';

export default function RefTimer() {
    const [id, setId] = useState(0);
    const timerRef = useRef(0);
    const handleStartClick = () => {
        if (timerRef.current) return;
        // console.log('timer', timerRef.current);
        const timerId = setInterval(() => {
            setId(id => ++id);
        }, 1000)
        timerRef.current = timerId;
    }
    const handleStopClick = () => {
        // console.log('handleStopClick...', timerRef.current)
        clearInterval(timerRef.current);
        timerRef.current = 0;
    }
    useEffect(() => {
        return () => {
            clearInterval(timerRef.current);
            timerRef.current = 0;
        };
    }, [])
    return (
        <div>
            <button onClick={handleStartClick} style={{margin: '10px'}}>开始计时</button>
            <button onClick={handleStopClick}>停止计时</button>
            <p>目前计时中:{id}</p>
        </div>
    )
}
