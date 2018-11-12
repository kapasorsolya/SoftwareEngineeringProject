using MongoDB.Bson;
using SurveyForm.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SurveyForm.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            MongoConnection connection = new MongoConnection("surveyAnswers", "szoftver");
            List<BsonDocument> dataFromMongo = connection.dataFromMongo();
            foreach(var i in dataFromMongo)
            {
                if (i!=null)
                {

                }

            }
            int x = 3;
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}