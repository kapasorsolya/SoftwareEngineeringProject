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
            query = "CREATE TABLE answers (User_id VARCHAR(255) NOT NULL, Gender_4 varchar(255), Class_1 varchar(255), Group_by_specialtization_3 varchar(255)," +
                " Group_by_specialtization_2_1 varchar(255), Group_by_specialtization_2_2 varchar(255), Group_by_specialtization_2_3 varchar(255),Group_by_specialtization_6_1 varchar(255), " +
                "Group_by_specialtization_6_2 varchar(255), Group_by_specialtization_6_3 varchar(255),Group_by_specialtization_8_1 varchar(255),Group_by_specialtization_8_2 varchar(255), Group_by_specialtization_8_3 varchar(255), Adroat_or_home_7 varchar(255), PRIMARY KEY (User_id))";
            sqlRun.ExecuteQuery(query);
        }

        public void insertAnswersTable(BsonDocument bsonElement)
        {
            string query = "";
            
            query = "INSERT INTO answers (User_id , Gender_4 , Class_1 , Group_by_specialtization_3, " +
                " Group_by_specialtization_2_1, Group_by_specialtization_2_2, Group_by_specialtization_2_3, Group_by_specialtization_6_1, " +
                "Group_by_specialtization_6_2, Group_by_specialtization_6_3, Group_by_specialtization_8_1, Group_by_specialtization_8_2, Group_by_specialtization_8_3, Adroat_or_home_7) VALUES (";
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
                if (item == 2)
                {
                    if (bsonElement[3].ToString() == "maros")
                    {
                        query += "'";
                        query += bsonElement[2].ToString();
                        query += "'";
                        query += ", ";
                        query += "null";
                        query += ", ";
                        query += "null";
                        query += ", ";


                    }
                    if (bsonElement[3].ToString() == "hargita")
                    {
                        query += "null";
                        query += ", ";
                        query += "'";
                        query += bsonElement[2].ToString();
                        query += "'";
                        query += ", ";
                        query += "null";
                        query += ", ";
                    }
                    if (bsonElement[3].ToString() == "kovaszna")
                    {
                        query += "null";
                        query += ", ";
                        query += "null";
                        query += ", ";
                        query += "'";
                        query += bsonElement[2].ToString();
                        query += "'";
                        query += ", ";
                    }

                }
                else
                {
                    if (item==6)
                    {
                        if (bsonElement[3].ToString() == "maros")
                        {
                            query += "'";
                            query += bsonElement[6].ToString();
                            query += "'";
                            query += ", ";
                            query += "null";
                            query += ", ";
                            query += "null";
                            query += ", ";


                        }
                        if (bsonElement[3].ToString() == "hargita")
                        {
                            query += "null";
                            query += ", ";
                            query += "'";
                            query += bsonElement[6].ToString();
                            query += "'";
                            query += ", ";
                            query += "null";
                            query += ", ";
                        }
                        if (bsonElement[3].ToString() == "kovaszna")
                        {
                            query += "null";
                            query += ", ";
                            query += "null";
                            query += ", ";
                            query += "'";
                            query += bsonElement[6].ToString();
                            query += "'";
                            query += ", ";
                        }
                    }
                    else
                    {
                        if (item==8)
                        {
                            if (bsonElement[3].ToString() == "maros")
                            {
                                query += "'";
                                query += bsonElement[8].ToString();
                                query += "'";
                                query += ", ";
                                query += "null";
                                query += ", ";
                                query += "null";
                                query += ", ";


                            }
                            if (bsonElement[3].ToString() == "hargita")
                            {
                                query += "null";
                                query += ", ";
                                query += "'";
                                query += bsonElement[8].ToString();
                                query += "'";
                                query += ", ";
                                query += "null";
                                query += ", ";
                            }
                            if (bsonElement[3].ToString() == "kovaszna")
                            {
                                query += "null";
                                query += ", ";
                                query += "null";
                                query += ", ";
                                query += "'";
                                query += bsonElement[8].ToString();
                                query += "'";
                                query += ", ";
                            }
                        }
                        else
                        {
                            query += "'";
                            query += bsonElement[item].ToString();
                            query += "'";
                            query += ", ";
                        }
                    }
                }
                
            }
            query = query.TrimEnd(' ');
            query = query.TrimEnd(',');
            query += ");" ;
            sqlRun.ExecuteQuery(query);
        }
    }
}