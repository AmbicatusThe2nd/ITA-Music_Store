FROM mcr.microsoft.com/dotnet/sdk:6.0 as build

EXPOSE 7126

WORKDIR /app
COPY . .
RUN dotnet restore
RUN dotnet publish -o /app/published-app


FROM mcr.microsoft.com/dotnet/sdk:6.0 as runtime
WORKDIR /app
COPY --from=build /app/published-app /app
ENV ASPNETCORE_URLS http://+:7126
ENTRYPOINT [ "dotnet", "/app/store_items_api.dll" ]