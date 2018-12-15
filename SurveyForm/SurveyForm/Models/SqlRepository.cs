using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace SurveyForm.Models
{
    public class SqlRepository
    {
        private string connectionString { get; set; }
        public SqlRepository()
        {
            connectionString = ConfigurationManager.ConnectionStrings["SzoftverRendszerek"].ConnectionString.ToString();
        }

        public SqlRepository(string connectionString)
        {
            this.connectionString = connectionString;
        }
        public void ExecuteQuery(string query)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(query, connection);
                connection.Open();
                try
                {
                    command.ExecuteNonQuery();
                }
                catch (Exception e)
                {
                    Console.WriteLine("The table is not executed");
                }
                connection.Close();
            }
        }

        public string ExecuteSelectQuery(string query)
        {

            string ans = "";
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(query, connection);
                connection.Open();
                var reader = command.ExecuteReader();
                if (reader.Read())
                {
                    ans = reader.ToString();
                    connection.Close();
                }


            }
            return ans;
        }
    }
}