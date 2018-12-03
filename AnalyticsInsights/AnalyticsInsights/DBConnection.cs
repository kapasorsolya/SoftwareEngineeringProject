using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AnalyticsInsights
{
    public class DBConnection
    {
        private static string con = "Data Source=DESKTOP-JVVVO04\\SQLEXPRESS;Initial Catalog=SzoftverRendszerek;Integrated Security=True";

        public static string Con
        {
            get
            {
                return con;
            }
        }
    }
}