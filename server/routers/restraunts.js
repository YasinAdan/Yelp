const router = require("express").Router();
const db = require("../db");

// get all restraunts
router.get("/", async (req, res) => {
    try {
        const results = await db.query("select * from restraunts");
        res.status(200 ).json({
            status: 'success',
            results: results.rows.length,
            data: {
            restraunts: results.rows,
            }
        });
    } catch (err) {
        console.log(err)
    }
});

// get specific restraunt
router.get("/:id", async (req, res) => {
    let id = req.params.id;
    try {
        const results = await db.query(`select * from restraunts where id = ${id}`);
        res.status(200 ).json({
            status: 'success',
            data: {
                restraunt: results.rows,
            }
        });
    } catch (err) {
        console.log(error);
    }
});

//create restraunt
router.post("/", async (req, res) => {
    try {
        const {name, location, price_range} = req.body;
        const resutls = await db.query('INSERT INTO restraunts (name, location, price_range) values ($1, $2, $3) RETURNING *', [name, location, price_range]);
        res.status(200).json({
            data: {
                restraunts: resutls.rows,
            }
        })
    } catch (err) {
        console.log(err)
    }
});

//update restraunt
router.put("/:id", async (req, res) => {
    try {
        const {name, location, price_range} = req.body;
        const id = req.params.id;
        const results = await db.query("UPDATE restraunts SET name = $1, location = $2, price_range = $3 where id = $4 returning *",[name, location, price_range, id]);
        res.status(200).json({
            status: 'success',
            data: {
            restraunts: results,
            }
        });
    } catch (err) {
        console.log(err)
    }
});

// delete restraunt
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const results = await db.query("DELETE FROM restraunts WHERE id = $1",[id]);
        res.status(200).json({
            status: 'success',
        });
    } catch (err) {
        console.log(err)
    }
});


module.exports = router;