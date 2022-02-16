import {
    readDataBase,
    writeDataBase
} from "../../db"


const eduAPI = async (req, res) => {

    if (req.method === "GET") {

        let data = await readDataBase("education")

        let handleData =  Object.entries(data).map(item => {
            return{
                id:item[0],
                ...item[1]
            }
        })

         res.json({status:200, result:handleData})
         return
    }

    if (req.method === "POST") {
        let {
            name,
            age
        } = req.body

        if (!name || !age) {
            return res.json({
                status: 404,
                messages: "Zehmet olmasa adi ve yasi gonderin!"
            })
        }

        await writeDataBase("education", req.body)

        res.json({
            status: 201,
            messages: "Telebe melumati yaradildi.."
        })
        return
    }

}


export default eduAPI