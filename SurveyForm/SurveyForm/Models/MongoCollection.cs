using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Bson;
namespace SurveyForm.Models
{
    public class MongoCollection
    {
        public ObjectId KeyId { get; set; }
        public string answer1 { get; set; }
        public string answer2 { get; set; }
        public string answer3 { get; set; }
        public string answer4 { get; set; }
        public string answer5 { get; set; }
        public string answer6 { get; set; }
        public string answer7 { get; set; }
        public string answer8 { get; set; }

        ////public MongoCollection(string answer1, string answer2, string answer3, string answer4, string answer5, string answer6, string answer7, string answer8)
        ////{
        ////    this.answer1 = answer1;
        ////    this.answer2 = answer2;
        ////    this.answer3 = answer3;
        ////    this.answer4 = answer4;
        ////    this.answer5 = answer5;
        ////    this.answer6 = answer6;
        ////    this.answer7 = answer7;
        ////    this.answer8 = answer8;
        ////}

    }
}