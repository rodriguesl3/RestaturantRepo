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


        [Route("/api/orderTable")]
        [HttpGet]
        public ActionResult<Order> Get(Guid tableId)
        {
            var order = _context.Order.OrderByDescending(x => x.Date)?.LastOrDefault(x => x.TableId == tableId) ?? null;
            if (order == null)
                return BadRequest("Não existe ordem para essa mesa");

            order.Table = _context.Tables.FirstOrDefault(x => x.Id == tableId);

            //removendo referencia ciclica.
            order.Table.OrdersList = null;
            return order;
        }


        [HttpGet]
        public ActionResult<IEnumerable<Order>> Get()
        {
            return _context.Order.ToList();
        }

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
                //_context.OrderItems.AddRange(order.OrderItem)

                _context.Order.Add(order);
                _context.SaveChanges();

                order.OrderItem.ForEach(x =>
                {
                    x.Order = null;
                    x.OrderId = order.Id;
                });

                _context.OrderItems.AddRange(order.OrderItem);
                _context.SaveChanges();

                return Ok("Created successfully");
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPut]
        public IActionResult Put(Guid id, [FromBody] Order order)
        {
            try
            {
                _context.Entry(order).State = EntityState.Modified;
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