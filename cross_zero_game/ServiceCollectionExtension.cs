using cross_zero_game.Repositories;
using cross_zero_game.Repositories.Interfaces;
using cross_zero_game.Services;
using cross_zero_game.Services.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cross_zero_game
{
    public static class ServiceCollectionExtension
    {
        public static void AddRepositories(this IServiceCollection services)
        {
            services.AddSingleton<IGameSessionRepository, GameSessionRepository>();
        }

        public static void AddServices(this IServiceCollection services)
        {
            services.AddScoped<IGameSessionService, GameSessionService>();
        }
    }
}
