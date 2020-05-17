using Grpc.Core;
using GrpcWebAspCore.Protos;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GrpcWebAspCore.Services
{
    public class CityService : City.CityBase
    {
        private readonly ILogger<CityService> _logger;
        List<CityResponse> _theList;
        public CityService(ILogger<CityService> logger)
        {
            _logger = logger;
            _theList = new List<CityResponse>()
            {
                new CityResponse(){ Id = 1, Name = "Kathmandu"},
                new CityResponse(){ Id = 2, Name = "Butwal"},
                new CityResponse(){ Id = 3, Name = "Narayangarh"},
                new CityResponse(){ Id = 4, Name = "Biratnagar"},
            };
        }

        public override Task<CityResponse> GetCityById(CityRequest request, ServerCallContext context)
        {
            return Task.FromResult(_theList.FirstOrDefault(x => x.Id == request.Id));
        }

        public async override Task GetAllCities(CityRequest request, IServerStreamWriter<CityResponse> responseStream, ServerCallContext context)
        {
            int i = 0;
            while (!context.CancellationToken.IsCancellationRequested && i < _theList.Count())
            {
                foreach (var item in _theList)
                {
                    await Task.Delay(1000); //waiting one second for each response

                    _logger.LogInformation("Sending City Data");

                    i++;

                    await responseStream.WriteAsync(item);
                }
            }
        }
    }
}
