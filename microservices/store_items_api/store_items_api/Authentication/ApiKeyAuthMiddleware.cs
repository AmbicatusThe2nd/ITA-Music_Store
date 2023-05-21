namespace store_items_api.Authentication
{
    public class ApiKeyAuthMiddleware
    {
        private readonly RequestDelegate _requestDelegate;
        private readonly IConfiguration _configuration;

        public ApiKeyAuthMiddleware(RequestDelegate requestDelegate, IConfiguration configuration)
        {
            _requestDelegate = requestDelegate;
            _configuration = configuration;
        }

        public async Task Invoke(HttpContext context)
        {
            if(!context.Request.Headers.TryGetValue(AuthConstants.ApiKeyHeaderName, out var extractedApiKey))
            {
                context.Response.StatusCode = 401;
                await context.Response.WriteAsync("API Key is missing");
                return;
            }

            var apiKey = _configuration.GetValue<string>(AuthConstants.ApiKey);

            if (!apiKey.Equals(extractedApiKey))
            {
                context.Response.StatusCode = 401;
                await context.Response.WriteAsync("Invalid API Key");
                return;
            }

            await _requestDelegate(context);

        }
    }
}
