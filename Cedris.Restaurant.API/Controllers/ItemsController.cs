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
    public class ItemsController : ControllerBase
    {
        private readonly ItemsContext _context;

        public ItemsController(ItemsContext context)
        {
            _context = context;
        }


        [HttpGet]
        public ActionResult<IEnumerable<Item>> Get()
        {
            return _context.Items;
        }

        [HttpPost]
        public IActionResult Post([FromBody]Item item)
        {

            try
            {
                _context.Items.Add(item);
                _context.SaveChanges();

                return Ok("Created successfully");
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}