using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace aspcore_identity_without_efcore.Models
{
    public class AuthRelated
    {
    }

    public class RegisterUser
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
    }
}
