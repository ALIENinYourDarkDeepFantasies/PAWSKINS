using Microsoft.AspNetCore.Mvc;
using PAWSKINS_orig.Models;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace PAWSKINS_orig.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult FAQRoom()
        {
            return View();
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult LoveR()
        {
            return View();
        }

        public IActionResult CashRoom()
        {
            return View();
        }

        public IActionResult garandRoom()
        {
            return View();
        }
    }
}
