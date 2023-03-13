

const login = async (req, res)=> {
    res.send(req.body)
}


const dashboard = async (req, res)=> {
    const luckNumber = Math.floor(Math.random() * 100)
    res.status(200).json({
        msg: 'Hello Mofed salah',
        secret: `Here Is Your Authorized Data Your Lucky Number is ${luckNumber}`
    })
}

module.exports = { 
    login,
    dashboard
}