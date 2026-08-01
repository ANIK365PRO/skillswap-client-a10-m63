
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL


// সার্ভার সাইডে ডেটা ফেচ করার জন্য একটি হেল্পার ফাংশন
// for GET

export const serverFetch = async(path) => {
    const res = await fetch(`${baseUrl}${path}`)
    return res.json()
}



 // সার্ভার সাইডে ডেটা মিউটেশন করার জন্য একটি হেল্পার ফাংশন
// for POST and PATCH

export const serverMutation = async(path, data={}, method = 'POST') =>{
    
    const res = await fetch(`${baseUrl}${path}`, {
        method: method,        //'POST' / 'PATCH'
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return res.json()
}


 // for DELETE
 export const serverDeleteMutation = async (path) =>{
    const res = await fetch(`${baseUrl}${path}`,{
        method: "DELETE",
    })
    return res.json();
 }