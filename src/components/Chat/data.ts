export type dataType = { id: string; role: 'user' | 'assistant'; text: string };

// const chatHistory: dataType[] = [{
//     id: 'user0',
//     role: 'user',
//     text: '你好assistant'
// },{
//     id: 'user1',
//     role: 'user',
//     text: 'fdsafsadfsf附近的撒辣椒粉快乐撒的肌肤拉萨的克己复礼圣诞节福利圣诞节福利开始的肌肤立刻受到警方立刻圣诞节啊弗兰克圣诞节啊分开了的撒娇分开了睡大觉'
// },{
//     id: 'ass0',
//     role: 'assistant',
//     text: 'fdsafsadfsf附近的撒辣椒粉快乐撒的肌肤拉萨的克己复礼圣诞节福利圣诞节福利开始的肌肤立刻受到警方立刻圣诞节啊弗兰克圣诞节啊分开了的撒娇分开了睡大觉'
// },{
//     id: 'ass1',
//     role: 'assistant',
//     text: '有什么可以帮助你的'
// },{
//     id: 'user2',
//     role: 'user',
//     text: '今天的日期'
// },{
//     id: 'ass2',
//     role: 'user',
//     text: '今天是2026年10月29日'
// }];

// export default chatHistory

// gemini respond data
// {
//     text: "你好！我是 Gemini……",   // ← 便捷 getter，拼好的第一个候选回复
//     candidates: [
//       {
//         content: {
//           role: "model",
//           parts: [{ text: "你好！我是 Gemini……" }]
//         },
//         finishReason: "STOP",       // STOP=正常结束；SAFETY=被安全过滤拦了
//         index: 0
//       }
//     ],
//     usageMetadata: {
//       promptTokenCount: 5,
//       candidatesTokenCount: 20,
//       totalTokenCount: 25           // ← 看额度消耗就看它
//     },
//     modelVersion: "gemini-2.5-flash"
//   }
  