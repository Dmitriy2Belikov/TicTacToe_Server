using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace cross_zero_game.Controllers
{
    [Route("")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private string _appDirectory = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
        private string _contentType = "text/html";

        [HttpGet("/")]
        public IActionResult Index()
        {
            var path = Path.Combine(_appDirectory, "Index.html");
            
            var index = GetHtmlString(path);
            
            return Content(index, _contentType);
        }

        private string GetHtmlString(string path)
        {
            var html = string.Empty;

            using (var sr = new StreamReader(path))
            {
                html = sr.ReadToEnd();
            }

            return html;
        }
    }
}
