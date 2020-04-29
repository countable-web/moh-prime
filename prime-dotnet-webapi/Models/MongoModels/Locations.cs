using Mongo.Migration.Documents;
using Mongo.Migration.Documents.Attributes;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Prime.Models.MongoModels
{
    [StartUpVersion("0.0.2")]
    [CollectionLocation("Locations", "prime")]
    public class Locations : IDocument
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string LocationDescription { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public DocumentVersion Version { get; set; }
    }
}
