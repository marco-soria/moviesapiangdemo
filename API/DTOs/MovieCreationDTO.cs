using Microsoft.AspNetCore.Mvc;
using API.Utilities;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class MovieCreationDTO
    {
        [Required]
        [StringLength(300)]
        public required string Title { get; set; }
        public string? Trailer { get; set; }
        public DateTime ReleaseDate { get; set; }
        public IFormFile? Poster { get; set; }
        [ModelBinder(BinderType = typeof(TypeBinder))]
        public List<int>? GenresIds { get; set; }
        [ModelBinder(BinderType = typeof(TypeBinder))]
        public List<int>? TheatersIds { get; set; }
        [ModelBinder(BinderType = typeof(TypeBinder))]
        public List<ActorMovieCreationDTO>? Actors { get; set; }

    }
