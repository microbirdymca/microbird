export default function handler(req, res) {
    if(req.method === 'DELETE'){
        // const id = {id : req.body.id};
        fetch(`${process.env.URL}emails/${req.body.id}`, {
            method:"DELETE",
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${process.env.DB_JWT}`,
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.email)
                res.status(200).json({msg : data})
            else
                res.status(400).json({error : data})

        }).catch(err => console)

    }
  }