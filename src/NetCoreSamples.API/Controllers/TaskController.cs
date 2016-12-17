using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NetCoreSamples.API.Model;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace NetCoreSamples.API.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class TaskController : Controller
    {
        // GET: api/task
        [HttpGet]
        [Produces(typeof(Tasks[]))]
        public IActionResult Get()
        {
            var lstTasks = new List<Tasks>();
            Enumerable.Repeat(1, 50).ToList().ForEach(o =>
            {
                lstTasks.Add(new Tasks()
                {
                    done = o % 2 == 0,
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                });
            });

            return Ok(lstTasks);
        }
    }
}
