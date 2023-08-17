// books
const db = require("../config")
class Orders{
    // fetching all orders
    fetchOrders(req, res) {
       
        const query = `
        SELECT o.orderID, o.userID, o.orderDate, b.bookTitle
        FROM Orders AS o
        JOIN Books AS b ON b.bookID = o.bookID;
        `;
        db.query(query, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }
    // single order
    fetchOrder(req, res) {
       
        const query = `
        SELECT o.orderID, o.userID, o.orderDate, b.bookTitle
        FROM Orders AS o
        JOIN Books AS b ON b.bookID = o.bookID
        WHERE o.userID = ${req.params.id};
        `
        db.query(query, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }
    // update
    updateOrder(req,res){
        const query =`
        UPDATE Orders
        SET ?
        WHERE userID=?
        `
        db.query(query, [req.body, req.params.id],(err)=>{
           if (err) throw err
           res.json({
            status: statusCode,
            msg: "The order record was updated."

           })
     
        })
    }
    deleteOrder(req,res){
        const query = `
        DELETE FROM Orders
        WHERE userID =${req.params.id}
        `
        db.query(query,(err)=>{//we are not expecting a data here , only a message hence callback is only err
            if (err) throw err
            res.json({
                status:res.statusCode,
                msg: "A Order record was deleted."
            })
        })
    }
    // delete

}
module.exports =Orders