using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Dynamic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AnalyticsInsights.Controllers.Api
{
    public class ChartController : ApiController
    {
        public object GetChartData(int id)
        {
            return new object();
        }

        [HttpGet]
        public object AbroadOrHome_chart()
        {
            using (SqlConnection con = new SqlConnection(DBConnection.Con))
            {
                using (SqlCommand cmd = new SqlCommand("AbroadOrHomeData", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;

                    con.Open();
                    DataTable table = new DataTable();
                    table.Load(cmd.ExecuteReader());

                    con.Close();

                    dynamic obj = new ExpandoObject();
                    obj.Kulfoldon = table.Rows[0]["Percentage"];
                    obj.Itthon = table.Rows[1]["Percentage"];
                    obj.NemSzeretnek = table.Rows[2]["Percentage"];
                    return obj;
                }
            }
        }

        [HttpGet]
        public object GroupBySpecialization_chart(int id)
        {
            using (SqlConnection con = new SqlConnection(DBConnection.Con))
            {
                using (SqlCommand cmd = new SqlCommand("GroupBySpecializationData", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;


                    cmd.Parameters.Add("@QuestionId", SqlDbType.VarChar).Value = id; //1 2 3 (2_1 means Maros ....)

                    con.Open();
                    DataTable table = new DataTable();
                    table.Load(cmd.ExecuteReader());

                    con.Close();

                    dynamic obj = new ExpandoObject();
                    obj.Tarsadalomtudomany = table.Rows[0]["Percentage"];
                    obj.Matekinfo = table.Rows[1]["Percentage"];
                    obj.Termeszettudomany = table.Rows[2]["Percentage"];
                    obj.Egyeb = table.Rows[3]["Percentage"];

                    return obj;
                }
            }
        }


        [HttpGet]
        public object NextSpecializtion_chart(int id)
        {
            using (SqlConnection con = new SqlConnection(DBConnection.Con))
            {
                using (SqlCommand cmd = new SqlCommand("GroupByNextSpecializationData", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;


                    cmd.Parameters.Add("@QuestionId", SqlDbType.VarChar).Value = id; //1 2 3 (2_1 means Maros ....)

                    con.Open();
                    DataTable table = new DataTable();
                    table.Load(cmd.ExecuteReader());

                    con.Close();

                    dynamic obj = new ExpandoObject();
                    obj.Humantudomany = table.Rows[0]["Percentage"];
                    obj.Informatika = table.Rows[1]["Percentage"];
                    obj.Jogtudomany = table.Rows[2]["Percentage"];
                    obj.Pedagogia = table.Rows[3]["Percentage"];
                    obj.Pszichologia = table.Rows[4]["Percentage"];
                    obj.Tanito = table.Rows[5]["Percentage"];
                    obj.Tarsadalomtudomany = table.Rows[6]["Percentage"];
                    obj.Termeszettudomany = table.Rows[7]["Percentage"];
                    obj.Orvostudomany = table.Rows[8]["Percentage"];
                    obj.Sporttudomany = table.Rows[9]["Percentage"];
                    obj.Egyeb = table.Rows[10]["Percentage"];

                    return obj;
                }
            }
        }
        [HttpGet]
        public object University_chart(int id)
        {
            using (SqlConnection con = new SqlConnection(DBConnection.Con))
            {
                using (SqlCommand cmd = new SqlCommand("UniversityData", con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;


                    cmd.Parameters.Add("@QuestionId", SqlDbType.VarChar).Value = id; //1 2 3 (2_1 means Maros ....)

                    con.Open();
                    DataTable table = new DataTable();
                    table.Load(cmd.ExecuteReader());

                    con.Close();

                    dynamic obj = new ExpandoObject();
                    obj.Sapientia = table.Rows[0]["Percentage"];
                    obj.Orvosi = table.Rows[1]["Percentage"];
                    obj.Muveszeti = table.Rows[2]["Percentage"];
                    obj.Babes = table.Rows[3]["Percentage"];
                    obj.Egyeb = table.Rows[4]["Percentage"];

                    return obj;
                }
            }
        }
    }
}
