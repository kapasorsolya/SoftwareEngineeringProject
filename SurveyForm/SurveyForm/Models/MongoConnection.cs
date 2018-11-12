using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;

namespace SurveyForm.Models
{
  
    public class MongoConnection
    {
        private MongoClient client;
        private string line;
        private IMongoCollection<MongoCollection> collection;
        private IMongoDatabase db;
        public MongoConnection(string tableName, string databaseName)
        {
            // We realise the connection with MongoDB
            client = new MongoClient();
            // We will create the Survey database if it does not exist, if does, we open it
            db = client.GetDatabase(databaseName);
            // We get the corresponding collection
            collection = db.GetCollection<MongoCollection>(tableName);
        }

        public List<BsonDocument> dataFromMongo()
        {
            // we don't need filter
            var filter = Builders<MongoCollection>.Filter.Empty;
            // we need the following fields
            var projection = Builders<MongoCollection>.Projection.Include("answer1").Include("answer2").Include("answer3").Include("answer4").Include("answer5").Include("answer6").Include("answer7").Include("answer8");
            //var projection = Builders<MongoCollection>.Projection.Include("question_id").Include("answer_id").Include("answer_text").Include("user_id").Include("AnswerTimeStamp").Include("survey_id");
            // the result variable contains a list with query's result
            var result = collection.Find<MongoCollection>(filter).Project(projection).ToList();
            return result;
        }

        public static IEnumerable<MongoCollection> newSurveyAnswer(MongoCollection answer)
        {
            var surveyAnswer = new MongoCollection
            {
                answer1 = answer.answer1,
            answer2 = answer.answer2,
            answer3=answer.answer3,
            answer4=answer.answer4,
            answer5=answer.answer5,
            answer6=answer.answer6,
            answer7=answer.answer7,
            answer8=answer.answer8
            };
            var newAnswer = new List<MongoCollection> { surveyAnswer };
            return newAnswer;
        }


    }
}