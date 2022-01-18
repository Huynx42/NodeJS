const fs = require('fs');
const axios = require('axios').default;

axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
        const data = res.data
        if(data.status === 'success') {
            return data.message
        }
        return ""
    })
    .then(url => {
        if (url !== '') {
            axios.get(url, {responseType: 'arraybuffer'})
            .then( res => {
                fs.writeFile('bai1/image.png', res.data, null, () => {
                    console.log('Done');
                })
            })
        }
    })