using System.Net;
using System.Net.Mail;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins(
            "http://localhost:3000",
            "https://dandycarreondevops.vercel.app"
        )
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("AllowFrontend");

app.MapGet("/health", () => Results.Ok(new { status = "ok" }));

app.MapPost("/contact", async (ContactRequest request) =>
{
    if (string.IsNullOrWhiteSpace(request.Name) ||
        string.IsNullOrWhiteSpace(request.Email) ||
        string.IsNullOrWhiteSpace(request.Message))
    {
        return Results.BadRequest(new { error = "All fields are required." });
    }

    try
    {
        var smtpHost = builder.Configuration["Smtp:Host"];
        var smtpPort = int.Parse(builder.Configuration["Smtp:Port"] ?? "587");
        var smtpUser = builder.Configuration["Smtp:User"];
        var smtpPass = builder.Configuration["Smtp:Pass"];
        var toEmail  = builder.Configuration["Smtp:To"];

        using var client = new SmtpClient(smtpHost, smtpPort)
        {
            Credentials = new NetworkCredential(smtpUser, smtpPass),
            EnableSsl = true
        };

        var mail = new MailMessage
        {
            From = new MailAddress(smtpUser!),
            Subject = $"Portfolio Contact: {request.Name}",
            Body = $"Name: {request.Name}\nEmail: {request.Email}\n\nMessage:\n{request.Message}",
            IsBodyHtml = false
        };

        mail.To.Add(toEmail!);

        await client.SendMailAsync(mail);

        return Results.Ok(new { success = true, message = "Message sent successfully!" });
    }
    catch (Exception ex)
    {
        return Results.Problem($"Failed to send email: {ex.Message}");
    }
});

app.Run();

record ContactRequest(string Name, string Email, string Message);