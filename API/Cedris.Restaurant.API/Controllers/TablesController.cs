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

        [HttpGet]

        [HttpGet("{id}")]
        public ActionResult<Table> GetById(Guid id)
        {
            try
            {
                return Ok(_context.Tables.FirstOrDefault(x => x.Id == id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]Table table)
        {
            try
            {
                _context.Tables.Add(table);
                _context.SaveChanges();

                return Ok("Created successfully");
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPut]
        public IActionResult Put(Guid id, [FromBody] Table table)
        {
            try
            {
                _context.Entry(table).State = EntityState.Modified;
                _context.SaveChanges();
                return Ok("Created successfully");
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpDelete]
        public ActionResult Delete(Table table)
        {
            try
            {
                _context.Entry(table).State = EntityState.Deleted;
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