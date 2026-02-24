import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { nome, telefone } = await request.json();

    if (!nome || !telefone) {
      return NextResponse.json(
        { error: "Nome e telefone são obrigatórios" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const dataFormatada = new Date().toLocaleString("pt-BR", {
      timeZone: "America/New_York",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.LEAD_DESTINATION_EMAIL || process.env.GMAIL_USER,
      subject: `✨ Novo Lead — ${nome} | Refinamento de Técnica`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#FAF7F2;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF7F2;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #3D2E14 0%, #5C4A2A 100%);padding:32px 40px;text-align:center;">
              <h1 style="margin:0;font-size:22px;font-weight:300;letter-spacing:6px;color:#D4AF37;">REFINAMENTO DE TÉCNICA</h1>
              <p style="margin:6px 0 0;font-size:13px;color:#E8D5A0;font-style:italic;">by Vanuza Aires</p>
            </td>
          </tr>

          <!-- Badge -->
          <tr>
            <td style="padding:28px 40px 0;text-align:center;">
              <span style="display:inline-block;background-color:#C49A2A;color:#ffffff;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:6px 20px;border-radius:20px;">Novo Lead</span>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:24px 40px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF7F2;border-radius:12px;border-left:4px solid #C49A2A;">
                <tr>
                  <td style="padding:24px 28px;">
                    
                    <!-- Nome -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                      <tr>
                        <td style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#8B7355;padding-bottom:4px;">Nome</td>
                      </tr>
                      <tr>
                        <td style="font-size:18px;font-weight:600;color:#3D2E14;">${nome}</td>
                      </tr>
                    </table>

                    <!-- Telefone -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                      <tr>
                        <td style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#8B7355;padding-bottom:4px;">Telefone</td>
                      </tr>
                      <tr>
                        <td style="font-size:18px;font-weight:600;color:#3D2E14;">${telefone}</td>
                      </tr>
                    </table>

                    <!-- Data -->
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#8B7355;padding-bottom:4px;">Data do cadastro</td>
                      </tr>
                      <tr>
                        <td style="font-size:14px;color:#5C4A2A;">${dataFormatada} (horário de NY)</td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#FAF7F2;padding:20px 40px;text-align:center;border-top:1px solid #E8DFD0;">
              <p style="margin:0;font-size:12px;color:#8B7355;">Este lead foi capturado automaticamente pelo site do curso.</p>
              <p style="margin:4px 0 0;font-size:11px;color:#8B7355;">Aires Nails and Academy — Harrison, NJ</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erro ao enviar lead" },
      { status: 500 }
    );
  }
}
