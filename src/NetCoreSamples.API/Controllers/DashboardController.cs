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
    public class DashboardController : Controller
    {
        // GET: api/dashboard
        [HttpGet]
        [Produces(typeof(Dashboard[]))]
        public IActionResult Get()
        {
            var lstDashboard = new List<Dashboard>();
            lstDashboard.Add(new Dashboard()
            {
                arg = 1,
                val = 6000
            });
            lstDashboard.Add(new Dashboard()
            {
                arg = 0,
                val = 2000
            });

            return Ok(lstDashboard);
        }
    }
}
