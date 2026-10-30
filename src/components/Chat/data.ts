export type dataType = { id: string; role: 'user' | 'assistant'; text: string };

const chatHistory: dataType[] = [{
    id: 'user0',
    role: 'user',
    text: '你好assistant'
},{
    id: 'user1',
    role: 'user',
    text: '我是Anna'
},{
    id: 'ass0',
    role: 'assistant',
    text: '你好Anna'
},{
    id: 'ass1',
    role: 'assistant',
    text: '有什么可以帮助你的'
},{
    id: 'user2',
    role: 'user',
    text: '今天的日期'
},{
    id: 'ass2',
    role: 'user',
    text: '今天是2026年10月29日'
}];

export default chatHistory