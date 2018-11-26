using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SurveyForm.Models
{
    public class QueryBuilding
    {
        private SqlRepository sqlRun;
        public QueryBuilding()
        {
           sqlRun = new SqlRepository("Data Source=DESKTOP-I76SIU9\\MSSQLSERVERBORO;Initial Catalog=SzoftverRendszerek;Integrated Security=True;MultipleActiveResultSets=True;Application Name=EntityFramework");
        }
        public void createTable()
        {
            string query = "";
            query = "CREATE TABLE answers (User_id VARCHAR(255) NOT NULL, Gender_4 varchar(255), Class_1 varchar(255), Group_by_specialtization_3 varchar(255), Group_by_specialtization_2 varchar(255), Group_by_specialtization_6 varchar(255), Group_by_specialtization_8 varchar(255), Adroat_or_home_7 varchar(255), PRIMARY KEY (User_id))";
            sqlRun.ExecuteQuery(query);
        }

        public void insertAnswersTable(BsonDocument bsonElement)
        {
            string query = "";
            
            query = "INSERT INTO answers (User_id, Gender_4, Class_1, Group_by_specialtization_3, Group_by_specialtization_2, Group_by_specialtization_6, Group_by_specialtization_8, Adroat_or_home_7) VALUES (";
            query += "'";
            query += bsonElement[0].ToString();
            query += "'";
            query += ", ";
            List<int> indexes = new List<int>();
            
            indexes.Add(4);
           
            indexes.Add(1);
            
            indexes.Add(3);
          
            indexes.Add(2);
            
            indexes.Add(6);
            
            indexes.Add(8);
            indexes.Add(7);
            foreach (var item in indexes)
            {
                query += "'";
                query += bsonElement[item].ToString();
                query += "'";
                query += ", ";
            }
            query = query.TrimEnd(' ');
            query = query.TrimEnd(',');
            query += ");" ;
            sqlRun.ExecuteQuery(query);
        }
    }
}