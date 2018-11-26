using MongoDB.Bson;
using SurveyForm.Models;
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
            //MongoCollection collection = new MongoCollection
            //{
            //    answer1 = "alma",
            //    answer2 = "alma",
            //    answer3 = "alma",
            //    answer4 = "alma",
            //    answer5 = "alma",
            //    answer6 = "alma",
            //    answer7 = "alma",
            //    answer8 = "alma"
            //};
            //MongoConnection connection = new MongoConnection("surveyAnswers", "szoftver");
            //connection.insertMongo(collection);
            //var data = connection.dataFromMongo().ToList<BsonDocument>();
            //QueryBuilding queryBuilding = new QueryBuilding();
            //queryBuilding.createTable();
            //foreach (var mongoData in data)
            //{
            //    queryBuilding.insertAnswersTable(mongoData);
            //}
            
            
            
            
            //List<BsonDocument> dataFromMongo = connection.dataFromMongo();
            //foreach(var i in dataFromMongo)
            //{
            //    if (i!=null)
            //    {

            //    }

            //}
            //int x = 3;
            return View();
        }

        [HttpPost]
        public ActionResult Index(Answers obj)
        {
            MongoConnection connection = new MongoConnection("surveyAnswers", "szoftver");
            connection.insertMongo(obj);
            var data = connection.dataFromMongo().ToList<BsonDocument>();
            QueryBuilding queryBuilding = new QueryBuilding();
            queryBuilding.createTable();
            foreach (var mongoData in data)
            {
                queryBuilding.insertAnswersTable(mongoData);
            }
            //ViewBag.SucessMessage = "1: " + obj.grade + " 2: " + obj.profil
            //    + " 3: " + obj.live + " 4: " + obj.gender + " 5: " + obj.learn
            //    + " 6: " + obj.speciality + " 7: " + obj.where + " 8: " + obj.university; 
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