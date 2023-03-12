using System;
using System.Diagnostics;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace store_items_api.Middleware
{
    public class ApiLogginMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger _logger;

        public ApiLogginMiddleware(RequestDelegate next, ILogger<ApiLogginMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task Invoke(HttpContext context)
        {
            var sw = Stopwatch.StartNew();

            try
            {
                await _next(context);
            }
            finally
            {
                sw.Stop();
                var message = $"{context.Request.Method} {context.Request.Path} responded {context.Response.StatusCode} in {sw.ElapsedMilliseconds} ms";
                _logger.LogInformation(message);
            }
        }
    }
}
