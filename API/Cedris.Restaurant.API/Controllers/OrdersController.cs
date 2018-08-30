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
    public class OrdersController : ControllerBase
    {
        private readonly EfDbContext _context;

        public OrdersController(EfDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public ActionResult<IEnumerable<Order>> Get()
        {
            return _context.Order;
        }

        [HttpGet]

        [HttpGet("{id}")]
        public ActionResult<Order> GetById(Guid id)
        {
            try
            {
                return Ok(_context.Order.FirstOrDefault(x => x.Id == id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]Order order)
        {
            try
            {
                _context.Order.Add(order);
                _context.SaveChanges();

                return Ok("Created successfully");
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPut]
        public IActionResult Put(Guid id, [FromBody] Order item)
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
        public ActionResult Delete(Order order)
        {
            try
            {
                _context.Entry(order).State = EntityState.Deleted;
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