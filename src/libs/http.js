class http {
    static instance = new http();
    get = async (url) => {
        try {
            let req = await fetch(url)
            let json = await req.json()
            return json
        } catch (err) {
            console.log(err);
            throw Error(err)
        }
    }
    post = async (url, body) => {
        try {
            let req = await fetch(url, {
                method: 'POST',
                body
            })
            let json = await req.json()
            return json

        } catch (err) {
            console.log(err, 'http post error');
            throw Error(err)
        }
    }
     delete = async (url) => {
        try {
            let req = await fetch(url, {
                method: 'DELETE'
            })
            let json = await req.json()
            return json

        } catch (err) {
            console.log(err, 'http DELETE error');
            throw Error(err)
        }
     }
    
      PUT = async (url, body) => {
        try {
            let req = await fetch(url, {
                method: 'put',
                body
            })
            let json = await req.json()
            return json

        } catch (err) {
            console.log(err, 'http put error');
            throw Error(err)
        }
    }
}
export default http