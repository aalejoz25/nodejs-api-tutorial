import {getConnection} from "./../database/database";

const getLanguages=async(req,res)=>{
    try {

        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, programmers from language");
        console.log(result);
        res.json(result);
        }
    catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

const addLanguage=async(req,res)=>{
    try {
       // console.log(req.body);
       const {name,programmers} = req.body;

    if (name==undefined || programmers==undefined) {
        res.status(400).json({
            message: "Bad request. Please fill all field"
        })

    }
        const language = {
            name,
            programmers
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO language SET ?", language);
        res.json({
            "message": "Language added successfully"
        });
       }
    catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

const getLanguage=async(req,res)=>{
    try {

        const id = req.params.id;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, programmers from language WHERE id = ?", id);
        console.log(result);
        res.json(result);
        }
    catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}


const deleteLanguage=async(req,res)=>{
    try {

        const id = req.params.id;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM language WHERE id = ?", id);
        console.log(result);
        res.json(result);
        }
    catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

const updateLanguage=async(req,res)=>{
    try {
        const {id} = req.params;
        const {name,programmers} = req.body;
        if (id==undefined||name==undefined || programmers==undefined) {
            res.status(400).json({
                message: "Bad request. Please fill all field"
            })
        }

        const language = {
            name,
            programmers
        }
   
        const connection = await getConnection();
        const result = await connection.query("UPDATE language SET ? WHERE id = ?", [language,id]);
        console.log(result);
        res.json(result);
        }
    catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}


export const methods = {
    getLanguages,
    getLanguage,
    deleteLanguage,
    updateLanguage,
    addLanguage
}