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

    }
}
