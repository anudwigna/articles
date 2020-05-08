using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using aspcore_identity_without_efcore.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace aspcore_identity_without_efcore.Controllers
{
    public class AuthController : Controller
    {
        private UserManager<ApplicationUser> _userManager;

        public AuthController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        public IActionResult Index()
        {
            return View();
        }

        public async Task<IActionResult> Register(RegisterUser user)
        {
            if(string.IsNullOrEmpty(user.Username))
                FlashMessage.

            var theUser = new ApplicationUser();
            return View();
        }
    }
}