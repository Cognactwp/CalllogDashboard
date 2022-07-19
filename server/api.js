// require("./db.js");

//Amount of cases grouping by call-in case



// 
// connection.connect(function(err) {
//     if (err) throw err;
//     connection.query("SELECT c.problem_group, COUNT(j.call_category_id) "
//     + " FROM `jobs` j "
//     + " LEFT JOIN call_categories  c "
//     + "   ON j.call_category_id = c.id "
//     + " WHERE  j.created_at BETWEEN '2022-06-27 00:00:00' AND '2022-07-3 23:59:59' "
//     + " GROUP BY c.problem_group "
//     + " ORDER BY COUNT(j.call_category_id) DESC ", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });