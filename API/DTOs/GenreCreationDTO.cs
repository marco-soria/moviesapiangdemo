using API.Validations;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class GenreCreationDTO
    {
        [Required(ErrorMessage = "You must fill the {0} field")]
        [StringLength(maximumLength: 50)]
        [FirstLetterUppercase]
        public required string Name { get; set; }
    }
