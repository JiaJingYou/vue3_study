


let obj = {name: "牛牛", location:{city:'成都'}};
// let obj = [1,2,3];
let o  = new Proxy(obj, {
    get(target, key){
        console.log('获取值', key);
        return Reflect.get(target, key)
    },
    set(target, key, val){
        console.log('设置值', key, val);
        return Reflect.set(target, key, val)
    }
})

// 1.数组触发两次
// o.push(4);
// 获取值 push
// 获取值 length
// 设置值 3 4
// 设置值 length 4


// 2.对象嵌套
// o.location.city = "chengdu"; 
// 获取值 location


console.log(o.location.city) 
// 获取值 location
// 成都