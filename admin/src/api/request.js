import request from './index'

export const saveData = (params) => {     //编辑页保存数据
    return request({
        method: "post",
        url: `categories`,
        data: params,
    })
}
export const editData = (params, data) => {     //编辑页保存数据
    return request({
        method: "put",
        url: `categories/${params}`,
        data: data,
    })
}
export const orderList = (params) => {   //列表页查询数据
    return request({
        method: "get",
        url: `categories`,
        data: params,
    })
}
export const searchEditData = (params) => {  //编辑页查询数据
    return request({
        method: "get",
        url: `categories/${params}`,
    })
}
