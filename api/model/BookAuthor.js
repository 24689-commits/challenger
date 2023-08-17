// books
const db = require("../config")
class BookAuthor{
    fetchBookAuthor(req, res) {
        const query = `
        SELECT a.id, a.authourName, a.authorSurname, b.bookID
        FROM BookAuthor AS a
        JOIN Books AS b ON b.bookID = a.bookID;
        `;
        db.query(query, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }
    // fetch single author
    fetchBookAuthor(req, res) {
        const query = `
        SELECT a.id, a.authourName, a.authorSurname, b.bookID
        FROM BookAuthor AS a
        JOIN Books AS b ON b.bookID = a.bookID
        WHERE a.id = ${req.params.id}
        `;
        
        db.query(query, (err, result) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                result
            });
        });
    }
// register an author
    registerBookAuthor(req, res) {
        const query = `
        INSERT INTO BookAuthor
        SET ?;
        `;

        db.query(query, [req.body], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "The Author was added."
            });
        });
    }
// update an authothor
    updateBookAuthor(req, res) {
        const query = `
        UPDATE BookAuthor
        SET ?
        WHERE id = ?;
        `;

        db.query(query, [req.body, req.params.id], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "The author record was updated."
            });
        });
    }
// delete
    deleteBookAuthor(req, res) {
        const query = `
        DELETE FROM BookAuthor
        WHERE id = ${req.params.id};
        `;

        db.query(query, (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "An author record was deleted."
            });
        });
    }
}
module.exports =BookAuthor