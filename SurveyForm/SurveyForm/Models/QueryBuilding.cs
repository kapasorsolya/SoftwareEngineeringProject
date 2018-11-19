using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SurveyForm.Models
{
    public class QueryBuilding
    {
        public static void createTable()
        {
            string query = "";
            query = "CREATE TABLE answers (User_id varchar(255), Gender_4 varchar(255), Class_1 varchar(255), Group_by_specialtization_3 varchar(255), Group_by_specialtization_2 varchar(255), Group_by_specialtization_6 varchar(255), Group_by_specialtization_8 varchar(255), Adroat_or_home_7 varchar(255))";
            SqlRepository sqlRun = new SqlRepository("Data Source=DESKTOP-I76SIU9\\MSSQLSERVERBORO;Initial Catalog=SzoftverRendszerek;Integrated Security=True;MultipleActiveResultSets=True;Application Name=EntityFramework");
            sqlRun.ExecuteQuery(query);
        }
    }
}