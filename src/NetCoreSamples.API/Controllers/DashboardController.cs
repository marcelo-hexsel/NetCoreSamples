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
                arg = "Active",
                val = 6000
            });
            lstDashboard.Add(new Dashboard()
            {
                arg = "Not Active",
                val = 2000
            });

            return Ok(lstDashboard);
        }

        [HttpGet("tasks")]
        [Produces(typeof(Dashboard[]))]
        public IActionResult GetTasks()
        {
            var lstDashboard = new List<Dashboard>();
            lstDashboard.Add(new Dashboard()
            {
                arg = "In preparation",
                val = 300
            });
            lstDashboard.Add(new Dashboard()
            {
                arg = "Pending Submission",
                val = 5000
            });

            lstDashboard.Add(new Dashboard()
            {
                arg = "Running",
                val = 12500
            });

            lstDashboard.Add(new Dashboard()
            {
                arg = "Returned",
                val = 10000
            });

            lstDashboard.Add(new Dashboard()
            {
                arg = "Cancelled",
                val = 900
            });

            return Ok(lstDashboard);
        }
    }
}
