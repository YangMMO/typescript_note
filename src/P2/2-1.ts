/* P2 */
// any 类型
let isMale;
isMale = true;

// 联合类型
let seven: number | string;

seven.toString();   //使用number和string的共有方法

// 类型断言
(seven as number).toFixed(2);
(seven as string).length;
// seven as boolean;  //报错 因为联合声明没有

seven as any as string;
