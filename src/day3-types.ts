// 手写 MyPick、MyReadonly

type MyPartial1<T> = {[p in keyof T]?: T[p]}
type MyReadonly1<T> = {readonly [p in keyof T]: T[p]}
type MyPick1<T, k extends keyof T> = {[p in k]: T[p]}
type MyOmit1<T, k extends keyof any> = MyPick1<T, Exclude<keyof T, k>>
type MyRecord1<k extends keyof any, T> = {[p in k]: T}
type MyExclude1<T, U> = T extends U ? never : T
type MyReturnType1<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any

// Omit 和 Pick 什么关系？能用 Pick 拼出 Omit 吗？
// Omit 和 Pick互为相反操作，Omit是从T中忽略掉K，返回剩余的，Pick是从T中留下K中的进行使用
// type Omit<T, k extends keyof any> = Pick<T, Exclude<keyof T, k>>
// Exclude<'a' | 'b' | 'c', 'a'> 是什么？never 在联合类型里起什么作用？
// Exclude<'a' | 'b' | 'c', 'a'>是从联合类型a,b,c中去掉a只剩下b和c。never在联合类型中可以忽略，取其他非never形式的。

// 1、Hello World 热身，类型别名（https://github.com/type-challenges/type-challenges/blob/main/questions/00013-warm-hello-world/README.md）
type HelloWorld = string // expected to be a string

// 2、Pick keyof + 索引访问 + mapped type（https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md）
type MyPick<T, K extends keyof T> = {[p in K]: T[p]}

// 3、Readonly mapped type 修饰符（https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md）
// 写 readonly any[] 是为了接住测试用例里 as const 的只读元组 const tuple = [1] as const
type MyReadonly<T> = {readonly [p in keyof T]: T[p]}


// 4、Tuple to Object T[number] 取元组值域（https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md）
// 写 readonly any[] 是为了接住测试用例里 as const 的只读元组 const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
type TupleToObject<T extends readonly any[]> = {[p in T[number]]: p}


// 5、First of Array 条件类型判空（https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md）,Implement a generic First<T> that takes an Array T and returns its first element's type.
type First<T extends any[]> = T extends [] ? never : T[0]


// 6、Length of Tuple T['length']（https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.md）
// 写 readonly any[] 是为了接住测试用例里 as const 的只读元组 const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
type Length<T extends readonly any[]> = T['length']


// 7、Exclude 分布式条件类型 + never（https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md）
type MyExclude<T, U> = T extends U ? never : T


// 8、Awaited infer + 递归（https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md）
type MyAwaited<T> = T extends PromiseLike<infer U> ? MyAwaited<U> : T


// 9、If 条件类型基本功（https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md）
type If<C extends boolean, T, F> = C extends true ? T : F


// 10、Concat 可变元组 ...T（https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md）
// 写 readonly any[] 是为了接住测试用例里 as const 的只读元组 const tuple = [1] as const
type Concat<T extends readonly any[], U extends readonly any[]> = [...T, ...U]

