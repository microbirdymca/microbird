export default function handler(req, res) {
    if(req.method === 'POST'){
        const email = {email : req.body.email ,  id : req.body.email.split("@")[0]};
        fetch(`${process.env.URL}emails`, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${process.env.DB_JWT}`,
            },
            body: JSON.stringify(email)
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