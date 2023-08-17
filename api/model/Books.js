const db = require("../config");

class Books {
    fetchBooks(req, res) {
        const query = `
        SELECT bookID, bookTitle, category, bookURL
        FROM Books;
        `;

        db.query(query, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }

    fetchBook(req, res) {
        const query = `
        SELECT bookID, bookTitle, category, bookURL
        FROM Books
        WHERE bookID = ${req.params.id};
        `;
        
        db.query(query, (err, result) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                result
            });
        });
    }

    registerBook(req, res) {
        const query = `
        INSERT INTO Books
        SET ?;
        `;

        db.query(query, [req.body], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "The book was added."
            });
        });
    }

    updateBook(req, res) {
        const query = `
        UPDATE Books
        SET ?
        WHERE bookID = ?;
        `;

        db.query(query, [req.body, req.params.id], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "The book record was updated."
            });
        });
    }

    deleteBook(req, res) {
        const query = `
        DELETE FROM Books
        WHERE bookID = ${req.params.id};
        `;

        db.query(query, (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "A book record was deleted."
            });
        });
    }
}

module.exports = Books;
