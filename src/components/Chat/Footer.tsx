import {useState, useMemo} from 'react';

export default function Foot({onSubmitVal}: {onSubmitVal: (val:string) => void}) {
    const [inputVal, setInputVal] = useState('');
    const isDisable: boolean = useMemo(() => inputVal === '', [inputVal]);
    const submitHandle = () => {
        // console.log('submit a chat content...', inputVal);
        setInputVal('');
        onSubmitVal && onSubmitVal(inputVal); 
    }
    return (
        <footer>
            <input placeholder="please input... ..." value={inputVal} onChange={e => setInputVal(e.target.value)}/>
            <button
                className={isDisable ? 'disable-btn' : ''}
                disabled = {isDisable}
                onClick={submitHandle}
            >发送</button>
        </footer>
    )
}