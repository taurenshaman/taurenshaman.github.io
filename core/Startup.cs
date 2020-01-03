using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace core {
  public class Startup {
    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
    public void ConfigureServices(IServiceCollection services) {
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {
      if (env.IsDevelopment()) {
        app.UseDeveloperExceptionPage();
      }

      app.UseRouting();

      app.UseEndpoints( endpoints => {
        endpoints.MapGet( "/", async context => {
          await context.Response.WriteAsync( "Hello World!" );
        } );
      } );

      ConfigureStaticFiles( app );
    }

    public void ConfigureStaticFiles(IApplicationBuilder app) {
      var provider = new Microsoft.AspNetCore.StaticFiles.FileExtensionContentTypeProvider();
      // Add new mappings
      provider.Mappings[".json"] = "text/json";
      StaticFileOptions sfo = new StaticFileOptions() {
        ContentTypeProvider = provider
      };
      app.UseStaticFiles( sfo );

      var fso = new FileServerOptions {
        FileProvider = new Microsoft.Extensions.FileProviders.PhysicalFileProvider(
            Path.Combine( Directory.GetCurrentDirectory(), "wwwroot", "articles" ) ),
        RequestPath = "/articles",
        EnableDirectoryBrowsing = false
      };
      fso.StaticFileOptions.ContentTypeProvider = provider;
      app.UseFileServer( fso );
    }

  }
}
