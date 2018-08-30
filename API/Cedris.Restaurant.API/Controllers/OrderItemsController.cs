using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cedris.Restaurant.Domain.Entities;
using Cedris.Restaurant.Infra.Data.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Cedris.Restaurant.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderItemsController : ControllerBase
    {
        private readonly EfDbContext _context;

        public OrderItemsController(EfDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public ActionResult<IEnumerable<OrderItem>> Get()
        {
            return _context.OrderItem;
        }

        [HttpGet]

        [HttpGet("{id}")]
        public ActionResult<OrderItem> GetById(Guid id)
        {
            try
            {
                return Ok(_context.OrderItem.FirstOrDefault(x => x.Id == id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]OrderItem item)
        {
            try
            {
                _context.OrderItem.Add(item);
                _context.SaveChanges();

                return Ok("Created successfully");
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPut]
        public IActionResult Put(Guid id, [FromBody] OrderItem item)
        {
            try
            {
                _context.Entry(item).State = EntityState.Modified;
                _context.SaveChanges();
                return Ok("Created successfully");
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpDelete]
        public ActionResult Delete(OrderItem item)
        {
            try
            {
                _context.Entry(item).State = EntityState.Deleted;
                _context.SaveChanges();
                return Ok("Item removed successfully");
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}