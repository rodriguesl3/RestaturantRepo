using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cedris.Restaurant.Domain.Entities;
using Cedris.Restaurant.Infra.Data.Context;
using Microsoft.AspNetCore.Mvc;

namespace Cedris.Restaurant.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TablesController : ControllerBase
    {
        private readonly EfDbContext _context;

        public TablesController(EfDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public ActionResult<IEnumerable<Table>> Get()
        {
            return _context.Tables;
        }



    }
}