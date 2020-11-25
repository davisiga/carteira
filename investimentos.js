const express = require('express');
const router = express.Router();
const mysql = require('../mySQL').pool;

router.get('/',(req, res, next) => {
    //res.status(200).send({
      
    //});

    mysql.getConnection((error, conn)=>{
        if(error){ return res.status(500).send({error: error})}
        conn.query(
            // 'SELECT * FROM produto',
            // (error, resultado, fields) =>{
            //     if(error){ return res.status(500).send({error: error})}
            //     return res.status(200).send({response: resultado})
            // }
        )
    })
});

router.post('/',(req, res, next) => {
    res.status(201).send({
        mensagem: "Deu certo o Post"
    })
});

module.exports = router;