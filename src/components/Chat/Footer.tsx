import {useState, useMemo, useRef} from 'react';

export default function Foot({onSubmitVal}: {onSubmitVal: (val:string) => void}) {
    const [inputVal, setInputVal] = useState('');
    const isDisable: boolean = useMemo(() => inputVal === '', [inputVal]);
    const inputRef = useRef<HTMLInputElement>(null);
    const submitHandle = () => {
        // console.log('submit a chat content...', inputVal);
        setInputVal('');
        onSubmitVal && onSubmitVal(inputVal);
        inputRef.current && inputRef.current.focus();
    }
    return (
        <footer>
            <input
                ref={inputRef} 
                placeholder="please input... ..." 
                value={inputVal} 
                onChange={e => setInputVal(e.target.value)}
                onKeyDown={e => {if (e.key === 'Enter' && !e.nativeEvent.isComposing) submitHandle()}}/>
            <button
                className={isDisable ? 'disable-btn' : ''}
                disabled = {isDisable}
                onClick={submitHandle}
            >发送</button>
        </footer>
    )
}