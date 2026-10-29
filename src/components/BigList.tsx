type ListItem = {
    id: string,
    text: string
}

export default function BigList() {
    const initList: ListItem[] = [];
    for (let i = 0; i < 5000; i++) {
        let listItem = {
            id : `id${i+1}`,
            text: `${i+1}List`
        }
        // list = [...list, listItem];
        initList.push(listItem);
    }
    return (
        <ul>
            {initList.map(item => (<li key={item.id}>{item.text}</li>))}
        </ul>
    )
}