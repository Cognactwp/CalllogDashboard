const express = require("express");
const cors = require("cors");
// require("./db");

const app = express();
app.use(express.json());
app.use(cors());


// connected database
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'admin_calllog'
});

connection.connect((err) =>{
    if(err){
        console.log('Error connecting to MySQL Database = ',err);
        return;
    }
    console.log('MySQL successfully connected!');
})




//Amount of cases grouping by call-in case
app.get("/cases", async (req, res) =>{
    const time = req.query.time // 
    const year = req.query.year; // year
    const week_month = req.query.weekmonth // 
    const project = req.query.project; // project 1=พัฒน์1 , 2=ศูนย์ข้อมูล , 4=พัฒน์2

    let query = "SELECT c.problem_group as name, COUNT(j.call_category_id) as value"
    + " FROM `jobs` j "
    + " LEFT JOIN call_categories  c "
    + "   ON j.call_category_id = c.id "
    + " WHERE  YEAR(closed_at) = " + year
    
    if (time == 7) query += " AND WEEKOFYEAR(closed_at) = " + week_month
    else query += " AND MONTH(closed_at) = " + (week_month) 

    if (project == 0) query += " AND PHASE IN (1,2,4)";
    else query += " AND PHASE = " + project;
    query +=  " GROUP BY c.problem_group "
    + " ORDER BY COUNT(j.call_category_id) DESC "

    try {
        connection.query(query, (err,results, fields)=>{
            if(err){
                console.log(err);
                return res.status(400).send();
            }
            console.log(query);
            res.status(200).json(results);
        })
    } catch(err) {
        // console.log(err);
        return res.status(500).send();
    }
});


app.get("/workload", async (req, res) =>{
    const time = req.query.time // 
    const year = req.query.year; // year
    const week_month = req.query.weekmonth // 
    const project = req.query.project; // project 1=พัฒน์1 , 2=ศูนย์ข้อมูล , 4=พัฒน์2

    let query = "SELECT WK, MO,  "
    + " CONCAT(DATE_FORMAT(MIN(closed_at),'%d %M') , ' - ' , DATE_FORMAT(MAX(closed_at),'%d %M')) AS DATE, "
    + " COUNT(CASE WHEN last_operator_team = 'CC' THEN 1 ELSE NULL END) AS 'Helpdesk', "
    + " COUNT(CASE WHEN last_operator_team = 'SP' THEN 1 ELSE NULL END) AS 'Support', "
    + " COUNT(CASE WHEN last_operator_team != 'CC' AND last_operator_team != 'SP' THEN 1 ELSE NULL END) AS 'Tier3',"
    + " COUNT(last_operator_team) AS TOTAL "
    + " FROM "
    + " (SELECT last_operator_team,closed_at,WEEKOFYEAR(closed_at) AS WK , MONTH(closed_at) AS MO"
    + " FROM jobs "
    + " WHERE YEAR(closed_at) = " + year

    if (time == 7) query += " AND WEEKOFYEAR(closed_at) BETWEEN " + (week_month-8) + " AND " + week_month
    else query += " AND MONTH(closed_at) BETWEEN " + (week_month-5) + " AND " + week_month

    if (project == 0) query += " AND PHASE IN (1,2,4)";
    else query += " AND PHASE = " + project;

    query +=  " ) AS TEST "
    if (time == 7) query += " GROUP BY WK ORDER BY WK DESC";
    else query += " GROUP BY MO ORDER BY MO DESC"  ;
    + " LIMIT 8";

    try {
        connection.query(query, (err,results, fields)=>{
            if(err){
                console.log(err);
                return res.status(400).send();
            }
            // console.log(query);
            res.status(200).json(results);
        })
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }
});


app.get("/callin", async (req, res) =>{
    const time = req.query.time // 
    const year = req.query.year; // year
    const week_month = req.query.weekmonth // 
    const project = req.query.project; // project 1=พัฒน์1 , 2=ศูนย์ข้อมูล , 4=พัฒน์2

    try {
        let query = "SELECT WK,MO, "
        + " CONCAT(DATE_FORMAT(MIN(closed_at),'%d %M') , ' - ' , DATE_FORMAT(MAX(closed_at),'%d %M')) AS DATE, "
        + " COUNT(CASE WHEN PHASE = '1' THEN 1 ELSE NULL END) AS 'DOL1',"
        + " COUNT(CASE WHEN PHASE = '2' THEN 1 ELSE NULL END) AS 'DOL2',"
        + " COUNT(CASE WHEN PHASE = '4' THEN 1 ELSE NULL END) AS 'DOL4' "
        + " FROM "
        + " (SELECT PHASE,closed_at,WEEKOFYEAR(closed_at) AS WK , MONTH(closed_at) AS MO "
        + " FROM jobs "
        + " WHERE YEAR(closed_at) = " + year

        if (time == 7) query += " AND WEEKOFYEAR(closed_at) BETWEEN " + (week_month-8) + " AND " + week_month
        else query += " AND MONTH(closed_at) BETWEEN " + (week_month-5) + " AND " + week_month

        if (project == 0) query += " AND PHASE IN (1,2,4)";
        else query += " AND PHASE = " + project;
        
        query +=  " ) AS TEST "
        if (time == 7) query += " GROUP BY WK ORDER BY WK DESC";
        else query += " GROUP BY MO ORDER BY MO DESC"  ;
        + " LIMIT 8";
        
        connection.query(query, (err,results, fields)=>{
            if(err){
                console.log(err);
                return res.status(400).send();
            }
            console.log(query);
            res.status(200).json(results);
        })
    } catch(err) {
        // console.log(err);
        return res.status(500).send();
    }
});

app.listen(8000, () => console.log("Server is running on port 8000"));