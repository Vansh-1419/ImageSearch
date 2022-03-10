import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6Kj__mWMNm-4psSaLNSZceUL-f1ETjePcU5U8GkVSlI'
    }
})

