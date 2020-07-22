using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Prime.Models
{
    [Table("Organization")]
    public class Organization : BaseAuditable
    {
        [Key]
        public int Id { get; set; }

        public string RegistrationId { get; set; }

        public string Name { get; set; }

        public string DoingBusinessAs { get; set; }

        public DateTimeOffset? AcceptedAgreementDate { get; set; }

        public bool Completed { get; set; }

        public DateTimeOffset? SubmittedDate { get; set; }

        public Party SigningAuthority { get; set; }

        public int SigningAuthorityId { get; set; }

        public IEnumerable<Site> Sites { get; set; }

        public ICollection<SignedAgreementDocument> SignedAgreementDocuments { get; set; }
    }
}
