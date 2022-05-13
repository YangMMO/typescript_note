import Api from "./Api";

// 封装了API的函数
export default function getInfo(api: Api) {
    return {
        name: api.getName(),
        age: api.getAge(),
        gender: api.getGender()
    }
}